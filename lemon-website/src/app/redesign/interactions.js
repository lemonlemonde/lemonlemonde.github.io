"use client";
import { useEffect } from "react";
import { splashTiming } from "./splash_timing";
import { isLite, sampleFrames } from "./perf";

const BURST = ["✦", "*", "+", "·", "◆", "✿", "○", "×"];

const SPARKS = ["✦", "✧", "⋆", "✦", "+", "·"];

// A few rainbow sparkles popping off a card's edges as it lands.
function sparkle(card, count = 12) {
    for (let i = 0; i < count; i++) {
        const sp = document.createElement("span");
        sp.className = "t-spark";
        sp.textContent = SPARKS[(Math.random() * SPARKS.length) | 0];
        // somewhere along the outline: pick an edge, then a point on it
        const edge = (Math.random() * 4) | 0, along = Math.random() * 100;
        const [x, y] = [[along, 0], [100, along], [along, 100], [0, along]][edge];
        sp.style.left = `${x}%`;
        sp.style.top = `${y}%`;
        sp.style.color = `hsl(${(Math.random() * 360) | 0} 90% 58%)`;
        sp.style.setProperty("--dx", `${(x - 50) * 0.35 + (Math.random() - 0.5) * 20}px`);
        sp.style.setProperty("--dy", `${(y - 50) * 0.35 + (Math.random() - 0.5) * 20}px`);
        sp.style.animationDelay = `${Math.random() * 0.25}s`;
        card.appendChild(sp);
        sp.addEventListener("animationend", () => sp.remove());
    }
}
const clamp01 = (v) => Math.min(1, Math.max(0, v));

// One place for the page-wide behaviours, driven by data attributes in the markup:
//   [data-reveal]        scan in (top-down wipe) when scrolled into view
//   [data-type]          type the attribute's text out when scrolled into view
//   [data-parallax="k"]  drift sideways by k × scroll distance
//   [data-card="±1"]     rotating card: slots in sideways and swings into focus (±1 = which side),
//                        lands with a rainbow glow sweep + sparkles, then lifts and fades at the top
//   [data-landing="k"]   hero cells: same rainbow sweep + sparkles as the splash clears (k = stagger)
//   #t-progress          live scroll % bar in the menubar
// plus a little ASCII burst wherever you click.
export default function Interactions() {
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // "← back" / "MIRU.SH" on a project page opened from the homepage go back in history
        // instead of loading the homepage afresh, so the browser returns you to where you were.
        const FROM_HOME = "miru.fromHome"; // the project page the homepage last opened
        const onHome = location.pathname === "/";
        try { if (onHome) sessionStorage.removeItem(FROM_HOME); } catch (e) { /* storage unavailable */ }
        const onLinkClick = (e) => {
            const a = e.target.closest?.("a[href^='/']");
            if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const href = a.getAttribute("href");
            try {
                if (onHome && !href.startsWith("/#") && href !== "/") sessionStorage.setItem(FROM_HOME, href);
                else if (!onHome && href === "/" && sessionStorage.getItem(FROM_HOME) === location.pathname) {
                    e.preventDefault();
                    e.stopPropagation(); // keep next/link from pushing a new homepage entry
                    history.back();
                }
            } catch (err) { /* storage unavailable: plain navigation */ }
        };
        document.addEventListener("click", onLinkClick, true);

        // reveal + typewriter
        const typeOut = (el) => {
            const text = el.dataset.type;
            if (reduce) { el.textContent = text; return; }
            let i = 0;
            const step = () => {
                el.textContent = text.slice(0, ++i);
                if (i < text.length) setTimeout(step, 28 + Math.random() * 40);
            };
            step();
        };
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                const el = e.target;
                if (el.dataset.type !== undefined) typeOut(el);
                else el.classList.add("t-in");
                io.unobserve(el);
            });
        }, { rootMargin: "0px 0px -12% 0px" });
        document.querySelectorAll("[data-reveal], [data-type]").forEach((el) => io.observe(el));

        // scroll progress, parallax
        const progress = document.getElementById("t-progress");
        const drifters = [...document.querySelectorAll("[data-parallax]")];
        // homepage cards are marked [data-card]; on project pages every top-level block counts
        const cards = reduce ? [] : [...document.querySelectorAll("[data-card], .t-proj > :not(h1, .t-links)")];

        // per-card info that never changes: cached once instead of re-queried every frame
        const info = new Map(cards.map((el, idx) => [el, {
            tilt: Number(el.dataset.card) || (idx % 2 ? 1 : -1),
            still: el.matches(".t-proj > *"), // project-page blocks: no slide/fade, just the rainbow
            media: [...el.querySelectorAll(".t-thumb, .t-proj iframe, .t-proj video, .t-proj img")],
            last: {},                          // last values written, to skip redundant style writes
        }]));
        const write = (el, memo, key, value, apply) => { if (memo[key] !== value) { memo[key] = value; apply(value); } };

        const updateCards = () => {
            const vh = innerHeight;
            const lite = isLite();
            // measure everything first, then write: measuring after a style write forces the
            // browser to recalculate styles on the spot, once per card, every frame
            const seen = [];
            cards.forEach((el) => {
                const r = el.getBoundingClientRect();
                if (r.bottom < -50 || r.top > vh + 50) return;
                seen.push([el, r, lite ? [] : info.get(el).media.map((m) => m.getBoundingClientRect())]);
            });
            seen.forEach(([el, r, mediaRects]) => {
                const { tilt, still, media, last } = info.get(el);
                // where the card sits on screen (1 = bottom edge, 0 = top edge). Entering is judged by
                // its top part and leaving by its bottom part, so blocks taller than the screen stay
                // fully visible while you read through them.
                const half = Math.min(r.height, vh) / 2;
                const c = (r.top + half) / vh;
                const cOut = (r.bottom - half) / vh;
                const enter = clamp01((1.0 - c) / 0.3);    // 0 just peeking in -> 1 in focus
                const leave = clamp01((0.18 - cOut) / 0.3); // near the top: lift away and fade
                const away = 1 - enter;
                if (!still && !lite) {
                    // slot in from the side (alternating), swinging round to face the reader
                    write(el, last, "t",
                        `perspective(1200px) translateX(${(away * 140 * tilt).toFixed(0)}px) translateY(${(-leave * 36).toFixed(0)}px) ` +
                        `rotateY(${(away * -22 * tilt).toFixed(1)}deg) scale(${(1 - away * 0.1 - leave * 0.04).toFixed(3)})`,
                        (v) => { el.style.transform = v; });
                    // fade the last of it out rather than blinking off
                    const fadeOut = clamp01((leave - 0.55) / 0.45);
                    write(el, last, "o", ((0.15 + 0.85 * enter) * (1 - fadeOut)).toFixed(2), (v) => { el.style.opacity = v; });
                }
                // media colour: each image/video is full colour at the middle of the screen, fading to
                // greyscale away from it (judged by its own middle). Lite mode skips the filter entirely.
                if (!lite) media.forEach((m, i) => {
                    const mr = mediaRects[i];
                    const mc = (mr.top + mr.height / 2) / vh;
                    write(m, last, "c" + i, (1 - clamp01((Math.abs(mc - 0.5) - 0.08) / 0.27)).toFixed(1),
                        (v) => m.style.setProperty("--color", v));
                });
                // landing moment: once per pass, re-armed when the card drops back out of view
                // (still blocks "land" as soon as they're comfortably on screen)
                const landed = still || lite ? r.top < vh * 0.8 : enter > 0.97;
                if (landed && !el.classList.contains("t-landed")) {
                    el.classList.add("t-landed");
                    sparkle(el, lite ? 4 : 12);
                } else if (still || lite ? r.top > vh : enter < 0.2) {
                    el.classList.remove("t-landed");
                }
            });
        };
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const max = document.documentElement.scrollHeight - innerHeight;
                const pct = max > 0 ? Math.round((scrollY / max) * 100) : 0;
                if (progress) {
                    const filled = Math.round(pct / 10);
                    progress.textContent = `[${"█".repeat(filled)}${"░".repeat(10 - filled)}] ${String(pct).padStart(3, " ")}%`;
                }
                updateCards();
                if (!reduce && !isLite()) drifters.forEach((el) => {
                    el.style.transform = `translateX(${(scrollY * Number(el.dataset.parallax)).toFixed(1)}px)`;
                });
                ticking = false;
            });
        };

        // first load: the hero cells light up shortly after the splash wipes away
        const SPLASH_CLEARS = splashTiming().exit + 850;
        const land = (el) => {
            el.classList.remove("t-landed");
            void el.offsetWidth; // restart the sweep animation
            el.classList.add("t-landed");
            sparkle(el);
        };
        const loadTimers = reduce ? [] : [...document.querySelectorAll("[data-landing]")].map((el) =>
            setTimeout(() => land(el), SPLASH_CLEARS + Number(el.dataset.landing) * 180)
        );

        // The burst/sparkle symbols aren't in the site fonts, and the browser's first lookup of
        // a fallback font for them stalls a frame for ~40ms (on a fast machine). Do that lookup
        // while idle instead of on the first click (which is often a click into a project).
        const idle = window.requestIdleCallback || ((f) => setTimeout(f, 300));
        const warm = idle(() => {
            const w = document.createElement("span");
            w.className = "t-burst";
            w.style.visibility = "hidden";
            w.style.animation = "none";
            w.textContent = BURST.join("") + SPARKS.join("");
            document.body.appendChild(w);
            void w.offsetWidth;
            w.remove();
        });

        // click burst
        const onClick = (e) => {
            if (reduce) return;
            for (let i = 0; i < 7; i++) {
                const s = document.createElement("span");
                s.className = "t-burst";
                s.textContent = BURST[(Math.random() * BURST.length) | 0];
                const angle = (Math.PI * 2 * i) / 7 + Math.random() * 0.5;
                const dist = 30 + Math.random() * 36;
                s.style.left = `${e.clientX}px`;
                s.style.top = `${e.clientY}px`;
                s.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
                s.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
                document.body.appendChild(s);
                s.addEventListener("animationend", () => s.remove());
            }
        };

        // performance guard: time a burst of frames after load and whenever scrolling resumes;
        // if the device can't keep up, perf.js flips the page into lite mode
        const stopSamples = [];
        const firstSample = setTimeout(() => stopSamples.push(sampleFrames()), splashTiming().done + 200);
        let lastSample = 0;
        const sampleOnScroll = () => {
            const now = performance.now();
            if (now - lastSample > 3000) { lastSample = now; stopSamples.push(sampleFrames()); }
        };
        // entering lite mode: drop the transforms, drift and colour filters already applied
        const onLite = () => {
            cards.forEach((el) => { el.style.transform = ""; el.style.opacity = ""; info.get(el).last = {}; });
            drifters.forEach((el) => { el.style.transform = ""; });
        };
        window.addEventListener("t-lite", onLite);

        onScroll();
        window.addEventListener("scroll", sampleOnScroll, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        window.addEventListener("pointerdown", onClick);
        return () => {
            document.removeEventListener("click", onLinkClick, true);
            clearTimeout(firstSample);
            (window.cancelIdleCallback || clearTimeout)(warm);
            stopSamples.forEach((stop) => stop());
            window.removeEventListener("scroll", sampleOnScroll);
            window.removeEventListener("t-lite", onLite);
            io.disconnect();
            loadTimers.forEach(clearTimeout);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            window.removeEventListener("pointerdown", onClick);
        };
    }, []);
    return null;
}

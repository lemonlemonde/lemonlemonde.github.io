"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { SEEN_KEY, SIDE_TASKS, splashTiming } from "./splash_timing";
import { isLite } from "./perf";
import PRECOMPUTED from "./portrait_ascii.json";
import { Github, GraduationCap, Linkedin, FileUser } from "lucide-react";

const NOISE = "!<>-_\\/[]{}—=+*^?#░▒▓@%&$";
// little hand-drawn glyphs for the splash (24x24, ink on lime)
const HOLE = "var(--lime)";
const GLYPHS = [
    // star
    <path key="star" d="M12 1.8l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.6l-6.3 3.6 1.5-7.1L1.8 9.2 9 8.4z" />,
    // daisy: six round petals around a hollow centre
    <g key="flower">
        {[0, 60, 120, 180, 240, 300].map((r) => <ellipse key={r} cx="12" cy="6.2" rx="3" ry="4.8" transform={`rotate(${r} 12 12)`} />)}
        <circle cx="12" cy="12" r="3.4" fill={HOLE} />
        <circle cx="12" cy="12" r="1.7" />
    </g>,
    // scallop seashell
    <g key="shell">
        <path d="M12 20.5 2.6 9.2a10.2 8.6 0 0 1 18.8 0z" />
        {[-58, -30, 0, 30, 58].map((d) => (
            <line key={d} x1="12" y1="19.5" x2={(12 + 9 * Math.sin((d * Math.PI) / 180)).toFixed(2)} y2={(19.5 - 15 * Math.cos((d * Math.PI) / 180)).toFixed(2)} stroke={HOLE} strokeWidth="1.3" />
        ))}
        <rect x="9.3" y="19.6" width="5.4" height="2.6" rx="1" />
    </g>,
    // climbing hold: lumpy blob with a bolt hole
    <g key="hold">
        <path d="M3.4 14.6C1.6 10.2 4.3 4.6 9.6 3.6c4.4-.8 8.8.6 10.5 4.3 1.6 3.7.3 8.6-3.7 10.6-4.4 2.2-11.2 1.4-13-3.9z" />
        <circle cx="12" cy="11" r="2.6" fill={HOLE} />
        <circle cx="12" cy="11" r="1.1" />
    </g>,
    // tuft of grass
    <g key="grass">
        <path d="M3.2 20 4.6 8.6 7.4 20z" />
        <path d="M7.6 20 10.2 3.4 12.4 20z" />
        <path d="M12.6 20 15.8 7.6 16.8 20z" />
        <path d="M16.6 20l4.4-9.2-.4 9.2z" />
        <rect x="2" y="19.3" width="20" height="2.7" rx="1" />
    </g>,
    // paintbrush
    <g key="brush" transform="rotate(40 12 12)">
        <rect x="10.6" y="0.8" width="2.8" height="10.2" rx="1.4" />
        <rect x="9.6" y="10.6" width="4.8" height="3.8" />
        <rect x="9.6" y="11.9" width="4.8" height="0.9" fill={HOLE} />
        <path d="M9.6 14.4h4.8c0 3.8-.9 6.6-2.4 8.2-1.5-1.6-2.4-4.4-2.4-8.2z" />
    </g>,
    // arch bridge
    <g key="bridge">
        <rect x="1" y="6.5" width="22" height="2.8" rx="1" />
        <path d="M2.5 21.5V11.5a9.5 6.5 0 0 1 19 0v10h-3.2v-8.6a6.3 4.4 0 0 0-12.6 0v8.6z" />
    </g>,
];

// Turn `from` into `to` one character at a time, flickering through noise first.
function useScramble() {
    const frame = useRef(0);
    useEffect(() => () => cancelAnimationFrame(frame.current), []);
    return (to, set, duration = 600) => {
        cancelAnimationFrame(frame.current);
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const settled = Math.floor(t * to.length);
            set(
                to
                    .split("")
                    .map((c, i) => (i < settled || c === " " ? c : NOISE[(Math.random() * NOISE.length) | 0]))
                    .join("")
            );
            if (t < 1) frame.current = requestAnimationFrame(tick);
        };
        frame.current = requestAnimationFrame(tick);
    };
}

// Hover a title to see it re-decode itself.
export function Scramble({ text, className }) {
    const [shown, setShown] = useState(text);
    const scramble = useScramble();
    return (
        <span className={className} onMouseEnter={() => scramble(text, setShown, 450)} aria-label={text}>
            <span aria-hidden>{shown}</span>
        </span>
    );
}

// A word that appears as one glyph per letter (popping in left to right, with the cursor
// walking along), then each glyph flickers through a faint noise character into its letter.
//
// Entirely CSS-timed: every slot carries its index (--j) and the keyframes do the rest, so
// it starts on the very first paint and stays smooth while the page is still loading
// (no per-frame JavaScript). Timing comes from CSS variables (--sp-*), set per visit type
// on <html> for the home splash, or passed in here (the page-to-page splash).
export function GlyphWord({ text, timing, className = "" }) {
    const vars = timing ? {
        "--sp-gap": `${timing.glyphGap}ms`, "--sp-flip": `${timing.flipAt}ms`,
        "--sp-fgap": `${timing.flipGap}ms`, "--sp-noise": `${timing.noise}ms`,
    } : undefined;
    const letters = text.replace(/ /g, "").length;
    let j = -1;
    return (
        <p className={`t-splash-mark ${className}`} aria-label={text} style={vars}>
            {text.split("").map((letter, i) => {
                if (letter === " ") return <span key={i} className="t-splash-space" />;
                j += 1;
                return (
                    <span key={i} className={`t-splash-slot ${j === letters - 1 ? "t-last" : ""}`} style={{ "--j": j }}>
                        <span className="t-splash-g">
                            <svg viewBox="0 0 24 24" className="t-splash-glyph" fill="currentColor" aria-hidden>{GLYPHS[j % GLYPHS.length]}</svg>
                        </span>
                        <span className="t-splash-noise" aria-hidden>{NOISE[(j * 7 + 3) % NOISE.length]}</span>
                        <span className="t-splash-letter">{letter}</span>
                        <span className="t-splash-caret" aria-hidden>█</span>
                    </span>
                );
            })}
        </p>
    );
}

// Sunday-style splash, as a CLI boot: the name forms from glyphs, a random line types out,
// then the screen wipes up. Click or press any key to skip.
// The markup is static and all of its motion is CSS (see .t-splash in redesign.css); the
// random line is picked before paint by RETURNING_SCRIPT (html[data-phrase]). React only
// records the visit, handles skipping, and removes the overlay once it's gone.
const NAME = "MIRU JUN";

export function Splash() {
    const [phase, setPhase] = useState("show"); // show -> skip -> done

    useEffect(() => {
        try { localStorage.setItem(SEEN_KEY, "1"); } catch (e) { /* private mode etc. */ }
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setPhase("done"); return; }
        const T = splashTiming();
        // normally removed when the slide-up finishes (onAnimationEnd); this is only a backstop
        const gone = setTimeout(() => setPhase("done"), T.done + 1500);
        const skip = () => { setPhase("skip"); setTimeout(() => setPhase("done"), 1000); };
        window.addEventListener("keydown", skip, { once: true });
        return () => { clearTimeout(gone); window.removeEventListener("keydown", skip); };
    }, []);

    if (phase === "done") return null;
    return (
        <div
            className={`t-splash ${phase === "skip" ? "t-splash-skipped" : ""}`}
            onAnimationEnd={(e) => { if (e.target === e.currentTarget && e.animationName === "sp-wipe") setPhase("done"); }}
            onClick={() => { setPhase("skip"); setTimeout(() => setPhase("done"), 1000); }}
            role="presentation"
        >
            <div className="t-splash-inner">
                <GlyphWord text={NAME} />
                <div className="t-splash-log" aria-hidden>
                    {SIDE_TASKS.map((line, k) => (
                        <p key={k} className="t-ph" data-k={k} style={{ "--n": line.length + 2 }}>
                            <span className="t-type">&gt; {line}</span>{" "}
                            <span className="t-ok"><span className="t-dots" /> [ok]</span>
                        </p>
                    ))}
                    <p className="pt-2">[<span className="t-bar" />] <span className="t-pct" /></p>
                </div>
            </div>
            <p className="t-splash-skip">click or press any key to skip</p>
        </div>
    );
}

const ASCII_RAMP = "@%#*+=-:. "; // dark -> light

// Per-cell colours for a photo, as RGBA bytes (4 per cell).
// Precomputed at build time by scripts/precompute-ascii.mjs when available; otherwise
// sampled in the browser from the loaded image (slower: needs the download first).
function precomputedColours(src, cols, rows) {
    const hex = PRECOMPUTED.images[src];
    if (!hex || PRECOMPUTED.cols !== cols || PRECOMPUTED.rows !== rows) return null;
    const px = new Uint8ClampedArray(cols * rows * 4);
    for (let k = 0; k < cols * rows; k++) {
        px[k * 4] = parseInt(hex.substr(k * 6, 2), 16);
        px[k * 4 + 1] = parseInt(hex.substr(k * 6 + 2, 2), 16);
        px[k * 4 + 2] = parseInt(hex.substr(k * 6 + 4, 2), 16);
        px[k * 4 + 3] = 255;
    }
    return px;
}

const loadImage = (src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
});

// Load an image and sample it on a cols x rows grid: per-cell average colour + brightness.
function loadSampled(src, cols, rows) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const c = document.createElement("canvas");
            c.width = cols;
            c.height = rows;
            const cx = c.getContext("2d");
            cx.drawImage(img, 0, 0, cols, rows);
            resolve({ img, px: cx.getImageData(0, 0, cols, rows).data });
        };
        img.onerror = reject;
        img.src = src;
    });
}

const shuffled = (n) => {
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; }
    return a;
};

// A little white cow (24x24), for the portrait's easter-egg button.
function CowIcon() {
    return (
        <svg viewBox="-1 -1 26 26" className="w-12 h-12" aria-hidden>
            {/* thick black outline (drawn behind the fill so it only grows outward) */}
            <g fill="#fff" stroke="#1b1b19" strokeWidth="2" strokeLinejoin="round" paintOrder="stroke">
                <path d="M5.6 5.2C4.3 4.6 3.1 4.9 2.5 5.9c1 .5 2.1.6 3.2.2zM18.4 5.2c1.3-.6 2.5-.3 3.1.7-1 .5-2.1.6-3.2.2z" />
                <ellipse cx="4" cy="9.4" rx="2.7" ry="1.4" transform="rotate(-18 4 9.4)" />
                <ellipse cx="20" cy="9.4" rx="2.7" ry="1.4" transform="rotate(18 20 9.4)" />
                <rect x="6" y="4.4" width="12" height="13.4" rx="5.2" />
                <rect x="6.8" y="13.2" width="10.4" height="7.4" rx="3.7" />
            </g>
            <g fill="#1b1b19">
                <path d="M7.2 6.6c.9-.9 2.6-.8 3.1.4.4 1-.4 2.2-1.6 2.2-1.1 0-2.2-1.4-1.5-2.6z" />
                <circle cx="9.4" cy="11.2" r="0.95" />
                <circle cx="14.6" cy="11.2" r="0.95" />
                <ellipse cx="10.3" cy="16.8" rx="0.75" ry="1" />
                <ellipse cx="13.7" cy="16.8" rx="0.75" ry="1" />
            </g>
        </svg>
    );
}

// Portrait that "loads" like a terminal render: starts as ASCII, then cells flip at random
// to a flat colour block and then to the real pixels. With hoverSrc, a small white cow
// fades in once the page has fully loaded; hovering it (or tapping, on touch screens)
// morphs the portrait the same way into the other photo -- photo -> ASCII -> photo -- and
// back again when you leave.
//
// The real <img>s always sit underneath; the canvas is only an overlay while a morph runs,
// and its last frame is an exact copy of the image beneath, so swapping is invisible.
// `ratio` (width / height) fixes the frame. startDelay is measured from page load.
export function AsciiPortrait({ src, alt, hoverSrc, hoverAlt, ratio = 1, cols = PRECOMPUTED.cols, startDelay }) {
    const wrap = useRef(null);
    const canvas = useRef(null);
    const run = useRef({ raf: 0, grid: null, cache: {} }); // mutable morph state
    const [showing, setShowing] = useState(null);   // "main" | "hover" | null (nothing yet)
    const [canvasOn, setCanvasOn] = useState(true);
    const [cowReady, setCowReady] = useState(false);
    const lastPointer = useRef("mouse");

    // size the canvas to the frame and work out the cell grid
    const setupCanvas = () => {
        const dpr = window.devicePixelRatio || 1;
        const W = wrap.current.clientWidth, H = wrap.current.clientHeight;
        const cv = canvas.current;
        cv.width = Math.round(W * dpr);
        cv.height = Math.round(H * dpr);
        const ctx = cv.getContext("2d");
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const cw = W / cols;
        const rows = Math.max(1, Math.round(H / (cw / 0.6))); // mono chars are ~0.6 as wide as tall
        // (for the square frame this is PRECOMPUTED.rows, so the precomputed colours line up)
        run.current.grid = { ctx, W, H, cw, rows, ch: H / rows };
        return run.current.grid;
    };
    // colours (instant when precomputed) + the image itself (needed only for the pixel stage)
    const colours = (which) => {
        const key = which === "hover" ? hoverSrc : src;
        const { cache, grid } = run.current;
        cache["px:" + key] = cache["px:" + key] || precomputedColours(key, cols, grid.rows);
        return cache["px:" + key];
    };
    const sampled = (which) => {
        const key = which === "hover" ? hoverSrc : src;
        const { cache, grid } = run.current;
        if (!cache[key]) {
            const px = colours(which);
            cache[key] = px ? loadImage(key).then((img) => ({ img, px })) : loadSampled(key, cols, grid.rows);
        }
        return cache[key];
    };

    // Animate every cell through the given stages, in a random order, then reveal `target`.
    const animateCells = (stages, { total, lag }, target, finish) => {
        const { rows } = run.current.grid;
        const order = shuffled(cols * rows);
        const done = new Array(stages.length).fill(0);
        cancelAnimationFrame(run.current.raf);
        const t0 = performance.now();
        const ease = (u) => 1 - Math.pow(1 - Math.min(1, Math.max(0, u)), 2);
        const tick = (now) => {
            const t = now - t0;
            stages.forEach((stage, k) => {
                const want = isLite() ? order.length : Math.floor(ease((t - k * lag) / total) * order.length);
                while (done[k] < want) stage(order[done[k]++]);
            });
            if (done[stages.length - 1] < order.length) { run.current.raf = requestAnimationFrame(tick); return; }
            finish();                                 // exact full frame == the <img> underneath
            setShowing(target);                       // so revealing it is invisible
            run.current.raf = requestAnimationFrame(() => setCanvasOn(false));
        };
        run.current.raf = requestAnimationFrame(tick);
    };

    // cell painters
    const painters = ({ img, px }) => {
        const { ctx, cw, ch, rows } = run.current.grid;
        const sx = img.width / cols, sy = img.height / rows;
        const xy = (k) => [k % cols, (k / cols) | 0];
        return {
            ascii: (k) => {
                const [x, y] = xy(k), i = k * 4;
                const lum = (0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2]) / 255;
                ctx.fillStyle = "#f7f5ec";
                ctx.fillRect(x * cw, y * ch, cw + 0.5, ch + 0.5);
                ctx.fillStyle = "#1b1b19";
                ctx.fillText(ASCII_RAMP[Math.min(ASCII_RAMP.length - 1, Math.floor(lum * ASCII_RAMP.length))], x * cw, y * ch);
            },
            block: (k) => {
                const [x, y] = xy(k), i = k * 4;
                ctx.fillStyle = `rgb(${px[i]},${px[i + 1]},${px[i + 2]})`;
                ctx.fillRect(x * cw, y * ch, cw + 0.5, ch + 0.5);
            },
            pixels: (k) => {
                const [x, y] = xy(k);
                ctx.drawImage(img, x * sx, y * sy, sx, sy, x * cw, y * ch, cw + 0.5, ch + 0.5);
            },
            full: () => ctx.drawImage(img, 0, 0, run.current.grid.W, run.current.grid.H),
        };
    };

    // first load: ASCII -> colour blocks -> pixels
    useEffect(() => {
        let cancelled = false;
        const state = run.current;
        const mountedAt = performance.now();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const timer = { id: 0 };
        setupCanvas();
        // draw the ASCII stage straight away from the precomputed colours (no download wait)
        const drawAscii = (px) => {
            const { ctx, ch } = run.current.grid;
            const p = painters({ img: { width: 1, height: 1 }, px });
            ctx.font = `${ch}px ui-monospace, monospace`;
            ctx.textBaseline = "top";
            for (let k = 0; k < cols * run.current.grid.rows; k++) p.ascii(k);
        };
        const pre = !reduce && !isLite() && colours("main");
        if (pre) drawAscii(pre);
        sampled("main").then((data) => {
            if (cancelled) return;
            if (reduce || isLite()) { setShowing("main"); setCanvasOn(false); return; }
            if (!pre) drawAscii(data.px);
            const p = painters(data);
            const start = startDelay ?? splashTiming().exit + 50; // just as the splash starts to wipe away
            timer.id = setTimeout(() => {
                animateCells([p.block, p.pixels], { total: 450, lag: 80 }, "main", p.full);
            }, Math.max(0, start - (performance.now() - mountedAt)));
        });
        return () => { cancelled = true; clearTimeout(timer.id); cancelAnimationFrame(state.raf); };
    }, [src, cols, startDelay]); // eslint-disable-line react-hooks/exhaustive-deps

    // the cow appears once the portrait is in and the whole page has finished loading
    useEffect(() => {
        if (!hoverSrc || showing !== "main" || cowReady) return;
        const show = () => setTimeout(() => setCowReady(true), 400);
        if (document.readyState === "complete") { const t = show(); return () => clearTimeout(t); }
        window.addEventListener("load", show, { once: true });
        return () => window.removeEventListener("load", show);
    }, [hoverSrc, showing, cowReady]);

    // morph to "main" or "hover": photo -> ASCII of the target -> target pixels
    const morphTo = async (target) => {
        if (!run.current.grid || showing === null) return;
        const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches || isLite();
        const data = await sampled(target);
        if (instant) { setShowing(target); return; }
        const wasIdle = !canvasOn;
        if (wasIdle) {
            // start the overlay from the photo currently on show
            const from = await sampled(showing);
            setupCanvas();
            painters(from).full();
        }
        const { ctx, ch } = run.current.grid;
        ctx.font = `${ch}px ui-monospace, monospace`;
        ctx.textBaseline = "top";
        setCanvasOn(true);
        const p = painters(data);
        animateCells([p.ascii, p.pixels], { total: 150, lag: 50 }, target, p.full);
    };

    return (
        <figure ref={wrap} className="t-portrait" style={{ aspectRatio: ratio }}>
            <img src={src} alt={alt} className="block w-full h-full object-cover"
                 style={{ visibility: showing === "main" ? "visible" : "hidden" }} />
            {hoverSrc && cowReady && (
                <img src={hoverSrc} alt={hoverAlt} className="absolute inset-0 block w-full h-full object-cover"
                     style={{ visibility: showing === "hover" ? "visible" : "hidden" }} />
            )}
            <canvas ref={canvas} aria-hidden className="absolute inset-0 block w-full h-full"
                    style={{ visibility: canvasOn ? "visible" : "hidden" }} />
            {hoverSrc && (
                <button
                    type="button"
                    className={`t-cow ${cowReady ? "t-cow-ready" : ""}`}
                    aria-label={showing === "hover" ? "Show the regular portrait" : "Show the cow portrait"}
                    aria-pressed={showing === "hover"}
                    tabIndex={cowReady ? 0 : -1}
                    onPointerDown={(e) => { lastPointer.current = e.pointerType; }}
                    onPointerEnter={(e) => { if (e.pointerType === "mouse") morphTo("hover"); }}
                    onPointerLeave={(e) => { if (e.pointerType === "mouse") morphTo("main"); }}
                    onClick={() => { if (lastPointer.current !== "mouse") morphTo(showing === "hover" ? "main" : "hover"); lastPointer.current = "keyboard"; }}
                >
                    <CowIcon />
                </button>
            )}
        </figure>
    );
}

const SOCIAL_LINKS = [
    ["resume", "/resume.pdf", FileUser],
    ["github", "https://github.com/lemonlemonde", Github],
    ["scholar", "https://scholar.google.com/citations?user=AalqHJ4AAAAJ&hl=en&authuser=1", GraduationCap],
    ["linkedin", "https://www.linkedin.com/in/miru-jun/", Linkedin],
];

// Links dock that follows the scroll (left column on wide screens, bottom row on phones).
// Both the dock icons and the footer icons are always in the page; whichever set is
// "live" is visible. When that flips, each newly visible icon is flown in from where
// its twin was: heading down it drops vertically first and then slides across into
// place; heading back up it slides across first and then rises. All icons travel at
// the same speed along the same L-shaped track, so they move like a little train:
// they keep their spacing through the corner instead of piling up there.
const FLY_SPEED = 1100; // px per second along the dock <-> footer track

export function SocialDock() {
    const footer = useRef(null);
    const atBottom = useInView(footer, { amount: 0.5 });
    const first = useRef(true);

    useLayoutEffect(() => {
        if (first.current) { first.current = false; return; }
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        SOCIAL_LINKS.forEach(([name]) => {
            const to = document.querySelector(`[data-fly="${atBottom ? "foot" : "dock"}-${name}"]`);
            const from = document.querySelector(`[data-fly="${atBottom ? "dock" : "foot"}-${name}"]`);
            if (!to || !from) return;
            const a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
            const dx = a.left - b.left, dy = a.top - b.top;
            const len = Math.abs(dx) + Math.abs(dy) || 1;
            // down: y then x; up: x then y. The corner sits at the matching fraction of the
            // path, and duration scales with path length -> constant speed for every icon.
            const kf = atBottom ? { x: [dx, dx, 0], y: [dy, 0, 0] } : { x: [dx, 0, 0], y: [dy, dy, 0] };
            const corner = (atBottom ? Math.abs(dy) : Math.abs(dx)) / len;
            const duration = Math.min(1.4, len / FLY_SPEED);
            animate(to, kf, { duration, times: [0, corner, 1], ease: "linear" });
            // its label wipes in left-to-right during the icon's slide along the row
            const label = document.querySelector(`[data-fly-label="${name}"]`);
            if (label && atBottom) {
                label.style.clipPath = "inset(0 100% 0 0)";
                animate(label, { clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"], x: [-6, 0] },
                        { delay: duration * corner, duration: Math.max(0.2, duration * (1 - corner)), ease: "easeOut" });
            }
        });
    }, [atBottom]);

    return (
        <>
            <nav aria-label="Links" className={`t-dock ${atBottom ? "t-dock-off" : ""}`} aria-hidden={atBottom}>
                {SOCIAL_LINKS.map(([name, url, Icon]) => (
                    <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}
                       className="t-dock-key t-hot" tabIndex={atBottom ? -1 : 0}>
                        <span data-fly={`dock-${name}`} className="flex"><Icon aria-hidden className="w-4 h-4" /></span>
                    </a>
                ))}
            </nav>
            <footer ref={footer} className="pt-24 flex flex-col-reverse sm:flex-row gap-4 justify-between text-[0.8rem]">
                <span className="flex flex-wrap gap-x-5 gap-y-2">
                    {SOCIAL_LINKS.map(([name, url, Icon]) => (
                        <a key={name} className="inline-flex items-center gap-2" href={url} target="_blank" rel="noopener noreferrer" tabIndex={atBottom ? 0 : -1}>
                            <span data-fly={`foot-${name}`} className="flex w-4 h-4" style={{ opacity: atBottom ? 1 : 0 }}>
                                <Icon aria-hidden className="w-4 h-4" />
                            </span>
                            <span data-fly-label={name} className="t-link inline-block" style={{ opacity: atBottom ? 1 : 0 }}>{name}</span>
                        </a>
                    ))}
                </span>
                <span className="t-muted">© miru jun 2026<span className="t-cursor">█</span></span>
            </footer>
        </>
    );
}

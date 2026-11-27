"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GlyphWord } from "./terminal_parts";
import "./page_transition.css";

// Mini splash between pages. Lives in the root layout so it survives the navigation:
// lime wipes down over the page, the destination's name forms from glyphs (like the home splash),
// the route changes underneath, then the lime wipes up off the new page.
// Only links marked with data-transition use it; everything else navigates normally.
// data-transition="Name" sets the name shown (otherwise it comes from the URL).
export default function PageTransition() {
    const router = useRouter();
    const pathname = usePathname();
    const [phase, setPhase] = useState("idle"); // idle -> cover -> reveal -> idle
    const [target, setTarget] = useState("");
    const phaseRef = useRef(phase);
    phaseRef.current = phase;
    const fallback = useRef(0);

    useEffect(() => {
        const onClick = (e) => {
            const a = e.target.closest?.("a[data-transition]");
            if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const href = a.getAttribute("href");
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // plain navigation
            e.preventDefault();
            e.stopPropagation(); // keep next/link from navigating before the cover is up
            setTarget(a.dataset.transition || href.replace(/^\//, "").replace(/_page$/, "").replace(/_/g, " ") || "home");
            setPhase("cover");
            setTimeout(() => router.push(href), 200);
            // Fallback: if the in-app navigation stalls (slow or failed page-data fetch, stale
            // dev build, etc.), do an ordinary full page load so the overlay can never get stuck.
            clearTimeout(fallback.current);
            fallback.current = setTimeout(() => {
                if (phaseRef.current === "cover") window.location.assign(href);
            }, 2500);
        };
        // capture phase: runs before React/next-link handlers see the click
        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, [router]);

    // new route is in: reveal it once it has actually been drawn (two frames from now), so
    // the wipe isn't fighting the new page's first layout and paint
    useEffect(() => {
        if (phaseRef.current !== "cover") return;
        clearTimeout(fallback.current); // made it: no hard reload needed
        let raf = requestAnimationFrame(() => {
            raf = requestAnimationFrame(() => setPhase("reveal"));
        });
        return () => cancelAnimationFrame(raf);
    }, [pathname]);
    useEffect(() => {
        if (phase !== "reveal") return;
        const t = setTimeout(() => setPhase("idle"), 320);
        return () => clearTimeout(t);
    }, [phase]);

    if (phase === "idle") return null;
    // fit the flip into the ~0.2s the cover is up, however long the name is
    const letters = target.replace(/ /g, "").length || 1;
    const gap = Math.min(14, 100 / letters);
    return (
        <div className={`pt-screen pt-${phase}`} aria-live="polite">
            <GlyphWord text={target.toUpperCase()} className="pt-mark" timing={{ glyphGap: gap * 0.5, flipAt: 70, flipGap: gap, noise: 40 }} />
        </div>
    );
}

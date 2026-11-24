"use client";
import { useRef, useEffect, useState } from "react";

const LOOP_MS = 1500; // time for the glow to travel once around the border

// CSS angle (0deg = up, clockwise) from the box center to the point a fraction t along its perimeter.
// Advancing t at a constant rate moves the glow at constant speed along the edges, whatever the aspect ratio.
function perimeterAngle(t, w, h) {
    let s = (t * 2 * (w + h) + w / 2) % (2 * (w + h)); // start at top-center
    let x, y;
    if (s < w) { x = s; y = 0; }
    else if ((s -= w) < h) { x = w; y = s; }
    else if ((s -= h) < w) { x = w - s; y = h; }
    else { x = 0; y = h - (s - w); }
    return (Math.atan2(x - w / 2, h / 2 - y) * 180) / Math.PI;
}

// Rotating gradient border on hover. Spread the result onto the element: <div {...useGlowBorder()}>
export default function useGlowBorder() {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!isHovered || !el) return;
        let frame;
        const start = performance.now();
        const tick = (now) => {
            const t = ((now - start) % LOOP_MS) / LOOP_MS;
            el.style.setProperty("--angle", `${perimeterAngle(t, el.offsetWidth, el.offsetHeight)}deg`);
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [isHovered]);

    return {
        ref,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: {
            "--angle": "0deg",
            borderImage: isHovered ? "conic-gradient(from var(--angle), #92e57a, #ff8fc7 50%, #92e57a) 1" : "none",
        },
    };
}

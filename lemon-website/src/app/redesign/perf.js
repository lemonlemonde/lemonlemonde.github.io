// "Lite" mode for devices that can't keep up with the full animations.
//
// Two ways in:
//   1. before paint, from hardware hints (see RETURNING_SCRIPT in splash_timing.js):
//      very few CPU cores, very little memory, or the user's data-saver setting;
//   2. at runtime, from measured frame rates: while the page is animating we time a burst of
//      consecutive frames, and if the median frame is consistently slow we switch over.
// Lite mode is <html data-lite>; CSS turns off the costly effects and JS skips them.

// once a device has been caught struggling, stay lite for the rest of the browser session
export const LITE_KEY = "miru.lite";

export const isLite = () =>
    typeof document !== "undefined" && document.documentElement.hasAttribute("data-lite");

export function goLite() {
    if (isLite()) return;
    document.documentElement.setAttribute("data-lite", "");
    try { sessionStorage.setItem(LITE_KEY, "1"); } catch (e) { /* storage unavailable */ }
    window.dispatchEvent(new Event("t-lite"));
}

const SLOW_FRAME_MS = 28;  // median frame slower than ~35fps -> lite
const BURST_FRAMES = 40;   // consecutive frames timed per sample

// Time a burst of consecutive frames; go lite if they're consistently slow.
// Ignores hidden tabs and long pauses (background throttling, debugger, tab switch).
export function sampleFrames() {
    if (isLite() || typeof window === "undefined") return () => {};
    let last = 0, raf = 0;
    const deltas = [];
    const tick = (now) => {
        if (document.visibilityState !== "visible") return;
        if (last) {
            const dt = now - last;
            if (dt < 250) deltas.push(dt);
        }
        last = now;
        if (deltas.length < BURST_FRAMES) { raf = requestAnimationFrame(tick); return; }
        const sorted = [...deltas].sort((a, b) => a - b);
        if (sorted[sorted.length >> 1] > SLOW_FRAME_MS) goLite();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
}

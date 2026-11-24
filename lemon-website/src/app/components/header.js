"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Random walk over the letters: each one's cycle length and start offset drift a little
// from its neighbour's, so nearby letters flicker at a similar cadence but never in lockstep.
function randomFlickers(n) {
    let duration = 7 + Math.random() * 3;
    let delay = -Math.random() * duration;
    return Array.from({ length: n }, () => {
        duration = Math.min(12, Math.max(6, duration + (Math.random() - 0.5) * 1.6));
        delay -= 0.3 + Math.random() * 0.9;
        const pattern = Math.floor(Math.random() * 3);
        return { animation: `neon-flicker-${pattern} ${duration.toFixed(2)}s linear ${delay.toFixed(2)}s infinite` };
    });
}

// Seasonal: little santa hat perched on the "M" (rides along when the M is dragged).
function SantaHat() {
    return (
        <svg
            aria-hidden
            className="santa-hat absolute -top-3.5 left-0.5 w-8 h-7 -rotate-12 pointer-events-none"
            viewBox="0 0 32 28"
        >
            <path d="M4 22 C 8 10, 16 2, 26 6 C 22 8, 20 14, 24 22 Z" fill="#d62f3a" />
            <rect x="1" y="19" width="26" height="6" rx="3" fill="#f5f5f5" />
            <circle cx="27" cy="7" r="3.5" fill="#f5f5f5" />
        </svg>
    );
}

export default function Header() {
    const router = useRouter();
    const [dragDistance, setDragDistance] = useState(0);
    // rolled on the client only, so the static HTML and the first render match
    const [flickers, setFlickers] = useState([]);
    // transformer box cycles: plain white text -> neon glow + flicker -> sign off -> plain ...
    const [mode, setMode] = useState("plain");
    useEffect(() => setFlickers(randomFlickers(7)), []);

    const letters_first = [
        "M",
        "i",
        "r",
        "u",
    ]

    const letters_last = [
        "J",
        "u",
        "n"
    ]

    return (
        <div className="flex w-full relative justify-center">
            {/* left line */}
            <motion.h1
                initial={{ color: "#00000", scaleX: 0 }}
                animate={{ color: "#ededed", scaleX: 1 }}
                // whileHover={{ color: "#ededed", scaleX: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="glow-line h-px md:w-48 w-20 my-5 md:me-10 me-4"></div>
            </motion.h1>
            
            {/* draggy letters (first+last name) */}
            <div 
                className={`relative flex w-fit max-w-screen-lg cursor-pointer sign-${mode}`}
                onClick={() => {
                    if (Math.abs(dragDistance) < 5) router.push("/");
                }}
            >
                {/* back wiring: a sagging bus cable under the letters that trails off to a little transformer */}
                <svg
                    aria-hidden
                    className="neon-wiring absolute left-0 top-full w-full h-3 overflow-visible pointer-events-none"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M -3 3 Q 4 8 11 4 T 25 4 T 39 4 T 53 4 T 67 4 T 81 4 T 95 4 Q 104 2 108 6 T 116 9"
                        fill="none"
                        stroke="#3a3a3a"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
                <button
                    type="button"
                    className="neon-transformer"
                    aria-label="Switch neon sign"
                    title={{ plain: "Switch neon on", neon: "Switch sign off", off: "Back to plain" }[mode]}
                    onClick={(e) => {
                        e.stopPropagation(); // don't trigger the name's go-home click
                        setMode({ plain: "neon", neon: "off", off: "plain" }[mode]);
                    }}
                />

                {letters_first.map((letter, index) => (
                <motion.div
                    key={index}
                    className="relative"
                    drag="x"
                    dragConstraints={{ left: -180, right: 180 }}
                    onDragStart={() => setDragDistance(0)}
                    onDrag={(event, info) => setDragDistance(info.offset.x)}
                    onDragEnd={() => setTimeout(() => setDragDistance(0), 50)}
                >
                    <motion.h1
                        className="text-4xl italic cursor-grab font-neon neon-green"
                        style={mode === "neon" ? flickers[index] : undefined}
                        initial={{ color: "#00000", scaleX: 0 }}
                        animate={{ color: "#ededed", scaleX: 1 }}
                        // whileHover={{ color: "#ededed", scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {letter}
                    </motion.h1>
                    {/* drop wire + standoff clip; moves with the letter when dragged */}
                    <span aria-hidden className="neon-drop" />
                    {index === 0 && <SantaHat />}
                </motion.div>
                ))}

                <div className="ms-3 flex w-fit">
                {letters_last.map((letter, index) => (
                <motion.div
                    key={index}
                    className="relative"
                    drag="x"
                    dragConstraints={{ left: -180, right: 180 }}
                    onDragStart={() => setDragDistance(0)}
                    onDrag={(event, info) => setDragDistance(info.offset.x)}
                    onDragEnd={() => setTimeout(() => setDragDistance(0), 50)}
                >
                    <motion.h1
                        className="text-4xl italic cursor-grab font-neon neon-pink"
                        style={mode === "neon" ? flickers[index + 4] : undefined}
                        initial={{ color: "#00000", scaleX: 0 }}
                        animate={{ color: "#ededed", scaleX: 1 }}
                        // whileHover={{ color: "#ededed", scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {letter}
                    </motion.h1>
                    {/* drop wire + standoff clip; moves with the letter when dragged */}
                    <span aria-hidden className="neon-drop" />
                </motion.div>
                ))}
                </div>
            </div>
            

            {/* right line */}
            <motion.h1
                initial={{ color: "#00000", scaleX: 0 }}
                animate={{ color: "#ededed", scaleX: 1 }}
                // whileHover={{ color: "#ededed", scaleX: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="glow-line h-px md:w-48 w-20 my-5 md:ms-10 ms-4"></div>
            </motion.h1>

            {/* shadow clone */}
            <div className="absolute w-fit -z-10">
                <div className="flex -z-10">
                    <div 
                        className="flex max-w-screen-lg cursor-pointer -z-10"
                        onClick={() => {
                                if (Math.abs(dragDistance) < 5) router.push("/");
                            }}
                    >
                        {letters_first.map((letter, index) => (
                            <motion.h1
                                key={index}
                                className="text-4xl italic cursor-grab font-neon"
                                initial={{ color: "#00000", scaleX: 0 }}
                                animate={{ color: "#434343", scaleX: 1 }}
                                // whileHover={{ color: "#ededed", scaleX: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                {letter}
                            </motion.h1>
                        ))}
                    </div>
                    <div 
                        className="ms-3 flex max-w-screen-lg cursor-pointer -z-10"
                        onClick={() => {
                                if (Math.abs(dragDistance) < 5) router.push("/");
                            }}
                    >
                        {letters_last.map((letter, index) => (
                            <motion.h1
                                key={index}
                                className="text-4xl italic cursor-grab font-neon"
                                initial={{ color: "#00000", scaleX: 0 }}
                                animate={{ color: "#434343", scaleX: 1 }}
                                // whileHover={{ color: "#ededed", scaleX: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                {letter}
                            </motion.h1>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
}


"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [dragDistance, setDragDistance] = useState(0);

    const letters = [
        "M",
        "i",
        "r",
        "u",
        "J",
        "u",
        "n"
    ]

    return (
        <div className="flex w-full relative">
            
            <div 
                className="flex w-fit max-w-screen-lg cursor-pointer"
                onClick={() => {
                    if (Math.abs(dragDistance) < 5) router.push("/");
                }}
            >
                {letters.map((letter, index) => (
                <motion.div
                    key={index}
                    drag="x"
                    dragConstraints={{ left: 0, right: 180 }}
                    onDragStart={() => setDragDistance(0)}
                    onDrag={(event, info) => setDragDistance(info.offset.x)}
                    onDragEnd={() => setTimeout(() => setDragDistance(0), 50)}
                >
                    <motion.h1
                        className="text-4xl italic cursor-grab"
                        initial={{ color: "#00000", scaleX: 0 }}
                        animate={{ color: "#ededed", scaleX: 1 }}
                        // whileHover={{ color: "#ededed", scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {letter}
                    </motion.h1>
                </motion.div>
                ))}
            </div>

            {/* shadow clone */}
            <div 
                className="absolute flex w-fit max-w-screen-lg cursor-pointer -z-10"
                onClick={() => {
                        if (Math.abs(dragDistance) < 5) router.push("/");
                    }}
            >
                {letters.map((letter, index) => (
                    <motion.h1
                        key={index}
                        className="text-4xl italic cursor-grab"
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
    );
}


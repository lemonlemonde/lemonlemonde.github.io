"use client";

import { motion } from "motion/react";

export default function Header() {
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
        <div className="flex w-full max-w-screen-lg">
            {letters.map((letter, index) => (
            <motion.div
                key={index}
                drag="x"
                dragConstraints={{ left: 0, right: 180 }}
            >
                <motion.h1
                    className="text-4xl italic"
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
    );
}


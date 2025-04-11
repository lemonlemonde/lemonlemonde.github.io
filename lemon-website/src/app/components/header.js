"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [dragDistance, setDragDistance] = useState(0);

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
                <div className="h-px bg-white md:w-48 w-20 my-5 md:me-10 me-4"></div>
            </motion.h1>
            
            {/* draggy letters (first+last name) */}
            <div 
                className="flex w-fit max-w-screen-lg cursor-pointer"
                onClick={() => {
                    if (Math.abs(dragDistance) < 5) router.push("/");
                }}
            >
                {letters_first.map((letter, index) => (
                <motion.div
                    key={index}
                    drag="x"
                    dragConstraints={{ left: -180, right: 180 }}
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

                <div className="ms-3 flex w-fit">
                {letters_last.map((letter, index) => (
                <motion.div
                    key={index}
                    drag="x"
                    dragConstraints={{ left: -180, right: 180 }}
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
            </div>
            

            {/* right line */}
            <motion.h1
                initial={{ color: "#00000", scaleX: 0 }}
                animate={{ color: "#ededed", scaleX: 1 }}
                // whileHover={{ color: "#ededed", scaleX: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="h-px bg-white md:w-48 w-20 my-5 md:ms-10 ms-4"></div>
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
                    <div 
                        className="ms-3 flex max-w-screen-lg cursor-pointer -z-10"
                        onClick={() => {
                                if (Math.abs(dragDistance) < 5) router.push("/");
                            }}
                    >
                        {letters_last.map((letter, index) => (
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

            </div>

        </div>
    );
}


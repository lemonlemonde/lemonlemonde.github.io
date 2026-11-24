"use client";
import { motion } from "motion/react";

// Same draw-in as the "Miru Jun" header, triggered when the title scrolls into view.
const reveal = {
    initial: { color: "#000000", scaleX: 0 },
    whileInView: { color: "#ededed", scaleX: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
};

export default function SectionTitle({title}) {

    return (
        <div className="flex w-full relative justify-center mb-[50px]">
            <motion.div {...reveal} className="glow-line h-px md:w-48 w-20 my-4" />
            <motion.h2 {...reveal} className="flex text-2xl mx-5">
                [ {title} ]
            </motion.h2>
            <motion.div {...reveal} className="glow-line h-px md:w-48 w-20 my-4" />
        </div>
    )
}

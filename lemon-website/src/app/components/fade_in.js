"use client";
import { motion } from "motion/react";

// Fades + slides children up the first time they scroll into view.
export default function FadeIn({ children, className = "w-full", delay = 0 }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
}

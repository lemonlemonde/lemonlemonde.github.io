"use client";
import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Github, GraduationCap, Linkedin, FileUser } from "lucide-react";

const LINKS = [
    ["GitHub", "https://github.com/lemonlemonde", Github],
    ["Google Scholar", "https://scholar.google.com/citations?user=AalqHJ4AAAAJ&hl=en&authuser=1", GraduationCap],
    ["LinkedIn", "https://www.linkedin.com/in/miru-jun/", Linkedin],
    ["Resume", "/resume.pdf", FileUser],
];

// The same layoutId is rendered either in the side bar or in the footer;
// motion animates the icon between the two spots when it switches.
function FlyingIcon({ name, Icon, index }) {
    return (
        <motion.span
            layoutId={`social-${name}`}
            className="flex"
            transition={{ type: "spring", duration: 0.9, bounce: 0.15, delay: index * 0.08 }}
        >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.span>
    );
}

export default function Footer() {
    const footerRef = useRef(null);
    // links live in the footer once it is half on screen, otherwise in the side bar
    const atBottom = useInView(footerRef, { amount: 0.5 });

    return (
        <div className="w-full">
            {/* side bar that follows the scroll; hugs the edge on phones, moves inward on wider screens */}
            <nav
                aria-label="Social links"
                className="fixed left-0 sm:left-4 lg:left-8 xl:left-16 inset-y-0 z-50 flex items-center pointer-events-none"
            >
                {/* glowing green/pink rail, gently pulsing */}
                <AnimatePresence>
                    {!atBottom && (
                        <motion.div
                            key="rail"
                            aria-hidden
                            className="absolute left-0 inset-y-0 my-auto w-0.5 h-36 sm:h-44 rounded-full bg-gradient-to-b from-[#92e57a] to-[#ff8fc7] shadow-[0_0_10px_2px_rgba(146,229,122,0.5),0_0_18px_4px_rgba(255,143,199,0.35)]"
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{ scaleY: 1, opacity: [0.6, 1, 0.6] }}
                            exit={{ scaleY: 0, opacity: 0, transition: { duration: 0.5 } }}
                            transition={{
                                scaleY: { duration: 0.6, ease: "easeOut" },
                                opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                            }}
                        />
                    )}
                </AnimatePresence>

                <div className="flex flex-col gap-2 sm:gap-3 pl-1 sm:pl-3">
                    {!atBottom && LINKS.map(([name, url, Icon], index) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            title={name}
                            className="pointer-events-auto p-1.5 opacity-70 hover:opacity-100 hover:text-[#92e57a] transition-opacity"
                        >
                            <FlyingIcon name={name} Icon={Icon} index={index} />
                        </a>
                    ))}
                </div>
            </nav>

            {/* links to make me look cooler */}
            <footer
                ref={footerRef}
                className="grid grid-cols-2 gap-x-4 gap-y-3 justify-items-start sm:flex sm:justify-center sm:space-x-8 sm:gap-1 items-center row-start-3"
            >
                {LINKS.map(([name, url, Icon], index) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={atBottom ? 0 : -1}
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    >
                        {/* fixed-size slot so the footer doesn't shift when the icon lands */}
                        <span className="flex w-5 h-5 sm:w-6 sm:h-6">
                            {atBottom && <FlyingIcon name={name} Icon={Icon} index={index} />}
                        </span>
                        <motion.span
                            initial={false}
                            animate={{ opacity: atBottom ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: atBottom ? 0.4 + index * 0.08 : 0 }}
                        >
                            {name}
                        </motion.span>
                    </a>
                ))}
            </footer>
        </div>
    );
}

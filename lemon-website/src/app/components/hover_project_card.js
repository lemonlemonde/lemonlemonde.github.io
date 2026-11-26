"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import FormattedLinks from "./formatted_links";
import useGlowBorder from "./use_glow_border";
import FadeIn from "./fade_in";


export default function HoverProjectCard({ title, links, children, link}) {
    const router = useRouter();
    const glow = useGlowBorder();
    const href = link.startsWith("/") ? link : `/${link}`;

    return (
        <FadeIn>
            <div
                // Smooth gradient change adapted from
                // https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition
                {...glow}
                className="w-full border-2 border-[var(--background)] transition-[transform,background-position] duration-500 will-change-transform bg-gradient-to-t from-[var(--hover-tint)] via-[var(--background)] to-[var(--background)] bg-size-200 -bg-pos-10 hover:bg-pos-100 hover:scale-105 cursor-pointer"
                onClick={() => router.push(href)}
            >

                <div className="border-l-2 p-5 h-full">
                    {/* title: a real link for keyboard, new-tab, and crawlers; the whole card stays clickable for mouse */}
                    <Link
                        href={href}
                        className="font-semibold text-xl block w-fit hover:underline underline-offset-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {title}
                    </Link>

                    {/*  */}
                    <div className="space-y-5">
                        <FormattedLinks links={links} />
                        { children }

                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

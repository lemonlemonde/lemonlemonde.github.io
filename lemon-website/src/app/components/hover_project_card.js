"use client";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client"
import { useRef, useEffect, useState } from "react";

import InnerLink from "../components/inner_link";


export default function HoverProjectCard({ title, links, children, link}) {
    const router = useRouter();
    const boxRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false); // State to manage hover status
    const isHoveredRef = useRef(isHovered);

    // adapted from:
    {/* https://ibelick.com/blog/create-animated-gradient-borders-with-css */ }
    const animateBorder = () => {
        const boxElement = boxRef.current
        if (!isHoveredRef.current || !boxElement) {
            return;
        }
        const curAngle = parseFloat(boxElement.style.getPropertyValue("--angle"))
        var deltaAngle = 25
        var minDelta = 18
        // estimates of where the rectangle corners are...
        // becomes jank when corners become the other extreme (closer to deg 0 and 180, as opposed to 90 and 270)
        // TODO: look at screen width to determine if the angle thresholds should be close to 0/180 or 90/270

        // slower at 0/180 when flatter rectangle
        // faster at 90/270 when flatter rectangle
        // larger when smaller dist, so...
        var dist = Math.min(Math.abs(curAngle - 90), Math.abs(curAngle - 270))
        deltaAngle /= (dist * 0.2)
        deltaAngle = Math.min(deltaAngle, minDelta)

        const angle = (curAngle + deltaAngle) % 360;
        boxElement.style.setProperty("--angle", `${angle}deg`);
        // console.log("spin")
        requestAnimationFrame(animateBorder);
    };


    useEffect(() => {
        // Start the animation on hover
        isHoveredRef.current = isHovered
        if (isHovered) {
            // console.log("hovering")
            requestAnimationFrame(animateBorder); // Start animation loop
        } else {
            // console.log("no hover")
            boxRef.current.style.setProperty("--angle", "0deg");
        }
    }, [isHovered]); // Re-run effect when hover state changes

    const FormattedLinks = ({ links }) => {
        return (
            <div className="flex space-x-6">
                {links.map(([text, url], index) => (
                    <InnerLink key={index} text={text} link={url}/> 
                ))}
            </div>
        );
    };

    return (
        <div
            // Smooth gradient change adapted from
            // https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition
            ref={boxRef}
            className="w-full border-2 border-[var(--background)] transition-all duration-500 bg-gradient-to-t from-[var(--slight-blue)] via-[var(--background)] to-[var(--background)] bg-size-200 -bg-pos-10 hover:bg-pos-100 hover:scale-105 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => router.push(link)}
            style={{
                "--angle": "0deg",
                "--border-color": isHovered ? "linear-gradient(var(--angle), #070707, #687aff)" : "transparent",
                borderImage: "var(--border-color) 1",
            }}
        >

            <div className="border-l-2 p-5">
                {/* title duh */}
                <p className="font-semibold text-xl">{title}</p>

                {/*  */}
                <div className="space-y-5">
                    <FormattedLinks links={links} />
                    { children }

                </div>
            </div>
        </div>
    );
}
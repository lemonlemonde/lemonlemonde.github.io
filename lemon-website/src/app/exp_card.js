"use client";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client"
import { useRef, useEffect, useState } from "react";

export default function ExpCard() {
    const router = useRouter();
    const boxRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false); // State to manage hover status
    const isHoveredRef = useRef(isHovered);

    // adapted from:
    {/* https://ibelick.com/blog/create-animated-gradient-borders-with-css */ }
    const animateBorder = () => {
        const boxElement = boxRef.current
        const curAngle = parseFloat(boxElement.style.getPropertyValue("--angle"))
        var deltaAngle = 25
        var minDelta = 15
        // estimates of where the rectangle corners are...
        // becomes jank when corners become the other extreme (closer to deg 0 and 180, as opposed to 90 and 270)
        // TODO: look at screen width to determine if the angle thresholds should be close to 0/180 or 90/270

        // slower at 0/180 when flatter rectangle
        // faster at 90/270 when flatter rectangle
        // larger when smaller dist, so...
        var dist = Math.min(Math.abs(curAngle - 90), Math.abs(curAngle - 270))
        deltaAngle /= (dist * 0.3)
        deltaAngle = Math.min(deltaAngle, minDelta)

        const angle = (curAngle + deltaAngle) % 360;
        boxElement.style.setProperty("--angle", `${angle}deg`);
        if (isHoveredRef.current) {
            console.log("spin")
            requestAnimationFrame(animateBorder);
        } else {
            return;
        }
    };


    useEffect(() => {
        // Start the animation on hover
        isHoveredRef.current = isHovered
        if (isHovered) {
            console.log("hovering")
            requestAnimationFrame(animateBorder); // Start animation loop
        } else {
            console.log("no hover")
        }
    }, [isHovered]); // Re-run effect when hover state changes

    return (
        <div
            // Smooth gradient change adapted from
            // https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition
            ref={boxRef}
            className="w-full p-10 border-2 border-[var(--background)] transition-all duration-500 bg-gradient-to-t from-[#091735] via-[var(--background)] to-[var(--background)] bg-size-200 -bg-pos-10 hover:bg-pos-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => router.push("/exp_page")}
            style={{
                "--angle": "0deg",
                "--border-color": isHovered ? "linear-gradient(var(--angle), #070707, #687aff)" : "transparent",
                borderImage: "var(--border-color) 1",
            }}
        >


            {/* job exp */}
            <ul className="list-disc font-extralight max-w-full">
                <h2 className="text-2xl font-normal">
                    [ EXP ]
                </h2>
                <li><b>2024-Current:</b> Data Engineer @ DoD's NSWC Corona</li>
                <li><b>2024-Current:</b> Student Volunteer @ USC's Virtual Human Therapeutics Lab (VHTL)</li>
                <li><b>2023-2024:</b> Student Researcher @ USC's Learning and Interactive Robot Autonomy Lab (LiraLab)</li>


                <li><b>2023-2024:</b> Student Researcher @ USC's Mobile and Environmental Media Lab (MEML)</li>
                <div className="flex space-x-6">
                    <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1">Website + WebAR link</a>
                    <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge">1st place Time Capsule Challenge (Niantic's 8th Wall)</a>
                </div>

                <li><b>Summer 2023:</b> Intern @ DoD's NSWC Corona</li>
                <li><b>2021:</b> Mobile App Developer @ Bridges Health startup</li>
                <li><b>2021:</b> Research Intern (CURVE Fellowship) @ USC's ICAROS Lab</li>
            </ul>
        </div>
    );
}
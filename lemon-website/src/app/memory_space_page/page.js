import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import InnerLink from "../components/inner_link";
import Card from "../components/card";
import ProjectCard from "../components/project_card";
import MemorySpaceCard from "../components/memory_space_card";


export default function MemorySpacePage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Memory Space: Chinatown AR ]
                </h2>
                    <p>with Professor Scott Fisher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)"/> and friends :) </p>
                    <p>In collaboration with <i>[Metro Art, The Huntington-USC Institute on California and the West, the Chinese Historical Society of Southern California, and the Huntington Library]</i>.</p>
                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                    {/* ---- screen vids ---- */}
                    <div className="flex lg:w-1/2 w-full lg:justify-start justify-center items-center">
                        <iframe className="aspect-[9/16] w-1/2 max-w-[200] pr-5" src="https://www.youtube.com/embed/956OxNlEtiM?si=42KT6SGpsSu-UDRY" allow="fullscreen" title="MEML Chinatown - Peacock Test (dev)" />
                        <iframe className="aspect-[9/16] w-1/2 max-w-[200]" src="https://www.youtube.com/embed/VbYJ1TKyhqo?si=-ETg_DiC7b5yzBDO" allow="fullscreen" title="MEML Chinatown - SangYuen Store Test" />
                    </div>
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        {/* ---- explanation of screen vids ---- */}
                        <p>A closer look (and a dev view) of two of the experiences: Peacock Alley and Sang Yuen Store.</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>Webapp in HTML, CSS, JavaScript (on Niantic's 8th Wall)</li>
                            <li>WebAR experiences with A-Frame, 8th Wall modules, and VPS waypoints</li>
                            <li>InWorld API for conversing with a peacock</li>
                            <li>Places volumetric videos of actors and custom 2D/3D assets on the screen, relative to the positioning of scanned waypoints around LA's Union Station</li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}
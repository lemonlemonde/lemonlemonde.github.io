import ProjectCard from "./project_card";

export default function MemorySpaceCard() {
    const title = "Memory Space: Chinatown AR"
    const links = [
        ["Website + WebAR Link", "https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1"],
        ["Lab Website", "https://mobilemedia.usc.edu/projects/memory-space-chinatownar/"],
        ["Grand Prize - Time Capsule Challenge (Niantic's 8th Wall)", "https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge"],
    ];

    return (
        <ProjectCard title={title} links={links}>

            <div className="flex md:flex-row flex-col md:space-x-5 space-x-0">
                <div className="flex md:w-1/2 w-full md:justify-start justify-center">
                    <iframe className="aspect-[16/9] w-full" src="https://player.vimeo.com/video/951336252?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=5847" allow="fullscreen" title="Memory Space: Chinatown AR"></iframe>
                </div>
                <div className="flex-row md:w-1/2 w-full p-5 space-y-5">
                    <p>A WebAR experience as part of a temporary exhibition in LA's Union Station. </p>
                    <p>In collaboration with <i>[Metro Art, The Huntington-USC Institute on California and the West, the Chinese Historical Society of Southern California, and the Huntington Library]</i>.</p>
                </div>
            </div>

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
                        <li>Webapp in HTML and JavaScript</li>
                        <li>WebAR experiences with A-Frame, Niantic's 8th Wall modules, and VPS waypoints.</li>
                        <li>InWorld API for conversing with a peacock</li>
                        <li>Places volumetric videos of actors and custom 2D/3D assets on the screen, relative to the positioning of scanned waypoints around LA's Union Station</li>
                    </ul>
                </div>
            </div>
        </ProjectCard>
    );
};
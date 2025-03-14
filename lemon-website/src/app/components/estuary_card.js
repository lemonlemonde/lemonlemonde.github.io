import ProjectCard from "./project_card";

export default function EstuaryCard() {
    const title = "Estuary: Augmented Reality Companion Project"
    const links = [
        ["Website", "https://estuary-ai.github.io/"],
        ["Longer Demo", "https://www.youtube.com/watch?v=m5wO7E0zet8"],
        // ["IVA24 -- Reel (Ver5)", "https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD"],
        ["CHI25 -- Interviews", "https://www.youtube.com/embed/2RlmenU1FG4?si=roB8Im0lVI4beorf"]
    ];


    return (
        <ProjectCard title={title} links={links}>

            <div className="flex md:flex-row flex-col md:space-x-5 space-x-0">
                <div className="flex md:w-1/2 w-full md:justify-start justify-center">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div>
                <div className="flex-row md:w-1/2 w-full p-5 space-y-5">
                    <p>A framework for developing SIAs (Socially Intelligent Agents) with a client-server architecture for low-latency and platform flexibility.</p>
                    <p>Created a demo app on the Apple Vision Pro with an agent (Skelly boy :) ) using semantic understanding (mesh classification),  pathfinding, and dynamic meshing. </p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                {/* ---- screen vids ---- */}
                {/* <div className="flex lg:w-1/2 w-full lg:justify-start justify-center items-center">
                    <iframe className="aspect-[9/16] w-1/2 max-w-[200] pr-5" src="https://www.youtube.com/embed/956OxNlEtiM?si=42KT6SGpsSu-UDRY" allow="fullscreen" title="MEML Chinatown - Peacock Test (dev)" />
                    <iframe className="aspect-[9/16] w-1/2 max-w-[200]" src="https://www.youtube.com/embed/VbYJ1TKyhqo?si=-ETg_DiC7b5yzBDO" allow="fullscreen" title="MEML Chinatown - SangYuen Store Test" />
                </div> */}
                <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                    {/* ---- explanation of screen vids ---- */}
                    <p>Published in IVA'24 and CHI'25 (soon)!</p>
                    {/* <ul className="ml-6 list-disc font-extralight">
                        <li>Webapp in HTML and JavaScript</li>
                        <li>WebAR experiences with A-Frame, Niantic's 8th Wall modules, and VPS waypoints.</li>
                        <li>InWorld API for conversing with a peacock</li>
                        <li>Places volumetric videos of actors and custom 2D/3D assets on the screen, relative to the positioning of scanned waypoints around LA's Union Station</li>
                    </ul> */}
                </div>
            </div>
        </ProjectCard>
    );
};
import ProjectCard from "./project_card";

export default function NasaSuitsCard() {
    const title = "NASA SUITS Challenge 2022-2023"
    const links = [
        ["2023 USC Article", "https://viterbischool.usc.edu/news/2023/06/usc-students-advance-augmented-reality-for-artemis-astronauts/"],
        // ["SENVA 2 Product Reel", "https://www.youtube.com/embed/d4mOWeIuvMI?si=lGyMPzA5D2zBeocA"],
        // ["IVA24 -- Reel (Ver5)", "https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD"],
        ["2022 USC Video", "https://www.youtube.com/watch?v=Wjg_yvT7Jo4"]
    ];

    // <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="">USC Article</a>
    //                     <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="">USC Video</a>
    //                     <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.youtube.com/watch?v=d4mOWeIuvMI">SENVA 2 Product Reel</a>


    return (
        <ProjectCard title={title} links={links}>

            <div className="flex md:flex-row flex-col md:space-x-5 space-x-0">
                <div className="flex md:w-1/2 w-full md:justify-start justify-center">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/d4mOWeIuvMI?si=lGyMPzA5D2zBeocA" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div>
                <div className="flex-row md:w-1/2 w-full p-5 space-y-5">
                    <p>An Augmented Reality application on the Microsoft HoloLens2 to help astronauts with navigation, localization, terrain mapping, biometric and telemetry data, UIA panel instructions in low-light conditions.</p>
                    <p>This was a continuous project across two years, working jointly with students and faculty from University of Arizona (2022) and University of California, Berkeley (2023).</p>
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
                    <p>This project evolved into the Estuary project!</p>
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
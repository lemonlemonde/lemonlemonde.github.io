import Image from "next/image";
import Header from "../components/header";
import InnerLink from "../components/inner_link";

export default function ExpPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ EXP ]
                </h2>
                <ul className="list-disc font-extralight max-w-full space-y-5">
                    <li><b>2024-Current:</b> Data Engineer @ DoD's <InnerLink link={"https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Corona/"} text={"NSWC Corona"}/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Primarily working with natural language processing (NLP) techniques and ML models across various environments (local, cloud, and air-gapped).</li>
                        <li>Everything from preprocessing, profiling, exploring, and generating (synthetic) data to establishing pipelines, environments, and endpoints for use cases. </li>
                        <li>Inevitably contributing to documentation and strategy docs for Navy leadership.</li>
                        <li>Also working on drone swarm reliability analysis ✈ ✈ 📈</li>
                    </ul>


                    <li><b>2024-Current:</b> Student Volunteer @ USC's <InnerLink link={"https://ict.usc.edu/research/labs-groups/virtual-human-therapeutics-lab/"} text="Virtual Human Therapeutics Lab (VHTL)"/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Published to CHI'25, under the guidance of Director Sharon Mozgai!</li>
                    </ul>


                    <li><b>2023-2024:</b> Student Researcher @ USC's <InnerLink link={"https://liralab.usc.edu/"} text="Learning and Interactive Robot Autonomy Lab (LiraLab)"/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Published in CoRL'24, under the guidance of Professor Erdem Bıyık!</li>
                        <li>Published in HRI'24 HIRL Workshop, under the guidance of Professor Erdem Bıyık :)</li>
                    </ul>



                    <li><b>2023-2024:</b> Student Researcher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)"/></li>
                    <p className="font-semibold text-xl">Where You Stand: Chinatown</p>
                    <div className="flex space-x-6">
                        <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1">Website + WebAR link</a>
                        <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://mobilemedia.usc.edu/projects/memory-space-chinatownar/">Lab Website</a>
                        <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge">Grand Prize - Time Capsule Challenge (Niantic's 8th Wall)</a>

                    </div>
                    <div className="flex md:flex-row flex-col">
                        <iframe className="md:w-1/2 w-full" src="https://player.vimeo.com/video/951336252?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=5847" allow="fullscreen" title="Memory Space: Chinatown AR"></iframe>
                        <div className="flex-row md:w-1/2 w-full">
                            <p className="p-5">A WebAR experience as part of a temporary exhibition in LA's Union Station. </p>
                            <p className="p-5">In collaboration with [ Metro Art, The Huntington-USC Institute on California and the West, the Chinese Historical Society of Southern California, and the Huntington Library ].</p>
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col w-full justify-center space-x-5">
                        {/* ---- screen vids ---- */}
                        <div className="flex flex-row justify-center space-x-5 w-full">
                            <iframe className="aspect-[9/16] w-1/2 max-w-[200]" src="https://www.youtube.com/embed/956OxNlEtiM?si=42KT6SGpsSu-UDRY" allow="fullscreen" title="MEML Chinatown - Peacock Test (dev)"/>
                            <iframe className="aspect-[9/16] w-1/2 max-w-[200]" src="https://www.youtube.com/embed/VbYJ1TKyhqo?si=-ETg_DiC7b5yzBDO" allow="fullscreen" title="MEML Chinatown - SangYuen Store Test"/>
                        </div>
                        {/* ---- explanation of screen vids ---- */}
                        <div className="flex flex-col lg:w-2/3 w-auto p-5">
                            <p>A closer look (and a dev view) of two of the experiences: Peacock Alley and Sang Yuen Store.</p>
                            <ul className="ml-6 list-disc font-extralight">
                                <li>Webapp in HTML and JavaScript</li>
                                <li>WebAR experiences with A-Frame, Niantic's 8th Wall components, and VPS waypoints.</li>
                                <li>LLM API for conversing with a peacock</li>
                                <li>Places volumetric videos of actors and custom 2D/3D assets on the screen, relative to the positioning of scanned waypoints around LA's Union Station</li>
                            </ul>
                        </div>

                    </div>

                    <li><b>Summer 2023:</b> Intern @ DoD's NSWC Corona</li>
                    <li><b>2021:</b> Mobile App Developer @ Bridges Health startup</li>
                    <li><b>2021:</b> Research Intern (CURVE Fellowship) @ USC's ICAROS Lab</li>
                </ul>
            </main>

            {/* links to make me look cooler */}
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://github.com/lemonlemonde"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    GitHub
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://scholar.google.com/citations?user=AalqHJ4AAAAJ&hl=en&authuser=1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Google Scholar
                </a>
            </footer>
        </div>
    );
}
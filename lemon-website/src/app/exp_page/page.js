import Image from "next/image";
import Header from "../components/header";
import InnerLink from "../components/inner_link";
import Card from "../components/card";
import ProjectCard from "../components/project_card";
import MemorySpaceCard from "../components/memory_space_card";


export default function ExpPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ EXP ]
                </h2>
                <ul className="list-disc font-extralight max-w-full space-y-5">
                    <li>
                        <b>2024-Current:</b> Data Scientist @ DoD's <InnerLink link={"https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Corona/"} text={"NSWC Corona"}/>
                        <ul className="ml-6 list-disc font-extralight max-w-full">
                            <li className="text-gray-500"><i>Unable to talk about specifics but...</i></li>
                            <li>Primarily working with NLP techniques and ML models across various environments (local, cloud, and air-gapped).</li>
                            <ul className="ml-6 list-disc">
                                <li>Preprocessing, profiling, exploring, and generating (synthetic) data.</li>
                                <li>Establishing pipelines, environments, and endpoints for various use cases.</li>
                                <li>Containerization and deploying to edge-compute environments.</li>
                            </ul>
                            <li>Inevitably contributing to documentation and strategy docs for Navy leadership.</li>
                            <li>Also working on drone swarm reliability analysis ✈ ✈ 📈</li>
                            <li className="text-gray-500"><i>[ Azure ML Studio, OpenShift, Python, SQL, ]</i></li>
                        </ul>
                    </li>


                    <li>
                        <b>2024-Current:</b> Student Volunteer @ USC's <InnerLink link={"https://ict.usc.edu/research/labs-groups/virtual-human-therapeutics-lab/"} text="Virtual Human Therapeutics Lab (VHTL)"/>
                        <ul className="ml-6 list-disc font-extralight max-w-full">
                            <li>Accepted to <a className="text-gray-500 underline" href={"/pub_page"}>CHI'25</a>, under the guidance of Director Sharon Mozgai!</li>
                        </ul>
                    </li>


                    <li><b>2023-2024:</b> Student Researcher @ USC's <InnerLink link={"https://liralab.usc.edu/"} text="Learning and Interactive Robot Autonomy Lab (LiraLab)"/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Published in <a className="text-gray-500 underline" href={"/pub_page"}>CoRL'24</a>, under the guidance of Professor Erdem Bıyık</li>
                        <li>Published in <a className="text-gray-500 underline" href={"/pub_page"}>HRI'24 HIRL Workshop</a>, under the guidance of Professor Erdem Bıyık :)</li>
                    </ul>



                    <li><b>2023-2024:</b> Student Researcher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)"/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Published in IVA'24, under the guidance of Professor Scott Fisher!</li>
                        <li><a className="text-gray-500 underline" href={"/proj_page"}>Memory Space: Chinatown AR project</a></li>
                        {/* <div className="flex space-x-6">
                            <InnerLink link={"https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1"} text={"Website + WebAR link"}/>
                            <InnerLink link={"https://mobilemedia.usc.edu/projects/memory-space-chinatownar/"} text={"Lab Website"}/>
                            <InnerLink link={"https://player.vimeo.com/video/951336252?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=5847"} text={"Vimeo"}/>
                            <InnerLink link={"https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge"} text={"Grand Prize - Time Capsule Challenge (Niantic's 8th Wall)"}/>
                        </div> */}
                    </ul>


                    <li>
                        <b>Summer 2023:</b> Intern @ DoD's NSWC Corona
                        <ul className="ml-6 list-disc font-extralight max-w-full">
                            <li>Published and presented at <a className="text-gray-500 underline" href={"/pub_page"}>RAMS'24</a>, under the guidance of mentor Michael Potter!</li>
                        </ul>
                    </li>

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
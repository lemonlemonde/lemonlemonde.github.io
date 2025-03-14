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
                    <li><b>2024-Current:</b> Data Engineer @ DoD's <InnerLink link={"https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Corona/"} text={"NSWC Corona"}/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Primarily working with natural language processing (NLP) techniques and ML models across various environments (local, cloud, and air-gapped).</li>
                        <li>Everything from preprocessing, profiling, exploring, and generating (synthetic) data to establishing pipelines, environments, and endpoints for use cases. </li>
                        <li>Inevitably contributing to documentation and strategy docs for Navy leadership.</li>
                        <li>Also working on drone swarm reliability analysis ✈ ✈ 📈</li>
                    </ul>


                    <li><b>2024-Current:</b> Student Volunteer @ USC's <InnerLink link={"https://ict.usc.edu/research/labs-groups/virtual-human-therapeutics-lab/"} text="Virtual Human Therapeutics Lab (VHTL)"/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Accepted to CHI'25, under the guidance of Director Sharon Mozgai!</li>
                    </ul>


                    <li><b>2023-2024:</b> Student Researcher @ USC's <InnerLink link={"https://liralab.usc.edu/"} text="Learning and Interactive Robot Autonomy Lab (LiraLab)"/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Published in CoRL'24, under the guidance of Professor Erdem Bıyık!</li>
                        <li>Published in HRI'24 HIRL Workshop, under the guidance of Professor Erdem Bıyık :)</li>
                    </ul>



                    <li><b>2023-2024:</b> Student Researcher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)"/></li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Published in IVA'24, under the guidance of Professor Scott Fisher</li>
                    </ul>

                    <MemorySpaceCard/>


                    <li><b>Summer 2023:</b> Intern @ DoD's NSWC Corona</li>
                    <ul className="ml-6 list-disc font-extralight max-w-full">
                        <li>Published and presented at RAMS'24, under the guidance of mentor Michael Potter!</li>
                    </ul>

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
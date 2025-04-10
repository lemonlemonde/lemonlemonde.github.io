import Image from "next/image";
import Header from "../components/header";
import InnerLink from "../components/inner_link";
import Card from "../components/card";
import ProjectCard from "../components/project_card";
import MemorySpaceCard from "../components/memory_space_card";


export default function EstuaryPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Estuary: AR Companion Project ]
                </h2>

                    <p>with Professor Scott Fisher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)"/> and friends :) </p>
                    <p>also with Director Sharon Mozgai @ USC's <InnerLink link={"https://ict.usc.edu/research/labs-groups/virtual-human-therapeutics-lab/"} text="Virtual Human Therapeutics Lab (VHTL)"/></p>
                    <ul className="ml-6 list-disc font-extralight">
                        <li>Demo app on the Apple Vision Pro to interact with an agent. Skelly boi :) !</li>
                        <li>Semantic understanding (based on mesh classification), pathfinding, and dynamic meshing</li>
                        <li>STT → LLM (local and cloud) → TTS</li>

                        <li>Published in IVA'24</li>
                        <li>Published in CHI'25 (soon)!</li>
                    </ul>

                    <ul className="list-disc font-extralight w-fit space-y-1 pt-2">
                    
                        <li>S. Lin, <b className="text-lime-500 italic font-bold">M. Jun*,</b> B. Rizk*, K. Shieh, S. Fisher, and S. Mozgai, “Optimizing SIA Development: A Case Study in User- Centered Design for Estuary, a Multimodal Socially Interactive Agent Framework,” in ACM Conference on Human Factors in Computing Systems (CHI), 2025.</li>
            
                        <div className="flex-col">
                            <li>S. Lin*, B. Rizk*, <b className="text-lime-500 italic font-bold">M. Jun*,</b> A. Artze, C. Sullivan, S. Mozgai, and S. Fisher, “Estuary: A Framework For Building Multimodal Low-Latency Real-Time Socially Interactive Agents,” in 24th ACM International Conference on Intelligent Virtual Agents (IVA), Dec. 2024.</li>
                            <div className="flex space-x-4">
                            <InnerLink link={"https://arxiv.org/abs/2410.20116"} text={"arXiv"}/>
                            <InnerLink link={"https://estuary-ai.github.io/"} text={"Website"}/>
                            <InnerLink link={"https://www.linkedin.com/posts/usc-institute-for-creative-technologies_iva2024-estuary-applevisionpro-ugcPost-7220104574357966848-nGON?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1KA5YBO_35pRq57OTgAeCA_1D_unPlrlg"} text={"LinkedIn post"}/>
                            </div>
                        </div>
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
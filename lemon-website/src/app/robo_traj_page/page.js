import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

import InnerLink from "../components/inner_link";
import Card from "../components/card";
import ProjectCard from "../components/project_card";

import MemorySpaceCard from "../components/memory_space_card";


export default function RoboTrajPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Trajectory Improvement ]
                </h2>

                    <p>with Professor Erdem Bıyık @ USC's <InnerLink link={"https://liralab.usc.edu/"} text="Learning and Interactive Robot Autonomy Lab (LiraLab)"/> and more :) </p>
                    <ul className="ml-6 list-disc font-extralight">
                        <li>Published in CoRL'24</li>
                        <li>Published in HIRL workshop @ HRI'24</li>
                    </ul>

                    <ul className="list-disc font-extralight w-fit space-y-1 pt-2">
                        <div className="flex-col">
                            <li>Z. Yang, <b className="text-lime-500 italic font-bold">M. Jun,</b> J. Tien, S. J. Russell, A. Dragan, and E. Bıyık,  “Trajectory Improvement and Reward Learning from Comparative Language Feedback,” in 8th Annual Conference on Robot Learning (CoRL), Sep. 2024.</li>
                            <div className="flex space-x-4">
                            <InnerLink link={"https://arxiv.org/abs/2410.06401v1"} text={"arXiv"}/>
                            <InnerLink link={"https://liralab.usc.edu/comparative-language-feedback/"} text={"Website"}/>
                            <InnerLink link={"https://www.youtube.com/watch?v=8xyuCQlTXEg"} text={"Video"}/>
                            </div>
                        </div>
            
                        <div className="flex-col">
                            <li>J. Tien*, Z. Yang*, <b className="text-lime-500 italic font-bold">M. Jun,</b> S. J. Russell, A. Dragan, and E. Bıyık, “Optimizing Robot Behavior Via Comparative Language Feedback,” in 3rd Human Robot Interaction (HRI) Workshop on Human-Interactive Robot Learning (HIRL), 2024.</li>
                            <div className="flex space-x-4">
                            <InnerLink link={"https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"} text={"Paper"}/>
                            <InnerLink link={"https://www.youtube.com/watch?v=W-ZJ1ijPf8U"} text={"Video"}/>
                            </div>
                        </div>
                    </ul>

            </main>

            <Footer/>
        </div>
    );
}
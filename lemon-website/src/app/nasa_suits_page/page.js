import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import InnerLink from "../components/inner_link";
import Card from "../components/card";
import ProjectCard from "../components/project_card";
import MemorySpaceCard from "../components/memory_space_card";


export default function NasaSuitsPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ NASA SUITS 2022/2023 ]
                </h2>
                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                    {/* ---- screen vids ---- */}
                    <div className="flex lg:w-1/2 w-full lg:justify-start justify-center items-center">
                        <embed
                            src="/AEGIS_NASA_SUITS_2023_Retrospective_Paper_.pdf"
                            type="application/pdf"
                            width="100%"
                            height="600px"
                        />
                    </div>
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        {/* ---- explanation of screen vids ---- */}
                        <ul className="ml-6 list-disc font-extralight">
                            <li><b>Short-range navigation:</b> terrain detection</li>
                            <li><b>Long-range navigation:</b></li>
                            <ul className="ml-6 list-disc font-extralight">
                                <li>user is localized with GPS and manual true-north calibration, and displayed on a digital terrain model (DTM)</li>
                                <li>A* path finding, avoiding large altitude changes, breadcrumb path displayed in AR</li>
                            </ul>
                            <li><b>Telemetry:</b> packet networking and data management across Raspberry Pi, HoloLens2, telemetry streams, and internal AI server</li>
                            <li><b>AI Companion:</b> voice-activated and off-cloud AI companion for voice commands</li>
                            <li><b>Computer Vision for UIA egress:</b> Vuforia UIA panel detection and instructions displayed in AR</li>
                            <li className="text-gray-500">To be really honest, a lot things I don't remember anymore, because I was so sleep deprived</li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}
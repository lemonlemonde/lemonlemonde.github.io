import Image from "next/image";
import Header from "../components/header";
import InnerLink from "../components/inner_link";
import Card from "../components/card";
import ProjectCard from "../components/project_card";
import MemorySpaceCard from "../components/memory_space_card";
import Footer from "../components/footer";


export default function HIOTWPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Help Is On The Way: VR Thriller ]
                </h2>

                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        {/* ---- explanation of screen vids ---- */}
                        <p>Environment</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>3D environments in Unreal Engine with SpeedTree</li>
                            <li>SAM2 pipeline experimentation for background-removal of live footage</li>
                        </ul>
                    </div>
                </div>

            </main>

            <Footer/>
        </div>
    );
}
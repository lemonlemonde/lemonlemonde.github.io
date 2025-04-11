import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

import InnerLink from "../components/inner_link";
import Card from "../components/card";
import ProjectCard from "../components/project_card";

import MemorySpaceCard from "../components/memory_space_card";


export default function ToTheCloudsPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ To The Clouds ]
                </h2>

                <p>class project for CTAN 504 </p>

                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        {/* ---- explanation of screen vids ---- */}
                        Meant to be therapeutic, but I saw some people gripping their chairs as the train fell apart...
                        <ul className="ml-6 list-disc font-extralight">
                            <li>All models and textures are not my own</li>
                            <li>Lighting and animation were done by me</li>
                            <li>Some sounds are my own, recorded by the main gates of USC (buses) or fiddling with my guitar while my roommate is out</li>
                        </ul>
                        <p>Lots of improvements to be made!</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>Improve textures and lighting in the train station</li>
                            <li>Better animation of subway car</li>
                            <li>Remove looping while train is moving (I ran out of time to render)</li>
                            <li>Better (more) cloud VDB rendering</li>
                            <li>Move/manipulate skydome</li>
                            <li>More cohesive sound design</li>
                            <li>Make it less scary...?????</li>
                        </ul>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
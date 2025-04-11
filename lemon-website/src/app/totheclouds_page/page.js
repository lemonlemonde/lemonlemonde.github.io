import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

import FormattedLinks from "../components/formatted_links";

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

                {/* body */}
                <div className="flex lg:flex-row flex-col w-full lg:space-x-5">

                    <div className="pe-5 lg:w-1/2 w-full">
                        <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/B9d9BBz_8V8?si=7EHGjIAFcftkoE83" frameorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="To The Clouds"></iframe>
                        <p className="italic font-extralight pt-4">Look around by dragging!</p>
                    </div>

                    <div className="flex flex-col lg:w-1/2 w-full space-y-5 lg:mt-0 mt-5">
                        <p className="text-light-green">360 VR short film for a class project (CTAN 504). Made in Maya. Largely made for viewing on a Quest 2.</p>

                        Meant to be therapeutic, but I saw some people gripping their chairs as the train fell apart...

                        <ul className="ml-6 list-disc font-extralight">
                            <li>All models and textures are not my own</li>
                            <li>Lighting and animation were done by me</li>
                            <li>Some sounds are my own, recorded at USC (buses) or fiddling with my guitar while my roommate is out</li>
                            <li>with the help of Prof. Eric Hanson and Nate Fairchild and many online forums 🥺</li>

                        </ul>
                        
                        <p>Lots of improvements to be made!</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>Improve textures and lighting in the train station</li>
                            <li>Better animation of subway car</li>
                            <li>Remove video looping while train is moving (I ran out of time to render)</li>
                            <li>Better/more cloud VDB rendering</li>
                            <li>Move/manipulate skydome for better immersion</li>
                            <li>More cohesive sound design</li>
                            <li>Make it less scary...??</li>
                        </ul>

                        <li className="text-light-green font-extralight"><i>[ Maya ]</i></li>

                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
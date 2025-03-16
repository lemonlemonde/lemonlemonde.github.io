"use client";

import Header from "../components/header";
import EstuaryCard from "../components/estuary_card";
import NasaSuitsCard from "../components/nasa_suits_card";
import ToTheCloudsCard from "../components/to_the_clouds_card";
import MemorySpaceCard from "../components/memory_space_card";
import InnerLink from "../components/inner_link";

export default function ProjPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">

                {/* proj links */}
                <h2 className="text-2xl font-normal">
                    [ PROJS ]
                </h2>
                <ul className="list-disc font-extralight w-full space-y-14">

                    <li>2023-current: 
                        <ul className="ml-6 list-disc mb-4">
                            <li>with Professor Scott Fisher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)"/></li>
                            <li>with friends :)</li>
                        </ul>
                        <EstuaryCard/>
                    </li>

                    <li>2023-2024
                        <ul className="ml-6 list-disc mb-4">
                            <li>with team @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)"/></li>
                        </ul>
                        <MemorySpaceCard/>
                    </li>

                    <li>2022-2023
                        <ul className="ml-6 list-disc mb-4">
                            <li>with team @ USC, University of Arizona (2022), UC Berkeley (2023)</li>
                        </ul>
                        <NasaSuitsCard/>
                    </li>
                    
                    <li>2023-2024 - Help Is On The Way: USC MFA Thesis VR Film
                        <ul className="ml-6 list-disc mb-4">
                            <li>Helping out a friend with their MFA thesis, a VR film primarily built in Unreal Engine</li>
                            <li>We watch Flora as she walks home from the grocery store, stalked by something sinister. So she calls the police hotline, only to be faced with a possibly more sinister AI...!</li>
                            <li>A little bit here and there</li>
                            <ul className="ml-6 list-disc mb-4">
                                <li>environment foliage</li>
                                <li>Unreal engine shadow rendering debugging</li>
                                <li>experimenting with SAM2 and tiling video frames for a better "greenscreen" for better compositing</li>
                                <li>helped out with one film day (got to hold up an acrylic panel that the actress smashed a pineapple against :D )</li>
                            </ul>
                        </ul>
                    </li>
                    
                    {/* <li>Talk2Friends: Android application</li> */}

                    <li>2022
                        <ul className="ml-6 list-disc mb-4">
                            <li>with the help of many online forums 🥺</li>
                        </ul>
                        <ToTheCloudsCard/>
                    </li>
                </ul>

            </main>

        </div>
    );
}
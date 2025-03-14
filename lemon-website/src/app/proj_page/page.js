"use client";

import Header from "../components/header";
import EstuaryCard from "../components/estuary_card";
import NasaSuitsCard from "../components/nasa_suits_card";
import ToTheCloudsCard from "../components/to_the_clouds_card";

export default function ProjPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">

                hi! you're on the proj page

                {/* proj links */}
                <ul className="list-disc font-extralight w-full space-y-5">
                    <h2 className="text-2xl font-normal">
                        [ PROJS ]
                    </h2>

                    <li>Estuary: Augmented Reality Companion Project</li>
                    <EstuaryCard/>

                    <li>NASA SUITS Challenge 2022-2023</li>
                    <NasaSuitsCard/>

                    <li>Help Is On The Way: USC MFA Thesis VR Film</li>
                    
                    <li>Talk2Friends: Android application</li>

                    <li>To The Clouds: 360 VR short video (CTAN 504)</li>
                    <ToTheCloudsCard/>
                </ul>

            </main>

        </div>
    );
}
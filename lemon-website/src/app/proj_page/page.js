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
                proj page (deprecated)

            </main>

        </div>
    );
}
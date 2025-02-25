import Image from "next/image";
import Header from "../header";

export default function ExpPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
            <Header/>
            <main className="flex flex-col gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <ul className="list-disc font-extralight max-w-full">
                    <h2 className="text-2xl font-normal">
                        [ EXP ]
                    </h2>
                    <li><b>2024-Current:</b> Data Engineer @ DoD's NSWC Corona</li>
                    <li><b>2024-Current:</b> Student Volunteer @ USC's Virtual Human Therapeutics Lab (VHTL)</li>
                    <li><b>2023-2024:</b> Student Researcher @ USC's Learning and Interactive Robot Autonomy Lab (LiraLab)</li>


                    <li><b>2023-2024:</b> Student Researcher @ USC's Mobile and Environmental Media Lab (MEML)</li>
                    <div className="flex space-x-6">
                        <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1">Website + WebAR link</a>
                        <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge">1st place Time Capsule Challenge (Niantic's 8th Wall)</a>
                    </div>

                    <li><b>Summer 2023:</b> Intern @ DoD's NSWC Corona</li>
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
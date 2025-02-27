"use client";

import Header from "../components/header";

export default function ProjPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">

                hi! you're on the proj page

                {/* proj links */}
                <ul className="list-disc font-extralight w-full">
                    <h2 className="text-2xl font-normal">
                        [ PROJS ]
                    </h2>

                    <div className="flex-col">
                        <li>Estuary: Augmented Reality Companion Project</li>
                        <div className="flex space-x-4">
                            <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://estuary-ai.github.io/">Website</a>
                            {/* longer demo: https://www.youtube.com/watch?v=m5wO7E0zet8 */}
                            {/* <video className="w-60" src="/IVA24_Reel_Ver5.mp4" title="IVA24"></video> */}
                            <iframe className="w-60" src="https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD" allow="fullscreen" title="IVA24 -- Reel (Ver5)"/>
                            <iframe className="w-60" src="https://www.youtube.com/embed/2RlmenU1FG4?si=roB8Im0lVI4beorf" allow="fullscreen" title="CHI25 -- Interviews"/>
                        </div>
                    </div>


                    <li>NASA SUITS Challenge 2022-2023</li>
                    <div className="flex space-x-6">

                        <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://viterbischool.usc.edu/news/2023/06/usc-students-advance-augmented-reality-for-artemis-astronauts/">USC Article</a>
                        <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.youtube.com/watch?v=Wjg_yvT7Jo4">USC Video</a>
                        <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.youtube.com/watch?v=d4mOWeIuvMI">SENVA 2 Product Reel</a>
                    </div>

                    <li>Help Is On The Way: USC MFA Thesis VR Film</li>
                    <li>Talk2Friends: Android application</li>
                    <li>To The Clouds: 360 VR short video (CTAN 504)</li>
                    <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4 max-w-fit" href="https://youtu.be/B9d9BBz_8V8">YouTube</a>
                </ul>

            </main>

        </div>
    );
}
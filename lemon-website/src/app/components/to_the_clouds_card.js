import ProjectCard from "./project_card";

export default function ToTheCloudsCard() {
    const title = "To The Clouds: 360 VR short video (CTAN 504)"
    const links = [
        // ["2023 USC Article", "https://viterbischool.usc.edu/news/2023/06/usc-students-advance-augmented-reality-for-artemis-astronauts/"],
        // ["SENVA 2 Product Reel", "https://www.youtube.com/embed/d4mOWeIuvMI?si=lGyMPzA5D2zBeocA"],
        // ["IVA24 -- Reel (Ver5)", "https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD"],
        // ["2022 USC Video", "https://www.youtube.com/watch?v=Wjg_yvT7Jo4"]
    ];

    // <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="">USC Article</a>
    //                     <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="">USC Video</a>
    //                     <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.youtube.com/watch?v=d4mOWeIuvMI">SENVA 2 Product Reel</a>


    return (
        <ProjectCard title={title} links={links}>

            <div className="flex md:flex-row flex-col md:space-x-5 space-x-0">
                <div className="flex md:w-1/2 w-full md:justify-start justify-center">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/B9d9BBz_8V8?si=7EHGjIAFcftkoE83" allow="fullscreen; accelerometer; gyroscope; web-share" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div>
                <div className="flex-row md:w-1/2 w-full p-5 space-y-5">
                    <p>Class project for CTAN 504. Made in Maya. All models and textures are not my own, but lighting and animation were done by me. Some sounds are my own, recorded by the main gates of USC (buses) or fiddling with my guitar while my roommate is out.</p>
                    <p>Largely made for viewing on a Quest 2.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                {/* ---- screen vids ---- */}
                {/* <div className="flex lg:w-1/2 w-full lg:justify-start justify-center items-center">
                    <iframe className="aspect-[9/16] w-1/2 max-w-[200] pr-5" src="https://www.youtube.com/embed/956OxNlEtiM?si=42KT6SGpsSu-UDRY" allow="fullscreen" title="MEML Chinatown - Peacock Test (dev)" />
                    <iframe className="aspect-[9/16] w-1/2 max-w-[200]" src="https://www.youtube.com/embed/VbYJ1TKyhqo?si=-ETg_DiC7b5yzBDO" allow="fullscreen" title="MEML Chinatown - SangYuen Store Test" />
                </div> */}
                <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                    {/* ---- explanation of screen vids ---- */}
                    <p>Lots of improvements to be made!</p>
                    <ul className="ml-6 list-disc font-extralight">
                        <li>Improve textures and lighting in the train station</li>
                        <li>Better animation of subway car</li>
                        <li>Remove looping while train is moving (I ran out of time to render)</li>
                        <li>Better (more) cloud VDB rendering</li>
                        <li>Move/manipulate skydome</li>
                        <li>More coheisve sound design</li>
                    </ul>
                </div>
            </div>
        </ProjectCard>
    );
};
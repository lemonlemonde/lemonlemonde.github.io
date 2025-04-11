import HoverProjectCard from "./hover_project_card";
import ProjectCard from "./project_card";

export default function ToTheCloudsCard() {
    const title = "To The Clouds"
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
        <HoverProjectCard title={title} links={links} link={"totheclouds_page"}>

            <div className="flex flex-col">
                <div className="flex w-full md:justify-start justify-center px-20">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/B9d9BBz_8V8?si=7EHGjIAFcftkoE83" allow="fullscreen; accelerometer; gyroscope; web-share" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div>
                <div className="flex-row w-full p-5 space-y-5">
                    <p>360 VR short video for class (CTAN 504). </p>
                    <p>Made in Maya. Largely made for viewing on a Quest 2.</p>
                    
                </div>
            </div>

        </HoverProjectCard>
    );
};
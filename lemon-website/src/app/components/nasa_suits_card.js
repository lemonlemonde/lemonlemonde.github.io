import HoverProjectCard from "./hover_project_card";

export default function NasaSuitsCard() {
    const title = "NASA SUITS Challenge 2022-2023"
    const links = [
        ["2023 USC Article", "https://viterbischool.usc.edu/news/2023/06/usc-students-advance-augmented-reality-for-artemis-astronauts/"],
        // ["SENVA 2 Product Reel", "https://www.youtube.com/embed/d4mOWeIuvMI?si=lGyMPzA5D2zBeocA"],
        // ["IVA24 -- Reel (Ver5)", "https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD"],
        ["2022 USC Video", "https://www.youtube.com/watch?v=Wjg_yvT7Jo4"]
    ];

    // <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="">USC Article</a>
    //                     <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="">USC Video</a>
    //                     <a className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.youtube.com/watch?v=d4mOWeIuvMI">SENVA 2 Product Reel</a>


    return (
        <HoverProjectCard title={title} links={links} link={"nasa_suits_page"}>

            <div className="flex md:flex-row flex-col md:space-x-5 space-x-0">
                <div className="flex md:w-1/2 w-full md:justify-start justify-center">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/d4mOWeIuvMI?si=lGyMPzA5D2zBeocA" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div>
                <div className="flex-row md:w-1/2 w-full p-5 space-y-5">
                    <p>An Augmented Reality application on the Microsoft HoloLens2 (with MRTK2) to help astronauts with navigation, localization, terrain mapping, biometric and telemetry data, UIA panel instructions in low-light conditions.</p>
                    <p>This project evolved into the Estuary project!</p>
                </div>
            </div>
        </HoverProjectCard>
    );
};
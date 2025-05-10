
import Header from "../components/header";
import Footer from "../components/footer";
import FormattedLinks from "../components/formatted_links";


export default function NasaSuitsPage() {
    const links = [
        ["2023 USC Article", "https://viterbischool.usc.edu/news/2023/06/usc-students-advance-augmented-reality-for-artemis-astronauts/"],
        ["2022 USC Video", "https://www.youtube.com/watch?v=Wjg_yvT7Jo4"]
    ];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />


            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ NASA SUITS Challenge 2022-2023 ]
                </h2>
                <FormattedLinks links={links}/>

                {/* body */}
                <div className="flex lg:flex-row flex-col lg:space-x-5 space-x-0">
                    {/* ---- left side ---- */}
                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/d4mOWeIuvMI?si=lGyMPzA5D2zBeocA" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                        <embed
                            src="/AEGIS_NASA_SUITS_2023_Retrospective_Paper_.pdf"
                            type="application/pdf"
                            width="100%"
                            height="600px"
                        />
                    </div>

                    {/* right side */}
                    <div className="flex-row lg:w-1/2 w-full space-y-5 lg:mt-0 mt-5">
                        {/* vid */}
                        <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/KTqVF-KyONM?si=p0XFqWonPuJh8REk" allow="fullscreen" title="NASA SUITS Challenge USC Berkeley Team Presentation at Johnson Space Center, 5/23/2023"></iframe>
                        
                        {/* ---- description ---- */}
                        <p className="text-light-green">An Augmented Reality application on the Microsoft HoloLens2 (with MRTK2) to help astronauts with navigation, localization, terrain mapping, biometric and telemetry data, UIA panel instructions in low-light conditions.</p>
                        <p>This project evolved into the Estuary project!</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li><b>Short-range navigation:</b> terrain detection</li>
                            <li><b>Long-range navigation:</b></li>
                            <ul className="ml-6 list-disc font-extralight">
                                <li>user is localized with GPS and manual true-north calibration, and displayed on a digital terrain model (DTM)</li>
                                <li>A* path finding, avoiding large altitude changes, breadcrumb path displayed in AR</li>
                            </ul>
                            <li><b>Telemetry:</b> packet networking and data management across Raspberry Pi, HoloLens2, telemetry streams, and internal AI server</li>
                            <li><b>AI Companion:</b> voice-activated and off-cloud AI companion for voice commands</li>
                            <li><b>Computer Vision for UIA egress:</b> Vuforia UIA panel detection and instructions displayed in AR</li>

                            <br></br>
                            
                            <li className="text-light-green">[ Unity, MRTK2, Vuforia, telemetry, SocketIO, sleep deprivation ]</li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}
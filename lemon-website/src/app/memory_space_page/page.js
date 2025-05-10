
import Header from "../components/header";
import Footer from "../components/footer";
import InnerLink from "../components/inner_link";
import FormattedLinks from "../components/formatted_links";


export default function MemorySpacePage() {
    const links = [
        ["Website/WebAR Link", "https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1"],
        ["Lab Website", "https://mobilemedia.usc.edu/projects/memory-space-chinatownar/"],
        ["Grand Prize Article", "https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge"],
    ];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />


            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Memory Space: Chinatown AR ]
                </h2>

                <FormattedLinks links={links} />


                {/* body */}
                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                    {/* ---- screen vids ---- */}
                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <iframe className="aspect-[16/9] w-full" src="https://player.vimeo.com/video/951336252?badge=0&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;autopause=0&amp;player_id=memory_space&amp;app_id=58479" allow="autoplay; fullscreen" title="Memory Space: Chinatown AR"></iframe>
                        <div className="flex w-full lg:justify-between justify-center lg:space-x-0 space-x-5">
                            <iframe className="aspect-[9/16] w-1/2 max-w-[200]" src="https://www.youtube.com/embed/956OxNlEtiM?si=42KT6SGpsSu-UDRY" allow="fullscreen" title="MEML Chinatown - Peacock Test (dev)" />
                            <iframe className="aspect-[9/16] w-1/2 max-w-[200]" src="https://www.youtube.com/embed/VbYJ1TKyhqo?si=-ETg_DiC7b5yzBDO" allow="fullscreen" title="MEML Chinatown - SangYuen Store Test" />
                        </div>
                    </div>


                    {/* ---- description ---- */}
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        <p className="text-light-green">A geolocated WebAR experience on Niantic's 8th Wall as part of a temporary exhibition in LA's Union Station to showcase the history of old Chinatown.</p>
                        <p>A closer look (and a dev view) of two of the experiences: Peacock Alley and Sang Yuen Store.</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>Webapp in HTML, CSS, JavaScript (on Niantic's 8th Wall)</li>
                            <li>WebAR experiences with A-Frame, 8th Wall modules, and geolocated VPS waypoints</li>
                            <li>Placed volumetric videos of actors and custom 2D/3D assets on the screen, relative to the positioning of scanned waypoints around LA's Union Station</li>
                            <li>Converse with a peacock, powered by an LLM through InWorld's API</li>
                            <li>Implemented event triggering for user events and asset animations</li>

                            <br></br>
                            
                            <li className="text-light-green"><i>[ Javascript, HTML, CSS, A-Frame, Niantic 8th Wall, Blender, Maya ]</i></li>
                        </ul>
                        
                        <p className="pt-10 font-extralight">with Professor Scott Fisher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)" /> and friends :) </p>
                        <p className="font-extralight">In collaboration with <i>[Metro Art, The Huntington-USC Institute on California and the West, the Chinese Historical Society of Southern California, and the Huntington Library]</i>.</p>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
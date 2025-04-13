import HoverProjectCard from "./hover_project_card";

export default function MemorySpaceCard() {
    const title = "Memory Space: Chinatown AR"
    const links = [
        ["Website/WebAR Link", "https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1"],
        ["Lab Website", "https://mobilemedia.usc.edu/projects/memory-space-chinatownar/"],
        ["Grand Prize Article", "https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge"],
    ];

    return (
        <HoverProjectCard title={title} links={links} link={"/memory_space_page"}>

            <div className="flex flex-col md:space-x-5 space-x-0">
                <div className="flex w-full md:justify-start justify-center px-10">
                    <iframe className="aspect-[16/9] w-full" src="https://player.vimeo.com/video/951336252?badge=0&amp;autopause=0&amp;player_id=memory_space_card&amp;app_id=5847" allow="fullscreen" title="Memory Space: Chinatown AR"></iframe>
                </div>
                <div className="flex-row w-full p-5 space-y-5">
                    <p>A geolocated WebAR experience on Niantic's 8th Wall as part of a temporary exhibition in LA's Union Station.</p>
                </div>
            </div>


        </HoverProjectCard>
    );
};

import Header from "../components/header";
import InnerLink from "../components/inner_link";
import Footer from "../components/footer";

import FormattedLinks from "../components/formatted_links";


export default function EstuaryPage() {
    const links = [
        ["Website", "https://estuary-ai.github.io/"],
        ["Longer Demo", "https://www.youtube.com/watch?v=m5wO7E0zet8"],
        // ["IVA24 -- Reel (Ver5)", "https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD"],
        ["CHI25 -- Interviews", "https://youtu.be/2RlmenU1FG4?feature=shared"]
    ];


    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Estuary: AR Companion Project ]
                </h2>

                <FormattedLinks links={links} />

                {/* body */}
                <div className="flex lg:flex-row flex-col w-full lg:space-x-5 space-x-0 lg:space-y-0 space-y-5">

                    <div className="pe-5 lg:w-1/2 w-full">
                        {/* <iframe className="aspect-video" src="https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe> */}
                        <iframe className="aspect-video w-full" src="https://player.vimeo.com/video/1007756913?badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Estuary: A Multimodal Framework for Low-Latency Realtime Socially Interactive Agents (IVA24_Reel_Ver5)"></iframe>
                        <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/2RlmenU1FG4?si=gOE98HadVidwUJb2" frameorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="CHI25 -- Interviews"></iframe>
                    </div>

                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <p className="text-light-green">Framework for developing Socially Interactive Agents (SIAs) with client-server architecture, demoed on Quest 3 and Apple Vision Pro.</p>

                        <ul className="ml-6 list-disc font-extralight">
                            <li>Demo app on the Apple Vision Pro to interact with an agent -- Skelly boi :) !</li>
                            <li>Semantic understanding (based on mesh classification), pathfinding, and dynamic meshing</li>
                            <li>Modular design and client-server architecture for adaptability + lower latency </li>
                            <li>STT → LLM (local and cloud) → TTS</li>

                            <li>Published in IVA'24</li>
                            <li>Published in CHI'25 (soon)!</li>

                            <li className="text-light-green"><i>[ Unity, AR Foundation, Polyspatial ]</i></li>
                        </ul>

                        <p className="font-extralight pt-10">with Professor Scott Fisher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)" /> </p>
                        <p className="font-extralight">also with Director Sharon Mozgai @ USC's <InnerLink link={"https://ict.usc.edu/research/labs-groups/virtual-human-therapeutics-lab/"} text="Virtual Human Therapeutics Lab (VHTL)" /></p>
                    </div>
                </div>

                {/* papers */}
                <ul className="list-disc font-extralight w-fit space-y-1 pt-20">
                    <li>S. Lin, <b className="text-light-green italic font-bold">M. Jun*,</b> B. Rizk*, K. Shieh, S. Fisher, and S. Mozgai, “Optimizing SIA Development: A Case Study in User- Centered Design for Estuary, a Multimodal Socially Interactive Agent Framework,” in ACM Conference on Human Factors in Computing Systems (CHI), 2025.</li>

                    <div className="flex-col">
                        <li>S. Lin*, B. Rizk*, <b className="text-light-green italic font-bold">M. Jun*,</b> A. Artze, C. Sullivan, S. Mozgai, and S. Fisher, “Estuary: A Framework For Building Multimodal Low-Latency Real-Time Socially Interactive Agents,” in 24th ACM International Conference on Intelligent Virtual Agents (IVA), Dec. 2024.</li>
                        <div className="flex space-x-4">
                            <InnerLink link={"https://arxiv.org/abs/2410.20116"} text={"arXiv"} />
                            <InnerLink link={"https://estuary-ai.github.io/"} text={"Website"} />
                            <InnerLink link={"https://www.linkedin.com/posts/usc-institute-for-creative-technologies_iva2024-estuary-applevisionpro-ugcPost-7220104574357966848-nGON?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1KA5YBO_35pRq57OTgAeCA_1D_unPlrlg"} text={"LinkedIn post"} />
                        </div>
                    </div>
                </ul>

            </main>

            <Footer />
        </div>
    );
}
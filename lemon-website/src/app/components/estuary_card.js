import ProjectCard from "./project_card";

export default function EstuaryCard() {
    const title = "Estuary: Augmented Reality Companion Project"
    const links = [
        ["Website", "https://estuary-ai.github.io/"],
        ["Longer Demo", "https://www.youtube.com/watch?v=m5wO7E0zet8"],
        // ["IVA24 -- Reel (Ver5)", "https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD"],
        ["CHI25 -- Interviews", "https://youtu.be/2RlmenU1FG4?feature=shared"]
    ];


    return (
        <ProjectCard title={title} links={links}>

            <div className="flex md:flex-row flex-col md:space-x-5 space-x-0">
                <div className="flex md:w-1/2 w-full md:justify-start justify-center">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div>
                <div className="flex-row md:w-1/2 w-full p-5 space-y-5">
                    <p>A framework for developing SIAs (Socially Intelligent Agents) with a client-server architecture for low-latency and platform flexibility.</p>
                    <ul className="ml-6 list-disc font-extralight">
                        <li>Demo app on the Apple Vision Pro to interact with an agent. Skelly boi :) !</li>
                        <li>Semantic understanding (based on mesh classification), pathfinding, and dynamic meshing</li>
                        <li>STT → LLM (local and cloud) → TTS</li>

                        <li>Published in IVA'24</li>
                        <li>Published in CHI'25 (soon)!</li>
                    </ul>
                </div>
            </div>

        </ProjectCard>
    );
};
import HoverProjectCard from "./hover_project_card";

export default function CringeCanonCard() {
    const title = "Cringe Canon"
    const links = [
        ["GitHub", "https://github.com/lemonlemonde/cringe-canon"],
        ["Hackathon", "https://www.sprint.dev/projects/d6a91375-f6b5-4637-b149-eb9a07634730"]
        // https://www.youtube.com/watch?v=BPxekdd8YyU
    ];


    return (
        <HoverProjectCard title={title} links={links} link={"/cringe_canon_page"}>

            <div className="flex flex-col">
                <div className="flex w-full md:justify-start justify-center px-20">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/BPxekdd8YyU?si=t3D3sTv77yzYAsND" allow="fullscreen" title="Cringe Canon Demo"></iframe>
                </div>
                {/* <p className="flex w-full justify-center italic">[ no video yet ]</p> */}
                <div className="flex-row w-full p-5 space-y-5">
                    <p>Takes your cringe, makes it canon.</p>
                    <p>Upload pictures of your original character (OC) art and generate "canon" character profiles and images. Chat with your character while sending camera snapshots of your world!</p>
                </div>
            </div>

        </HoverProjectCard>
    );
};
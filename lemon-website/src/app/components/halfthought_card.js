import HoverProjectCard from "./hover_project_card";

export default function HalfthoughtCard() {
    const title = "Halfthought"
    const links = [
        ["Website", "https://halfthought.app/welcome"],
    ];

    return (
        <HoverProjectCard title={title} links={links} link={"/halfthought_page"}>

            <div className="flex flex-col">
                <p className="flex w-full justify-center italic">[ media coming soon ]</p>
                <div className="flex-row w-full p-5 space-y-5">
                    <p>A public notes app with discovery: publish short writing without needing to build an audience or brand.</p>
                    <p>iOS-first app with a server-rendered web reader.</p>
                </div>
            </div>

        </HoverProjectCard>
    );
};

import HoverProjectCard from "./hover_project_card";

export default function SidetrekdCard() {
    const title = "Sidetrekd"
    const links = [
        ["Website", "https://sidetrekd.app"],
    ];

    return (
        <HoverProjectCard title={title} links={links} link={"/sidetrekd_page"}>

            <div className="flex flex-col">
                <p className="flex w-full justify-center italic">[ media coming soon ]</p>
                <div className="flex-row w-full p-5 space-y-5">
                    <p>Keep track of sidequest ideas, share them with friends, and journal the ones you actually did.</p>
                    <p>Cross-platform app (iOS, Android, web) from one Expo codebase.</p>
                </div>
            </div>

        </HoverProjectCard>
    );
};

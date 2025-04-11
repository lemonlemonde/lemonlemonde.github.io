import HoverProjectCard from "./hover_project_card";

export default function RoboTrajCard() {
    const title = "Trajectory Improvement with Comparative Natural Language Feedback"
    const links = [
        ["Website", "https://liralab.usc.edu/comparative-language-feedback/"],
        ["CoRL'24 Paper", "https://arxiv.org/abs/2410.06401v1"],
        ["HIRL'24 Paper", "https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"],
    ];

    return (
        <HoverProjectCard title={title} links={links} link={"robo_traj_page"}>

            <div className="flex md:flex-row flex-col md:space-x-5 space-x-0">
                <div className="flex md:w-1/2 w-full md:justify-start justify-center">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/8xyuCQlTXEg?si=RkNrjyhTDfMsxbhh" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div>
                <div className="flex-row md:w-1/2 w-full p-5 space-y-5">
                    <p>Using comparative feedback in natural language to improve a robot arm (WidowX) trajectory.</p>
                </div>
            </div>
        </HoverProjectCard>
    );
};
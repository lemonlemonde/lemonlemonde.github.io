
import ProjectShell, { ProjectTitle } from "../redesign/project_shell";

import FormattedLinks from "../components/formatted_links";
import InnerLink from "../components/inner_link";
import { pageMetadata } from "../page_metadata";


export const metadata = pageMetadata("Trajectory Improvement with Comparative Language Feedback", "Research on improving robot arm trajectories from comparative natural-language feedback (CoRL 2024).");

export default function RoboTrajPage() {
    const links = [
        ["Website", "https://liralab.usc.edu/comparative-language-feedback/"],
        ["CoRL'24 Paper", "https://arxiv.org/abs/2410.06401v1"],
        ["HIRL'24 Paper", "https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"],
    ];

    return (
        <ProjectShell>
            <main className="t-proj flex flex-col gap-8 pt-6 w-full">
                <ProjectTitle>Trajectory Improvement with Comparative Natural Language Feedback</ProjectTitle>

                <FormattedLinks links={links} />

                {/* body */}
                <div className="flex lg:flex-row flex-col w-full lg:space-x-5 space-y-5">

                    <div className="pe-5 lg:w-1/2 w-full space-y-5">
                        <iframe loading="lazy" className="aspect-video w-full" src="https://www.youtube.com/embed/8xyuCQlTXEg?si=RkNrjyhTDfMsxbhh" frameorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="?"></iframe>
                        <div className="flex w-full justify-between">
                            <video className="max-w-xs w-1/2 h-auto" controls autoPlay muted loop playsInline>
                                <source src="/blurred_1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <video className="max-w-xs w-1/2 h-auto" controls autoPlay muted loop playsInline>
                                <source src="/blurred_2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <p className="text-light-green">Using comparative feedback in natural language to improve a robot arm (WidowX) trajectory in a task with various user preferences.</p>

                        <ul className="ml-6 list-disc font-extralight">
                            <li><b>1) [ improving trajectories ] user study </b></li>
                            <ul className="ml-6 list-disc font-extralight">
                                <li>Users observe a suboptimal trajectory and give language feedback to iteratively improve the trajectory.</li>
                            </ul>
                            <li><b>2) [ preference learning ] user study</b></li>
                            <ul className="ml-6 list-disc font-extralight">
                                <li>Users give feedback (comparison method VS comparative language method) on random trajectories to learn the preference (reward function) of the user.</li>
                            </ul>
                            <li>Published in CoRL'24</li>
                            <li>Published in HIRL workshop @ HRI'24</li>

                            <br></br>
                            
                            <li className="text-light-green"><i>[ Transformers, PyTorch, Robosuite, Meta-World ]</i></li>
                        </ul>

                        <p className="font-extralight pt-10">with Professor Erdem Bıyık @ USC's <InnerLink link={"https://liralab.usc.edu/"} text="Learning and Interactive Robot Autonomy Lab (LiraLab)" /> and more :) </p>
                    </div>
                </div>
                <ul className="list-disc font-extralight w-fit space-y-1 pt-20">
                            <div className="flex-col">
                                <li>Z. Yang, <b className="text-light-green italic font-bold">M. Jun,</b> J. Tien, S. J. Russell, A. Dragan, and E. Bıyık,  “Trajectory Improvement and Reward Learning from Comparative Language Feedback,” in 8th Annual Conference on Robot Learning (CoRL), Sep. 2024.</li>
                                <div className="flex space-x-4">
                                    <InnerLink link={"https://arxiv.org/abs/2410.06401v1"} text={"arXiv"} />
                                    <InnerLink link={"https://liralab.usc.edu/comparative-language-feedback/"} text={"Website"} />
                                    <InnerLink link={"https://www.youtube.com/watch?v=8xyuCQlTXEg"} text={"Video"} />
                                </div>
                            </div>

                            <div className="flex-col">
                                <li>J. Tien*, Z. Yang*, <b className="text-light-green italic font-bold">M. Jun,</b> S. J. Russell, A. Dragan, and E. Bıyık, “Optimizing Robot Behavior Via Comparative Language Feedback,” in 3rd Human Robot Interaction (HRI) Workshop on Human-Interactive Robot Learning (HIRL), 2024.</li>
                                <div className="flex space-x-4">
                                    <InnerLink link={"https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"} text={"Paper"} />
                                    <InnerLink link={"https://www.youtube.com/watch?v=W-ZJ1ijPf8U"} text={"Video"} />
                                </div>
                            </div>
                        </ul>

            </main>
        </ProjectShell>
    );
}
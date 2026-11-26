
import InnerLink from "../components/inner_link";
import ProjectShell, { ProjectTitle } from "../redesign/project_shell";

import FormattedLinks from "../components/formatted_links";
import { pageMetadata } from "../page_metadata";


export const metadata = pageMetadata("Cringe Canon", "Hackathon project: a web app that turns original-character art into canon character profiles and images you can chat with.");

export default function CringeCanonPage() {
    const links = [
        ["GitHub", "https://github.com/lemonlemonde/cringe-canon"],
        ["Hackathon", "https://www.sprint.dev/projects/d6a91375-f6b5-4637-b149-eb9a07634730"]
    ];


    return (
        <ProjectShell>
            <main className="t-proj flex flex-col gap-8 pt-6 w-full">
                <ProjectTitle>Cringe Canon</ProjectTitle>

                <FormattedLinks links={links} />

                {/* body */}
                <div className="flex lg:flex-row flex-col w-full lg:space-x-5 space-x-0 lg:space-y-0 space-y-5">

                    <div className="pe-5 lg:w-1/2 w-full">
                        <iframe loading="lazy" className="aspect-video w-full" src="https://www.youtube.com/embed/BPxekdd8YyU?si=t3D3sTv77yzYAsND" frameorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Cringe Canon Demo"></iframe>
                    </div>

                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <p className="text-light-green">Fun hackathon project -- website for generating original character (OC) profiles and art, and chatting with them.</p>

                        <ul className="ml-6 list-disc font-extralight">
                            <li>Upload your own OC drawings alongside your description and worldbuilding.</li>
                            <li>Generate a character profile!</li>
                            <li>Generate an image!</li>
                            <li>Start your camera and send snapshots to accompany chats with the LLM!</li>

                            <br></br>

                            <li className="text-light-green"><i>[ Flask, NextJS, TailwindCSS, Nebius AI Studio ]</i></li>
                        </ul>
                        <p>Won the Creative Vision award at Visionary Hackathon, sponsored by Nebius AI Studio, hosted by Sprint.dev</p>
                    </div>
                </div>



            </main>
        </ProjectShell>
    );
}
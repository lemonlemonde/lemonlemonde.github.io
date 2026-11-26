
import ProjectShell, { ProjectTitle } from "../redesign/project_shell";
import { pageMetadata } from "../page_metadata";


export const metadata = pageMetadata("To The Clouds", "360° VR short film made in Maya for viewing on Quest 2.");

export default function ToTheCloudsPage() {
    return (
        <ProjectShell>
            <main className="t-proj flex flex-col gap-8 pt-6 w-full">
                <ProjectTitle>To The Clouds</ProjectTitle>

                {/* body */}
                <div className="flex lg:flex-row flex-col w-full lg:space-x-5">

                    <div className="pe-5 lg:w-1/2 w-full">
                        <iframe loading="lazy" className="aspect-video w-full" src="https://www.youtube.com/embed/B9d9BBz_8V8?si=7EHGjIAFcftkoE83" frameorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="To The Clouds"></iframe>
                        <p className="italic font-extralight pt-4">Look around by dragging!</p>
                    </div>

                    <div className="flex flex-col lg:w-1/2 w-full space-y-5 lg:mt-0 mt-5">
                        <p className="text-light-green">360 VR short film for a class project (CTAN 504). Made in Maya. Largely made for viewing on a Quest 2.</p>

                        Meant to be therapeutic, but I saw some people gripping their chairs as the train fell apart...

                        <ul className="ml-6 list-disc font-extralight">
                            <li>All models and textures are not my own</li>
                            <li>Lighting and animation were done by me</li>
                            <li>Some sounds are my own, recorded at USC (buses) or fiddling with my guitar while my roommate is out</li>
                            <li>with the help of Prof. Eric Hanson and Nate Fairchild and many online forums 🥺</li>

                            <li>Heavy inspiration from Spirited Away. Also I just like trains. Also Omniscient Reader's Viewpoint (webnovel/webtoon/bad live-action)started in a train. Also just a huge fan of public transportation falling apart beneath my feet. It makes me feel alive.</li>
                        </ul>
                        
                        <p>Lots of improvements to be made!</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>Improve textures and lighting in the train station</li>
                            <li>Better animation of subway car</li>
                            <li>Remove video looping while train is moving (I ran out of time to render)</li>
                            <li>Better/more cloud VDB rendering</li>
                            <li>Move/manipulate skydome for better immersion</li>
                            <li>More cohesive sound design</li>
                            <li>Make it less scary...??</li>
                        </ul>

                        <li className="text-light-green font-extralight"><i>[ Maya ]</i></li>

                    </div>
                </div>

            </main>
        </ProjectShell>
    );
}
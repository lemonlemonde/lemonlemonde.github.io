import ProjectCard from "./project_card";
import HoverProjectCard from "./hover_project_card";
import InnerLink from "../components/inner_link";

export default function HIOTWCard() {
    const title = "Help Is On The Way: VR Thriller"
    const links = [
        // ["Website", "https://estuary-ai.github.io/"],
    ];


    return (
        <HoverProjectCard title={title} links={links} link={"/hiotw_page"}>

            <div className="flex flex-col">
                {/* <div className="flex w-full md:justify-start justify-center px-20">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div> */}
                <div className="flex-row w-full p-5 space-y-5">
                    <p>VR film with 6DoF, built in Unreal Engine with live-action footage.</p>
                    <p>"A woman walking alone at night gets the feeling she’s being watched.  What she finds on her trail is stranger than one would imagine."</p>
                </div>
            </div>

        </HoverProjectCard>
    );
};
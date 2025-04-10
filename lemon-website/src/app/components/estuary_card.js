import ProjectCard from "./project_card";
import HoverProjectCard from "./hover_project_card";
import InnerLink from "../components/inner_link";

export default function EstuaryCard() {
    const title = "Estuary: AR Companion Project"
    const links = [
        ["Website", "https://estuary-ai.github.io/"],
        ["Longer Demo", "https://www.youtube.com/watch?v=m5wO7E0zet8"],
        // ["IVA24 -- Reel (Ver5)", "https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD"],
        ["CHI25 -- Interviews", "https://youtu.be/2RlmenU1FG4?feature=shared"]
    ];


    return (
        <HoverProjectCard title={title} links={links} link={"/estuary_page"}>

            <div className="flex flex-col">
                <div className="flex w-full md:justify-start justify-center px-20">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/GzsNL7DX1Fc?si=ypBoQ8q4HIW4zXUD" allow="fullscreen" title="Estuary: IVA24 Reel (Ver5)"></iframe>
                </div>
                <div className="flex-row w-full p-5 space-y-5">
                    <p>Framework with client-server architecture on Quest 3 and Apple Vision Pro</p>
                </div>
            </div>

        </HoverProjectCard>
    );
};
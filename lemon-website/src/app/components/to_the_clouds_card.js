import HoverProjectCard from "./hover_project_card";
import ProjectCard from "./project_card";

export default function ToTheCloudsCard() {
    const title = "To The Clouds"
    const links = [];


    return (
        <HoverProjectCard title={title} links={links} link={"totheclouds_page"}>

            <div className="flex flex-col">
                <div className="flex w-full md:justify-start justify-center px-10">
                    <iframe className="aspect-[16/9] w-full" src="https://www.youtube.com/embed/B9d9BBz_8V8?si=7EHGjIAFcftkoE83" allow="fullscreen; accelerometer; gyroscope; web-share; autoplay" title="To The Clouds"></iframe>
                </div>
                <div className="flex-row w-full p-5 space-y-5">
                    <p>360 VR short film for class (CTAN 504). </p>
                    <p>Made in Maya. Largely made for viewing on a Quest 2.</p>
                </div>
            </div>

        </HoverProjectCard>
    );
};
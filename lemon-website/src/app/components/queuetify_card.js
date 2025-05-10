import HoverProjectCard from "./hover_project_card";
import Image from "next/image";

export default function QueueTifyCard() {
    const title = "QueueTify"
    const links = [
        ["GitHub", "https://github.com/lemonlemonde/QueueTify"],
    ];

    return (
        <HoverProjectCard title={title} links={links} link={"queuetify_page"}>

            <div className="flex md:flex-row flex-col md:space-x-5 space-x-0">
                <div className="flex md:w-1/2 w-full md:justify-start justify-center items-center">
                    <Image
                        aria-hidden
                        src="/queuetify_overview.jpg"
                        alt="Architecture overview"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="flex-row md:w-1/2 w-full p-5 space-y-5">
                    <p>Playlist name generator with an asynchronous task queue and results database.</p>
                    <p>Containerized; locally powered by llama3.2, through Ollama.</p>
                </div>
            </div>
        </HoverProjectCard>
    );
};
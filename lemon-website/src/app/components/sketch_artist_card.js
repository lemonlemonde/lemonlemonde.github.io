import HoverProjectCard from "./hover_project_card";
import Image from "next/image";

export default function SketchArtistCard() {
    const title = "Sketch Artist"
    const links = [
        ["GitHub", "https://github.com/lemonlemonde/sketch-artist"],
        // https://www.youtube.com/watch?v=BPxekdd8YyU
    ];


    return (
        <HoverProjectCard title={title} links={links} link={"/sketch_artist_page"}>

            <div className="flex flex-col items-center">
                <Image
                    aria-hidden
                    src="/redmask_1.png"
                    alt="Inpainting image"
                    width={200}
                    height={200}
                />
                <div className="flex-row w-full p-5 space-y-5">
                    <p>Local image generation and in-painting pipeline via CLI.</p>
                    <p>Containerized; meant to run on NVIDIA Jetson Orin Nano.</p>
                </div>
            </div>

        </HoverProjectCard>
    );
};
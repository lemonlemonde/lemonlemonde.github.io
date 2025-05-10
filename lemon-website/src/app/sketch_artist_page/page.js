
import Header from "../components/header";
import Footer from "../components/footer";
import InnerLink from "../components/inner_link";
import FormattedLinks from "../components/formatted_links";
import Image from "next/image";


export default function SketchArtistPage() {
    const links = [
        ["GitHub", "https://github.com/lemonlemonde/sketch-artist"],
    ];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />


            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Sketch Artist ]
                </h2>

                <FormattedLinks links={links} />


                {/* body */}
                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                    {/* ---- screen vids ---- */}
                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <p>[ Images are a little...wonky due to the small models required to run locally 🙃 ]</p>
                        <Image
                            aria-hidden
                            // src="/face_cropped.png"
                            src="/init_img.png"
                            alt="Initial image"
                            width={300}
                            height={300}
                            className="justify-self-center"
                        />
                        <p>Initial image</p>
                        <Image
                            aria-hidden
                            // src="/face_cropped.png"
                            src="/redmask_1.png"
                            alt="Inpainting image"
                            width={300}
                            height={300}
                            className="justify-self-center"
                        />
                        <p>Inpainting area</p>
                        <Image
                            aria-hidden
                            // src="/face_cropped.png"
                            src="/new_1.png"
                            alt="New image"
                            width={300}
                            height={300}
                            className="justify-self-center"
                        />
                        <p>New image!</p>
                    </div>


                    {/* ---- description ---- */}
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        <p className="text-light-green">Local image generation and in-painting pipeline through CLI.</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>Containerized script for running on an NVIDIA Jetson Orin Nano (via an `l4t pytorch` base image).</li>
                            <li>Describe an image to generate an image (`segmind/tiny-sd` diffusion pipeline)</li>
                            <li>Input coordinates for bounding box for inpainting</li>
                            <li>Describe image for inpainting region (`runwayml/stable-diffusion-inpainting` stable diffusion inpainting pipeline)</li>
                            <li>Review and continue as desired :)</li>
                            <br></br>
                            <li className="text-light-green"><i>[ NVIDIA Jetson Orin Nano, Docker, Stable Diffusion ]</i></li>
                        </ul>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
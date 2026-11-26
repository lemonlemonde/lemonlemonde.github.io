
import ProjectShell, { ProjectTitle } from "../redesign/project_shell";
import InnerLink from "../components/inner_link";
import FormattedLinks from "../components/formatted_links";
import Image from "next/image";
import { pageMetadata } from "../page_metadata";


export const metadata = pageMetadata("QueueTify", "Playlist name generator built on an asynchronous Redis task queue, Flask, PostgreSQL, and a local Llama 3.2 model.");

export default function QueueTifyPage() {
    const links = [
        ["GitHub", "https://github.com/lemonlemonde/QueueTify"],
    ];

    return (
        <ProjectShell>
            <main className="t-proj flex flex-col gap-8 pt-6 w-full">
                <ProjectTitle>QueueTify</ProjectTitle>

                <FormattedLinks links={links} />


                {/* body */}
                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0">
                    {/* ---- screen vids ---- */}
                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <p>[ Architecture diagrams as I slowly containerized everything ]</p>
                        <Image
                            aria-hidden
                            // src="/face_cropped.png"
                            src="/queuetify_overview.jpg"
                            alt="Architecture overview"
                            width={450}
                            height={450}
                            className="justify-self-center"
                        />
                        <Image
                            aria-hidden
                            // src="/face_cropped.png"
                            src="/queuetify_socketio.jpg"
                            alt="SocketIO architecture"
                            width={450}
                            height={450}
                            className="justify-self-center"
                        />
                    </div>


                    {/* ---- description ---- */}
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        <p className="text-light-green">Playlist name generator with an asynchronous task queue and results database.</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>Flask webapp to submit a Flask-WTF form for a playlist name description.</li>
                            <li>Worker waits to pick up descriptions from a Redis task queue.</li>
                            <li>Ollama server (running llama3.2) gnerates playlist names.</li>
                            <li>PostgreSQL database contains all results.</li>
                            <li>Connections and events via Flask API endpoints, SocketIO connections, and Docker networks.</li>
                            <li>Docker Compose to easily spin up all images and containers.</li>
                            <br></br>
                            <li className="text-light-green"><i>[ Gunicorn, Eventlet, PostgreSQL, Redis, Docker, Docker Compose, Flask (Flask-WTF, Flask-SocketIO) ]</i></li>
                        </ul>
                    </div>
                </div>

            </main>
        </ProjectShell>
    );
}
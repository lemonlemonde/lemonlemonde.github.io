// Homepage: whimsical terminal design. Rendered by src/app/page.js.
import Link from "next/link";
import Interactions from "./interactions";
import { Splash, Scramble, AsciiPortrait, SocialDock } from "./terminal_parts";
import { MenuBar } from "./project_shell";
import { RETURNING_SCRIPT } from "./splash_timing";
import "./redesign.css";

const yt = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const PROJECTS = [
    {
        title: "Estuary", glyph: "◉", sub: "AR Companion Project", href: "/estuary_page", tag: "XR · AI", img: yt("GzsNL7DX1Fc"),
        blurb: "Framework for low-latency, multimodal socially interactive agents on Quest 3 and Apple Vision Pro.",
        links: [["Website", "https://estuary-ai.github.io/"], ["Demo", "https://www.youtube.com/watch?v=m5wO7E0zet8"], ["CHI'25 Interviews", "https://youtu.be/2RlmenU1FG4?feature=shared"]],
    },
    {
        title: "Memory Space", glyph: "⌂", sub: "Chinatown AR", href: "/memory_space_page", tag: "WebAR", legend: "AR",
        // thumbnail of the Vimeo reel (via Vimeo oEmbed)
        img: "https://i.vimeocdn.com/video/1864924480-8b0a613befcdc5833d8fc1ced9a4998458bcb018adf5bcc922f2c4661ea75044-d_1280?region=us",
        blurb: "Geolocated WebAR exhibit on Niantic's 8th Wall at LA's Union Station, showcasing old Chinatown.",
        links: [["WebAR", "https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1"], ["Lab", "https://mobilemedia.usc.edu/projects/memory-space-chinatownar/"], ["Grand Prize", "https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge"]],
    },
    {
        title: "NASA SUITS", glyph: "✦", sub: "2022–2023", href: "/nasa_suits_page", tag: "XR", img: yt("d4mOWeIuvMI"),
        blurb: "HoloLens 2 AR app helping astronauts with navigation, terrain mapping, and telemetry in low light. Evolved into Estuary.",
        links: [["USC Article", "https://viterbischool.usc.edu/news/2023/06/usc-students-advance-augmented-reality-for-artemis-astronauts/"], ["2022 Video", "https://www.youtube.com/watch?v=Wjg_yvT7Jo4"]],
    },
    {
        title: "Trajectory Improvement", glyph: "⟳", sub: "Comparative Language Feedback", href: "/robo_traj_page", tag: "Robotics · Research", img: yt("8xyuCQlTXEg"),
        blurb: "Improving a robot arm's (WidowX) trajectory from comparative feedback in natural language.",
        links: [["Website", "https://liralab.usc.edu/comparative-language-feedback/"], ["CoRL'24", "https://arxiv.org/abs/2410.06401v1"], ["HIRL'24", "https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"]],
    },
];
const SIDE_QUESTS = [
    { title: "Halfthought", glyph: "✎", href: "/halfthought_page", tag: "App", legend: "Ht", blurb: "A public notes app with discovery for publishing short writing.", links: [["Website", "https://halfthought.app/welcome"]] },
    { title: "Sidetrekd", glyph: "⚑", href: "/sidetrekd_page", tag: "App", legend: "St", blurb: "Track sidequest ideas, share them with friends, journal the ones you did.", links: [["Website", "https://sidetrekd.app"]] },
    { title: "Cringe Canon", glyph: "☻", href: "/cringe_canon_page", tag: "AI · Hackathon", img: yt("BPxekdd8YyU"), blurb: "Turns original-character art into canon profiles you can chat with.", links: [["GitHub", "https://github.com/lemonlemonde/cringe-canon"], ["Hackathon", "https://www.sprint.dev/projects/d6a91375-f6b5-4637-b149-eb9a07634730"]] },
    { title: "Sketch Artist", glyph: "✿", href: "/sketch_artist_page", tag: "AI", img: "/redmask_1.png", blurb: "Local image generation and in-painting pipeline on a Jetson Orin Nano.", links: [["GitHub", "https://github.com/lemonlemonde/sketch-artist"]] },
    { title: "QueueTify", glyph: "♫", href: "/queuetify_page", tag: "Backend", img: "/queuetify_overview.jpg", blurb: "Playlist name generator on an async task queue, powered by local Llama 3.2.", links: [["GitHub", "https://github.com/lemonlemonde/QueueTify"]] },
    { title: "To The Clouds", glyph: "☁", href: "/totheclouds_page", tag: "Film · VR", img: yt("B9d9BBz_8V8"), blurb: "360° VR short film made in Maya, for viewing on Quest 2.", links: [] },
];
const PUBS = [
    { venue: "CHI '25", title: "Optimizing SIA Development: A Case Study in User-Centered Design for Estuary, a Multimodal Socially Interactive Agent Framework", authors: ["S. Lin", "M. Jun*", "B. Rizk*", "K. Shieh", "S. Fisher", "S. Mozgai"], links: [["arXiv", "https://arxiv.org/abs/2504.14427"], ["Video", "https://youtu.be/2RlmenU1FG4?feature=shared"]] },
    { venue: "IVA '24", title: "Estuary: A Framework For Building Multimodal Low-Latency Real-Time Socially Interactive Agents", authors: ["S. Lin*", "B. Rizk*", "M. Jun*", "A. Artze", "C. Sullivan", "S. Mozgai", "S. Fisher"], links: [["arXiv", "https://arxiv.org/abs/2410.20116"], ["Website", "https://estuary-ai.github.io/"]] },
    { venue: "CoRL '24", title: "Trajectory Improvement and Reward Learning from Comparative Language Feedback", authors: ["Z. Yang", "M. Jun", "J. Tien", "S. J. Russell", "A. Dragan", "E. Bıyık"], links: [["arXiv", "https://arxiv.org/abs/2410.06401v1"], ["Website", "https://liralab.usc.edu/comparative-language-feedback/"], ["Video", "https://www.youtube.com/watch?v=8xyuCQlTXEg"]] },
    { venue: "HRI '24 W", title: "Optimizing Robot Behavior Via Comparative Language Feedback", authors: ["J. Tien*", "Z. Yang*", "M. Jun", "S. J. Russell", "A. Dragan", "E. Bıyık"], links: [["Paper", "https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"], ["Video", "https://www.youtube.com/watch?v=W-ZJ1ijPf8U"]] },
    { venue: "RAMS '24", title: "Do Bayesian Neural Networks Improve Weapon System Predictive Maintenance?", authors: ["M. Potter*", "M. Jun*"], links: [["arXiv", "https://arxiv.org/abs/2312.10494"]] },
];

function Command({ id, children, note }) {
    return (
        <div className="flex items-baseline justify-between gap-4 pt-24 pb-4">
            <h2 id={id} className="text-lg sm:text-xl uppercase tracking-[0.16em] scroll-mt-16" aria-label={children}>
                <span data-type={children} aria-hidden />
                <span className="t-cursor">▌</span>
            </h2>
            {note && <span data-reveal className="t-label hidden sm:block">{note}</span>}
        </div>
    );
}

function Cell({ p, i, big }) {
    return (
        <div className="t-cell" data-card={i % 2 ? 1 : -1}>
            <article className={`t-hot h-full flex flex-col gap-4 ${big ? "p-5 sm:p-7" : "p-5"}`}>
                <span className="t-label">{String(i + 1).padStart(2, "0")} · {p.tag}</span>
                <div className={`t-thumb ${p.img ? "" : "t-thumb-ascii"}`}>
                    {p.img ? <img src={p.img} alt="" loading="lazy" className={p.img.includes("ytimg") ? "t-yt" : ""} /> : <span aria-hidden>{p.glyph}</span>}
                </div>
                <h3 className={`t-sans font-semibold tracking-tight leading-[1.05] ${big ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                    <Link href={p.href} className="t-stretch" data-transition={p.title}><Scramble text={p.title} /></Link>
                </h3>
                {p.sub && <p className="t-label -mt-2">{p.sub}</p>}
                <p className="text-[0.85rem] leading-relaxed t-muted grow">{p.blurb}</p>
                {p.links.length > 0 && (
                    <p className="t-above text-[0.8rem] flex flex-wrap gap-x-3 gap-y-1">
                        {p.links.map(([text, url]) => (
                            <a key={text} className="t-link" href={url} target="_blank" rel="noopener noreferrer">[{text.toLowerCase()}]</a>
                        ))}
                    </p>
                )}
            </article>
        </div>
    );
}

export default function HomePage() {
    return (
        <div className="t-page">
            {/* flags returning visitors before paint -> short splash (see splash_timing.js) */}
            <script dangerouslySetInnerHTML={{ __html: RETURNING_SCRIPT }} />
            <Splash />
            <Interactions />

            <MenuBar onHome />

            <main id="top" className="mx-auto max-w-6xl px-4 sm:px-8 pb-[30vh]">

                {/* hero */}
                <section className="t-grid grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] mt-10">
                    <div className="t-cell p-6 sm:p-10 flex flex-col justify-center gap-12" data-landing="0">
                        <div className="flex flex-col gap-8">
                            <h1 className="t-sans font-semibold tracking-tight leading-[0.95] text-[clamp(2.8rem,6.4vw,5.2rem)]">
                                <span data-parallax="-0.05"><span className="t-rise block" style={{ animationDelay: "calc(var(--splash-exit) + 0.5s)" }}>Miru Jun</span></span>
                            </h1>
                            <div className="flex flex-col gap-3">
                                <p className="t-label t-rise" style={{ animationDelay: "calc(var(--splash-exit) + 0.6s)" }}>current interest ▸</p>
                                <p className="t-sans t-stagger font-medium tracking-tight leading-[1.05] text-[clamp(1.2rem,2.1vw,1.7rem)]">
                                    <span data-parallax="0.03"><span className="t-rise block" style={{ animationDelay: "calc(var(--splash-exit) + 0.65s)" }}>building intuitive, efficient</span></span>
                                    <span data-parallax="0.06"><span className="t-rise block pl-[6%] sm:pl-[10%] t-muted" style={{ animationDelay: "calc(var(--splash-exit) + 0.75s)" }}>human–AI collaboration</span></span>
                                    <span data-parallax="0.09"><span className="t-rise block pl-[2%] sm:pl-[18%]" style={{ animationDelay: "calc(var(--splash-exit) + 0.85s)" }}>across XR &amp; robotics<span className="t-cursor">█</span></span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="t-cell p-3 flex flex-col justify-center" data-landing="1" id="t-portrait-cell">
                        <div className="t-portrait-frame">
                            <AsciiPortrait src="/portrait_840.jpg" alt="Portrait of Miru Jun"
                                hoverSrc="/cow_portrait_840.jpg" hoverAlt="Miru Jun next to a giant cow statue" />
                        </div>
                    </div>
                </section>

                {/* whoami */}
                <Command id="tldr" note="the short version">tl;dr</Command>
                <div data-card="-1">
                    <div className="t-grid grid">
                        <div className="t-cell p-5 sm:p-7 flex flex-col gap-3 text-sm sm:text-[0.95rem]">
                            <p className="t-kv"><span>role</span><span className="t-fill" /><span className="text-right bg-[var(--lime)] px-1">Software Engineer @ Applied Intuition</span></p>
                            <p className="t-kv"><span>edu</span><span className="t-fill" /><span className="text-right">B.S. CS, USC &apos;24 · summa cum laude · minor in 3D animation</span></p>
                            <p className="t-kv"><span>clearance</span><span className="t-fill" /><span className="text-right">Top Secret</span></p>
                        </div>
                    </div>
                </div>

                <Command id="projects" note="research & work">projects</Command>
                <section className="t-grid grid md:grid-cols-2">
                    {PROJECTS.map((p, i) => <Cell key={p.title} p={p} i={i} big />)}
                </section>

                <Command id="side-quests" note="scavenging in an open world">side quests</Command>
                <section className="t-grid grid sm:grid-cols-2 lg:grid-cols-3">
                    {SIDE_QUESTS.map((p, i) => <Cell key={p.title} p={p} i={i} />)}
                </section>

                <Command id="pubs" note={<a className="t-link" href="https://scholar.google.com/citations?user=AalqHJ4AAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">[google scholar ↗]</a>}>publications</Command>
                <section className="t-grid grid">
                    {PUBS.map((pub, i) => (
                        <div key={pub.title} className="t-cell" data-card={i % 2 ? 1 : -1}>
                            <div className="grid sm:grid-cols-[4rem_minmax(0,1fr)_7rem] gap-2 sm:gap-6 p-5 sm:p-6 transition-colors hover:bg-[#efede2]">
                                <span className="t-muted">[{i + 1}]</span>
                                <div className="flex flex-col gap-2">
                                    <p className="t-sans text-lg font-medium leading-snug">{pub.title}</p>
                                    <p className="text-[0.8rem] t-muted">
                                        {pub.authors.map((a, j) => (
                                            <span key={a}>{j > 0 && ", "}{a.startsWith("M. Jun") ? <b className="text-[var(--ink)] bg-[var(--lime)] px-0.5">{a}</b> : a}</span>
                                        ))}
                                    </p>
                                    <p className="text-[0.8rem] flex flex-wrap gap-x-3">
                                        {pub.links.map(([text, url]) => <a key={text} className="t-link" href={url} target="_blank" rel="noopener noreferrer">[{text.toLowerCase()}]</a>)}
                                    </p>
                                </div>
                                <span className="t-label !text-[0.95rem] !text-[var(--ink)] !normal-case font-semibold sm:text-right">{pub.venue}</span>
                            </div>
                        </div>
                    ))}
                </section>

                <SocialDock />
            </main>
        </div>
    );
}

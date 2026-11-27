// Shared frame for the redesign: menubar, page-wide interactions, links dock + footer.
// Links back home skip the page-to-page splash: the homepage plays its own name splash.
// Project pages wrap their existing content in <ProjectShell>; redesign.css restyles that
// content (under .t-proj) and interactions.js animates its top-level blocks as cards.
import Link from "next/link";
import Interactions from "./interactions";
import { RETURNING_SCRIPT } from "./splash_timing";
import { SocialDock } from "./terminal_parts";
import "./redesign.css";

const HOME = "/";

export function MenuBar({ onHome = false }) {
    const at = (hash) => (onHome ? hash : `/${hash}`);
    return (
        <nav className="t-grid grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto_auto] sticky top-0 z-30 bg-[var(--cream)] text-[0.8rem]">
            {/* router links, even for "#..." jumps: plain hash links make history entries the
                router can't restore, so Back from a project page would leave it on screen */}
            <Link href={onHome ? "#top" : HOME} className="t-cell t-hot px-4 py-3 font-bold">MIRU.SH</Link>
            <span className="t-cell px-4 py-3 flex gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap">
                <Link className="t-link" href={at("#projects")}>projects</Link>
                <Link className="t-link" href={at("#side-quests")}>side-quests</Link>
                <Link className="t-link" href={at("#pubs")}>pubs</Link>
            </span>
            <span className="t-cell px-4 py-3 t-muted hidden lg:flex gap-4 whitespace-pre" aria-hidden>
                <span id="t-progress">[░░░░░░░░░░]   0%</span>
            </span>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="t-cell t-hot px-4 py-3">resume ↗</a>
        </nav>
    );
}

// Page title: types itself out like the homepage section titles.
export function ProjectTitle({ children }) {
    return (
        <h1 className="t-sans font-semibold tracking-tight leading-[1.02] text-[clamp(2rem,5vw,3.6rem)]" aria-label={children}>
            <span data-type={children} aria-hidden />
            <span className="t-cursor">█</span>
        </h1>
    );
}

export default function ProjectShell({ children }) {
    return (
        <div className="t-page">
            {/* same pre-paint flags as the homepage (lite mode for slow devices) */}
            <script dangerouslySetInnerHTML={{ __html: RETURNING_SCRIPT }} />
            <Interactions />
            <MenuBar />
            <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-[30vh]">
                <Link href={HOME} className="t-link inline-block mt-8 text-[0.8rem]">← back</Link>
                {children}
                <SocialDock />
            </div>
        </div>
    );
}

import ProjectShell, { ProjectTitle } from "../redesign/project_shell";
import FormattedLinks from "../components/formatted_links";
import { pageMetadata } from "../page_metadata";


export const metadata = pageMetadata("Halfthought", "A public notes app with discovery for publishing short writing. iOS-first Expo app with a server-rendered web reader on Supabase and Cloudflare.");

export default function HalfthoughtPage() {
    const links = [
        ["Website", "https://halfthought.app/welcome"],
    ];

    return (
        <ProjectShell>
            <main className="t-proj flex flex-col gap-8 pt-6 w-full">
                <ProjectTitle>Halfthought</ProjectTitle>

                <FormattedLinks links={links} />


                {/* body */}
                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0 w-full">
                    {/* ---- media ---- */}
                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <p className="italic">[ media coming soon ]</p>
                    </div>


                    {/* ---- description ---- */}
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        <p className="text-light-green">A public notes app with discovery: publish short writing without needing to build an audience or brand.</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>iOS-first Expo / React Native app, with a server-rendered web reader.</li>
                            <li>Supabase Postgres, auth, row-level security, triggers, and Edge Functions.</li>
                            <li>Web reader served from Cloudflare Workers; end-to-end tests in Playwright.</li>
                            <br></br>
                            <li className="text-light-green"><i>[ Expo Router, React Native, Supabase, Reanimated, Markdown, Cloudflare Workers, Playwright ]</i></li>
                        </ul>
                    </div>
                </div>

            </main>
        </ProjectShell>
    );
}

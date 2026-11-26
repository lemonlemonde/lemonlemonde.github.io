import ProjectShell, { ProjectTitle } from "../redesign/project_shell";
import FormattedLinks from "../components/formatted_links";
import { pageMetadata } from "../page_metadata";


export const metadata = pageMetadata("Sidetrekd", "Cross-platform app for tracking sidequest ideas, sharing them with friends, and journaling the ones you did. Built with Expo and Supabase.");

export default function SidetrekdPage() {
    const links = [
        ["Website", "https://sidetrekd.app"],
    ];

    return (
        <ProjectShell>
            <main className="t-proj flex flex-col gap-8 pt-6 w-full">
                <ProjectTitle>Sidetrekd</ProjectTitle>

                <FormattedLinks links={links} />


                {/* body */}
                <div className="flex lg:flex-row flex-col md:space-x-5 space-x-0 w-full">
                    {/* ---- media ---- */}
                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <p className="italic">[ media coming soon ]</p>
                    </div>


                    {/* ---- description ---- */}
                    <div className="flex-row lg:w-1/2 w-full p-5 space-y-5">
                        <p className="text-light-green">Keep track of sidequest ideas, share them with friends, and journal the ones you actually did.</p>
                        <ul className="ml-6 list-disc font-extralight">
                            <li>One Expo / React Native codebase for iOS, Android, and the browser.</li>
                            <li>Supabase handles auth, data (with row-level security), and media storage.</li>
                            <li>Web build deployed on Cloudflare Pages.</li>
                            <br></br>
                            <li className="text-light-green"><i>[ Expo, React Native, Supabase, Reanimated, Resend, PostHog, Cloudflare Pages ]</i></li>
                        </ul>
                    </div>
                </div>

            </main>
        </ProjectShell>
    );
}

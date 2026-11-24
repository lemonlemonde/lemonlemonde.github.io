import Header from "../components/header";
import Footer from "../components/footer";
import FormattedLinks from "../components/formatted_links";


export default function HalfthoughtPage() {
    const links = [
        ["Website", "https://halfthought.app/welcome"],
    ];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />


            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Halfthought ]
                </h2>

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

            <Footer />
        </div>
    );
}

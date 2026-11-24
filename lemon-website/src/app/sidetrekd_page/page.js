import Header from "../components/header";
import Footer from "../components/footer";
import FormattedLinks from "../components/formatted_links";


export default function SidetrekdPage() {
    const links = [
        ["Website", "https://sidetrekd.app"],
    ];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />


            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Sidetrekd ]
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

            <Footer />
        </div>
    );
}

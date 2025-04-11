import Header from "../components/header";
import Footer from "../components/footer";


export default function HIOTWPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header />
            <main className="flex flex-col p-8 gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">
                <h2 className="text-3xl font-normal">
                    [ Help Is On The Way: VR Thriller ]
                </h2>

                {/* body */}
                <div className="flex lg:flex-row flex-col w-full lg:space-x-5">

                    <div className="pe-5 lg:w-1/2 w-full">
                        {/* <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/B9d9BBz_8V8?si=7EHGjIAFcftkoE83" frameorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="To The Clouds"></iframe> */}
                        <p className="italic font-extralight pt-4 w-full justify-center">[ no video yet! ]</p>
                    </div>

                    <div className="flex flex-col lg:w-1/2 w-full space-y-5">
                        <p className="text-light-green">VR film with 6DoF, built in Unreal Engine with live-action footage, using virtual production techniques.</p>
                        <p>"A woman walking alone at night gets the feeling she’s being watched.  What she finds on her trail is stranger than one would imagine."</p>

                        <ul className="ml-6 list-disc font-extralight">

                            <li>Helping out a friend with their MFA thesis</li>
                            <li>3D environments in Unreal Engine with SpeedTree foliage, debugging shadow rendering</li>
                            <li>SAM2 pipeline experimentation for background-removal of live footage</li>
                            <li>Got to hold up an acrylic panel as an actress smashed a pineapple against it :D</li>

                        </ul>

                        <li className="text-light-green"><i>[ Unreal Engine, SpeedTree, SAM2 ]</i></li>

                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
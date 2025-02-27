import Image from "next/image";
import { EyeClosed, Eye } from "lucide-react";
import Card from "./components/card";
import SplineObj from "./components/spline_obj";
import Header from "./components/header";
import InnerLink from "./components/inner_link";

export default function Home() {

  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start max-w-screen-lg w-full">

        {/* some floaty thing */}
        {/* <div className="max-w-screen-sm absolute">
          <SplineObj/> 
        </div> */}

        {/* horizontal blurb */}
        <div className="flex space-x-14 center w-full">
          <EyeClosed className="w-1/3 center animate-pulse" size={100} />

          {/* bullet points */}
          <ul className="list-disc space-y-3 font-light w-1/2">
            <li>Data Engineer @ DoD's NSWC Corona</li>
            <li>B.S. in CS @ USC, 2024</li>
            <p className="text-sm text-gray-300">& Minor in 3D-Animation</p>
            <li>Active T3 Secret Clearance granted January 2024</li>
            <li>Trying to be happy and fulfilled and cool</li>
          </ul>
        </div>

        {/* experience */}
        <Card link={"/exp_page"}>
          {/* job exp */}
          <div>
            <ul className="list-disc font-extralight max-w-full">
              <h2 className="text-2xl font-normal">
                [ EXP ]
              </h2>
              <li><b>2024-Current:</b> Data Engineer @ DoD's NSWC Corona</li>
              <li><b>2024-Current:</b> Student Volunteer @ USC's Virtual Human Therapeutics Lab (VHTL)</li>
              <p>- Accepted to CHI'25</p>
              <li><b>2023-2024:</b> Student Researcher @ USC's Learning and Interactive Robot Autonomy Lab (LiraLab)</li>
              <p>- Published in CoRL'24</p>
              <p>- Published in HRI'24 HIRL Workshop</p>
              <li><b>2023-2024:</b> Student Researcher @ USC's Mobile and Environmental Media Lab (MEML)</li>
              <p>- Published in IVA'24</p>
              <div className="flex space-x-6">
                <InnerLink link={"https://storymaps.arcgis.com/collections/1e5f963472f4400da19fcb0e3ccfdd5e?item=1"} text={"Website + WebAR link"}/>
                <InnerLink link={"https://player.vimeo.com/video/927420930?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"} text={"Vimeo"}/>
                <InnerLink link={"https://www.8thwall.com/blog/post/163144919365/meet-the-winners-time-capsule-challenge"} text={"Grand Prize - Time Capsule Challenge (Niantic's 8th Wall)"}/>
              </div>

              <li><b>Summer 2023:</b> Intern @ DoD's NSWC Corona</li>
              <p>- Published and presented at RAMS'24</p>
              <li><b>2021:</b> Mobile App Developer @ Bridges Health startup</li>
              <li><b>2021:</b> Research Intern (CURVE Fellowship) @ USC's ICAROS Lab</li>
            </ul>
          </div>
        </Card>

        {/* verticals */}
        <div className="flex lg:flex-row flex-col w-full lg:space-x-10 lg:space-y-0 space-y-10 space-x-0">
          <Card link={"/proj_page"} className="w-2/3">
            {/* proj links */}
            <ul className="list-disc font-extralight w-full">
              <h2 className="text-2xl font-normal">
                [ PROJS ]
              </h2>

              <div className="flex-col">
                <li>Estuary: Augmented Reality Companion Project</li>
                <div className="flex space-x-4">
                  <InnerLink link={"https://estuary-ai.github.io/"} text={"Website"}/>
                </div>
              </div>


              <li>NASA SUITS Challenge 2022-2023</li>
              <div className="flex space-x-6">
                <InnerLink link={"https://www.youtube.com/watch?v=d4mOWeIuvMI"} text={"SENVA 2 Product Reel"}/>
                <InnerLink link={"https://viterbischool.usc.edu/news/2023/06/usc-students-advance-augmented-reality-for-artemis-astronauts/"} text={"USC Article"}/>
                <InnerLink link={"https://www.youtube.com/watch?v=Wjg_yvT7Jo4"} text={"USC Video"}/>
              </div>

              <li>Help Is On The Way: USC MFA Thesis VR Film</li>
              <li>Talk2Friends: Android application</li>
              <li>To The Clouds: 360 VR short video (CTAN 504)</li>
              <InnerLink link={"https://youtu.be/B9d9BBz_8V8"} text={"YouTube"}/>
            </ul>
          </Card>

          <Card link={"/other_page"} className="w-1/3">
            {/* Otherwise */}
            <ul className="list-disc font-extralight w-full">
              <h2 className="text-2xl font-normal">
                [ OTHER ]
              </h2>
              <li><b>2024:</b> Bloomberg BPuzzled Finalist!</li>
              <li><b>2023:</b> Bloomberg BPuzzled Finalist</li>
              <li><b>2022-2024:</b> Team Leader @ USC Volunteer Center</li>
              <li><b>2021-2022:</b> Volunteer @ USC Volunteer Center</li>
            </ul>
          </Card>

        </div>



        {/* publications */}
        <Card link={"/pub_page"} className="w-full">
        <ul className="list-disc font-extralight w-fit space-y-1">
          <h2 className="text-2xl font-normal">
            [ PUBS ]
          </h2>

          <li>S. Lin, <b>M. Jun*,</b> B. Rizk*, K. Shieh, S. Fisher, and S. Mozgai, “Optimizing SIA Development: A Case Study in User- Centered Design for Estuary, a Multimodal Socially Interactive Agent Framework,” in ACM Conference on Human Factors in Computing Systems (CHI), 2025.</li>

          <div className="flex-col">
            <li>S. Lin*, B. Rizk*, <b>M. Jun*,</b> A. Artze, C. Sullivan, S. Mozgai, and S. Fisher, “Estuary: A Framework For Building Multimodal Low-Latency Real-Time Socially Interactive Agents,” in 24th ACM International Conference on Intelligent Virtual Agents (IVA), Dec. 2024.</li>
            <div className="flex space-x-4">
              <InnerLink link={"https://arxiv.org/abs/2410.20116"} text={"arXiv"}/>
              <InnerLink link={"https://estuary-ai.github.io/"} text={"Website"}/>
              <InnerLink link={"https://www.linkedin.com/posts/usc-institute-for-creative-technologies_iva2024-estuary-applevisionpro-ugcPost-7220104574357966848-nGON?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1KA5YBO_35pRq57OTgAeCA_1D_unPlrlg"} text={"LinkedIn post"}/>
            </div>
          </div>


          <div className="flex-col">
            <li>Z. Yang, <b>M. Jun,</b> J. Tien, S. J. Russell, A. Dragan, and E. Bıyık,  “Trajectory Improvement and Reward Learning from Comparative Language Feedback,” in 8th Annual Conference on Robot Learning (CoRL), Sep. 2024.</li>
            <div className="flex space-x-4">
              <InnerLink link={"https://arxiv.org/abs/2410.06401v1"} text={"arXiv"}/>
              <InnerLink link={"https://liralab.usc.edu/comparative-language-feedback/"} text={"Website"}/>
              <InnerLink link={"https://www.youtube.com/watch?v=8xyuCQlTXEg"} text={"Video"}/>
            </div>
          </div>

          <div className="flex-col">
            <li>J. Tien*, Z. Yang*, <b>M. Jun,</b> S. J. Russell, A. Dragan, and E. Bıyık, “Optimizing Robot Behavior Via Comparative Language Feedback,” in 3rd Human Robot Interaction (HRI) Workshop on Human-Interactive Robot Learning (HIRL), 2024.</li>
            <div className="flex space-x-4">
              <InnerLink link={"https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"} text={"Paper"}/>
              <InnerLink link={"https://www.youtube.com/watch?v=W-ZJ1ijPf8U"} text={"Video"}/>
            </div>
          </div>



          <div className="flex-col">
            <li>M. Potter*, and <b>M. Jun*,</b> “Do Bayesian Neural Networks Improve Weapon System Predictive Maintenance?,” in Annual Reliability and Maintainability Symposium (RAMS), Jan. 2024.</li>
            <div className="flex space-x-4">
              <InnerLink link={"https://arxiv.org/abs/2312.10494"} text={"arXiv"}/>
            </div>
          </div>
        </ul>
        </Card>


      </main>

      {/* footer links to make me look cooler */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/lemonlemonde"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://scholar.google.com/citations?user=AalqHJ4AAAAJ&hl=en&authuser=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Google Scholar
        </a>
      </footer>
    </div>
  );
}

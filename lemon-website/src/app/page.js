import Image from "next/image";
import { EyeClosed, Eye } from "lucide-react";
import Card from "./components/card";
import SplineObj from "./components/spline_obj";
import Header from "./components/header";
import InnerLink from "./components/inner_link";
import SectionTitle from "./components/section_title";

import EstuaryCard from "./components/estuary_card";
import NasaSuitsCard from "./components/nasa_suits_card";
import ToTheCloudsCard from "./components/to_the_clouds_card";
import MemorySpaceCard from "./components/memory_space_card";
import RoboTrajCard from "./components/robo_traj_card";

export default function Home() {

  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start max-w-screen-lg w-full space-y-40">

        {/* some floaty thing */}
        {/* <div className="max-w-screen-sm absolute">
          <SplineObj/> 
        </div> */}

        {/* horizontal blurb */}
        <div className="flex space-x-14 center w-full justify-center">
          {/* <EyeClosed className="w-1/3 center animate-pulse" size={100} /> */}
          <Image
            aria-hidden
            // src="/face_cropped.png"
            src="/squared.png"
            alt="Globe icon"
            width={300}
            height={160}
          />

          {/* bullet points */}
          <ul className="list-disc space-y-3 font-light w-1/2">
            <h2 className="text-2xl font-normal">
              [ TL;DR ]
            </h2>
            <li className="text-lime-500">Data Scientist @ US Naval Base</li>
            <li className="text-lime-500">B.S. in CS @ University of Southern California (USC), 2024</li>
            <p className="text-sm">& Minor in 3D-Animation</p>
            <li>T3 Secret Clearance</li>
            <br/>
            Excited about building intuitive and efficient human-computer collaboration through AI in XR and robotics  :)
            {/* <li>Current thoughts:
              <ul className="ml-6 list-disc font-extralight max-w-full text-sm">
                <li>Want to deepdive: containers, camera access on Quest3</li>
                <li>Did I shut down the VM?</li>
                <li>Haikyuu Chapter 371</li>
                <li>I'll never operate on complete information</li>
              </ul>
            </li> */}
          </ul>
        </div>

        {/* experience */}
        {/* <Card link={"/exp_page"}>
          <div>
            <h2 className="text-2xl font-normal">
              [ EXP ]
            </h2>
            <ul className="list-disc font-extralight max-w-full space-y-3 pt-2">
              <li><b>2024-Current:</b> Data Scientist @ <InnerLink link={"https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Corona/"} text={"US Naval Base"}/></li>
              <li>
                <b>2024-Current: </b>
                Student Volunteer @ <InnerLink link={"https://ict.usc.edu/research/labs-groups/virtual-human-therapeutics-lab/"} text="Virtual Human Therapeutics Lab (VHTL)"/>
                <ul className="ml-6 list-disc font-extralight max-w-full">
                  <li>CHI'25!</li>
                </ul>
              </li>
              
              <li>
                <b>2023-2024: </b>
                Student Researcher @ <InnerLink link={"https://liralab.usc.edu/"} text="Learning and Interactive Robot Autonomy Lab (LiraLab)"/>
                <ul className="ml-6 list-disc font-extralight max-w-full">
                  <li>CoRL'24</li>
                  <li>HRI'24 HIRL Workshop :)</li>
                </ul>
              </li>

              <li>
                <b>2023-2024: </b>
                Student Researcher @ USC's <InnerLink link={"https://mobilemedia.usc.edu/"} text="Mobile and Environmental Media Lab (MEML)"/>
                <ul className="ml-6 list-disc font-extralight max-w-full">
                  <li>IVA'24!</li>
                  <li>Memory Space: Chinatown AR project</li>
                </ul>
              </li>

              <li>
                <b>Summer 2023:</b> Intern @ Naval Base
                <ul className="ml-6 list-disc font-extralight max-w-full">
                  <li>RAMS'24!</li>
                  <li>GUI and standardized Python package for weapon system reliability</li>
                  <li>Experiments with federated learning</li>
                </ul>
              </li>
              
              <li><b>2021:</b> Mobile App Developer @ Bridges Health startup</li>

              <li><b>2021:</b> Research Intern (CURVE Fellowship) @ USC's ICAROS Lab</li>
            </ul>
          </div>
        </Card> */}

        {/* verticals */}
        <div className="flex-row w-full space-y-5">
          
          <SectionTitle title={"PROJS"}/>

          <div className="flex lg:flex-row flex-col w-full lg:space-x-5 lg:space-y-0 space-y-10 space-x-0">
            {/* proj links */}
            {/* <Card link={"/proj_page"} className="w-2/3">
              <h2 className="text-2xl font-normal">
                [ PROJS ]
              </h2>
              <ul className="list-disc font-extralight w-full pt-2">

                <li>Help Is On The Way: USC MFA Thesis VR Film</li>
                <li>Talk2Friends: Android application</li>
                <li>To The Clouds: 360 VR short video (CTAN 504)</li>
                <InnerLink link={"https://youtu.be/B9d9BBz_8V8"} text={"YouTube"}/>
              </ul>
            </Card> */}

            
            <EstuaryCard/>
            <MemorySpaceCard/>

          </div>
          <NasaSuitsCard/>

          <RoboTrajCard/>
        </div>



        {/* publications */}
        <Card link={"/pub_page"} className="w-full">
          <SectionTitle title={"PUBS"}/>
          <ul className="list-disc font-extralight w-fit space-y-1 pt-2">

            <li>S. Lin, <b className="text-lime-500 italic font-bold">M. Jun*,</b> B. Rizk*, K. Shieh, S. Fisher, and S. Mozgai, “Optimizing SIA Development: A Case Study in User- Centered Design for Estuary, a Multimodal Socially Interactive Agent Framework,” in ACM Conference on Human Factors in Computing Systems (CHI), 2025.</li>

            <div className="flex-col">
              <li>S. Lin*, B. Rizk*, <b className="text-lime-500 italic font-bold">M. Jun*,</b> A. Artze, C. Sullivan, S. Mozgai, and S. Fisher, “Estuary: A Framework For Building Multimodal Low-Latency Real-Time Socially Interactive Agents,” in 24th ACM International Conference on Intelligent Virtual Agents (IVA), Dec. 2024.</li>
              <div className="flex space-x-4">
                <InnerLink link={"https://arxiv.org/abs/2410.20116"} text={"arXiv"}/>
                <InnerLink link={"https://estuary-ai.github.io/"} text={"Website"}/>
                <InnerLink link={"https://www.linkedin.com/posts/usc-institute-for-creative-technologies_iva2024-estuary-applevisionpro-ugcPost-7220104574357966848-nGON?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1KA5YBO_35pRq57OTgAeCA_1D_unPlrlg"} text={"LinkedIn post"}/>
              </div>
            </div>


            <div className="flex-col">
              <li>Z. Yang, <b className="text-lime-500 italic font-bold">M. Jun,</b> J. Tien, S. J. Russell, A. Dragan, and E. Bıyık,  “Trajectory Improvement and Reward Learning from Comparative Language Feedback,” in 8th Annual Conference on Robot Learning (CoRL), Sep. 2024.</li>
              <div className="flex space-x-4">
                <InnerLink link={"https://arxiv.org/abs/2410.06401v1"} text={"arXiv"}/>
                <InnerLink link={"https://liralab.usc.edu/comparative-language-feedback/"} text={"Website"}/>
                <InnerLink link={"https://www.youtube.com/watch?v=8xyuCQlTXEg"} text={"Video"}/>
              </div>
            </div>

            <div className="flex-col">
              <li>J. Tien*, Z. Yang*, <b className="text-lime-500 italic font-bold">M. Jun,</b> S. J. Russell, A. Dragan, and E. Bıyık, “Optimizing Robot Behavior Via Comparative Language Feedback,” in 3rd Human Robot Interaction (HRI) Workshop on Human-Interactive Robot Learning (HIRL), 2024.</li>
              <div className="flex space-x-4">
                <InnerLink link={"https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"} text={"Paper"}/>
                <InnerLink link={"https://www.youtube.com/watch?v=W-ZJ1ijPf8U"} text={"Video"}/>
              </div>
            </div>



            <div className="flex-col">
              <li>M. Potter*, and <b className="text-lime-500 italic font-bold">M. Jun*,</b> “Do Bayesian Neural Networks Improve Weapon System Predictive Maintenance?,” in Annual Reliability and Maintainability Symposium (RAMS), Jan. 2024.</li>
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

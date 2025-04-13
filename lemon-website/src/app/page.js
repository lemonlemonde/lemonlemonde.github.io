import Image from "next/image";
import Card from "./components/card";
// import { EyeClosed, Eye } from "lucide-react";
// import SplineObj from "./components/spline_obj";
import Header from "./components/header";
import InnerLink from "./components/inner_link";
import SectionTitle from "./components/section_title";

import EstuaryCard from "./components/estuary_card";
import NasaSuitsCard from "./components/nasa_suits_card";
import ToTheCloudsCard from "./components/to_the_clouds_card";
import MemorySpaceCard from "./components/memory_space_card";
import RoboTrajCard from "./components/robo_traj_card";
import HIOTWCard from "./components/hiotw_card";
import Footer from "./components/footer";

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
        <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-14 center w-full justify-center">
          {/* <EyeClosed className="w-1/3 center animate-pulse" size={100} /> */}
          <div className="flex lg:w-1/2 w-full lg:justify-end justify-center lg:pe-14 pe-0">
            <Image
              aria-hidden
              // src="/face_cropped.png"
              src="/squared.png"
              alt="Globe icon"
              width={300}
              height={300}
              className="flex justify-self-center"
            />
          </div>

          {/* bullet points */}
          <div className="flex lg:w-1/2 w-full justify-center">
            <ul className="list-disc space-y-3 font-light max-w-md lg:px-10">
              <div className="flex w-full relative lg:justify-start justify-center mb-[20px]">
                <div className="h-px bg-white w-20 my-4"></div>
                <h2 className="text-2xl font-normal lg:justify-self-start justify-self-center mx-5">
                  [ TL;DR ]
                </h2>
                <div className="h-px bg-white w-20 my-4"></div>
              </div>

              <li className="text-light-green">Data Scientist @ US Naval Base</li>
              <li className="text-light-green">B.S. in CS @ University of Southern California (USC)</li>
              <p className="text-sm">& Minor in 3D-Animation</p>
              <p className="text-sm">2024, Summa Cum Laude</p>
              <li>T3 Secret Clearance</li>
              <br/>
              Excited about building intuitive and efficient human-computer collaboration through AI in XR and robotics  :)
            </ul>
          </div>
        </div>


        {/* verticals */}
        <div className="flex-row w-full space-y-5">
          
          <SectionTitle title={"PROJS"}/>

          <div className="flex lg:flex-row flex-col w-full lg:space-x-5 lg:space-y-0 space-y-10 space-x-0">
            <EstuaryCard/>
            <MemorySpaceCard/>
          </div>

          <NasaSuitsCard/>
          <RoboTrajCard/>

          <div className="flex lg:flex-row flex-col w-full lg:space-x-5 lg:space-y-0 space-y-10 space-x-0">
            <HIOTWCard/>
            <ToTheCloudsCard/>
          </div>
        </div>



        {/* publications */}
        <Card link={"https://scholar.google.com/citations?user=AalqHJ4AAAAJ&hl=en&authuser=1"} className="w-full">
          <SectionTitle title={"PUBS"}/>
          <ul className="list-disc font-extralight w-fit space-y-1 pt-2">

            <li>S. Lin, <b className="text-light-green italic font-bold">M. Jun*,</b> B. Rizk*, K. Shieh, S. Fisher, and S. Mozgai, “Optimizing SIA Development: A Case Study in User- Centered Design for Estuary, a Multimodal Socially Interactive Agent Framework,” in ACM Conference on Human Factors in Computing Systems (CHI), 2025.</li>

            <div className="flex-col">
              <li>S. Lin*, B. Rizk*, <b className="text-light-green italic font-bold">M. Jun*,</b> A. Artze, C. Sullivan, S. Mozgai, and S. Fisher, “Estuary: A Framework For Building Multimodal Low-Latency Real-Time Socially Interactive Agents,” in 24th ACM International Conference on Intelligent Virtual Agents (IVA), Dec. 2024.</li>
              <div className="flex space-x-4">
                <InnerLink link={"https://arxiv.org/abs/2410.20116"} text={"arXiv"}/>
                <InnerLink link={"https://estuary-ai.github.io/"} text={"Website"}/>
                <InnerLink link={"https://www.linkedin.com/posts/usc-institute-for-creative-technologies_iva2024-estuary-applevisionpro-ugcPost-7220104574357966848-nGON?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1KA5YBO_35pRq57OTgAeCA_1D_unPlrlg"} text={"LinkedIn"}/>
              </div>
            </div>


            <div className="flex-col">
              <li>Z. Yang, <b className="text-light-green italic font-bold">M. Jun,</b> J. Tien, S. J. Russell, A. Dragan, and E. Bıyık,  “Trajectory Improvement and Reward Learning from Comparative Language Feedback,” in 8th Annual Conference on Robot Learning (CoRL), Sep. 2024.</li>
              <div className="flex space-x-4">
                <InnerLink link={"https://arxiv.org/abs/2410.06401v1"} text={"arXiv"}/>
                <InnerLink link={"https://liralab.usc.edu/comparative-language-feedback/"} text={"Website"}/>
                <InnerLink link={"https://www.youtube.com/watch?v=8xyuCQlTXEg"} text={"Video"}/>
              </div>
            </div>

            <div className="flex-col">
              <li>J. Tien*, Z. Yang*, <b className="text-light-green italic font-bold">M. Jun,</b> S. J. Russell, A. Dragan, and E. Bıyık, “Optimizing Robot Behavior Via Comparative Language Feedback,” in 3rd Human Robot Interaction (HRI) Workshop on Human-Interactive Robot Learning (HIRL), 2024.</li>
              <div className="flex space-x-4">
                <InnerLink link={"https://people.eecs.berkeley.edu/~russell/papers/russell-hri24-hirl-feedback.pdf"} text={"Paper"}/>
                <InnerLink link={"https://www.youtube.com/watch?v=W-ZJ1ijPf8U"} text={"Video"}/>
              </div>
            </div>



            <div className="flex-col">
              <li>M. Potter*, and <b className="text-light-green italic font-bold">M. Jun*,</b> “Do Bayesian Neural Networks Improve Weapon System Predictive Maintenance?,” in Annual Reliability and Maintainability Symposium (RAMS), Jan. 2024.</li>
              <div className="flex space-x-4">
                <InnerLink link={"https://arxiv.org/abs/2312.10494"} text={"arXiv"}/>
              </div>
            </div>
          </ul>
        </Card>


      </main>

      <Footer/>
    </div>
  );
}

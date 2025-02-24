import Image from "next/image";
// import React, { useState, useEffect } from "react";
import { EyeClosed, Eye } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        {/* main title */}
        <div>
          <h1 className="text-4xl italic">
            Miru Jun
          </h1>
        </div>


        {/* horizontal blurb */}
        <div className="flex space-x-10 center">
          <EyeClosed size={100} />

          {/* bullet points */}
          <ul className="list-disc space-y-3 font-light">
            <li>Data Engineer @ DoD's NSWC Corona</li>
            <li>B.S. in CS @ USC, 2024</li>
            <p className="text-sm text-gray-300">& Minor in 3D-Animation</p>
            <li>Trying to be happy and fulfilled and cool</li>
          </ul>
        </div>

        {/* verticals */}
        <div className="flex w-full space-x-10">
          {/* job */}
          <ul className="list-disc font-extralight w-1/3">
            <h2 className="text-2xl font-normal">
              [ EXP ]
            </h2>
            <li>i have a job for now</li>
            <li>probably?</li>
          </ul>

          {/* proj links */}
          <ul className="list-disc font-extralight w-1/3">
            <h2 className="text-2xl font-normal">
              [ PROJS ]
            </h2>
            <li>links to things that can be better</li>
          </ul>

          {/* publications */}
          <ul className="list-disc font-extralight w-1/3">
            <h2 className="text-2xl font-normal">
              [ PUBS ]
            </h2>
            <li>words I don't remember writing</li>
          </ul>
        </div>



      </main>

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

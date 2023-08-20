import Image from "next/image";

export default function Code() {
  return (
    <main className="flex bg-customPink text-white min-h-screen min-w-screen">
      <div className="mt-20 mx-auto">
        <h1 className="text-center text-2xl md:text-4xl">CODE</h1>

        <p className="mt-2 mx-8 sm:mx-20">
          I started coding using MAX/MSP during lockdown after taking a class
          where we read some writing by Max Mathews. Originally, I built effects
          units and the sort for live performance with saxophone before
          switching more into building custom instruments to perform on. I
          started using text-based coding with C/C++ to try and build externals
          in MAX. Two years later, my composition professor introduced my to
          using Python for generating compositional material and after that I
          got into using Javascript to do the same in Max. Using JS in Max got
          me into full-stack web development (React, NextJs, Express) where I am
          currently devoting my time and energy. Below are some various things
          that I have worked on.
        </p>

        <div className="flex items-center flex-col mt-8">
          <h2 className="md:text-2xl uppercase">synth</h2>
          <div className="flex h-5/6">
          <iframe
            width="full"
            height="full"
            src="https://www.youtube.com/embed/AIMB2VJclkQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-2"
          ></iframe>
          </div>
          <p>Max/MSP using Flucoma library</p>
        </div>

        <div className="flex items-center flex-col mt-8">
          <h2 className="text-center md:text-2xl uppercase">
            Audio Reactive Scoring System
          </h2>
          <iframe
            width="full"
            height="full"
            src="https://www.youtube.com/embed/ZwfgKpYsR80"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-2"
          ></iframe>
          <p>Max/MSP and JS using Bach and Vizzie</p>
        </div>

        <div className="flex items-center flex-col mt-8">
          <h2 className="text-2xl uppercase">This Website</h2>
          <Image src='/Website.png' alt="Picture of website" width={300} height={300}/>
          <p>Three JS + NextJs</p>
        </div>

        <div className="flex items-center flex-col mt-8">
          <h2 className="text-2xl uppercase">BinSynth</h2>
          <Image src='/binsynth.png' alt="Picture of binSynth homepage" width={300} height={300}/> 
          <p>Browser-based synth using p5.js, Tone.js, and MongoDB. You can also view other members of the community's creations</p>
        </div>
      </div>
    </main>
  );
}

// 560 316
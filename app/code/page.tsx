import Image from "next/image";

export default function Code() {
  return (
    <main className="flex bg-customPink text-white min-h-screen min-w-screen ">
      <div className="mt-20 mx-auto">
        <h1 className="text-center text-2xl md:text-4xl">CODE</h1>

        <p className="mt-2 mx-8 sm:mx-20">
          I started coding using MAX/MSP during lockdown after taking a class
          where we read some writing by Max Mathews. Originally, I built effects
          units and the sort for live performance with saxophone before
          switching more into building custom instruments to perform on. I
          started using text-based coding with C/C++ to try and build externals
          for MAX. Two years later, my composition professor introduced my to
          using Python for generating compositional material and after that I
          got into using Javascript to do the same in Max. Using JS in Max got
          me into full-stack web development (React, NextJs, Express, Mongoose, AWS, etc.) where I am
          currently devoting my time and energy. Below are some various things
          that I have worked on in chronological order. 
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
          <p>Max/MSP using Flucoma library. Controlled using interfaces I made in TouchOSC on two old iPads</p>
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
          <p>Max/MSP and JS using Bach and Vizzie. Related various video effects to different improvised systems and live triggered switches that the performer responded to. Video used a mix of stochastic processes and analyis of the player's performance</p>
        </div>

        <div className="flex items-center flex-col mt-8">
          <h2 className="text-2xl uppercase">This Website</h2>
          <Image src='/Website.png' alt="Picture of website" width={300} height={300}/>
          <p>Three JS + NextJs</p>
        </div>

        <div className="flex items-center flex-col mt-8">
          <h2 className="text-2xl uppercase">BinSynth</h2>
          <a href="https://binsynth.vercel.app/">
          <Image src='/binsynth.png' alt="Picture of binSynth homepage" width={300} height={300} className="hover:outline-2 hover:outline-lime-600"/> 
          </a>
          <p>Browser-based synth using p5.js, Tone.js, and MongoDB. You can also view other members of the community&apos;s creations</p>
        </div>
      </div>
    </main>
  );
}

// 560 316
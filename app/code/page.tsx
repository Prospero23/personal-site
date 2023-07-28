import Image from "next/image";

export default function Code() {
  return (
    <main className="flex bg-customPink text-white">
      <div className="mt-20 mx-auto">
        <h1 className="text-center text-2xl md:text-4xl">CODE</h1>

        <p className="mt-2 mx-20">
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
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AIMB2VJclkQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-2"
          ></iframe>
          <p>Max/MSP using Flucoma library</p>
        </div>

        <div className="flex items-center flex-col mt-8">
          <h2 className="text-center md:text-2xl uppercase">
            Audio Reactive Scoring System
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZwfgKpYsR80"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-2"
          ></iframe>
          <p>Max/MSP and JS using Bach and Vizzie libraries</p>
        </div>

        <div className="flex items-center flex-col mt-8">
          <h2 className="text-2xl uppercase">This Website</h2>
          <Image src='/website.png' alt="Picture of website" width={500} height={500}/>
          <p>Three JS + NextJs</p>
        </div>

        <div className="flex items-center flex-col mt-8">
          <h2 className="text-2xl uppercase">BinSynth</h2>
          <p>INFO SOON</p>
        </div>
      </div>
    </main>
  );
}

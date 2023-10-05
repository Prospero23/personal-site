interface CodingDataItem {
    title: string;
    description: string;
    link?: string;
}

type CodingData = Record<number, CodingDataItem>;

const codingData: CodingData = {
    0: {
      title: "Bio",
      description:
        "I started coding using Max/MSP during lockdown after taking a class where we read some writing by Max Mathews. Originally, I built effects units and the sort for live performance with saxophone before switching into building more custom instruments to perform on. I started using text-based coding with C/C++ to try and build Max externals. My composition professor introduced me to using Python to generate compositional material and I started also doing this with js in Max. This got me into full-stack web development (React, NextJs, Express, Mongoose, AWS, etc.) where I am currently devoting my time and energy",
      
    },
    2: {
      title: "Synth",
      description:
        "Max/MSP using Flucoma library. Controlled using interfaces I made in TouchOSC on two old iPads",
    },
    1: {
      title: "binSynth",
      description:
        "Browser-based synth using p5.js, Tone.js, and MongoDB. Stores touch actions of previous performances for other users to be able to replay",
        link:'https://binsynth.vercel.app/'
    },
    3: {
      title: "VISS 0",
      description:
        "Max/MSP and JS using Bach and Vizzie. Related various video effects to different improvised systems and live triggered switches that the performer responded to. Video used a mix of stochastic processes and analyis of the player's performance",
    },
    4: { title: "Future Project", description: "FUTURE PROJECT HERE" },
    5: { title: "This Website", description: "Three JS + NextJs" },
  };
  
  export default codingData;
  
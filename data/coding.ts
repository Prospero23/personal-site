import { Face } from "@/components/code/cube/GriddedCube";

export type CodingCategory = "Max/MSP" | "Native" | "Web";

interface SideMeta {
  category: CodingCategory;
  title: string; // what to show as title when no project selected
  description: string; // default description for that face
}

export const SIDE_META: Record<Face, SideMeta | null> = {
  left: {
    category: "Web",
    title: "Web Projects",
    description:
      "Interactive web work built with Next.js, React Three Fiber, and other JS tools.",
  },
  right: {
    category: "Native",
    title: "Native / iOS",
    description:
      "Native apps in Swift and SwiftUI, often with audio / music tech focus.",
  },
  front: {
    category: "Max/MSP",
    title: "Max/MSP Systems",
    description:
      "Improvisation systems and performance tools built in Max/MSP.",
  },
  back: null,
  top: null,
  bottom: null,
};

export interface CodingDataItem {
  category: CodingCategory;
  title: string;
  description: string;
  link?: string;
}

// 4 squares per face
export type FaceData = [
  CodingDataItem | null,
  CodingDataItem | null,
  CodingDataItem | null,
  CodingDataItem | null,
];

// cube data keyed by face string
export type CodingDataBySide = Record<Face, FaceData>;

const codingData: CodingDataBySide = {
  front: [null, null, null, null],
  back: [null, null, null, null],
  right: [null, null, null, null],
  left: [null, null, null, null],
  top: [null, null, null, null],
  bottom: [null, null, null, null],
};

// const codingData: CodingData = {
//   0: {
//     title: "Bio",
//     description:
//       "I started coding using Max/MSP during lockdown after taking a class where we read some writing by Max Mathews. Originally, I built effects units and the sort for live performance with saxophone before switching into building more custom instruments to perform on. I started using text-based coding with C/C++ to try and build Max externals. My composition professor introduced me to using Python to generate compositional material and I started also doing this with js in Max. This got me into full-stack web development (React, NextJs, Express, Mongoose, AWS, etc.) where I am currently devoting my time and energy. Link to code on contact page.",
//   },
//   2: {
//     title: "Synth",
//     description:
//       "Max/MSP using Flucoma library. Controlled using interfaces I made in TouchOSC on two old iPads",
//   },
//   1: {
//     title: "binSynth",
//     description:
//       "Browser-based synth using p5.js, Tone.js, and MongoDB. Stores touch actions of previous performances for other users to be able to replay",
//     link: "https://binsynth.vercel.app/",
//   },
//   3: {
//     title: "VISS 0",
//     description:
//       "Max/MSP and JS using Bach and Vizzie. Related various video effects to different improvised systems and live triggered switches that the performer responded to. Video used a mix of stochastic processes and analyis of the player's performance",
//   },
//   4: {
//     title: "GPTGrooves",
//     description:
//       "Website that uses LangChain and the OpenAI API to generate house music. Runs AWS Lamda to generate new song every day. Audio generated using the WebAudio API and RNBO",
//     link: "https://GPTGrooves.vercel.app/",
//   },
//   5: { title: "This Website", description: "Three JS + NextJs" },
// };

export default codingData;

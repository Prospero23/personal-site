import { Face } from "@/components/code/cube/GriddedCube";

export type CodingCategory = "Max/MSP" | "Native" | "Web";
export interface CodingDataItem {
  title: string;
  description: string;
  imageURL: string;
  // projectKey, image, etc later
}

export type FaceData = [
  CodingDataItem | null,
  CodingDataItem | null,
  CodingDataItem | null,
  CodingDataItem | null,
];

interface FaceConfig {
  category: CodingCategory;
  title: string; // default title for face
  description: string; // default desc for face
  squares: FaceData; // 4 slots on that face
}

export type CodingConfig = Record<Face, FaceConfig | null>;

const ORhythmic: CodingDataItem = {
  title: "ORhythmic",
  description: "Nested tuplet metronome",
  imageURL: "orhythmic.png",
};

const synth: CodingDataItem = {
  title: "Synth",
  description: "Performance setup (Max + FluCoMa + TouchOSC and old iPads)",
  imageURL: "live-setup.png",
};

const viss0: CodingDataItem = {
  title: "VISS 0",
  description: "Max/MSP + JS audiovisual improv system using Bach and Vizzie.",
  imageURL: "viss0.png",
};

const binSynth: CodingDataItem = {
  title: "BinSynth",
  description:
    "Browser synth with p5.js + Tone.js + MongoDB. Stores previous performances.",
  imageURL: "binsynth.png",
};

const GPTGrooves: CodingDataItem = {
  title: "GPT Grooves",
  description:
    "LangChain + OpenAI site that generates a new house track daily.",
  imageURL: "gpt-grooves.png",
};

const portfolio: CodingDataItem = {
  title: "Portfolio",
  description: "This site! React Three Fiber, Next.js, etc.",
  imageURL: "portfolio.png",
};

export const CODING_CONFIG: CodingConfig = {
  front: {
    category: "Max/MSP",
    title: "Max/MSP Systems",
    description:
      "Improvisation systems and performance tools built in Max/MSP.",
    squares: [viss0, synth, null, null],
  },
  back: null,
  left: {
    category: "Web",
    title: "Web Projects",
    description:
      "Interactive web work built with Next.js, React Three Fiber, and other JS tools.",
    squares: [portfolio, binSynth, GPTGrooves, null],
  },
  right: {
    category: "Native",
    title: "Native / iOS",
    description:
      "Native apps in Swift and SwiftUI, often with audio / music tech focus.",
    squares: [ORhythmic, null, null, null],
  },
  top: null,
  bottom: null,
};

import { JSX } from "react";
import type { MDXComponents } from "mdx/types";
import { Face } from "@/components/code/cube/GriddedCube";
import binsynthMD from "@/data/markdown/binynth.mdx";
import ladybirdMD from "@/data/markdown/ladybird.mdx";
import gptGroovesMD from "@/data/markdown/gpt-grooves.mdx";
import ORhythmicMD from "@/data/markdown/ORhythmic.mdx";
import portfolioMD from "@/data/markdown/portfolio.mdx";
import synthMD from "@/data/markdown/synth.mdx";
import vexflowMD from "@/data/markdown/vexflow.mdx";
import viss0MD from "@/data/markdown/viss-0.mdx";

export type CodingCategory = "Max/MSP" | "Native" | "Web" | "Open-Source";

export type MDXContent = (props: { components?: MDXComponents }) => JSX.Element;
export interface CodingDataItem {
  title: string;
  description: string;
  imageURL: string;
  mdx: MDXContent;
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
  mdx: ORhythmicMD,
};

const synth: CodingDataItem = {
  title: "Synth",
  description: "Performance setup (Max + FluCoMa + TouchOSC and old iPads)",
  imageURL: "live-setup.png",
  mdx: synthMD,
};

const viss0: CodingDataItem = {
  title: "VISS 0",
  description: "Max/MSP + JS audiovisual improv system using Bach and Vizzie.",
  imageURL: "viss0.png",
  mdx: viss0MD,
};

const binSynth: CodingDataItem = {
  title: "BinSynth",
  description:
    "Browser synth with p5.js + Tone.js + MongoDB. Stores previous performances.",
  imageURL: "binsynth.png",
  mdx: binsynthMD,
};

const GPTGrooves: CodingDataItem = {
  title: "GPT Grooves",
  description:
    "LangChain + OpenAI site that generates a new house track daily.",
  imageURL: "gpt-grooves.png",
  mdx: gptGroovesMD,
};

const portfolio: CodingDataItem = {
  title: "Portfolio",
  description: "This site! React Three Fiber, Next.js, etc.",
  imageURL: "portfolio.png",
  mdx: portfolioMD,
};

const vexflow: CodingDataItem = {
  title: "Vexflow",
  description: "Music rendering library",
  imageURL: "vexflow.png",
  mdx: vexflowMD,
};

const ladybird: CodingDataItem = {
  title: "Ladybird",
  description: "Open-source web browser.",
  imageURL: "ladybird.png",
  mdx: ladybirdMD,
};

export const CODING_CONFIG: CodingConfig = {
  front: {
    category: "Max/MSP",
    title: "Max/MSP Systems",
    description:
      "Improvisation systems and performance tools built in Max/MSP.",
    squares: [viss0, null, null, synth],
  },
  back: {
    category: "Open-Source",
    title: "Open-Source Contributions",
    description: "Projects I have contributed to that are not my own.",
    squares: [vexflow, null, null, ladybird],
  },
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
    description: "Native apps in Swift and SwiftUI.",
    squares: [ORhythmic, null, null, null],
  },
  top: null,
  bottom: null,
};

const laptop = [
  {
    title: "BEASTS",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3351662876/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/",
  },
  {
    title: "BEASTS 2",
    src: "https://bandcamp.com/EmbeddedPlayer/album=5736703/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
  },
  {
    title: "stimulant",
    src: "https://bandcamp.com/EmbeddedPlayer/album=621373296/size=large/bgcol=ffffff/linkcol=f171a2/minimal=true/transparent=true/",
  },
  {
    title: "synonyms",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2169524843/size=large/bgcol=ffffff/linkcol=e99708/minimal=true/transparent=true/",
  },
  {
    title: "Nonalith",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1432124684/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/",
  },
];

const sax = [
  {
    title: "NEB",
    src: "https://bandcamp.com/EmbeddedPlayer/album=4242995147/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
  },
  {
    title: "Ben and Caleb 2",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3868216107/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
  },
  {
    title: "STALWART",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2311132352/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
  },
  {
    title: "STALWART 2",
    src: "https://bandcamp.com/EmbeddedPlayer/album=356793531/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/",
  },
  {
    title: "Octapus",
    src: "https://bandcamp.com/EmbeddedPlayer/album=308713918/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
  },
  {
    title: "Sepsis",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2842659991/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
  },
];

import Records from "@/components/Records";
import MusicCanvas from "@/components/MusicCanvas"

const Music = () => {
  return (
    <main className="flex items-center justify-center bg-pink-200 w-screen h-screen">
      <MusicCanvas albums={laptop}/>
    </main>
  );
};

export default Music;

//sax, code



{/* <div className="w-full h-full mt-20">
<h1 className="text-center text-4xl">MUSIC</h1>
<div className="flex flex-col justify-center items-center">
  <h2 className="">LAPTOP</h2>
  <Records records={laptop} />

  <h2>SAX</h2>
  <Records records={sax} />
</div>

<h2>aup</h2>
</div> */}
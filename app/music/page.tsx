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
    <main className="flex items-center justify-center bg-customPink w-screen h-screen">
      <MusicCanvas sax={sax} laptop={laptop}/>
    </main>
  );
};

export default Music;

//add better loading stuff

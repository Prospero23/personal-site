import { Instrument } from "@/components/music/RecordingFilters";

export interface Recording {
  title: string;
  src: string;
  kind: "audio" | "video";
  instrument: Instrument;
  isHighlight?: boolean;
}

const laptopRecords: Recording[] = [
    {
    title: "BEASTS",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3351662876/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'laptop'
  },
  {
    title: "BEASTS 2",
    src: "https://bandcamp.com/EmbeddedPlayer/album=5736703/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'laptop',
    isHighlight: true
  },
  {
    title: "stimulant",
    src: "https://bandcamp.com/EmbeddedPlayer/album=621373296/size=large/bgcol=ffffff/linkcol=f171a2/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'laptop',

  },

  {
    title: "synonyms",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2169524843/size=large/bgcol=ffffff/linkcol=e99708/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'laptop'
  },
  {
    title: "Nonalith",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1432124684/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'laptop'
  },
]

const saxRecords: Recording[] = [
  {
    title: "Solo Sax 1",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1350951124&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    kind: "audio",
    instrument: "sax",
  },
  {
    title: "NEB",
    src: "https://bandcamp.com/EmbeddedPlayer/album=4242995147/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'sax',
    isHighlight: true
  },
  {
    title: "Ben and Caleb 2",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3868216107/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'sax'

  },
  {
    title: "STALWART",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2311132352/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'sax'

  },
  {
    title: "STALWART 2",
    src: "https://bandcamp.com/EmbeddedPlayer/album=356793531/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'sax'

  },
  {
    title: "STALWART BLESSED",
    src: "https://bandcamp.com/EmbeddedPlayer/album=598708310/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
    kind: "audio",
    instrument: "sax",
    isHighlight: true
  },
  {
    title: "Octapus",
    src: "https://bandcamp.com/EmbeddedPlayer/album=308713918/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'sax'

  },
  {
    title: "Sepsis",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2842659991/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
    kind: 'audio',
    instrument: 'sax'
  },
];

const laptopVideos: Recording[] = [
  {
    title: "Solo Laptop",
    src: "https://www.youtube.com/embed/p0V3MkqAzrw?si=4Of3V29bF5kprIhx",
    kind: 'video',
    instrument: 'laptop',
    isHighlight: true
  },
  {
    title: "Dubow/Eidson/Abramovski/Eylam",
    src: "https://www.youtube.com/embed/D7TMtrqmKDg?si=sxidMEG2HtXplnh2",
    kind: "video",
    instrument: "laptop"
  },
  {
    title: "Sax and Laptop",
    src: "https://www.youtube.com/embed/deahVmtTZgo?si=WSe1l13SGtJ5YwGV",
    kind: 'video',
    instrument: 'laptop',
    isHighlight: true
  }
]


const saxVideoes: Recording[] = [
  {
    title: "Jamison/Ben",
    src: "https://www.youtube.com/embed/2gB_4YjCbNk?si=gLm4qTlcas4V92bj",
    kind: 'video',
    instrument: 'sax'
  },
  {
    title: "Daisy/Ben",
    src: "https://www.youtube.com/embed/_hnE9eToU5I?si=bPisp4xSW1COHQo-",
    kind: "video",
    instrument: "sax"
  },
  {
    title: "Solo",
    src: "https://www.youtube.com/embed/NCWWoi8wvPI?si=fmjhQBZ55dUfKT7b",
    kind: 'video',
    instrument: 'sax',
    isHighlight: true
  }, 
  {
    title: "Greene/Murray/Eidson",
    src: "https://www.youtube.com/embed/C3K4pR54VFo?si=mIf6rU0vsNILkq9-",
    kind: "video",
    instrument: "sax"
  }, 
  {
    title: "Hoffman Quartet",
    src: "https://www.youtube.com/embed/Xy5MycPatVo?si=HG1YjQ2qySQw79eE",
    kind: "video",
    instrument: "sax"
  }
]

export const recordings: Recording[] = [...laptopRecords, ...saxRecords, ...laptopVideos, ...saxVideoes]

//
"use client";

import { useRef, useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({videoID}) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const onReady = (event) => {
    // Store the player object for use later
    playerRef.current = event.target;
  };

  const onPlay = () => {
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
    setIsStarted(true)
  };

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const opts = {
    height: "300",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  const pointerEventsClass = isPlaying ? 'pointer-events-auto' : 'pointer-events-none touch-none';
  const zButton = isStarted ? 'z-40 bg-red-500 rounded-lg p-2' : ''

  return (
    <div className="flex items-center justify-center touch-none">
      {!isPlaying && <button onClick={playVideo} className={`${zButton}`}>Resume</button>}
      <YouTube
        videoId={videoID}
        opts={opts}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        className={`pointer-events-none touch-none absolute ${pointerEventsClass}`}
      />
    </div>
  );
};

export default VideoPlayer;

"use client";
import { useState } from "react";

export default function Records({ records }) {
  const [allowHoverEvents, setAllowHoverEvents] = useState(true);

  const toggleHoverEvents = () => {
    setAllowHoverEvents(!allowHoverEvents);
  };

  return (
    <>
      {records.map((album, index) => (
        <div
          key={index}
          className="ml-20 relative z-0 scroll-smooth"
          onClick={toggleHoverEvents}
          onMouseEnter={() => setAllowHoverEvents(true)}
          onMouseLeave={() => setAllowHoverEvents(false)}
          style={{ pointerEvents: allowHoverEvents ? "auto" : "none" }}
        >
          <iframe
            key={index}
            src={album.src}
            seamless
            allow="autoplay; encrypted-media"
            width={350}
            height={350}
            className="z-0 pointer-events-auto"
            style={{ pointerEvents: allowHoverEvents ? "none" : "auto" }}
          />
          {/* Invisible pseudo-element to enable scrolling */}
          <div
            className="absolute inset-0 w-full h-full z-40"
            style={{ pointerEvents: allowHoverEvents ? "auto" : "none" }}
          />
        </div>
      ))}
    </>
  );
}

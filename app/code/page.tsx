export default function Code() {
  return (
    <main className="flex items-center bg-customPink text-black">
      <div className="mt-20 justify-center w-screen h-screen">
        <h1 className="text-center">Code</h1>

        <p>Piece written with Max/MSP and Javascript</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZwfgKpYsR80"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p>Max/MSP instrument</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AIMB2VJclkQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <p>+MORE</p>
      </div>
    </main>
  );
}

interface ProjectVideoProps {
  videoUrl: string;
  videoDescription: string;
}

export default function ProjectVideo({
  videoUrl,
  videoDescription,
}: ProjectVideoProps) {
  return (
    <div className="mt-3 rounded-lg border border-black/10 bg-black/5 p-2">
      <div className="aspect-video w-full overflow-hidden rounded-md">
        <iframe
          src={videoUrl}
          className="h-full w-full"
          title="ORhythmic video demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <p className="mt-2 text-xs text-zinc-700">{videoDescription}</p>
    </div>
  );
}

import Image from "next/image";

interface ProjectImageProps {
  imageUrl: string;
  imageAlt: string;
  imageDescription: string;
  imageDestination: string;
  aspect?: "video" | "square" | "photo";
  priority?: boolean;
  maxWidthClass?: string;
}

export default function ProjectImage({
  imageUrl,
  imageAlt,
  imageDescription,
  imageDestination,
  aspect = "photo",
  priority = false,
  maxWidthClass = "max-w-sm", // ~28rem
}: ProjectImageProps) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[4/3]";

  return (
    <div className={`mt-2 mx-auto ${maxWidthClass}`}>
      <div className="rounded-lg border border-black/10 bg-black/5 p-1">
        <div
          className={`${aspectClass} relative w-full overflow-hidden rounded-md`}
        >
          <a
            href={imageDestination}
            target="_blank"
            className="relative block h-full w-full"
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              priority={priority}
              className="object-cover"
            />
          </a>
        </div>
        <p className="mt-2 text-xs text-zinc-700">{imageDescription}</p>
      </div>
    </div>
  );
}

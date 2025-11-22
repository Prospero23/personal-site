interface ProjectHeaderProps {
  dates: string;
  summary: string;
  codeUrl: string;
}

export default function ProjectHeader({
  dates,
  summary,
  codeUrl,
}: ProjectHeaderProps) {
  return (
    <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-xs font-mono uppercase tracking-wide text-zinc-700">
          {dates}
        </div>
        <p className="mt-1 text-sm text-zinc-800">{summary}</p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-800 hover:bg-zinc-800 hover:text-customPink transition text-center"
        >
          View code
        </a>
      </div>
    </div>
  );
}

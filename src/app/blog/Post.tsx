import { Link } from "next-view-transitions";
import { DateTime } from "luxon";

type Meta = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
};

export default function Post({ meta }: { meta: Meta }) {
  return (
    <Link
      key={meta.slug}
      href={`/blog/${meta.slug}`}
      className="group block w-full rounded-md bg-zinc-800 from-zinc-800 via-zinc-700 to-zinc-800 bg-300% px-6 py-4 shadow-md hover:bg-zinc-700 hover:bg-gradient-to-tl motion-safe:animate-gradient"
    >
      <div className="mb-1 flex items-center gap-3">
        <span className="text-sm text-zinc-400">{DateTime.fromISO(meta.date).toLocaleString()}</span>
        <div>
          {meta.tags.sort().map((tag) => (
            <span
              key={tag}
              className="mr-2 inline-block rounded bg-zinc-700 px-2 py-1 text-xs font-semibold tracking-wide group-hover:bg-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h2 className="mb-1 text-xl font-semibold">{meta.title}</h2>
      <p className="text-sm">{meta.description}</p>
    </Link>
  );
}

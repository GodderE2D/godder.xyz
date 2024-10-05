"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { HiExternalLink } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import Tooltip from "./Tooltip";

const PATHS = {
  "/": "Home",
  "/blog": "Blog",
};

export default function Footer({ commitSha }: { commitSha?: string }) {
  const pathname = usePathname();

  return (
    <footer className="mx-4 flex items-center justify-center">
      <div className="mb-12 mt-24 flex w-full max-w-prose flex-col items-center gap-2 text-zinc-400 md:flex-row md:justify-between md:gap-0">
        <div className="flex w-full items-center gap-3 md:w-auto">
          <Tooltip content="so like it's actually licensed under Apache-2.0">
            <span>© {new Date().getFullYear()} Godder.xyz</span>
          </Tooltip>
          <a
            href="https://github.com/sponsors/GodderE2D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded bg-zinc-800 px-3 pb-1 pt-[calc(0.25rem+2px)] text-sm text-zinc-300 transition-all hover:bg-zinc-700 hover:text-zinc-200"
          >
            <GoHeart className="mb-[2px] mr-1.5 h-4 w-4 stroke-1 text-[#db61a2]" />
            Sponsor
          </a>
          {commitSha ? (
            <a
              href={`https://github.com/GodderE2D/godder.xyz/commit/${commitSha}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-fit items-center rounded bg-zinc-800 px-1 text-sm text-blue-500 hover:underline md:flex"
            >
              <code>{commitSha.slice(0, 7)}</code>
            </a>
          ) : (
            ""
          )}
          <a
            href="https://github.com/GodderE2D/godder.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1 underline md:flex"
          >
            <span>Source</span>
            <HiExternalLink className="opacity-0 transition-all group-hover:opacity-100" />
          </a>
        </div>
        <div className="flex w-full justify-between md:w-auto">
          <div className="flex gap-3 md:hidden">
            {commitSha ? (
              <a
                href={`https://github.com/GodderE2D/godder.xyz/commit/${commitSha}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-zinc-800 px-1 pt-[2px] text-sm text-blue-500 hover:underline"
              >
                <code>{commitSha.slice(0, 7)}</code>
              </a>
            ) : (
              ""
            )}
            <a
              href="https://github.com/GodderE2D/godder.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 underline"
            >
              <span>Source</span>
              <HiExternalLink className="opacity-0 transition-all group-hover:opacity-100" />
            </a>
          </div>
          <div className="flex gap-3">
            {Object.entries(PATHS).map(([path, name]) => (
              <Link
                key={path + name}
                href={path}
                className={`${pathname === path ? "font-semibold" : "underline hover:text-zinc-300"}`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

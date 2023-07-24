"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiExternalLink } from "react-icons/hi";

const PATHS = {
  "/": "Home",
  "/blog": "Blog",
};

export default function Footer({ commitSha }: { commitSha?: string }) {
  const pathname = usePathname();

  return (
    <footer className="mx-4 flex items-center justify-center">
      <div className="mb-12 mt-24 flex w-full max-w-prose items-center gap-3 text-zinc-400">
        <span>© {new Date().getFullYear()} Godder.xyz</span>
        {commitSha ? (
          <a
            href={`http://github.com/GodderE2D/godder.xyz/commit/${commitSha}`}
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
          href="http://github.com/GodderE2D/godder.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 underline"
        >
          <span>Source</span>
          <HiExternalLink className="opacity-0 transition-all group-hover:opacity-100" />
        </a>
        <div className="ml-auto flex gap-3">
          {Object.entries(PATHS).map(([path, name]) => (
            <Link key={path + name} href={path} className={`${pathname === path ? "font-semibold" : "underline"}`}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

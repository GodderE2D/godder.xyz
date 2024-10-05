"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

const PATHS = {
  "/": "Home",
  "/blog": "Blog",
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mx-4 flex items-center justify-center">
      <div className="mt-16 flex w-full max-w-prose justify-end gap-3 text-zinc-400">
        {Object.entries(PATHS).map(([path, name]) => (
          <Link
            key={path + name}
            href={path}
            className={`float-right ${pathname === path ? "font-semibold" : "underline hover:text-zinc-300"}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

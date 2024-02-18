import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { getPosts } from "../../app/blog/get-posts";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { BlogTileDays } from "../BlogTileDays";

export default async function Blog() {
  const posts = await getPosts();
  const postDate = posts[0].meta.date;

  return (
    <Link
      className="group col-span-3 row-span-2 rounded-xl bg-teal-950 p-5 shadow transition-all duration-500 hover:scale-95 md:col-span-2 md:p-7"
      href="/blog"
    >
      <div>
        <div className="mb-2 flex w-full items-center justify-between">
          <h2 className="bg-gradient-to-tl from-teal-500 to-teal-300 bg-clip-text text-lg font-extrabold text-transparent md:text-xl">
            Blog
          </h2>
          <HiArrowUpRight className="h-5 w-5 stroke-1 opacity-80 transition-all group-hover:opacity-100" />
        </div>
        <div className="flex flex-col gap-2">
          It&apos;s been <BlogTileDays postDate={postDate} /> days since my last post. But if you want to check them
          out, they&apos;re usually about technology, whether that be Discord, programming, or cyber.
        </div>
      </div>
    </Link>
  );
}

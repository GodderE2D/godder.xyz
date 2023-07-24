"use client";

import "highlight.js/styles/github-dark.css";
import Highlight from "highlight.js";
import { useEffect } from "react";

export default function Article({ staticMarkup }: { staticMarkup: string }) {
  useEffect(() => Highlight.highlightAll());

  return (
    <article
      className="
      prose prose-invert mt-8
      prose-headings:my-4 prose-headings:text-zinc-300
      prose-code:rounded prose-code:bg-zinc-800 prose-code:p-1 prose-code:text-zinc-200
      prose-code:before:hidden prose-code:after:hidden
      prose-hr:my-5"
      dangerouslySetInnerHTML={{ __html: staticMarkup }}
    />
  );
}

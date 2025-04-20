import { ResolvingMetadata } from "next";
import { ReactNode } from "react";
import { getPosts } from "../get-posts";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }, parent: ResolvingMetadata) {
  const params = await props.params;
  const page = (await getPosts()).find((post) => post.meta.slug === params.slug);
  if (!page) return void console.warn("No page found for slug", params.slug);

  return {
    title: `${page.meta.title} · GodderE2D`,
    description: page.meta.description,
  };
}

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return children;
}

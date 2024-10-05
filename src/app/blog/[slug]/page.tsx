import { getPosts } from "../get-posts";
import { DateTime } from "luxon";
import { Link } from "next-view-transitions";
import Signature from "./Signature";
import renderToStaticMarkup from "../render-to-static-markup";
import Article from "./Article";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ meta }) => {
    return {
      slug: meta.slug,
    };
  });
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = (await getPosts()).find((post) => post.meta.slug === params.slug);
  if (!post) throw new Error("Post not found");

  const staticMarkup = await renderToStaticMarkup(<>{post.html}</>);

  return (
    <main>
      <div className="mx-4 mt-8 flex items-center justify-center">
        <div className="mt-5 w-full max-w-prose">
          <Signature position="left" className="mb-2 block md:hidden" />
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm text-zinc-400">{DateTime.fromISO(post.meta.date).toLocaleString()}</span>
            <div>
              {post.meta.tags.sort().map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="mr-2 inline-block rounded bg-zinc-800 px-2 py-1 text-xs font-semibold tracking-wide hover:bg-zinc-700"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <Signature position="right" className="hidden md:block" />
          </div>
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">{post.meta.title}</h1>
          <p>{post.meta.description}</p>
          <div className="prose prose-invert prose-hr:mt-5">
            <hr />
          </div>
          <Article staticMarkup={staticMarkup} />
        </div>
      </div>
    </main>
  );
}

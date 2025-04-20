import Post from "../../Post";
import { getPosts } from "../../get-posts";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  const tags = [...new Set(posts.map(({ meta }) => meta.tags).flat())];

  return tags.map((tag) => ({ tag }));
}

export default async function Tag(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params;
  const posts = (await getPosts()).filter((post) => post.meta.tags.includes(params.tag));
  if (!posts) throw new Error(`No posts found with ${params.tag} tag`);

  return (
    <main>
      <div className="mx-4 mt-8 flex items-center justify-center">
        <div className="mt-5 w-full max-w-prose">
          <h1 className="mb-8 text-3xl font-bold">
            Posts tagged with <code>{params.tag}</code>
          </h1>
          <div className="flex flex-col gap-4">
            {posts.map(({ meta }) => (
              <Post key={meta.slug} meta={meta} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

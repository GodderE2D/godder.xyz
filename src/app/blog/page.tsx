import { getPosts } from "./get-posts";
import Post from "./Post";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main>
      <div className="mx-4 mt-8 flex items-center justify-center">
        <div className="w-full max-w-prose">
          <h1 className="mb-8 bg-gradient-to-tl from-red-500 via-amber-400 to-red-300 bg-300% bg-clip-text pb-px text-4xl font-bold text-transparent motion-safe:animate-gradient">
            Blog
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

import React from "react";
import Link from "next/link";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import dayjs from "dayjs";
import { supabase } from "../../utils/supabaseClient";
import { BlogsType } from "../../types/supabase";
import toast from "react-hot-toast";

export const getServerSideProps: GetServerSideProps<{
  rawBlogsData: BlogsType[];
}> = async () => {
  const { data, error } = await supabase
    .from<BlogsType>("blogs")
    .select()
    .limit(10)
    .order("createdAt", { ascending: false });

  if (error) throw error;

  return {
    props: {
      rawBlogsData: data || [],
    },
  };
};

const formatDate = (date: string | number | Date) =>
  dayjs(new Date(date)).format("dddd, MMMM D, YYYY");

const Blog: NextPage<{ rawBlogsData: BlogsType[] }> = ({ rawBlogsData }) => {
  const [blogsData, setBlogsData] = React.useState(rawBlogsData);

  return (
    <div>
      <Head>
        <title>Blog · GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />

        <meta property="og:title" content="Blog · GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-rounded.png" />
        <meta name="theme-color" content="#40bf6c" />
        <meta
          name="description"
          content="Sometimes I post here for some reason, and no ones sees it. That's sad..."
        />
        <meta
          property="og:description"
          content="Sometimes I post here for some reason, and no ones sees it. That's sad..."
        />
        <meta itemProp="name" content="Blog · GodderE2D" />
        <meta
          itemProp="description"
          content="Sometimes I post here for some reason, and no ones sees it. That's sad..."
        />
        <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
        <meta itemProp="image" content="/logo-rounded.png" />
        <meta itemProp="imageUrl" content="/logo-rounded.png" />
      </Head>

      <Navbar />

      <div className="lg:mx-36 md:mx-12 mx-4">
        <div className="text-left mx-4">
          <h1 className="mb-5 text-5xl font-extrabold">Blog</h1>

          <p className="max-w-xl">
            Sometimes I post here for some reason, and no ones sees it. That
            {"'"}s sad...
          </p>

          <div className="h-2" />

          <p className="max-w-xl">
            Note: Blogs are currently a work-in progress.
          </p>
        </div>

        <div className="h-14" />

        <div>
          <div className="flex flex-col w-full">
            {blogsData.map((blog: BlogsType) => (
              <div key={blog.slug}>
                <Link href={`/blog/${blog.slug}`} passHref>
                  <div className="grid card bg-base-300 rounded-box cursor-pointer">
                    <div className="mx-6 my-6">
                      {blog.tags.map((tag: string) => (
                        <div key={tag} className="badge badge-success mr-2">
                          {tag}
                        </div>
                      ))}

                      <div className="h-2" />

                      <h3 className="text-2xl">
                        <strong>{blog.title}</strong>
                      </h3>

                      <p>{blog.description}</p>

                      <small className="opacity-60">
                        Created on {formatDate(blog.createdAt)}
                        {blog.createdAt === blog.updatedAt ||
                          ` • Updated on ${formatDate(blog.updatedAt)}`}
                      </small>
                    </div>
                  </div>
                </Link>
                <div className="h-4" />
              </div>
            ))}

            <small
              className="opacity-60 link"
              onClick={async () => {
                toast.success("Loading more blogs...");

                const { data, error } = await supabase
                  .from<BlogsType>("blogs")
                  .select()
                  .order("createdAt", { ascending: false })
                  .range(blogsData.length, blogsData.length + 10)
                  .limit(10);

                if (error) {
                  console.error(error);
                  return toast.error(
                    "An unexpected error occurred when fetching blogs. Refer to the console for details."
                  );
                }

                if (!data?.length)
                  return toast.error("You've reached the end.");

                const newBlogsData = blogsData.concat(data);
                setBlogsData(newBlogsData);

                toast.success("More blogs! Yum!");
              }}
            >
              Load more...
            </small>
          </div>
        </div>
      </div>

      <Footer blogData={blogsData[0]} />
    </div>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { EllipsisHorizontal } from "react-ionicons";
import dayjs from "dayjs";
import { supabase } from "../../utils/supabaseClient";
import { BlogsType } from "../../types/supabase";
import toast from "react-hot-toast";
import Router from "next/router";
import { evaluateSync } from "@mdx-js/mdx";
import runtime from "react/jsx-runtime";
import { useRouter } from "next/router";
import { pageview } from "../../utils/ga";

const formatDate = (date: string | number | Date) =>
  dayjs(new Date(date)).format("dddd, MMMM D, YYYY");

// Generated by GitHub Copilot 💚
// A function to calculate read time based on how many characters there are.
const calculateReadTime = (content: string) => {
  const words = content.split(" ").length;
  const minutes = Math.ceil(words / 200);
  return minutes;
};

export const getServerSideProps: GetServerSideProps<{
  blogData: BlogsType;
  latestBlogData: BlogsType | null;
}> = async (context) => {
  const { data, error } = await supabase
    .from<BlogsType>("blogs")
    .select()
    .eq("slug", context.params?.slug ?? "")
    .limit(1);

  const { data: latestData, error: latestError } = await supabase
    .from<BlogsType>("blogs")
    .select()
    .limit(1)
    .order("createdAt", { ascending: false })
    .single();

  if (error) throw { error, requestSlug: context.params?.slug ?? "" };
  if (!data?.[0]) return { notFound: true };

  let newLatestData = latestData;
  if (latestError) newLatestData = null;

  return {
    props: {
      blogData: data[0],
      latestBlogData: newLatestData,
    },
  };
};

const BlogPage: NextPage<{
  blogData: BlogsType;
  latestBlogData: BlogsType | null;
}> = ({ blogData, latestBlogData }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const [isRawDataModalOpen, setRawDataModalOpen] = useState(false);

  // @ts-expect-error idk what's wrong, either way it works. probably a typing error in react/jsx-runtime
  const { default: MDXContent } = evaluateSync(blogData.content, {
    ...runtime,
    useDynamicImport: true,
  });

  return (
    <div>
      <Head>
        <title>{blogData.title} · GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />

        <meta property="og:title" content={`${blogData.title} · GodderE2D`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-rounded.png" />
        <meta name="theme-color" content="#40bf6c" />
        <meta name="description" content={blogData.description} />
        <meta property="og:description" content={blogData.description} />
        <meta itemProp="name" content={`${blogData.title} · GodderE2D`} />
        <meta itemProp="description" content={blogData.description} />
        <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
        <meta itemProp="image" content="/logo-rounded.png" />
        <meta itemProp="imageUrl" content="/logo-rounded.png" />
      </Head>

      <Navbar />

      <div className="mx-4 md:mx-12 lg:mx-36">
        <div className="mx-4 text-left">
          <div className="dropdown dropdown-end float-right">
            <div tabIndex={0} className="btn btn-ghost m-1">
              <EllipsisHorizontal />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a
                  onClick={async () => {
                    if (!navigator.clipboard)
                      return toast.error(
                        "Your browser currently does not support this feature."
                      );

                    try {
                      await navigator.clipboard.writeText(
                        `https://godder.xyz/blog/${blogData.slug}`
                      );

                      toast.success(
                        `Link copied to clipboard:\nhttps://godder.xyz/blog/${blogData.slug}
                        `,
                        { duration: 5000 }
                      );
                    } catch (error) {
                      console.error(error);
                      toast.error(
                        "An unexpected error occurred. Refer to the console for details.",
                        { duration: 10000 }
                      );
                    }
                  }}
                >
                  Copy Link
                </a>
              </li>
              <li>
                <a
                  onClick={async () => {
                    if (!navigator.clipboard)
                      return toast.error(
                        "Your browser currently does not support this feature."
                      );

                    try {
                      await navigator.clipboard.writeText(blogData.id);

                      toast.success(
                        `Blog ID copied to clipboard:\n${blogData.id}
                        `,
                        { duration: 5000 }
                      );
                    } catch (error) {
                      console.error(error);
                      toast.error(
                        "An unexpected error occurred. Refer to the console for details.",
                        { duration: 10000 }
                      );
                    }
                  }}
                >
                  Copy ID
                </a>
              </li>
              <li>
                <a onClick={() => setRawDataModalOpen(true)}>
                  See Raw API Data
                </a>
              </li>
              {supabase.auth.user()?.email ===
                process.env.NEXT_PUBLIC_SITE_OWNER_EMAIL_ADDRESS && (
                <>
                  <li>
                    <a>Edit</a>
                  </li>
                  <li>
                    <a
                      onClick={async () => {
                        const { error } = await supabase
                          .from<BlogsType>("blogs")
                          .delete()
                          .eq("id", blogData.id);

                        if (error) {
                          console.error(error);
                          return toast.error(
                            "An unexpected error occurred when deleting the blog. Refer to the console for details.",
                            { duration: 5000 }
                          );
                        }

                        toast.success(
                          "Blog deleted successfully. Redirecting you to homepage.",
                          { duration: 5000 }
                        );
                        setTimeout(() => Router.push("/"), 5000);
                      }}
                    >
                      Delete
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className={`modal ${isRawDataModalOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
              <label className="label">
                <span className="label-text">Raw API Data</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-96 w-full resize-none font-mono"
                value={JSON.stringify(blogData, null, 2)}
                readOnly
              />

              <div className="modal-action">
                <button
                  className="btn btn-primary text-base-100"
                  onClick={async () => {
                    if (!navigator.clipboard)
                      return toast.error(
                        "Your browser currently does not support this feature."
                      );

                    try {
                      await navigator.clipboard.writeText(
                        JSON.stringify(blogData, null, 2)
                      );

                      toast.success("Raw API data copied to clipboard.");
                    } catch (error) {
                      console.error(error);
                      toast.error(
                        "An unexpected error occurred. Refer to the console for details.",
                        { duration: 10000 }
                      );
                    }
                  }}
                >
                  Copy Raw API Data
                </button>

                <button
                  className="btn"
                  onClick={() => setRawDataModalOpen(false)}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>

          {blogData.tags.map((tag: string) => (
            <div key={tag} className="badge badge-success mr-2">
              {tag}
            </div>
          ))}

          <div className="h-2" />

          <h1 className="mb-5 text-5xl font-extrabold">{blogData.title}</h1>

          <small className="opacity-60">
            Created on {formatDate(blogData.createdAt)}{" "}
            {blogData.updatedAt === blogData.createdAt ||
              `• Updated on ${formatDate(blogData.updatedAt)}`}{" "}
            • {calculateReadTime(blogData.content)} minute
            {calculateReadTime(blogData.content) !== 1 && "s"} read
          </small>

          <div className="h-4" />

          <div className="prose">
            <MDXContent />
          </div>
        </div>
      </div>

      <Footer blogData={latestBlogData} />
    </div>
  );
};

export default BlogPage;

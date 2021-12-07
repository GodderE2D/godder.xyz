/*
  This page has been moved from pages/write.tsx to pages/write/index.tsx
  This is due to the MDX blog preview imports not working in the old
  location due to their location with relative paths imports.
*/

import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import toast from "react-hot-toast";
import { supabase } from "../../utils/supabaseClient";
import parserMarkdown from "prettier/parser-markdown";
import prettier from "prettier/standalone";
import { BlogsType } from "../../types/supabase";
import Router from "next/router";
import { evaluateSync } from "@mdx-js/mdx";
import type { MDXContent } from "mdx/types";
import runtime from "react/jsx-runtime";
// Do not remove below import.
import Alert from "../../utils/Alert";

export const getServerSideProps: GetServerSideProps<{
  blogData: BlogsType | null;
}> = async () => {
  const { data, error } = await supabase
    .from<BlogsType>("blogs")
    .select()
    .limit(1)
    .order("createdAt", { ascending: false });

  if (error) throw error;

  return {
    props: {
      blogData: data?.[0] ?? null,
    },
  };
};

type DraftType = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  content: string;
};

const Write: NextPage<{ blogData: BlogsType | null }> = ({ blogData }) => {
  const email = supabase.auth.user()?.email;
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [contentMode, setContentMode] = useState("code");
  const [MDXContent, setMDXContent] = useState<MDXContent>();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!title && !description && !slug && !tags.length && !content) return;

      if (title === supabase.auth.user()?.user_metadata.title) return;
      if (description === supabase.auth.user()?.user_metadata.description)
        return;
      if (slug === supabase.auth.user()?.user_metadata.slug) return;
      if (tags === supabase.auth.user()?.user_metadata.tags) return;
      if (content === supabase.auth.user()?.user_metadata.content) return;

      const { error } = await supabase.auth.update({
        data: {
          blogDraft: {
            title,
            description,
            slug,
            tags,
            content,
          },
        },
      });

      if (error) {
        console.error(error);
        toast.error(
          "An unexpected error occurred while saving a draft. Refer to the console for details."
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [title, description, slug, tags, content]);

  return (
    <div>
      <Head>
        <title>Write a Blog · GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#40bf6c" />
      </Head>

      <Navbar />

      <div className="lg:mx-36 md:mx-12 mx-4">
        <h1 className="mb-6 text-5xl font-extrabold">Write a Blog</h1>

        {email !== process.env.NEXT_PUBLIC_SITE_OWNER_EMAIL_ADDRESS ? (
          <p>You do not have sufficient permissions required to do this.</p>
        ) : (
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-1/2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Slug</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-1/2"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-1/2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Tags (separated by spaces)</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-1/2"
              value={tags.join(" ")}
              onChange={(e) => setTags(e.target.value.split(" "))}
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Content (supports MDX)</span>
            </label>

            <div className="tabs tabs-boxed">
              <button
                className={`tab ${contentMode === "code" ? "tab-active" : ""}`}
                onClick={() => setContentMode("code")}
              >
                Code
              </button>
              <button
                className={`tab ${
                  contentMode === "preview" ? "tab-active" : ""
                }`}
                onClick={async () => {
                  setMDXContent(undefined);
                  setContentMode("preview");

                  try {
                    // @ts-expect-error
                    const { default: tempMDXContent } = evaluateSync(content, {
                      ...runtime,
                      useDynamicImport: true,
                    });

                    setMDXContent(tempMDXContent);
                  } catch (error) {
                    console.error(error);
                    toast.error(
                      "An unexpected error occurred when generating MDX preview. Refer to the console for details.",
                      { duration: 5000 }
                    );
                  }
                }}
              >
                Preview
              </button>
              <button
                className="tab"
                onClick={() => {
                  const formatted = prettier.format(content, {
                    parser: "mdx",
                    plugins: [parserMarkdown],
                  });

                  setContent(formatted);
                  toast.success("Content formatted!");
                }}
              >
                Format with Prettier
              </button>
            </div>

            {contentMode === "code" ? (
              <textarea
                className="textarea textarea-bordered font-mono h-96 w-full mt-1"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            ) : (
              <div>
                <div className="h-3" />
                <div className="mockup-window bg-base-300">
                  <div className="p-4 bg-base-200">
                    {MDXContent ? (
                      <div className="prose">{MDXContent}</div>
                    ) : (
                      <p>Generating MDX content preview...</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="h-8" />

            <button
              className={`btn btn-primary ${loading ? "loading" : ""} mr-1`}
              onClick={async () => {
                setLoading(true);

                if (!title || !slug || !description || !content) {
                  setLoading(false);
                  return toast.error("Please fill out the required fields.");
                }

                const formatted = prettier.check(content, {
                  parser: "mdx",
                  plugins: [parserMarkdown],
                });

                if (!formatted) {
                  setLoading(false);
                  return toast.error(
                    "Content must be formatted using Prettier to publish."
                  );
                }

                const { data, error } = await supabase
                  .from<BlogsType>("blogs")
                  .insert({
                    title: title,
                    description: description,
                    slug: slug,
                    tags: tags,
                    content: content,
                  });

                if (error) {
                  setLoading(false);
                  console.error(error);
                  return toast.error(
                    `An unexpected error occurred when publishing: ${error.message}`,
                    { duration: 10000 }
                  );
                }

                setLoading(false);
                toast.success(
                  "Blog published successfully! Redirecting you to the blog page...",
                  { duration: 3000 }
                );
                setTimeout(() => Router.push(`/blog/${slug}`), 3000);
              }}
            >
              Publish Blog
            </button>
            <div
              data-tip={
                slug
                  ? `https://godder.xyz/blog/${slug}`
                  : "A slug is required to generate a link."
              }
              className="tooltip link"
            >
              <button
                className="btn mx-1"
                onClick={async () => {
                  if (!slug)
                    return toast.error(
                      "A slug is required to generate a link."
                    );

                  if (!navigator.clipboard)
                    return toast.error(
                      "Your browser currently does not support this feature."
                    );

                  try {
                    await navigator.clipboard.writeText(
                      `https://godder.xyz/blog/${slug}`
                    );

                    toast.success(
                      `Link copied to clipboard:\nhttps://godder.xyz/blog/${slug}`,
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
              </button>
            </div>

            <button
              className={`btn btn-accent ml-1`}
              onClick={() => {
                const fetched: DraftType =
                  supabase.auth.user()?.user_metadata.blogDraft;
                setTitle(fetched?.title);
                setSlug(fetched?.slug);
                setDescription(fetched?.description);
                setContent(fetched?.content);
                setTags(fetched?.tags ?? []);
              }}
            >
              Load Draft
            </button>

            <div className="h-3" />

            <small className="opacity-60">
              A draft has been saved to the database and can be restored on
              future visits on this device and browser.
            </small>
          </div>
        )}
      </div>

      <Footer blogData={blogData} />
    </div>
  );
};

export default Write;

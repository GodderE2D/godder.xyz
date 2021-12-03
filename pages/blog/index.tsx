import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  HeartOutline,
  EyeOutline,
  ChatbubbleEllipsesOutline,
} from "react-ionicons";
import dayjs from "dayjs";

type BlogInfo = {
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
};

type BlogInfoArr = BlogInfo[];

const slug = (title: string) => encodeURIComponent(title);
const formatDate = (date: number) =>
  dayjs(new Date(date)).format("dddd, MMMM D, YYYY");

const Blog: NextPage = () => {
  const data: BlogInfoArr = [
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Blog Title #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
  ];

  return (
    <div>
      <Head>
        <title>Blog · GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />
        <link type="application/json+oembed" href="/json-oembed.json"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />

        <meta property="og:title" content="Blog · GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-rounded.png" />
        <meta name="theme-color" content="#40bf6c" />
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
            <br />
            <strong>Coming Soon 👀</strong>
          </p>
        </div>

        <div className="h-14" />

        <div className="hidden">
          <div className="flex flex-col w-full">
            {data.map((blog: BlogInfo) => (
              <div key={slug(blog.title)}>
                <Link href={`/blog/${slug(blog.title)}`} passHref>
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
                        {blog.updatedAt &&
                          ` • Updated on ${formatDate(blog.updatedAt)}`}
                      </small>

                      <div>
                        <span className="mr-2">
                          <EyeOutline cssClasses="inline mr-1" />
                          {blog.views}
                        </span>
                        <span className="mx-2">
                          <HeartOutline cssClasses="inline mr-1" />
                          {blog.likes}
                        </span>
                        <span className="ml-2">
                          <ChatbubbleEllipsesOutline cssClasses="inline mr-1" />
                          {blog.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;

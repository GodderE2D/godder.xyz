import React, { useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { HeartOutline, EyeOutline, ChatbubbleEllipsesOutline } from 'react-ionicons';
import dayjs from 'dayjs';

type BlogInfo = {
  title: string,
  description: string,
  createdAt: number,
  updatedAt: number,
  views: number,
  likes: number,
  comments: number,
  tags: string[],
};

type BlogInfoArr = BlogInfo[];

const slug = (title: string) => encodeURIComponent(title);
const formatDate = (date: number) => dayjs(new Date(date)).format('dddd, MMMM D, YYYY');

const Blog: NextPage = () => {
  const data: BlogInfoArr = [
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
    {
      title: 'Blog Title #1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      views: 420,
      likes: 69,
      comments: 34,
      tags: ['Tag #1', 'Tag #2', 'Tag #3'],
    },
  ];

  return (
    <div>
      <Head>
        <title>Blog | GodderE2D</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <script async src="https://arc.io/widget.min.js#vVqUgoBT"></script>

        <meta property="og:title" content="Blog | GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="theme-color" content="#40bf6c" />
        <meta property="og:description" content="See GodderE2D's interesting list of blog posts in chronological order. Spoiler alert though, it may not be interesting to you." />
        <meta itemProp="name" content="Blog | GodderE2D" />
        <meta itemProp="description" content="See GodderE2D's interesting list of blog posts in chronological order. Spoiler alert though, it may not be interesting to you." />
        <meta itemProp="thumbnailUrl" content="/logo.png" />
        <meta itemProp="image" content="/logo.png" />
        <meta itemProp="imageUrl" content="/logo.png" />
      </Head>

      <Navbar />

      <div className="flex-col justify-center flex items-center lg:flex-row">
        <div className="text-center">
          <h1 className="mb-5 text-5xl font-bold">
            Blog
          </h1>

          <p>
            Sometimes I post here for some reason, and no ones sees it. That&apos;s sad...
            <br />
            <strong>Coming Soon</strong>
          </p>
        </div>
      </div>

      <div className="h-14" />

      <div className="lg:mx-40 md:mx-24 sm:mx-12 mx-8 hidden">
        <div className="flex flex-col w-full">
          {data.map((blog: BlogInfo) => (
            <div key={slug(blog.title)}>
              <Link href={`/blog/${slug(blog.title)}`} passHref>
                <div className="grid card bg-base-300 rounded-box cursor-pointer">
                  <div className="mx-6 my-6">
                    {blog.tags.map((tag: string) => (
                      <div key={tag} className="badge badge-success mr-2">{tag}</div>
                    ))}

                    <div className="h-2" />

                    <h3 className="text-2xl">
                      <strong>
                        {blog.title}
                      </strong>
                    </h3>

                    <p>
                      {blog.description}
                    </p>

                    <small className="opacity-60">
                      Created on {formatDate(blog.createdAt)}
                      {blog.updatedAt ? ` • Updated on ${formatDate(blog.updatedAt)}` : ''}
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

      <Footer />
    </div>
  );
};

export default Blog;

import React, { useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog: NextPage = () => {
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
        <meta property="theme-color" content="#0ca48f" />
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
            Coming Soon
          </h1>

          <p>
            Get excited!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;

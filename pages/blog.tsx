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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://arc.io/widget.min.js#vVqUgoBT"></script>
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

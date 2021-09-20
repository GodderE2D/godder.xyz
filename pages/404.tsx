import React, { useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RefreshOutline } from 'react-ionicons';

const NotFound: NextPage = () => {
  const randomText = [
    'How did we end up here...',
    'Nothing to see here!',
    'The 404 status code was originally created in 1992, along with some other ones.',
    'The 404 monsters are back :(',
    'Did we break?',
    'The future is in our hands... Not really.',
    "It's not a 204 because you need to get out of here soon...",
    'Tick tock... The time is ticking...',
    "That's a Four-Oh-Four. (100% not stolen 😉)",
    'Unlucky message. Press on this, will you? ➡️',
  ];

  const randomIndex = () => Math.floor(Math.random() * randomText.length);
  const [text, setText] = useState(randomText[randomIndex()]);


  return (
    <div>
      <Head>
        <title>404 | GodderE2D</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <script async src="https://arc.io/widget.min.js#vVqUgoBT"></script>

        <meta property="og:title" content="404 | GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="theme-color" content="40bf6c" />
        <meta property="og:description" content={text} />
        <meta itemProp="name" content="404 | GodderE2D" />
        <meta itemProp="description" content={text} />
        <meta itemProp="thumbnailUrl" content="/logo.png" />
        <meta itemProp="image" content="/logo.png" />
        <meta itemProp="imageUrl" content="/logo.png" />
      </Head>

      <Navbar />

      <div>
        <div className="flex-col justify-center flex items-center lg:flex-row">
          <div className="text-center">
            <h1 className="mb-5 text-5xl font-bold">
              404
            </h1>

            <p>
              {text}

              <RefreshOutline
                title="Refresh random text"
                cssClasses="inline ml-1 opacity-60 cursor-pointer"
                onClick={() => setText(randomText[randomIndex()])}
              />
            </p>

            <small className="opacity-60">
              The requested resource has been renamed, moved, deleted, or never existed in the first place.
            </small>

            <div className="h-14 block" />

            <Link href="/" passHref>
              <div className="btn btn-primary btn-wide">
                Take me back home
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;

import React, { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RefreshOutline, HomeOutline } from "react-ionicons";

const NotFound: NextPage = () => {
  const randomTexts = [
    "How did we end up here...",
    "Nothing to see here!",
    "The 404 status code was originally created in 1992, along with some other ones.",
    "The 404 monsters are back :(",
    "Did we break?",
    "The future is in our hands... Not really.",
    "It's not a 204 because you need to get out of here soon...",
    "Tick tock... The time is ticking...",
    "That's a Four-Oh-Four. (100% not stolen 😉)",
    "Unlucky message. Press on this, will you? ➡️",
  ];

  const randomIndex = (currentText?: string): number => {
    const newText = Math.floor(Math.random() * randomTexts.length);
    if (!currentText) return newText;
    // Infinite loops moment
    if (currentText === randomTexts[newText]) return randomIndex(currentText);
    else return newText;
  };
  const [text, setText] = useState(randomTexts[randomIndex()]);

  return (
    <div>
      <Head>
        <title>404 · GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />

        <meta property="og:title" content="404 · GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-rounded.png" />
        <meta property="theme-color" content="40bf6c" />
        <meta property="og:description" content={text} />
        <meta itemProp="name" content="404 · GodderE2D" />
        <meta itemProp="description" content={text} />
        <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
        <meta itemProp="image" content="/logo-rounded.png" />
        <meta itemProp="imageUrl" content="/logo-rounded.png" />
      </Head>

      <Navbar />

      <div>
        <div className="lg:mx-36 md:mx-12 mx-4">
          <div className="text-left mx-4">
            <h1 className="mb-5 text-5xl font-extrabold">404</h1>
            <p className="max-w-2xl">
              {text}

              <RefreshOutline
                title="Refresh random text"
                cssClasses="inline ml-1 opacity-60 cursor-pointer"
                onClick={() => setText(randomTexts[randomIndex()])}
              />
            </p>
            <small className="opacity-60">
              The requested resource has been renamed, moved, deleted, or never
              existed in the first place.
            </small>
            <div className="h-14 block" />
            <Link href="/" passHref>
              <div className="btn btn-primary btn-wide">
                <HomeOutline color="#ffffff" cssClasses="inline mr-2" />
                Go to homepage
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

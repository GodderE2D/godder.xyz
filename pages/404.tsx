import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RefreshOutline, HomeOutline } from "react-ionicons";
import { BlogsType } from "../types/supabase";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";
import { pageview } from "../utils/ga";

const NotFound: NextPage = () => {
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

  const [latestBlog, setLatestBlog] = useState<BlogsType | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from<BlogsType>("blogs")
        .select()
        .limit(1)
        .order("createdAt", { ascending: false });

      if (error) {
        console.error(error);
        setLatestBlog(null);
      }

      setLatestBlog(data?.[0] ?? null);
    })();
  });

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
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#40bf6c" />
      </Head>

      <Navbar />

      <div>
        <div className="mx-4 md:mx-12 lg:mx-36">
          <div className="mx-4 text-left">
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
            <div className="block h-14" />
            <Link href="/" passHref>
              <div className="btn btn-primary btn-wide text-base-100">
                <HomeOutline color="#ffffff" cssClasses="inline mr-2" />
                Go to homepage
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer blogData={latestBlog} />
    </div>
  );
};

export default NotFound;

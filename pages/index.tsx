import React, { useEffect } from "react";
import Link from "next/link";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileTrayOutline } from "react-ionicons";
import { BlogsType } from "../types/supabase";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";
import { pageview } from "../utils/ga";

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

const Home: NextPage<{ blogData: BlogsType | null }> = ({ blogData }) => {
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

  return (
    <div>
      <Head>
        <title>GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />

        <meta property="og:title" content="GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-rounded.png" />
        <meta name="theme-color" content="#40bf6c" />
        <meta
          name="description"
          content={
            "I'm just a not-so-ordinary human being on the internet. Nice to meet you!\n\nFrom Australia but currently living in the U.S., I'm your second-least-favourite person online. I'm also a full-stack web/game/Discord bot developer but I kind of suck at that. I usually spend my free time playing video games, on Discord, or casually chilling in my room thinking about the wonders of the universe. You can find all sorts of my projects on my Resources page, which you can see below."
          }
        />
        <meta
          property="og:description"
          content={
            "I'm just a not-so-ordinary human being on the internet. Nice to meet you!\n\nFrom Australia but currently living in the U.S., I'm your second-least-favourite person online. I'm also a full-stack web/game/Discord bot developer but I kind of suck at that. I usually spend my free time playing video games, on Discord, or casually chilling in my room thinking about the wonders of the universe. You can find all sorts of my projects on my Resources page, which you can see below."
          }
        />
        <meta itemProp="name" content="GodderE2D" />
        <meta
          itemProp="description"
          content={
            "I'm just a not-so-ordinary human being on the internet. Nice to meet you!\n\nFrom Australia but currently living in the U.S., I'm your second-least-favourite person online. I'm also a full-stack web/game/Discord bot developer but I kind of suck at that. I usually spend my free time playing video games, on Discord, or casually chilling in my room thinking about the wonders of the universe. You can find all sorts of my projects on my Resources page, which you can see below."
          }
        />
        <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
        <meta itemProp="image" content="/logo-rounded.png" />
        <meta itemProp="imageUrl" content="/logo-rounded.png" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>

      <Navbar />

      <div>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="mx-4 text-left">
            <h1 className="mb-5 text-5xl font-extrabold">
              Hey there, Godder here.
            </h1>

            <p className="mb-5 max-w-xl">
              I{"'"}m just a not-so-ordinary human being on the internet. Nice
              to meet you!
              <br />
              <br />
              From Australia but currently living in the U.S., I{"'"}m your
              second-least-favourite person online. I{"'"}m also a full-stack
              web/game/Discord bot developer but I kind of suck at that. I
              usually spend my free time playing video games, on Discord, or
              casually chilling in my room thinking about the wonders of the
              universe. You can find all sorts of my projects on my Resources
              page, which you can see below.
            </p>

            <div className="h-8" />

            <Link href="/resources" passHref>
              <div className="btn btn-primary btn-wide text-base-100">
                <span>
                  <FileTrayOutline cssClasses="inline mr-2" color="#f9fafb" />
                  <span className="inline">Resources</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer blogData={blogData} />
    </div>
  );
};

export default Home;

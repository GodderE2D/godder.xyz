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
import { gql } from "@apollo/client";
import apolloClient from "../utils/apolloClient";
import type { SponsorsResponse } from "../utils/apolloClient";
import dayjs from "dayjs";

export const getServerSideProps: GetServerSideProps<{
  blogData: BlogsType | null;
}> = async () => {
  const { data, error } = await supabase
    .from<BlogsType>("blogs")
    .select()
    .limit(1)
    .order("createdAt", { ascending: false });

  if (error) throw error;

  let sponsorsData = null;
  if (apolloClient) {
    if (process.env.NEXT_PUBLIC_GITHUB_USERNAME) {
      const { data } = await apolloClient.query({
        query: gql`
          {
            user(login: "${process.env.NEXT_PUBLIC_GITHUB_USERNAME}") {
              sponsors(first: 100) {
                edges {
                  node {
                    ... on User {
                      id
                      avatarUrl
                      url
                      name
                      login
                      sponsorshipsAsSponsor(first: 100) {
                        nodes {
                          createdAt
                          sponsorable {
                            ... on User {
                              login
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      });

      if (data.user) {
        sponsorsData = data as SponsorsResponse;
      }
    }
  }

  return {
    props: {
      blogData: data?.[0] ?? null,
      sponsorsData,
    },
  };
};

const Home: NextPage<{
  blogData: BlogsType | null;
  sponsorsData: SponsorsResponse | null;
}> = ({ blogData, sponsorsData }) => {
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
            {sponsorsData ? (
              <>
                <div className="mt-6 w-full rounded-lg bg-pink-200 p-3">
                  <div className="mb-2 font-bold">
                    <a
                      className="link link-hover"
                      href="https://github.com/sponsors/GodderE2D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💚 Thank you to my generous sponsors:
                    </a>
                  </div>
                  <div>
                    {sponsorsData.user.sponsors.edges.map(
                      ({ node: sponsor }) => (
                        <div
                          className="flex max-h-fit max-w-fit"
                          key={sponsor.id}
                        >
                          {console.log(process.env.NEXT_PUBLIC_GITHUB_USERNAME)}
                          {console.log(
                            sponsor.sponsorshipsAsSponsor.nodes.find(
                              (s) =>
                                s.sponsorable.login ===
                                process.env.NEXT_PUBLIC_GITHUB_USERNAME
                            )
                          )}
                          <img
                            className="h-8 w-8 rounded-full"
                            src={sponsor.avatarUrl}
                            alt={`${sponsor.login}'s GitHub avatar`}
                          />
                          <div className="ml-2 self-center">
                            <a
                              href={sponsor.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="link link-hover text-sm font-semibold">
                                {sponsor.login}
                              </div>
                            </a>
                            <div className="text-xs opacity-80">
                              {sponsor.name}
                            </div>
                            <div className="text-xs opacity-80">
                              Sponsoring since{" "}
                              {dayjs(
                                sponsor.sponsorshipsAsSponsor.nodes.find(
                                  (s) =>
                                    s.sponsorable.login ===
                                    process.env.NEXT_PUBLIC_GITHUB_USERNAME
                                )?.createdAt
                              ).format("MMM D, YYYY")}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <Footer blogData={blogData} sponsorsData={sponsorsData} />
    </div>
  );
};

export default Home;

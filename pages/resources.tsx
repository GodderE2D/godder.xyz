import React, { useEffect } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BlogsType } from "../types/supabase";
import { supabase } from "../utils/supabaseClient";
import Alert from "../components/Alert";
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

const Resources: NextPage<{ blogData: BlogsType | null }> = ({ blogData }) => {
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
        <title>Resources · GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />

        <meta property="og:title" content="Resources · GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-rounded.png" />
        <meta name="theme-color" content="#40bf6c" />
        <meta
          name="description"
          content="See GodderE2D's resources listed here, including email addresses, online projects, social platforms, recommendations, and more."
        />
        <meta
          property="og:description"
          content="See GodderE2D's resources listed here, including email addresses, online projects, social platforms, recommendations, and more."
        />
        <meta itemProp="name" content="Resources · GodderE2D" />
        <meta
          itemProp="description"
          content="See GodderE2D's resources listed here, including email addresses, online projects, social platforms, recommendations, and more."
        />
        <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
        <meta itemProp="image" content="/logo-rounded.png" />
        <meta itemProp="imageUrl" content="/logo-rounded.png" />
      </Head>

      <Navbar />

      <div>
        <div className="mx-4 flex flex-col md:mx-16 lg:mx-32 lg:flex-row">
          <div className="prose max-w-max">
            <h1>Resources</h1>

            <h2>Email Addresses</h2>

            <p>
              Dedicated to the people that would like to email me for some
              reason.
            </p>

            <Alert type="info" icon="info">
              Response time: ~24 hours • max 48 hours
            </Alert>

            <ul>
              <li>
                <a href="mailto:main@godder.xyz">main@godder.xyz</a>: Used for
                all contact with an online relationship, such as social
                platforms
              </li>
              <li>
                <a href="mailto:irl@godder.xyz">irl@godder.xyz</a>: Used for
                contact if I met you in real life
              </li>
              <li>
                <a href="mailto:support@godder.xyz">support@godder.xyz</a>: Used
                for online support if a social platform is not the best for
                support
              </li>
              <li>
                <a href="mailto:ama@godder.xyz">ama@godder.xyz</a>: Ask me
                anything! I{"'"}ll reply to you with an answer (if appropriate)
              </li>
              <li>
                <a href="mailto:godderseesyou@gmail.com">
                  godderseesyou@gmail.com
                </a>
                : Use this email address if the main one is not working
              </li>
              <li>
                <a href="mailto:e2dbusiness@outlook.com">
                  e2dbusiness@outlook.com
                </a>
                : YouTube business email
              </li>
            </ul>

            <h2>Online Projects</h2>

            <p>
              If you would like to check out my work, feel free to do so!
              <br />
              By the way, there are tons of servers I own but are not listed
              here! The sad thing is, they are not finished and have near-zero
              members.
            </p>

            <h3>Discord Servers</h3>

            <ul>
              <li>
                <a
                  href="https://www.sunrisetosunset.tk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sunrise to Sunset
                </a>
                : An overall chill Discord server
              </li>
              <li>
                <a
                  href="https://www.cbsupport.tk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CentralBotSupport
                </a>
                : A Discord server with the goal of getting Discord bot support
                easier
              </li>
              <li>
                <a
                  href="https://twitter.com/AO_Discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  #AdvertiseOn
                </a>
                : A Discord server with a community and a lot of advertising
                features
              </li>
              <li>
                <strong>TheMeGaming</strong>: A Discord server with a great
                gaming community (discontinued)
              </li>
            </ul>

            <h3>Online Projects</h3>

            <ul>
              <li>
                <a
                  href="https://modslides.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Modslides
                </a>
                : Learn and discuss online moderation for your Discord servers,
                online forums, and more!
              </li>
            </ul>

            <ul>
              <li>
                <a
                  href="https://www.cordviews.tk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cordviews
                </a>
                : A Discord platform to find servers with trusted reviews, and
                trusted feedback for server admins.
              </li>
            </ul>

            <h2>Social Platforms</h2>

            <p>I{"'"}m on a lot of these. I just realised that...</p>

            <ul>
              <li>
                <a
                  href="https://dsc.bio/godder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
                : [GodderE2D]#7290 (ID: <code>525248423310524416</code>)
              </li>

              <li>
                <a
                  href="https://twitter.com/TheE2D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                : @TheE2D
              </li>

              <li>
                <a
                  href="https://instagram.com/thee2d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                : @thee2d
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UC4mQ0olYYYDeOlgSNKTnPcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                : [GodderE2D]
              </li>

              <li>
                <a
                  href="https://reddit.com/u/_-GODDERE2D-_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reddit
                </a>
                : _-GODDERE2D-_
              </li>

              <li>
                <a
                  href="https://open.spotify.com/user/8hkx6ip5bkeqbhw0xlb0a9gdp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotify
                </a>
                : GodderE2D
              </li>

              <li>
                <a
                  href="https://steamcommunity.com/id/goddere2d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Steam
                </a>
                : GodderE2D
              </li>

              <li>
                <a
                  href="https://twitch.tv/GodderE2D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitch
                </a>
                : GodderE2D
              </li>

              <li>
                <a
                  href="https://goddere2d.medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
                : GodderE2D
              </li>

              <li>
                <a
                  href="https://github.com/GodderE2D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                : GodderE2D
              </li>
            </ul>

            <h2>Recommendations</h2>

            <div className="!alert !alert-info">
              <div className="!flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="mx-2 h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                <span>
                  I am not affiliated or sponsored by any of these services.
                  These are purely recommendations and you do not need to use
                  them.
                </span>
              </div>
            </div>

            <h3>Discord Servers</h3>

            <ul>
              <li>
                <a
                  href="https://discord.gg/BmNGZW2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Y0ken{"'"}s Domain
                </a>
                : Best Discord server for great games and guides, including
                Discord help*
              </li>

              <li>
                <a
                  href="http://wolvesville.utopium.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wolvesville Utopium
                </a>
                : A simulation of Wolvesville, completely in Discord
              </li>
            </ul>

            <small className="opacity-60">
              * I had been a staff member in Y0ken{"'"}s Domain, therefore my
              review may be slightly biased.
            </small>

            <h3>Discord Bots</h3>

            <ul>
              <li>
                <a
                  href="https://dyno.gg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dyno
                </a>
                : Best multipurpose Discord bot to start out with, if you have
                some experience on Discord
              </li>

              <li>
                <a
                  href="https://evie.pw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Evie
                </a>
                : Evie is a modern feature rich all-in-one bot for Discord to give you the tools to build the server you want.
              </li>

              <li>
                <a
                  href="https://statbot.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Statbot
                </a>
                : A Discord bot for server statistics and insights
              </li>

              <li>
                <a
                  href="https://tickettool.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ticket Tool
                </a>
                : A Discord bot for ticketing, could be used for staff tickets,
                help tickets, etc
              </li>

              <li>
                <a
                  href="https://amaribot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AmariBot
                </a>
                : Best levelling bot that includes role levels, customisable XP,
                etc
              </li>

              <li>
                <a
                  href="https://forum.lunarisx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Santa Lunar
                </a>
                : A Discord bot for advanced giveaways with customisable
                requirements and features
              </li>

              <li>
                <a
                  href="https://xenon.bot/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Xenon
                </a>
                : Best Discord server backup bot if you do not prefer server
                templates with tons of advanced features
              </li>
            </ul>

            <small className="opacity-60">
              <strong>All of the above</strong> offers a premium subscription,
              however, I am reviewing the free tier of the service.
            </small>
          </div>
        </div>
      </div>

      <Footer blogData={blogData} />
    </div>
  );
};

export default Resources;

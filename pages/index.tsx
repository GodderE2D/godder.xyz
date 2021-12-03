import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileTrayOutline } from "react-ionicons";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />
        <link type="application/json+oembed" href="/json-oembed.json"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <script async src="https://arc.io/widget.min.js#vVqUgoBT"></script>

        <meta property="og:title" content="Home · GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-rounded.png" />
        <meta name="theme-color" content="#40bf6c" />
        <meta
          property="og:description"
          content={`
          I'm just a not-so-ordinary human being on the internet.=
          Nice to meet you!

          Based in Australia, I'm a full-stack developer (not really). I
          usually spend my free time playing video games, on Discord, or
          casually on the internet on one of my social platforms. You can
          find my projects on my Resources page, which is linked below.
        `}
        />
        <meta itemProp="name" content="Home · GodderE2D" />
        <meta
          itemProp="description"
          content={`
            I'm just a not-so-ordinary human being on the internet.=
            Nice to meet you!

            Based in Australia, I'm a full-stack developer (not really). I
            usually spend my free time playing video games, on Discord, or
            casually on the internet on one of my social platforms. You can
            find my projects on my Resources page, which is linked below.
        `}
        />
        <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
        <meta itemProp="image" content="/logo-rounded.png" />
        <meta itemProp="imageUrl" content="/logo-rounded.png" />
      </Head>

      <Navbar />

      <div>
        <div className="flex-col justify-center flex items-center lg:flex-row">
          <div className="text-left mx-4">
            <h1 className="mb-5 text-5xl font-extrabold">
              Hey there, Godder here.
            </h1>

            <p className="mb-5 max-w-xl">
              I{"'"}m just a not-so-ordinary human being on the internet.
              <br />
              Nice to meet you!
              <br />
              <br />
              Based in Australia, I{"'"}m a full-stack developer (not really). I
              usually spend my free time playing video games, on Discord, or
              casually on the internet on one of my social platforms. You can
              find my projects on my Resources page, which is linked below.
            </p>

            <div className="h-8" />

            <Link href="/resources" passHref>
              <div className="btn btn-primary btn-wide">
                <span>
                  <FileTrayOutline cssClasses="inline mr-2" color="#f9fafb" />
                  <span className="inline">Resources</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

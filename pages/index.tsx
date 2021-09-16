import Link from 'next/link';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { InformationCircleOutline, FileTrayOutline } from 'react-ionicons';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | GodderE2D</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <script async src="https://arc.io/widget.min.js#vVqUgoBT"></script>

        <meta property="og:title" content="Home | GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="theme-color" content="#0ca48f" />
        {/* TODO: Replace custom status with actual custom status once complete */}
        <meta property="og:description" content={`
        Hey there, Godder here.
        I'm just a not-so-ordinary human being on the internet.
        Nice to meet you!

        Custom Status:
        “Someday this will actually be something, but that day is not today.”
        `} />
        <meta itemProp="name" content="Home | GodderE2D" />
        {/* TODO: Replace custom status with actual custom status once complete */}
        <meta itemProp="description" content={`
        Hey there, Godder here.
        I'm just a not-so-ordinary human being on the internet.
        Nice to meet you!

        Custom Status:
        “Someday this will actually be something, but that day is not today.”
        `} />
        <meta itemProp="thumbnailUrl" content="/logo.png" />
        <meta itemProp="image" content="/logo.png" />
        <meta itemProp="imageUrl" content="/logo.png" />
      </Head>

      <Navbar />

      <div className="h-16" />

      <div>
        <div className="flex-col justify-center flex items-center lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold">
              Hey there, Godder here.
            </h1>

            <p className="mb-5">
              I&apos;m just a not-so-ordinary human being on the internet.
              <br />
              Nice to meet you!
            </p>

            <div>
              <span className="text-5xl opacity-60">
                <strong>“</strong>
              </span>

              <span className="mx-4">
                Someday this will actually be something, but that day is not today.
              </span>

              <span className="text-5xl opacity-60">
                <strong>”</strong>
              </span>
            </div>

            <div className="h-5" />

            <div className="opacity-60">
              <em className="inline">
                — GodderE2D
              </em>

              <div data-tip="
                You found my custom status! This changes periodically, and take everything I say with a grain of salt 🧂
              " className="tooltip tooltip-info tooltip-right">
                <InformationCircleOutline cssClasses="inline ml-2" color="#2194f3" />
              </div>
            </div>

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

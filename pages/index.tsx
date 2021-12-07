import Link from "next/link";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileTrayOutline } from "react-ionicons";
import { BlogsType } from "../types/supabase";
import { supabase } from "../utils/supabaseClient";

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
  return (
    <div>
      <Head>
        <title>GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />

        <meta property="og:title" content="Home · GodderE2D" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-rounded.png" />
        <meta name="theme-color" content="#40bf6c" />
        <meta
          name="description"
          content={
            "I'm just a not-so-ordinary human being on the internet.\nNice to meet you!\n\nFrom Australia, I'm just a random person you meet here and there on the internet. I'm also developer but I kind of suck at that. I usually spend my free time playing video games, on Discord, or casually on the internet on one of my social platforms. You can find my projects on my Resources page, which is linked below."
          }
        />
        <meta
          property="og:description"
          content={
            "I'm just a not-so-ordinary human being on the internet.\nNice to meet you!\n\nFrom Australia, I'm just a random person you meet here and there on the internet. I'm also developer but I kind of suck at that. I usually spend my free time playing video games, on Discord, or casually on the internet on one of my social platforms. You can find my projects on my Resources page, which is linked below."
          }
        />
        <meta itemProp="name" content="Home · GodderE2D" />
        <meta
          itemProp="description"
          content={
            "I'm just a not-so-ordinary human being on the internet.\nNice to meet you!\n\nFrom Australia, I'm just a random person you meet here and there on the internet. I'm also developer but I kind of suck at that. I usually spend my free time playing video games, on Discord, or casually on the internet on one of my social platforms. You can find my projects on my Resources page, which is linked below."
          }
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
              From Australia, I{"'"}m just a random person you meet here and
              there on the internet. I{"'"}m also developer but I kind of suck
              at that. I usually spend my free time playing video games, on
              Discord, or casually on the internet on one of my social
              platforms. You can find my projects on my Resources page, which is
              linked below.
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

      <Footer blogData={blogData} />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { supabase } from "../utils/supabaseClient";
import { BlogsType } from "../types/supabase";
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

const MyAccount: NextPage<{ blogData: BlogsType | null }> = ({ blogData }) => {
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

  const [isModalOpen, setModalOpen] = useState(false);
  const [isCheckboxTicked, setCheckboxTicked] = useState(false);

  const username = supabase.auth.user()?.user_metadata.full_name;
  const email = supabase.auth.user()?.email;
  const accountId = supabase.auth.user()?.id;
  const githubId = supabase.auth
    .user()
    ?.identities?.find((i) => i.provider === "github")?.id;
  const discordId = supabase.auth
    .user()
    ?.identities?.find((i) => i.provider === "discord")?.id;

  return (
    <div>
      <Head>
        <title>My Account · GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#40bf6c" />
      </Head>

      <Navbar />

      <div className="mx-4 md:mx-12 lg:mx-36">
        <h1 className="mb-6 text-5xl font-extrabold">My Account</h1>

        {!supabase.auth.user()?.id ? (
          <div>
            <p>You must be logged in to see account details.</p>
          </div>
        ) : (
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              value={username}
              readOnly
              className="input input-bordered w-2/5"
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="text"
              value={email}
              readOnly
              className="input input-bordered w-2/5"
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Account ID</span>
            </label>
            <input
              type="text"
              value={accountId}
              readOnly
              className="input input-bordered w-2/5"
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">GitHub ID</span>
            </label>
            <input
              type="text"
              value={githubId ?? "GitHub Account Not Linked"}
              readOnly
              className="input input-bordered w-2/5"
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Discord ID</span>
            </label>
            <input
              type="text"
              value={discordId ?? "Discord Account Not Linked"}
              readOnly
              className="input input-bordered w-2/5"
            />

            <div className="h-8" />

            <button
              className="modal-button btn btn-error text-base-100"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Delete Account
            </button>

            <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
              <div className="modal-box">
                <div className="card-body">
                  <h2 className="card-title">Are you sure?</h2>
                  <p>
                    Deleting your account is{" "}
                    <strong>an irreversible action</strong>. All your data will
                    be deleted from our database, including comments and likes.
                  </p>

                  <div className="h-3" />

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="checkbox"
                        onClick={() => setCheckboxTicked(!isCheckboxTicked)}
                      />
                      <span className="label-text">
                        I agree to the consequences of deleting my account.
                      </span>
                    </label>
                  </div>

                  <div className="h-3" />

                  <div>
                    <button
                      className="btn btn-error mr-1.5 text-base-100"
                      disabled={!isCheckboxTicked}
                      onClick={() => {
                        // Shhh, don't tell anyone.
                        toast.error(
                          <>
                            Account deletion is currently disabled due to
                            technical difficulties. Please email GodderE2D
                            (main@godder.xyz) alternatively.
                          </>,
                          { duration: 20000 }
                        );
                      }}
                    >
                      Delete my account
                    </button>
                    <button
                      className="btn ml-1.5"
                      onClick={() => {
                        setModalOpen(false);
                      }}
                    >
                      Nevermind
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer blogData={blogData} />
    </div>
  );
};

export default MyAccount;

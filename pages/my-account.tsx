import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../utils/supabaseClient";

const MyAccount: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCheckboxTicked, setCheckboxTicked] = useState(false);

  const username = supabase.auth.user()?.user_metadata.preferred_username;
  const email = supabase.auth.user()?.email;
  const accountId = supabase.auth.user()?.id;
  const githubId = supabase.auth.user()?.user_metadata.provider_id;

  return (
    <div>
      <Head>
        <title>My Account · GodderE2D</title>
        <link rel="icon" href="/logo-rounded.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <script async src="https://arc.io/widget.min.js#vVqUgoBT"></script>
      </Head>

      <Navbar />

      <div className="lg:mx-96 md:mx-64 mx-12">
        <h1 className="mb-5 text-5xl font-extrabold">My Account</h1>
        <div className="h-8" />

        {!supabase.auth.user()?.id ? (
          <div>
            <div className="alert alert-error">
              <div className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mx-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  ></path>
                </svg>
                <label>You must be logged in to see account details.</label>
              </div>
            </div>
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
              className="input input-bordered lg:w-96"
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="text"
              value={email}
              readOnly
              className="input input-bordered lg:w-96"
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">Account ID</span>
            </label>
            <input
              type="text"
              value={accountId}
              readOnly
              className="input input-bordered lg:w-96"
            />

            <div className="h-3" />

            <label className="label">
              <span className="label-text">GitHub ID</span>
            </label>
            <input
              type="text"
              value={githubId}
              readOnly
              className="input input-bordered lg:w-96"
            />

            <div className="h-8" />

            <button
              className="btn btn-error modal-button"
              onClick={() => setModalOpen(true)}
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

                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => setCheckboxTicked(!isCheckboxTicked)}
                    />
                    <span className="label-text">
                      I agree to the consequences of deleting my account.
                    </span>
                  </label>

                  <div className="h-3" />

                  <div>
                    <button
                      className="btn btn-error mr-1.5"
                      disabled={!isCheckboxTicked}
                    >
                      Delete my account
                    </button>
                    <button
                      className="btn ml-1.5"
                      onClick={() => setModalOpen(false)}
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

      <Footer />
    </div>
  );
};

export default MyAccount;

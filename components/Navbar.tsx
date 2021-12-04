import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  LogoDiscord,
  LogoTwitter,
  LogoInstagram,
  LogoYoutube,
  LogoReddit,
  LogoTwitch,
  LogoMedium,
  LogoGithub,
  LogoSteam,
  MusicalNotes,
  PersonCircle,
} from "react-ionicons";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "../utils/supabaseClient";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSigningOut, setSigningOut] = useState(false);
  const [isLoggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("need-login-reload");
    if (data === "true") setLoggingIn(true);
    setTimeout(() => {
      if (data === "true") {
        toast.error(
          "An error happened during post-login. Please reload the page to continue.",
          {
            duration: 10_000,
          }
        );
      }
    }, 5000);

    window.addEventListener("hashchange", (e) => {
      const { oldURL } = e as HashChangeEvent;
      const data = window.localStorage.getItem("need-login-reload");
      if (!data) return;

      window.localStorage.removeItem("need-login-reload");
      if (oldURL.includes("#access_token=")) {
        window.location.reload();
      }
    });
  }, []);

  const Content = () => (
    <div className="flex-1 sm:block md:block px-2 mx-2">
      <div className="items-stretch hidden lg:flex">
        <Link href="/" passHref>
          <span className="btn btn-ghost rounded-btn">Home</span>
        </Link>

        <Link href="/resources" passHref>
          <span className="btn btn-ghost rounded-btn">Resources</span>
        </Link>

        <a
          href="https://dsc.bio/godder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn btn-ghost rounded-btn">Bio</span>
        </a>

        <Link href="/blog" passHref>
          <span className="btn btn-ghost rounded-btn">Blog</span>
        </Link>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} className="btn btn-ghost rounded-btn">
            Social Platforms
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-base-content"
          >
            <li>
              <a
                href="https://dsc.bio/godder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoDiscord cssClasses="mr-2" />
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/TheE2D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoTwitter cssClasses="mr-2" />
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/thee2d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoInstagram cssClasses="mr-2" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC4mQ0olYYYDeOlgSNKTnPcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoYoutube cssClasses="mr-2" />
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://reddit.com/u/_-GODDERE2D-_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoReddit cssClasses="mr-2" />
                Reddit
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/8hkx6ip5bkeqbhw0xlb0a9gdp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MusicalNotes cssClasses="mr-2" />
                Spotify
              </a>
            </li>
            <li>
              <a
                href="https://steamcommunity.com/id/goddere2d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoSteam cssClasses="mr-2" />
                Steam
              </a>
            </li>
            <li>
              <a
                href="https://twitch.tv/GodderE2D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoTwitch cssClasses="mr-2" />
                Twitch
              </a>
            </li>
            <li>
              <a
                href="https://goddere2d.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoMedium cssClasses="mr-2" />
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GodderE2D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGithub cssClasses="mr-2" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const MobileContent = () => (
    <div className="lg:hidden">
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch">
          <Link href="/" passHref>
            <div className="btn btn-ghost rounded-btn w-full">Home</div>
          </Link>

          <Link href="/resources" passHref>
            <div className="btn btn-ghost rounded-btn w-full">Resources</div>
          </Link>

          <a
            href="https://dsc.bio/godder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="btn btn-ghost rounded-btn w-full">Bio</div>
          </a>

          <Link href="/blog" passHref>
            <div className="btn btn-ghost rounded-btn w-full">Blog</div>
          </Link>

          <div className="dropdown dropdown-hover block">
            <div tabIndex={0} className="btn btn-ghost rounded-btn w-full">
              Social Platforms
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box text-base-content justify-center text-center grid grid-cols-2 w-full m-auto"
            >
              <li>
                <a
                  href="https://dsc.bio/godder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center content-center"
                >
                  <LogoDiscord cssClasses="mr-2" />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/TheE2D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoTwitter cssClasses="mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/thee2d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoInstagram cssClasses="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC4mQ0olYYYDeOlgSNKTnPcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoYoutube cssClasses="mr-2" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://reddit.com/u/_-GODDERE2D-_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoReddit cssClasses="mr-2" />
                  Reddit
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/user/8hkx6ip5bkeqbhw0xlb0a9gdp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MusicalNotes cssClasses="mr-2" />
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://steamcommunity.com/id/goddere2d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoSteam cssClasses="mr-2" />
                  Steam
                </a>
              </li>
              <li>
                <a
                  href="https://twitch.tv/GodderE2D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoTwitch cssClasses="mr-2" />
                  Twitch
                </a>
              </li>
              <li>
                <a
                  href="https://goddere2d.medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoMedium cssClasses="mr-2" />
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GodderE2D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoGithub cssClasses="mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="navbar mb-2 bg-primary-focus text-neutral-content fixed min-w-full z-50">
        <div
          className="flex-none lg:hidden xl:hidden 2xl:hidden"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </div>

        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">
            <Link href="/">GodderE2D</Link>
          </span>
        </div>

        <Content />

        <div className="flex-none">
          {supabase.auth.user()?.id ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="m-1 btn btn-ghost">
                <PersonCircle color="#FFFFFF" cssClasses="mr-2" />
                {supabase.auth.user()?.user_metadata.preferred_username}
              </div>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content bg-base-100 text-base-content rounded-box w-52"
              >
                <li>
                  <Link href="/my-account">My Account</Link>
                </li>
                <li>
                  <a
                    onClick={async () => {
                      setSigningOut(true);

                      const { error } = await supabase.auth.signOut();

                      if (error) {
                        console.error(error);
                        toast.error(
                          "There was an error when trying to sign out. You may clear your cookies and reload the page as a workaround. Refer to the console for technical details.",
                          {
                            duration: 15000,
                          }
                        );

                        setSigningOut(false);
                      }

                      window.location.reload();
                    }}
                  >
                    {isSigningOut ? "Signing Out..." : "Sign Out"}
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <button
              className={`m-1 btn btn-ghost rounded-btn ${
                (isLoggingIn || isSigningOut) && "loading"
              }`}
              onClick={async () => {
                setLoggingIn(true);

                const { protocol, host } = window.location;

                window.localStorage.setItem("need-login-reload", "true");

                const { error } = await supabase.auth.signIn(
                  { provider: "github" },
                  { redirectTo: `${protocol}//${host}` }
                );

                if (error) {
                  console.error(error);
                  toast.error(
                    "There was an error when trying to login. Sorry for any inconveniences caused. Refer to the console for technical details.",
                    {
                      duration: 15000,
                    }
                  );

                  setLoggingIn(false);
                  window.localStorage.removeItem("need-login-reload");
                }
              }}
            >
              {isLoggingIn || isSigningOut || (
                <PersonCircle color="#FFFFFF" cssClasses="mr-2" />
              )}
              {isSigningOut
                ? "Signing out..."
                : isLoggingIn
                ? "Logging in..."
                : "Login"}
            </button>
          )}
        </div>
      </div>

      <div className={`drawer-side ${isActive ? "" : "hidden"}`}>
        <span className="drawer-overlay"></span>
        <MobileContent />
      </div>

      <div className="h-40" />
    </div>
  );
};

export default Home;

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
import { useRouter } from "next/router";

const Home = () => {
  const Router = useRouter();
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

    window.addEventListener("hashchange", async (e) => {
      const { oldURL } = e as HashChangeEvent;
      const data = window.localStorage.getItem("need-login-reload");
      if (!data) return;

      window.localStorage.removeItem("need-login-reload");
      if (oldURL.includes("#access_token=")) {
        window.location.replace(data);
      }
    });
  }, []);

  const Content = () => (
    <div className="mx-2 flex-1 px-2 sm:block md:block">
      <div className="hidden items-stretch lg:flex">
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

        <div className="dropdown-hover dropdown">
          <div tabIndex={0} className="btn btn-ghost rounded-btn">
            Social Platforms
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 text-base-content shadow"
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
      <div className="mx-2 flex-1 bg-base-100 px-2">
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

          <div className="dropdown-hover dropdown block">
            <div tabIndex={0} className="btn btn-ghost rounded-btn w-full">
              Social Platforms
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box m-auto grid w-full grid-cols-2 justify-center bg-base-100 p-2 text-center text-base-content shadow"
            >
              <li>
                <a
                  href="https://dsc.bio/godder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-center text-center"
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

      {/* <div className="py-2 overflow-hidden bg-secondary">
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative sm:flex justify-center items-center">
            <div className="text-sm font-medium text-base-100">
              ANNOUNCEMENT BAR TEXT HERE
            </div>
          </div>
        </div>
      </div> */}

      <div className="fixed z-50 min-w-full">
        <div className="navbar bg-primary-focus text-neutral-content">
          <div
            className="flex-none lg:hidden xl:hidden 2xl:hidden"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
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

          <div className="mx-2 flex-none px-2">
            <span className="text-lg font-bold">
              <Link href="/">GodderE2D</Link>
            </span>
          </div>

          <Content />

          <div className="flex-none">
            {supabase.auth.user()?.id ? (
              <div className="dropdown-end dropdown">
                <div tabIndex={0} className="btn btn-ghost m-1">
                  <PersonCircle color="#FFFFFF" cssClasses="mr-2" />
                  {supabase.auth.user()?.user_metadata.preferred_username}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 text-base-content shadow"
                >
                  <li>
                    <Link href="/my-account">My Account</Link>
                  </li>
                  {supabase.auth.user()?.email ===
                    process.env.NEXT_PUBLIC_SITE_OWNER_EMAIL_ADDRESS && (
                    <li>
                      <Link href="/write">Write a Blog</Link>
                    </li>
                  )}
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
              <div className="dropdown-end dropdown">
                <button
                  tabIndex={0}
                  className={`btn btn-ghost rounded-btn m-1 ${
                    (isLoggingIn || isSigningOut) && "loading"
                  }`}
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
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box w-max bg-base-100 p-2 text-base-content shadow"
                >
                  <li>
                    <a
                      onClick={async () => {
                        setLoggingIn(true);

                        const { protocol, host, pathname, search, hash } =
                          window.location;

                        window.localStorage.setItem(
                          "need-login-reload",
                          `${pathname}${search}${hash}`
                        );

                        const { error } = await supabase.auth.signIn(
                          { provider: "discord" },
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
                      <LogoDiscord cssClasses="mr-2" />
                      Login with Discord
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={async () => {
                        setLoggingIn(true);

                        const { protocol, host, pathname, search, hash } =
                          window.location;

                        window.localStorage.setItem(
                          "need-login-reload",
                          `${pathname}${search}${hash}`
                        );

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
                      <LogoGithub cssClasses="mr-2" />
                      Login with GitHub
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={`drawer-side ${isActive ? "" : "hidden"}`}>
          <span className="drawer-overlay"></span>
          <MobileContent />
        </div>
      </div>

      <div className="h-40" />
    </div>
  );
};

export default Home;

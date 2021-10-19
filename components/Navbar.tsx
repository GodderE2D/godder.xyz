import React from "react";
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
} from "react-ionicons";

const Home = () => {
  const [isActive, setIsActive] = React.useState(false);

  const Content = () => (
    <div>
      <div className="flex-1 hidden lg:block px-2 mx-2">
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
            <div
              tabIndex={0}
              className="btn btn-ghost rounded-btn w-full block"
            >
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
      <div className="navbar mb-2 bg-primary-focus text-neutral-content">
        <div
          className="flex-none lg:hidden"
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

        <div className="flex-none navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="m-1 btn btn-ghost rounded-btn">
              Login with GitHub
            </div>
            <div
              tabIndex={0}
              className="w-96 p-2 shadow card dropdown-content bg-error text-primary-content"
            >
              <div className="card-body">
                <h2 className="card-title">Hold on!</h2>

                <small>
                  By logging in, you agree that your email address, username,
                  profile picture, and snowflakes will be visible to me, and it
                  can be publicly shared under my discretion at any given time.
                </small>

                <div className="h-2" />
                <small>
                  You do not need to login unless you wish to comment.
                </small>

                <div className="h-2" />
                <small>
                  To withdraw consent, please{" "}
                  <a className="link" href="mailto:main@godder.ga">
                    email me
                  </a>
                  .
                </small>

                <div className="h-4"></div>

                <button className="btn btn-warning rounded-btn btn-disabled">
                  Login anyways (Coming soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`drawer-side ${isActive ? "" : "hidden"}`}>
        <span className="drawer-overlay"></span>
        <MobileContent />
      </div>

      <div className="h-20" />
    </div>
  );
};

export default Home;

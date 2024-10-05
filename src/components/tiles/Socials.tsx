import { SiGithub, SiInstagram, SiReddit, SiSpotify, SiSteam, SiTwitch, SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import DiscordSocial from "../DiscordSocial";
import Social from "../Social";

export default function Socials() {
  return (
    <div className="col-span-3 row-span-2 rounded-xl bg-blue-950 p-5 shadow md:p-7">
      <h2 className="mb-2 bg-gradient-to-tl from-blue-500 to-blue-300 bg-clip-text text-xl font-extrabold text-transparent md:text-2xl">
        Socials
      </h2>
      <p className="mb-4">If you find me somewhere else, well it&apos;s probably still me.</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <DiscordSocial />
        <Social name="Twitter" link="https://twitter.com/TheE2D" icon={<FaTwitter className="h-5 w-5" />} />
        <Social name="GitHub" link="https://github.com/GodderE2D" icon={<SiGithub className="h-5 w-5" />} />
        <Social name="Instagram" link="https://instagram.com/thee2d" icon={<SiInstagram className="h-5 w-5" />} />
        <Social name="Reddit" link="https://reddit.com/u/_-GODDERE2D-_" icon={<SiReddit className="h-5 w-5" />} />
        <Social name="YouTube" link="https://youtube.com/@TheE2D" icon={<SiYoutube className="h-5 w-5" />} />
        <Social name="Twitch" link="https://twitch.tv/azugodder" icon={<SiTwitch className="h-5 w-5" />} />
        <Social name="Steam" link="https://steamcommunity.com/id/goddere2d" icon={<SiSteam className="h-5 w-5" />} />
        <Social
          name="Spotify"
          link="https://open.spotify.com/user/8hkx6ip5bkeqbhw0xlb0a9gdp"
          icon={<SiSpotify className="h-5 w-5" />}
        />
      </div>
    </div>
  );
}

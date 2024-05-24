import Image from "next/image";
import Tooltip from "../components/Tooltip";

import Birthday from "../components/tiles/Birthday";
import Email from "../components/tiles/Email";
import Time from "../components/tiles/Time";
import Socials from "../components/tiles/Socials";
import Blog from "../components/tiles/Blog";
import Skills from "../components/tiles/Skills";
import Projects from "../components/tiles/Projects";

import flag_cn from "../../public/flags/flag_cn-1f1e8-1f1f3.svg";
import flag_au from "../../public/flags/flag_au-1f1e6-1f1fa.svg";
import flag_us from "../../public/flags/flag_us-1f1fa-1f1f8.svg";

export default async function Home() {
  return (
    <main>
      <div className="mx-4 flex justify-center">
        <div className="grid max-w-prose grid-cols-3 grid-rows-2 gap-3 md:gap-6">
          <div className="col-span-3 row-span-2 mb-4 pt-8">
            <h1 className="mb-2 bg-gradient-to-tl from-green-500 via-blue-400 to-green-300 bg-300% bg-clip-text text-4xl font-extrabold text-transparent motion-safe:animate-gradient">
              Heya, I&apos;m Godder.
            </h1>
            <div className="mb-4 flex items-center gap-1 text-xl">
              <Tooltip content="Shanghai, China">
                <Image src={flag_cn} alt="Chinese Flag" className="h-6 w-6" />
              </Tooltip>
              <span className="text-xs">➔</span>
              <Tooltip content="Sydney, Australia">
                <Image src={flag_au} alt="Australian Flag" className="h-6 w-6" />
              </Tooltip>
              <span className="text-xs">➔</span>
              <Tooltip content="Virginia, United States">
                <Image src={flag_us} alt="US Flag" className="h-6 w-6" />
              </Tooltip>
            </div>
            <p>
              Hello, internet stranger! I&apos;m a developer and student with interests in web dev, cybersecurity,
              Discord bots, and technical Minecraft. I play games like Fortnite, Minecraft, and VALORANT in my free
              time. You can mostly find me on Discord.
            </p>
          </div>
          <Socials />
          <Blog />
          <Time />
          <Birthday />
          <Email />
          <Skills />
          <Projects />
        </div>
      </div>
    </main>
  );
}

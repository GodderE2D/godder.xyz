import Tooltip from "../components/Tooltip";
import Birthday from "../components/tiles/Birthday";
import Email from "../components/tiles/Email";
import Time from "../components/tiles/Time";
import Socials from "../components/tiles/Socials";
import Games from "../components/tiles/Games";
import Skills from "../components/tiles/Skills";
import Projects from "../components/tiles/Projects";

export default async function Home() {
  return (
    <main>
      <div className="mx-4 flex items-center justify-center">
        <div className="grid max-w-prose grid-cols-3 grid-rows-2 gap-3 md:gap-6">
          <div className="col-span-3 row-span-2 py-8">
            <h1 className="mb-2 bg-gradient-to-tl from-green-500 via-blue-400 to-green-300 bg-300% bg-clip-text text-4xl font-bold text-transparent motion-safe:animate-gradient">
              Heya, I&apos;m Godder.
            </h1>
            <div className="mb-1 flex items-center gap-1 text-xl">
              <Tooltip id="cn" content="Shanghai, China">
                🇨🇳
              </Tooltip>
              <span className="text-xs">➔</span>
              <Tooltip id="au" content="Sydney, Australia">
                🇦🇺
              </Tooltip>
              <span className="text-xs">➔</span>
              <Tooltip id="us" content="Virginia, United States">
                🇺🇸
              </Tooltip>
            </div>
            <p>
              Hello, internet stranger! I&apos;m a developer and student with interests in web dev, Discord bots, and
              technical Minecraft. I play some video games like VALORANT and Minecraft in my free time. You can mostly
              find me on Discord.
            </p>
          </div>
          <Socials />
          <Games />
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

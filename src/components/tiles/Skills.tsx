import { DiRuby } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiDiscord,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiYarn,
  SiGit,
} from "react-icons/si";
import Tooltip from "../Tooltip";

function Icons({ size }: { size: number }) {
  return (
    <>
      <Tooltip content="TypeScript">
        <SiTypescript title="TypeScript" size={size} />
      </Tooltip>
      <Tooltip content="Discord">
        <SiDiscord title="Discord" size={size} />
      </Tooltip>
      <Tooltip content="Next.js">
        <SiNextdotjs title="Next.js" size={size} />
      </Tooltip>
      <Tooltip content="PostgreSQL">
        <SiPostgresql title="PostgreSQL" size={size} />
      </Tooltip>
      <Tooltip content="React">
        <SiReact title="React" size={size} />
      </Tooltip>
      <Tooltip content="Tailwind CSS">
        <SiTailwindcss title="Tailwind CSS" size={size} />
      </Tooltip>
      <Tooltip content="Node.js">
        <SiNodedotjs title="Node.js" size={size} />
      </Tooltip>
      <Tooltip content="JavaScript">
        <SiJavascript title="JavaScript" size={size} />
      </Tooltip>
      <Tooltip content="Yarn">
        <SiYarn title="Yarn" size={size} />
      </Tooltip>
      <Tooltip content="Java">
        <FaJava title="Java" size={size} />
      </Tooltip>
      <Tooltip content="Ruby">
        <DiRuby title="Ruby" size={size} />
      </Tooltip>
      <Tooltip content="Git">
        <SiGit title="Git" size={size} />
      </Tooltip>
    </>
  );
}

export default function Skills() {
  return (
    <div className="col-span-2 row-span-2 rounded-xl bg-pink-950 px-5 pb-2 pt-4 shadow md:px-7 md:pb-3 md:pt-5">
      <div className="hidden w-full grid-cols-4 grid-rows-3 place-items-center gap-4 md:grid [&>svg]:w-full [&>svg]:text-center">
        <Icons size={24} />
      </div>
      <div className="grid w-full grid-cols-4 grid-rows-3 place-items-center gap-4 md:hidden [&>svg]:w-full [&>svg]:text-center">
        <Icons size={20} />
      </div>
      <p className="mt-2 text-center text-xs text-zinc-400 md:mt-3">Some tech I use</p>
    </div>
  );
}

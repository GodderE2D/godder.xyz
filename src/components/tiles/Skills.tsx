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

export default function Skills() {
  return (
    <div className="col-span-2 row-span-2 rounded-xl bg-pink-950 p-5 shadow md:p-7">
      <div className="grid w-full grid-cols-4 grid-rows-3 place-items-center gap-4 [&>svg]:w-full [&>svg]:text-center">
        <Tooltip content="TypeScript">
          <SiTypescript title="TypeScript" size={24} />
        </Tooltip>
        <Tooltip content="Discord">
          <SiDiscord title="Discord" size={24} />
        </Tooltip>
        <Tooltip content="Next.js">
          <SiNextdotjs title="Next.js" size={24} />
        </Tooltip>
        <Tooltip content="PostgreSQL">
          <SiPostgresql title="PostgreSQL" size={24} />
        </Tooltip>
        <Tooltip content="React">
          <SiReact title="React" size={24} />
        </Tooltip>
        <Tooltip content="Tailwind CSS">
          <SiTailwindcss title="Tailwind CSS" size={24} />
        </Tooltip>
        <Tooltip content="Node.js">
          <SiNodedotjs title="Node.js" size={24} />
        </Tooltip>
        <Tooltip content="JavaScript">
          <SiJavascript title="JavaScript" size={24} />
        </Tooltip>
        <Tooltip content="Yarn">
          <SiYarn title="Yarn" size={24} />
        </Tooltip>
        <Tooltip content="Java">
          <FaJava title="Java" size={24} />
        </Tooltip>
        <Tooltip content="Ruby">
          <DiRuby title="Ruby" size={24} />
        </Tooltip>
        <Tooltip content="Git">
          <SiGit title="Git" size={24} />
        </Tooltip>
      </div>
    </div>
  );
}

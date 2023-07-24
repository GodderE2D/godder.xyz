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

export default function Skills() {
  return (
    <div className="col-span-2 row-span-2 rounded-2xl bg-pink-950 p-6 text-right shadow md:p-8">
      <div className="grid w-full grid-cols-4 grid-rows-3 gap-4 [&>svg]:w-full [&>svg]:text-center">
        <SiTypescript title="TypeScript" size={24} />
        <SiDiscord title="Discord" size={24} />
        <SiNextdotjs title="Next.js" size={24} />
        <SiPostgresql title="PostgreSQL" size={24} />
        <SiReact title="React" size={24} />
        <SiTailwindcss title="Tailwind CSS" size={24} />
        <SiNodedotjs title="Next.js" size={24} />
        <SiJavascript title="JavaScript" size={24} />
        <SiYarn title="Yarn" size={24} />
        <FaJava title="Java" size={24} />
        <DiRuby title="Ruby" size={24} />
        <SiGit title="Git" size={24} />
      </div>
    </div>
  );
}

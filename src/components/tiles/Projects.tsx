export default function Projects() {
  return (
    <div className="col-span-3 row-span-2 rounded-2xl bg-zinc-950 p-5 shadow md:p-7">
      <h2 className="mb-3 bg-gradient-to-tl from-zinc-500 to-zinc-300 bg-clip-text text-lg font-extrabold text-transparent md:text-xl">
        My projects
      </h2>
      <div className="prose prose-sm prose-invert text-inherit md:prose-base">
        <p>
          While I&apos;m not{" "}
          <a href="http://github.com/tristancamejo" target="_blank" rel="noopener noreferrer">
            Tristan
          </a>{" "}
          with countless side projects (and domain names), I do have some work worthy enough to be featured on my
          website.
        </p>
        <ul>
          <li>
            <a href="https://reindeer.bsr.gg/" target="_blank" rel="noopener noreferrer">
              Reindeer
            </a>
            : a reports/moderation/security Discord bot used in over 150 servers and protecting 60,000+ users
          </li>
          <li>
            <a href="https://discord.gg/R2FDvcPXTK" target="_blank" rel="noopener noreferrer">
              Fortalice SMP
            </a>
            : a Minecraft server with custom plugins and membership system
          </li>
          <li>
            <a href="https://discord.gg/R2FDvcPXTK" target="_blank" rel="noopener noreferrer">
              Blue Shark River
            </a>
            : an alliance for growing developer and gaming-oriented projects
          </li>
          <li>
            <a href="https://tristansmp.com/" target="_blank" rel="noopener noreferrer">
              Tristan SMP
            </a>
            : website for Tristan SMP with applications and a marketplace
          </li>
          <li>
            <a href="https://github.com/Disploy/disploy" target="_blank" rel="noopener noreferrer">
              Disploy
            </a>
            : guide and documentation for Disploy, a Discord API library
          </li>
        </ul>
        <p>
          I also have lots of more open-source work and contributions over on my{" "}
          <a href="http://github.com/GodderE2D" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

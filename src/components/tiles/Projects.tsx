export default function Projects() {
  return (
    <div className="col-span-3 row-span-2 rounded-2xl bg-zinc-950 p-6 shadow md:p-8">
      <h2 className="mb-3 bg-gradient-to-tl from-zinc-500 to-zinc-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
        My projects and other stuff
      </h2>
      <div className="prose prose-sm prose-invert text-inherit md:prose-base">
        <p>
          Whilst I&apos;m not{" "}
          <a href="http://github.com/tristancamejo" target="_blank" rel="noopener noreferrer">
            Tristan
          </a>{" "}
          with countless side projects (and domain names), I do have some work worthy enough to be featured on my
          website.
        </p>
        <ul>
          <li>
            <a href="http://bsr.gg/" target="_blank" rel="noopener noreferrer">
              Blue Shark River
            </a>
            , a technical Discord and Minecraft server (Fortalice SMP)
          </li>
          <li>
            <a href="http://reindeer.bsr.gg/" target="_blank" rel="noopener noreferrer">
              Reindeer
            </a>
            , a Discord bot for message and user reporting
          </li>
          <li>
            <a href="http://github.com/GodderE2D/octo" target="_blank" rel="noopener noreferrer">
              Octo
            </a>
            , a Discord bot for moderation dedicated to BSR
          </li>
          <li>
            <a href="http://modslides.com" target="_blank" rel="noopener noreferrer">
              Modslides
            </a>
            , a website to discuss and learn online moderation
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

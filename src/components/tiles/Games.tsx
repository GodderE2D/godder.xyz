const GAMES = {
  VALORANT: "https://tracker.gg/valorant/profile/riot/GodderE2D%23ruby/overview",
  Minecraft: "https://namemc.com/profile/28b0a9f9-65c1-450b-abeb-da9bf3d5830a",
  Fortnite: null,
  "Overwatch 2": null,
  "CS:GO": null,
  "HITMAN WoA": null,
  "Geometry Dash": null,
  "Cities: Skylines": null,
  Satisfactory: null,
  "Stardew Valley": null,
  "Genshin Impact": null,
  "and more...": "https://steamcommunity.com/id/goddere2d",
};

export default function Games() {
  return (
    <div className="col-span-3 row-span-2 rounded-2xl bg-teal-950 p-6 shadow md:col-span-2 md:p-8">
      <h2 className="mb-3 bg-gradient-to-tl from-teal-500 to-teal-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
        Games I (sometimes) play
      </h2>
      {Object.entries(GAMES).map(([game, link]) =>
        link ? (
          <span key={game + link} className="text-sm md:text-base">
            <a href={link} className="font-medium text-white underline" target="_blank" rel="noopener noreferrer">
              {game}
            </a>
            {game === "and more..." ? "" : ", "}
          </span>
        ) : (
          <span key={game + link} className="text-sm md:text-base">
            {game}
            {game === "and more..." ? "" : ", "}
          </span>
        ),
      )}
    </div>
  );
}

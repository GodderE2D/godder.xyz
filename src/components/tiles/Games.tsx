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
    <div className="col-span-3 row-span-2 rounded-xl bg-teal-950 p-5 shadow md:col-span-2 md:p-7">
      <h2 className="mb-2 bg-gradient-to-tl from-teal-500 to-teal-300 bg-clip-text text-lg font-extrabold text-transparent md:text-xl">
        Me?
      </h2>
      <p>
        I&apos;m living in Virginia, USA right now for school, but I was originally from Sydney, Australia. I usually
        like to play games with my friends, writing, or travelling. I&apos;ve been to a few (12) countries in my short
        lifespan.
      </p>
    </div>
  );
}

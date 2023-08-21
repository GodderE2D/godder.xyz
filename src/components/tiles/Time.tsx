"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const TIMEZONE = "America/New_York" as const;

export default function Time() {
  const timezone = DateTime.now().setZone(TIMEZONE).toFormat("Z");
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(DateTime.now().setZone(TIMEZONE).toFormat("T"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now().setZone(TIMEZONE).toFormat("T"));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="col-span-1 row-span-1 rounded-2xl bg-purple-950 p-4 text-center shadow">
      <h2 className="mb-0.5 h-7 bg-gradient-to-tl from-purple-500 to-purple-300 bg-clip-text text-xl font-medium text-transparent md:mb-2">
        {time || "--"}
      </h2>
      <p className="text-xs">
        in <strong>UTC{timezone}</strong>
      </p>
    </div>
  );
}

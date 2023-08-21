"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";

// You have to change the human-friendly date on line 37 too
const MONTH = 5 as const;
const DAY = 7 as const;

export default function Birthday() {
  const [days, setDays] = useState<number>();

  useEffect(() => {
    const now = DateTime.now().startOf("day");

    const birthdayPassed = now.month >= MONTH && now.day >= DAY;
    const birthday = DateTime.fromObject({
      year: birthdayPassed ? now.year + 1 : now.year,
      month: MONTH,
      day: DAY,
    });

    setDays(birthday.diff(now, "days").days);
  }, []);

  return (
    <div className="group col-span-2 row-span-1 rounded-2xl bg-lime-950 p-4 text-center shadow md:col-span-1">
      <h2 className="mb-0.5 bg-gradient-to-tl from-lime-500 to-lime-300 bg-clip-text text-xl font-medium text-transparent md:mb-2">
        {days ? (days === 366 ? "Today" : `${days} day${days !== 1 ? "s" : ""}`) : "--"}
      </h2>
      {days === 366 ? (
        <p className="text-xs">is my birthday! 🎉</p>
      ) : (
        <>
          <p className="text-xs group-hover:hidden">until my birthday</p>
          <p className="hidden text-xs group-hover:block">
            until <strong>7 May</strong>
          </p>
        </>
      )}
    </div>
  );
}

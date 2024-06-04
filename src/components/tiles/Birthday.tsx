"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import confetti from "canvas-confetti";

// You have to change the human-friendly date on line 86 too
const MONTH = 5 as const;
const DAY = 7 as const;

export default function Birthday() {
  const [days, setDays] = useState<number>();
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const now = DateTime.now().startOf("day");

    const birthdayPassed = now.month > MONTH || (now.month === MONTH && now.day >= DAY);
    const birthday = DateTime.fromObject({
      year: birthdayPassed ? now.year + 1 : now.year,
      month: MONTH,
      day: DAY,
    });

    const diffDays = birthday.diff(now, "days").days;
    setDays(diffDays);

    if (now.month === MONTH && now.day === DAY) {
      setIsBirthday(true);
      showConfetti();
    }
  }, []);

  function showConfetti() {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    let skew = 1;
    const colors = ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"];
    let count = 0;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / duration));
      const color = colors[count++ % colors.length];
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: [color],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  }

  return (
    <div
      className={`group col-span-2 row-span-1 rounded-xl bg-lime-950 p-4 text-center shadow md:col-span-1 ${isBirthday ? "cursor-pointer bg-gradient-to-tl from-lime-950 via-lime-800 to-lime-700 bg-300% px-6 py-4 duration-75 motion-safe:animate-gradient" : ""}`}
      onClick={() => isBirthday && showConfetti()}
    >
      <h2 className="mb-0.5 bg-gradient-to-tl from-lime-500 to-lime-300 bg-clip-text text-xl font-medium text-transparent md:mb-2">
        {days ? (isBirthday ? "Today" : `${days} day${days !== 1 ? "s" : ""}`) : "--"}
      </h2>
      {isBirthday ? (
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

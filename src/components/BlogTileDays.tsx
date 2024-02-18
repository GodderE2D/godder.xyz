"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export function BlogTileDays({ postDate }: { postDate: string }) {
  const [days, setDays] = useState<number | undefined>();
  useEffect(() => setDays(Math.abs(Math.floor(DateTime.fromISO(postDate).diffNow("days").days))), [postDate]);

  return <>{days ?? "--"}</>;
}

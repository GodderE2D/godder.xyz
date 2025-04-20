import { NextRequest } from "next/server";
import { ipAddress } from "@vercel/functions";
import { z } from "zod";

const dataSchema = z.object({
  ip: z.string(),
  connection: z.object({ org: z.string() }),
});

export interface ResponseData {
  triggered: boolean;
  result?: z.infer<typeof dataSchema>;
}

export async function GET(request: NextRequest) {
  if (!process.env.IRL_ALERT_ISP_ORG?.length) return Response.json({ triggered: false } satisfies ResponseData);

  const ip = ipAddress(request) || request.headers.get("X-Real-IP") || request.headers.get("X-Forwarded-For");
  if (!ip || ip === "::1") return Response.json({ triggered: false } satisfies ResponseData);

  const json = await fetch(`https://ipwho.is/${ip}`, { next: { revalidate: 3600 } }).then((res) => res.json());

  const result = dataSchema.safeParse(json);

  if (!result.success) {
    console.error(result.error);
    return Response.json({ triggered: false } satisfies ResponseData);
  }

  if (!result.data.connection.org.trim().toLowerCase().includes(process.env.IRL_ALERT_ISP_ORG.trim().toLowerCase())) {
    return Response.json({ triggered: false } satisfies ResponseData);
  }

  return Response.json({ triggered: true, result: result.data } satisfies ResponseData);
}

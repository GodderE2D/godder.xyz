import "./globals.css";
import type { Metadata, Viewport } from "next";
import { inter, roboto } from "./fonts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
  ),
  title: "GodderE2D",
  description:
    "Hello, internet stranger! I'm a developer and student with interests in web dev, Discord bots, and technical Minecraft. I play some video games like VALORANT and Minecraft in my free time. You can mostly find me on Discord.",
  icons: ["/logo-rounded.png"],
  openGraph: {
    type: "website",
    images: ["/logo-rounded.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#58c8ac",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
        <meta itemProp="image" content="/logo-rounded.png" />
        <meta itemProp="imageUrl" content="/logo-rounded.png" />
      </head>
      <body className={`${inter.className} ${roboto.className} bg-zinc-900 text-zinc-300`}>
        <Navbar />
        {children}
        <Footer commitSha={process.env.VERCEL_GIT_COMMIT_SHA} />
        <Analytics />
      </body>
    </html>
  );
}

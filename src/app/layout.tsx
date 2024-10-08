import "./globals.css";
import type { Metadata, Viewport } from "next";
import { inter, roboto } from "./fonts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IRLAlert from "../components/IRLAlert";
import { Analytics } from "@vercel/analytics/react";
import { ViewTransitions } from "next-view-transitions";
import { Advertisements } from "../components/Advertisements";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
  ),
  title: "GodderE2D",
  description:
    "Hello, internet stranger! I'm a developer and student with interests in web dev, cybersecurity, Discord bots, and technical Minecraft. I play games like Fortnite, Minecraft, and VALORANT in my free time. You can mostly find me on Discord.",
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
    <ViewTransitions>
      <html lang="en">
        <head>
          <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
          <meta itemProp="image" content="/logo-rounded.png" />
          <meta itemProp="imageUrl" content="/logo-rounded.png" />
        </head>
        <body className={`${inter.className} ${roboto.className} bg-zinc-900 text-zinc-300`}>
          <IRLAlert />
          <Navbar />
          {/* <Advertisements /> */}
          {children}
          <Footer commitSha={process.env.VERCEL_GIT_COMMIT_SHA} />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}

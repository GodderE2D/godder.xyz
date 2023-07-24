import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blogs · GodderE2D",
  description: "Browse GodderE2D's newest blog posts and learn more about a bit of everything.",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}

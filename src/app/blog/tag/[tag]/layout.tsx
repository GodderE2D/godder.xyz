import { ResolvingMetadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata(props: { params: Promise<{ tag: string }> }, parent: ResolvingMetadata) {
  const params = await props.params;
  return {
    title: `Posts tagged with ${params.tag} · GodderE2D`,
    description: `Find posts on GodderE2D's blog tagged with ${params.tag}.`,
  };
}

export default function TagLayout({ children }: { children: ReactNode }) {
  return children;
}

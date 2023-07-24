import { ReactNode } from "react";
import { HiExternalLink } from "react-icons/hi";

export default function Social({ name, link, icon }: { name: string; link: string; icon: ReactNode }) {
  return (
    <a className="group flex w-min items-center gap-2 hover:underline" href={link} rel="noopener noreferrer">
      {icon}
      <span>{name}</span>
      <HiExternalLink className="opacity-0 transition-all group-hover:opacity-100" />
    </a>
  );
}

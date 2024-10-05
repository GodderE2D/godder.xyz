import { HTMLProps } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import logoRounded from "../../../../public/logo-rounded.svg";

export default function Signature({
  position,
  className,
  ...props
}: { position?: "left" | "right" } & HTMLProps<HTMLDivElement>) {
  return (
    <div className={`${position === "right" ? "ml-auto" : ""} ${className}`} {...props}>
      <Link href="/" className="group ml-auto block" passHref>
        <div className={`flex items-center ${position === "right" ? "flex-row-reverse" : ""}`}>
          <Image className="inline-block h-9 w-9 rounded-full" src={logoRounded} alt="GodderE2D's Avatar" />
          <div className={`${position === "right" ? "mr-3 text-right" : "ml-3 text-left"}`}>
            <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300">Written by</p>
            <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100">GodderE2D</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

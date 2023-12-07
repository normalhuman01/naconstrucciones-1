"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { calibriFont } from "@/lib/fonts";

export const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.includes(href);
  return (
    <Link
      href={href}
      className={cn(
        "text-[20px]",
        isActive ? "text-black" : "text-[#767171]",
        calibriFont.className,
        className
      )}
    >
      {title}
    </Link>
  );
};

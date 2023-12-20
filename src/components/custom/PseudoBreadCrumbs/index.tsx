"use client";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import { FaAngleRight, FaAnglesRight } from "react-icons/fa6";

type TPseudoBreadCrumbsProps = {
  title: string;
  actions: { link: string; label: string }[];
} & HTMLAttributes<HTMLDivElement>;
export const PseudoBreadCrumbs = ({
  title,
  actions,
  className,
}: TPseudoBreadCrumbsProps) => {
  const pathname = usePathname();

  const children = actions.map((action, index) => {
    const isMatch = pathname.includes(action.link);
    return (
      <div key={index} className="flex items-center gap-3 md:gap-6">
        {index ? (
          <>
            <FaAngleRight size="20px" className="inline md:hidden" />
            <Image
              src="/img/icons/right.png"
              width={24}
              height={40}
              alt="Right"
              className="hidden md:inline"
            />
          </>
        ) : (
          <>
          <FaAnglesRight size="20px" className="inline md:hidden" />
            <Image
              src="/img/icons/double-right.png"
              width={30}
              height={40}
              alt="Right"
              className="hidden md:inline"
            />
          </>
        )}
        <Link href={action.link}>
          <h2
            className={cn(
              "text-[16px] md:text-[21px] letter tracking-[.35rem]",
              isMatch && "font-bold",
              calibriFont.className
            )}
          >
            {action.label}
          </h2>
        </Link>
      </div>
    );
  });
  return (
    <header
      className={cn(
        "bg-dark text-white px-5 py-[10px] md:py-5 sticky top-[104px] md:top-[106px] z-[100]",
        className
      )}
    >
      <div className="max-w-[1120px] mx-auto flex gap-[10px] md:gap-6 items-start md:items-center">
        <h1
          className={cn("text-[23px] md:text-[32px]", arialBlackFont.className)}
        >
          {title}
        </h1>

        <div className="flex md:hidden flex-wrap gap-[10px] md:gap-6">{children}</div>
        <div className="hidden md:flex flex-wrap gap-[10px] md:gap-6">{children}</div>
      </div>
    </header>
  );
};

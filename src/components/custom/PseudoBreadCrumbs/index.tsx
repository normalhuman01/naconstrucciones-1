"use client";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, HTMLAttributes } from "react";

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
    const isMatch = pathname === action.link;
    return (
      <Fragment key={index}>
        {index ? (
          <Image
            src="/img/icons/right.png"
            width={24}
            height={40}
            alt="Right"
          />
        ) : null}
        <Link href={action.link}>
          <h2
            className={cn(
              "text-[20px] font-light letter tracking-widest",
              isMatch && "font-[700]",
              calibriFont.className
            )}
          >
            {action.label}
          </h2>
        </Link>
      </Fragment>
    );
  });
  return (
    <header
      className={cn("bg-dark text-white p-5 sticky top-[92px] z-[100]", className)}
    >
      <div className="max-w-[960px] mx-auto flex flex-wrap gap-6 items-center">
        <h1 className={cn("text-[20px] font-bold", arialBlackFont.className)}>
          {title}
        </h1>
        {children.length && (
          <Image
            src="/img/icons/double-right.png"
            width={30}
            height={40}
            alt="Right"
          />
        )}

        {children}
      </div>
    </header>
  );
};

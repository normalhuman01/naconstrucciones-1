import { abadiFont, impactFont } from "@/lib/fonts";
import { ButtonBlackMore } from "..";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

type THeroRightProps = {
  top: string;
  title1: string;
  title2: string;
  description: ReactNode;
  image: string;
  link?: string;
} & HTMLAttributes<HTMLDivElement>;
export const HeroRight = ({
  top,
  title1,
  title2,
  description,
  image,
  link = "#",
  className,
  style,
  ...props
}: THeroRightProps) => {
  return (
    <div
      className={cn("h-[370px]", className)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
      {...props}
    >
      <div className="max-w-[960px] mx-auto flex flex-col items-end justify-center h-full">
        <h2 className="flex flex-col items-end leading-none">
          <span className={cn("text-[24px] mb-3", impactFont.className)}>
            {top}
          </span>
          <span
            className={cn(
              "text-black leading-none text-[70px] z-10",
              abadiFont.className
            )}
            style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {title1}
          </span>
          <span
            className={cn(
              "text-white leading-none text-[70px] relative top-[-25px]",
              abadiFont.className
            )}
            style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}
          >
            {title2}
          </span>
        </h2>
        <p className="max-w-[305px] text-right relative top-[-25px]">
          {description}
        </p>
        <Link href={link}>
          <ButtonBlackMore className="relative top-[-5px] border-white">
            VER MÁS
          </ButtonBlackMore>
        </Link>
      </div>
    </div>
  );
};

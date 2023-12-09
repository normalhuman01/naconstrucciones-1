import { abadiFont, calibriFont, impactFont } from "@/lib/fonts";
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
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
  descriptionProps?: HTMLAttributes<HTMLParagraphElement>;
  descriptionClassName?: string;
  linkLabel?: string;
} & HTMLAttributes<HTMLDivElement>;
export const HeroRight = ({
  top,
  title1,
  title2,
  description,
  image,
  link = "#",
  className,
  buttonProps,
  descriptionProps,
  descriptionClassName,
  linkLabel,
  style,
  ...props
}: THeroRightProps) => {
  return (
    <div
      className={cn("h-[400px]", className)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
      {...props}
    >
      <div className="max-w-[1120px] mx-auto flex flex-col items-end justify-center h-full">
        <h2 className="flex flex-col items-end leading-none">
          <span className={cn("text-[24px] mb-3", impactFont.className)}>
            {top}
          </span>
          <span
            className={cn(
              "text-black leading-none text-[40px] font-light md:text-[75px] z-10",
              abadiFont.className
            )}
            style={{ textShadow: "0px 4px 3px rgba(0, 0, 0, 0.7)" }}
          >
            {title1}
          </span>
          <span
            className={cn(
              "text-white leading-none text-[40px] font-light md:text-[75px] relative top-[-25px]",
              abadiFont.className
            )}
            style={{ textShadow: "0px 4px 3px rgba(0, 0, 0, 0.7)" }}
          >
            {title2}
          </span>
        </h2>
        <p
          {...descriptionProps}
          className={cn(
            "max-w-[310px] text-right text-[19px] relative top-[-25px]",
            calibriFont.className,
            descriptionProps?.className,
            descriptionClassName
          )}
        >
          {description}
        </p>
        <Link href={link}>
          <ButtonBlackMore
            {...buttonProps}
            className={cn(
              "relative top-[-5px] border-white",
              buttonProps?.className
            )}
          >
            {linkLabel || "VER MÁS"}
          </ButtonBlackMore>
        </Link>
      </div>
    </div>
  );
};

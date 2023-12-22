import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

const Text = ({
  text,
  className,
  ...props
}: { text: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("text-[20px] font-bold leading-4", className)}
      {...props}
    >
      <span className="text-[rgb(166,166,166)]">{text}</span>
      <br />
      <span>{text}</span>
    </div>
  );
};

export const TulumBaliOld = () => {
  return (
    <div className="max-w-[1120px] m-auto my-8 overflow-hidden">
      <div className="flex items-end gap-4 justify-center relative">
        <Text text="BALI" />
        <img
          src={"/img/portfolio/tulum-bali.jpg"}
          alt={"Tulum Bali"}
          width={924}
          height={464}
          className="shrink sm:w-[75%] lg:w-[auto]"
        />
        <Text text="BALI" />
        <Text
          text="TULUM"
          className="absolute top-10 left-[50%] transform translate-x-[-50%]"
        />
      </div>
    </div>
  );
};

export const TulumBali = () => {
  return (
    <div className="my-8 w-full relative">
      <img
        src={"/img/portfolio/tulum-bali.jpg"}
        alt={"Tulum Bali"}
        className="w-full"
      />
      <div className="w-full absolute flex flex-col items-center mt-[.5rem] md:mt-[2rem] text-center top-0 left-0">
        <h3 className={cn("text-[24px] md:text-[32px] leading-none font-bold", arialBlackFont.className)}>
          TULUM
        </h3>
        <h4
          className={cn("text-[19px] leading-none tracking-[0.2rem]", calibriFont.className)}
        >
          Bali
        </h4>
      </div>
    </div>
  );
};

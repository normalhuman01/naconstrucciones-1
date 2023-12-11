import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

const Text = ({
  text,
  className,
  ...props
}: { text: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("text-[20px] font-bold leading-4",className)}{...props}>
      <span className="text-[rgb(166,166,166)]">{text}</span>
      <br />
      <span>{text}</span>
    </div>
  );
};

export const TulumBali = () => {
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
        <Text text="TULUM" className="absolute top-10 left-[50%] transform translate-x-[-50%]" />
      </div>
    </div>
  );
};

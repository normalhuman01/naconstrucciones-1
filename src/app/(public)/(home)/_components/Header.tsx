import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

export const Header = ({
  top,
  main,
  hiddenTop,
  className,
  ...props
}: {
  top: string;
  main: string;
  hiddenTop?: boolean;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("leading-none", className)} {...props}>
      {!hiddenTop && <span className="text-[16px] font-light">{top}</span>}
      <h3 className={cn("text-[32px]", arialBlackFont.className)}>
        {main}
      </h3>
    </div>
  );
};

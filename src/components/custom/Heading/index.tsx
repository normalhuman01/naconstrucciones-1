import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Heading = ({
  top,
  main,
  className,
  ...props
}: { top?: string; main: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("leading-none", className)} {...props}>
      {top && <span className="text-[16px] font-light">{top}</span>}
      <h3 className={cn("text-[28px] md:text-[32px] font-bold", arialBlackFont.className)}>
        {main}
      </h3>
    </div>
  );
};

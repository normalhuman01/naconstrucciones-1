import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export const Axometria = () => {
  return (
    <div className="flex flex-col items-center mt-[96px]">
      <img src="/img/portfolio/Axometria.png" alt="" className="max-w-full md:max-w-[72%]" />
      <h4 className={cn("text-center text-[15px] mt-3", calibriFont.className)}>
        Axometria
      </h4>
    </div>
  );
};

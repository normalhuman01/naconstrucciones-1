import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export const Elevations = () => {
  return (
    <div className="mt-[96px]">
      <img src="/img/portfolio/elevations.jpg" alt="" className="w-full" />
      <h4 className={cn("text-center text-[15px] mt-3", calibriFont.className)}>
        Elevaciones y Cortes Arquitectónicos
      </h4>
    </div>
  );
};

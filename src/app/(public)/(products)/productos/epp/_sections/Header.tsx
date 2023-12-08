import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { IoSearch } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="h-[140px] w-full mb-[62px] bg-[#E9E6E5] relative">
      <p className={cn("flex flex-col", "relative bottom-[-62px]")}>
        <span
          className={cn(
            "text-[60px] leading-10 text-white",
            arialBlackFont.className
          )}
          style={{ WebkitTextStroke: "1px black" }}
        >
          ¿QUÉ ESTÁS
        </span>
        <span
          className={cn(
            "text-[29.5px] leading-12 text-black",
            arialBlackFont.className
          )}
        >
          ¿QUÉ ESTÁS BUSCANDO?
        </span>
        <span
          className={cn(
            "text-[60.5px] leading-7 text-white",
            arialBlackFont.className
          )}
          style={{ WebkitTextStroke: "1px black" }}
        >
          BUSCANDO?
        </span>
      </p>
      <div className="absolute bottom-1 right-1 border-black border-[1px] rounded-full h-[44px] w-[44px] flex justify-center items-center bg-[#FEE21B]">
        <IoSearch className="text-xl" />
      </div>
    </div>
  );
};

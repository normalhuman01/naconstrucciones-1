import { BrandsCarousel } from "@/components/custom/BrandsCarousel";
import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Brands = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <div className="max-w-[960px] mx-auto my-10 w-full">
        <div
          className={cn(
            "text-center w-full text-[24px]",
            arialBlackFont.className
          )}
        >
          <div
            className={cn("bg-[#E9E6E5] text-white")}
            style={{ WebkitTextStroke: "1px black" }}
          >
            PRINCIPALES MARCAS
          </div>
          <div className="leading-[1rem] mb-3">PRINCIPALES MARCAS</div>
        </div>
      </div>

      <BrandsCarousel />
    </div>
  );
};

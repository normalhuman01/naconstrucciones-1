import { BrandsCarousel } from "@/components/custom/BrandsCarousel";
import { TitleFeatured } from "@/components/custom/TitleFeatured";
import { HTMLAttributes } from "react";

export const Brands = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <div className="max-w-[1120px] mx-auto my-10 w-full">
        <TitleFeatured title="PRINCIPALES MARCAS" />
      </div>

      <BrandsCarousel />
    </div>
  );
};

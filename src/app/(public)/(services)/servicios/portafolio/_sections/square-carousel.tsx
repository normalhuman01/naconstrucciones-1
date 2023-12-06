"use client";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const links = ["SALA", "COMEDOR", "COCINA", "BAÑO", "DORMITORIO", "TERRAZA"];

export const SquareCarousel = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className={cn("text-[32px] font-bold mb-5", arialBlackFont.className)}>FOTOS</h3>
      <Carousel
        responsive={responsive}
        ssr
        infinite
        autoPlay
        className="w-[340px] h-[370px]"
      >
        <div
          className="w-[330px] h-[370px]"
          style={{
            backgroundImage: `url("/img/portfolio/comedor.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="w-[330px] h-[370px]"
          style={{
            backgroundImage: `url("/img/portfolio/comedor.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </Carousel>
      <div className={cn("flex justify-between gap-8 my-3 text-[18px]", calibriFont.className)}>
        {links.map((link) => (
          <span
            className={cn(
              "cursor-pointer",
              links[index] === link ? "font-bold underline" : ""
            )}
            key={link}
            onClick={() => setIndex(links.indexOf(link))}
          >
            {link}
          </span>
        ))}
      </div>
    </div>
  );
};

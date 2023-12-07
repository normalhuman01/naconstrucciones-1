"use client";
import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
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

export const RectangleCarousel = () => {
  return (
    <div className="bg-[#E9E6E5] py-10">
      <div className="max-w-[1120px] m-auto">
        <div className="flex items-center justify-around">
          <ol className="flex gap-2 items-center">
            <li className="cursor-pointer flex justify-center items-center text-[20px] w-[40px] h-[40px] rounded-full border-black border-[1px] bg-white">
              1
            </li>
            <li className="cursor-pointer flex justify-center items-center text-[20px] w-[40px] h-[40px] rounded-full border-black border-[1px]">
              2
            </li>
            <li className="cursor-pointer flex justify-center items-center text-[20px] w-[40px] h-[40px] rounded-full border-black border-[1px]">
              3
            </li>
          </ol>
          <h3
            className={cn(
              "text-[32px] font-bold mb-5",
              arialBlackFont.className
            )}
          >
            FOTOS
          </h3>
          <ol className="flex gap-2 items-center">
            <li className="cursor-pointer flex justify-center items-center text-[20px] w-[40px] h-[40px] rounded-full border-black border-[1px]">
              4
            </li>
            <li className="cursor-pointer flex justify-center items-center text-[20px] w-[40px] h-[40px] rounded-full border-black border-[1px]">
              5
            </li>
            <li className="cursor-pointer flex justify-center items-center text-[20px] w-[40px] h-[40px] rounded-full border-black border-[1px]">
              6
            </li>
          </ol>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-center">
        <div
          className={cn(
            "text-[#262626] flex self-start mt-10 flex-col font-bold text-[32px]",
            arialBlackFont.className
          )}
        >
          <span className="leading-8 w-full mr-10">Heard But Never Seen</span>
          <span className="w-full text-right leading-8">BOR-BUA</span>
        </div>
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
        <div
          className={cn(
            "text-[#262626] flex self-end mb-10 flex-col font-bold text-[32px]",
            arialBlackFont.className
          )}
        >
          <span className="leading-8 w-full text-right text-[70px]">
            BOR-BUA
          </span>
          <span className="w-full mr-20 leading-15">Heard But Never Seen</span>
        </div>
      </div>
    </div>
  );
};

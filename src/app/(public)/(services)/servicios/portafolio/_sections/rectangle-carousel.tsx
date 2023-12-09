"use client";
import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TCoffeeShop } from "./coffee-shops";

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

const ButtonGroup = ({ carousel }: { carousel: Carousel | null }) => {
  return (
    <>
      <div
        onClick={() => carousel?.previous(1)}
        className="absolute cursor-pointer top-[50%] translate-y-[-50%] left-[40px] text-white w-[40px] h-[40px]  z-10"
      >
        <Image
          src="/img/icons/arrow-left.png"
          alt="arrow left"
          width={40}
          height={40}
        />
      </div>

      <div
        onClick={() => carousel?.next(1)}
        className="absolute cursor-pointer top-[50%] translate-y-[-50%] right-[40px] text-white w-[40px] h-[40px]  z-10"
      >
        <Image
          src="/img/icons/arrow-right.png"
          alt="arrow right"
          width={40}
          height={40}
        />
      </div>
    </>
  );
};

const linksData = [
  [
    "/img/portfolio/borbua/1.jpg",
    "/img/portfolio/borbua/2.jpg",
    "/img/portfolio/borbua/3.jpg",
    "/img/portfolio/borbua/4.jpg",
    "/img/portfolio/borbua/5.jpg",
    "/img/portfolio/borbua/6.jpg",
    "/img/portfolio/borbua/7.jpg",
    "/img/portfolio/borbua/8.jpg",
  ],
  [],
  [],
  [],
  [],
  [],
];

const baseClassesCircle =
  "cursor-pointer flex justify-center items-center text-[20px] w-[40px] h-[40px] rounded-full border-black border-[1px]";

type TRectangleCarouselProps = {
  coffeeShops: TCoffeeShop[];
  indexCoffeShop: number;
  setIndexCoffeShop: React.Dispatch<React.SetStateAction<number>>;
};

export const RectangleCarousel = ({
  coffeeShops,
  indexCoffeShop,
  setIndexCoffeShop,
}: TRectangleCarouselProps) => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);

  return (
    <div className="bg-[#E9E6E5] py-10">
      <div className="max-w-[1120px] m-auto">
        <div className="flex items-center justify-around">
          <ol className="flex gap-2 items-center">
            <li
              onClick={() => setIndexCoffeShop(0)}
              className={cn(
                baseClassesCircle,
                indexCoffeShop === 0 && "bg-white"
              )}
            >
              1
            </li>
            <li
              onClick={() => setIndexCoffeShop(1)}
              className={cn(
                baseClassesCircle,
                indexCoffeShop === 1 && "bg-white"
              )}
            >
              2
            </li>
            <li
              onClick={() => setIndexCoffeShop(2)}
              className={cn(
                baseClassesCircle,
                indexCoffeShop === 2 && "bg-white"
              )}
            >
              3
            </li>
          </ol>
          <h3
            className={cn(
              "text-[32px] font-bold mb-[6px]",
              arialBlackFont.className
            )}
          >
            FOTOS
          </h3>
          <ol className="flex gap-2 items-center">
            <li
              onClick={() => setIndexCoffeShop(3)}
              className={cn(
                baseClassesCircle,
                indexCoffeShop === 3 && "bg-white"
              )}
            >
              4
            </li>
            <li
              onClick={() => setIndexCoffeShop(4)}
              className={cn(
                baseClassesCircle,
                indexCoffeShop === 4 && "bg-white"
              )}
            >
              5
            </li>
            <li
              onClick={() => setIndexCoffeShop(5)}
              className={cn(
                baseClassesCircle,
                indexCoffeShop === 5 && "bg-white"
              )}
            >
              6
            </li>
          </ol>
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <div
          className={cn(
            "absolute top-0 left-[2rem]",
            "text-[#262626] flex self-start mt-10 flex-col font-bold text-[32px]",
            arialBlackFont.className
          )}
        >
          <span className="leading-8 w-full mr-10">
            {coffeeShops[indexCoffeShop]?.sub1}
          </span>
          <span className="w-full text-right leading-8">
            {coffeeShops[indexCoffeShop]?.sub2}
          </span>
        </div>
        <Carousel
          ref={setCarousel}
          responsive={responsive}
          ssr
          infinite
          autoPlay
          className="min-w-[340px] h-[384px]"
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup carousel={carousel} />}
          customLeftArrow={<></>}
          customRightArrow={<></>}
        >
          {coffeeShops[indexCoffeShop]?.images.map((image, _index) => (
            <img
              src={image}
              alt={indexCoffeShop + "-" + _index}
              key={indexCoffeShop + "_" + _index}
              className="h-[384px] m-auto"
            />
          ))}
        </Carousel>
        <div
          className={cn(
            "absolute bottom-0 right-[2rem]",
            "text-[#262626] flex self-end mb-10 flex-col font-bold text-[32px]",
            arialBlackFont.className
          )}
        >
          <span className="leading-8 w-full text-right text-[70px]">
            {coffeeShops[indexCoffeShop]?.sub2}
          </span>
          <span className="w-full mr-[30px] leading-15">
            {coffeeShops[indexCoffeShop]?.sub1}
          </span>
        </div>
      </div>
    </div>
  );
};

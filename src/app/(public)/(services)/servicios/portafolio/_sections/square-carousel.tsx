"use client";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
  {
    title: "SALA",
    images: [
      "/img/portfolio/estancia/sala/1.jpg",
      "/img/portfolio/estancia/sala/2.jpg",
      "/img/portfolio/estancia/sala/3.jpg",
      "/img/portfolio/estancia/sala/4.jpg",
      "/img/portfolio/estancia/sala/5.jpg",
      "/img/portfolio/estancia/sala/6.jpg",
      "/img/portfolio/estancia/sala/7.jpg",
      "/img/portfolio/estancia/sala/8.jpg",
      "/img/portfolio/estancia/sala/9.jpg",
    ],
  },
  {
    title: "COMEDOR",
    images: [
      "/img/portfolio/estancia/comedor/1.jpg",
      "/img/portfolio/estancia/comedor/2.jpg",
      "/img/portfolio/estancia/comedor/3.jpg",
      "/img/portfolio/estancia/comedor/4.jpg",
    ],
  },
  {
    title: "COCINA",
    images: [
      "/img/portfolio/estancia/cocina/1.jpg",
    ],
  },
  {
    title: "BAÑO",
    images: [
      "/img/portfolio/estancia/bano/1.jpg",
      "/img/portfolio/estancia/bano/2.jpg",
    ],
  },
  {
    title: "DORMITORIO",
    images: [
      "/img/portfolio/estancia/dormitorio/1.jpg",
      "/img/portfolio/estancia/dormitorio/2.jpg",
      "/img/portfolio/estancia/dormitorio/3.jpg",
      "/img/portfolio/estancia/dormitorio/4.jpg",
    ],
  },
  {
    title: "TERRAZA",
    images: [
      "/img/portfolio/estancia/terraza/1.jpg",
      "/img/portfolio/estancia/terraza/2.jpg",
      "/img/portfolio/estancia/terraza/3.jpg",
    ],
  },
];

export const SquareCarousel = () => {
  const [index, setIndex] = useState(0);
  const [carousel, setCarousel] = useState<null | Carousel>(null);

  return (
    <div className="flex items-center justify-center flex-col mt-[60px]">
      <h3
        className={cn(
          "text-[32px] font-bold mb-[6px]",
          arialBlackFont.className
        )}
      >
        FOTOS
      </h3>
      <div className="relative w-full flex justify-center">
        <Carousel
          ref={setCarousel}
          responsive={responsive}
          ssr
          infinite
          autoPlay
          className="min-w-[346px] h-[384px]"
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup carousel={carousel} />}
          customLeftArrow={<></>}
          customRightArrow={<></>}
        >
          {linksData[index].images.map((image, _index) => (
            <img
              src={image}
              alt={linksData[index].title + "-" + _index}
              className="h-[384px] m-auto"
              key={index + "_" + _index}
            />
          ))}
        </Carousel>
      </div>
      <div
        className={cn(
          "flex flex-wrap justify-center md:justify-between gap-[20px] md:gap-[48px] my-3 text-[19px]",
          calibriFont.className
        )}
      >
        {linksData.map(({ title }, _index) => {
          return (
            <span
              className={cn(
                "cursor-pointer",
                linksData[index].title === title ? "font-bold underline" : ""
              )}
              key={title}
              onClick={() => setIndex(_index)}
            >
              {title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

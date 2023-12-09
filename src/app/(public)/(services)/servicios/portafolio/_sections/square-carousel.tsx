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

const links = ["SALA", "COMEDOR", "COCINA", "BAÑO", "DORMITORIO", "TERRAZA"];

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
      "/img/portfolio/estancias/4.jpg",
      "/img/portfolio/estancias/9.jpg",
      "/img/portfolio/estancias/10.jpg",
      "/img/portfolio/estancias/11.jpg",
      "/img/portfolio/estancias/13.jpg",
      "/img/portfolio/estancias/14.jpg",
      "/img/portfolio/estancias/15.jpg",
      "/img/portfolio/estancias/16.jpg",
      "/img/portfolio/estancias/18.jpg",
    ],
  },
  {
    title: "COMEDOR",
    images: [],
  },
  {
    title: "COCINA",
    images: [],
  },
  {
    title: "BAÑO",
    images: [],
  },
  {
    title: "DORMITORIO",
    images: [],
  },
  {
    title: "TERRAZA",
    images: [],
  },
];

export const SquareCarousel = () => {
  const [index, setIndex] = useState(0);
  const [carousel, setCarousel] = useState<null | Carousel>(null);

  return (
    <div className="flex items-center justify-center flex-col">
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
          className="w-[346px] h-[384px]"
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup carousel={carousel} />}
          customLeftArrow={<></>}
          customRightArrow={<></>}
        >
          {
            linksData[index].images.map((image, index) => (
              <div
                key={index}
                className="w-[346px] h-[384px] m-auto"
                style={{
                  backgroundImage: `url("${image}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))
          }
          {/* <div
            className="w-[346px] h-[384px] m-auto"
            style={{
              backgroundImage: `url("/img/portfolio/comedor.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-[346px] h-[384px] m-auto"
            style={{
              backgroundImage: `url("/img/portfolio/comedor.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div> */}
        </Carousel>
      </div>
      <div
        className={cn(
          "flex justify-between gap-8 my-3 text-[19px]",
          calibriFont.className
        )}
      >
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

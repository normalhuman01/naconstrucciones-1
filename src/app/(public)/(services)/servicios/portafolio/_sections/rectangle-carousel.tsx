"use client";
import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

const ButtonGroup = ({
  carousel,
  indexCoffeShop,
  items,
  setIndexCoffeShop,
}: {
  carousel: Carousel | null;
  indexCoffeShop: number;
  items: number;
  setIndexCoffeShop: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div
        onClick={() => {
          setIndexCoffeShop((prev) => {
            if (prev === 0) {
              return items - 1;
            }
            return prev - 1;
          });
          carousel?.previous(1);
        }}
        className="absolute cursor-pointer top-[172px] translate-y-[-50%] left-[1.25rem] md:left-[90px] text-white w-[40px] h-[40px]  z-10"
      >
        <Image
          src="/img/icons/arrow-left.png"
          alt="arrow left"
          width={40}
          height={40}
        />
      </div>

      <div
        onClick={() => {
          setIndexCoffeShop((prev) => {
            if (prev === items - 1) {
              return 0;
            }
            return prev + 1;
          });
          carousel?.next(1);
        }}
        className="absolute cursor-pointer top-[172px] translate-y-[-50%] right-[1.25rem] md:right-[90px] text-white w-[40px] h-[40px]  z-10"
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

  useEffect(() => {
    if (carousel) {
      carousel.goToSlide(indexCoffeShop + 2);
    }
  }, [indexCoffeShop]);

  return (
    <div className="bg-[#E9E6E5] py-10">
      <div className="xl:max-w-[1120px] m-auto">
        <div className="flex items-center justify-center relative">
          <Carousel
            ref={setCarousel}
            responsive={responsive}
            ssr
            infinite
            className="min-w-[340px]"
            renderButtonGroupOutside={true}
            customButtonGroup={
              <ButtonGroup
                carousel={carousel}
                indexCoffeShop={indexCoffeShop}
                setIndexCoffeShop={setIndexCoffeShop}
                items={coffeeShops.length}
              />
            }
            customLeftArrow={<></>}
            customRightArrow={<></>}
          >
            {coffeeShops.map((coffeeShop, _index) => (
              <div key={_index}>
                <div className="relative">
                  <div
                    className={cn(
                      "absolute z-10 top-0 left-0",
                      "text-[#262626] flex self-start mt-10 flex-col font-bold text-[20px] md:text-[32px]",
                      arialBlackFont.className,
                    )}
                    style={{ WebkitTextStroke: ".5px #E9E6E5" }}
                  >
                    <span className="leading-8 w-full mr-10">
                      {coffeeShop?.sub1}
                    </span>
                    <span className="w-full text-right pl-4 leading-8">
                      {coffeeShop?.sub2}
                    </span>
                  </div>
                  <img
                    src={coffeeShop.images[0]}
                    alt={indexCoffeShop + "-" + _index}
                    key={indexCoffeShop + "_" + _index}
                    className="h-[384px] m-auto"
                  />
                  <div
                    className={cn(
                      "absolute z-10 bottom-0 right-0",
                      "text-[#262626] flex self-end mb-10 flex-col font-bold text-[20px] md:text-[32px]",
                      arialBlackFont.className,
                    )}
                    style={{ WebkitTextStroke: ".5px #E9E6E5" }}
                  >
                    <span className="leading-8 w-full pl-4 text-right text-[30px] md:text-[70px]">
                      {coffeeShop?.sub2}
                    </span>
                    <span className="w-full mr-[36px] leading-15">
                      {coffeeShop?.sub1}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-10 px-[1px]">
                  {coffeeShop.images.slice(1).map((image, _index) => (
                    <img src={image} alt={image} key={image} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

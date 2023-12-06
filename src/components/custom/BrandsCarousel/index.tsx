"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 9,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 9,
  },
};

const array = Array.from({ length: 26 }, (_, i) => i + 1);

export const BrandsCarousel = () => {
  return (
    <div className="my-8 w-full">
      <Carousel
        customTransition="all 5s linear"
        responsive={responsive}
        infinite
        arrows={false}
        autoPlay
      >
        {array.map((i) => (
          <div key={i} className="flex h-full items-center">
            <Image
              src={`/img/brands/logos/${i}.jpg`}
              width={170}
              height={60}
              alt="brand"
              className="w-[170px] h-[60px] object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

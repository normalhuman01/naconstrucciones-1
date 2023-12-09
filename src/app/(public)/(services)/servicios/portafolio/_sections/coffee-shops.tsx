"use client";
import { useState } from "react";
import { SeeAlso } from "./see-also";
import { RectangleCarousel } from "./rectangle-carousel";

export type TCoffeeShop = {
  title: string;
  sub1: string;
  sub2: string;
  images: string[];
};
const coffeeShops: TCoffeeShop[] = [
  {
    title: "BOR BUA Heard But Never Seen",
    sub1: "Heard But Never Seen",
    sub2: "BOR-BUA",
    images: [
      "/img/portfolio/coffee/1/1.jpg",
      "/img/portfolio/coffee/1/2.jpg",
      "/img/portfolio/coffee/1/3.jpg",
      "/img/portfolio/coffee/1/4.jpg",
      "/img/portfolio/coffee/1/5.jpg",
      "/img/portfolio/coffee/1/6.jpg",
      "/img/portfolio/coffee/1/7.jpg",
      "/img/portfolio/coffee/1/8.jpg",
    ],
  },
  {
    title: "HARUDOT By Nana Coffee Roasters",
    sub1: "By Nana Coffee Roasters",
    sub2: "HARUDOT",
    images: [
      "/img/portfolio/coffee/2/1.jpg",
      "/img/portfolio/coffee/2/2.jpg",
      "/img/portfolio/coffee/2/3.jpg",
      "/img/portfolio/coffee/2/4.jpg",
      "/img/portfolio/coffee/2/5.jpg",
      "/img/portfolio/coffee/2/6.jpg",
      "/img/portfolio/coffee/2/7.jpg",
      "/img/portfolio/coffee/2/8.jpg",
      "/img/portfolio/coffee/2/9.jpg",
      "/img/portfolio/coffee/2/10.jpg",
      "/img/portfolio/coffee/2/11.jpg",
      "/img/portfolio/coffee/2/12.jpg",
      "/img/portfolio/coffee/2/13.jpg",
    ],
  },
  {
    title: "A HARUDOT By Nana Coffee Roasters",
    sub1: "By Nana Coffee Roasters",
    sub2: "HARUDOT",
    images: [],
  },
  {
    title: "B HARUDOT By Nana Coffee Roasters",
    sub1: "By Nana Coffee Roasters",
    sub2: "HARUDOT",
    images: [],
  },
  {
    title: "C HARUDOT By Nana Coffee Roasters",
    sub1: "By Nana Coffee Roasters",
    sub2: "HARUDOT",
    images: [],
  },
  {
    title: "D HARUDOT By Nana Coffee Roasters",
    sub1: "By Nana Coffee Roasters",
    sub2: "HARUDOT",
    images: [],
  },
];

export const CoffeeShops = () => {
  const [indexCoffeShop, setIndexCoffeShop] = useState(0);

  return (
    <>
      <SeeAlso
        coffeeShops={coffeeShops}
        indexCoffeShop={indexCoffeShop}
        setIndexCoffeShop={setIndexCoffeShop}
      />
      <RectangleCarousel
        coffeeShops={coffeeShops}
        indexCoffeShop={indexCoffeShop}
        setIndexCoffeShop={setIndexCoffeShop}
      />
    </>
  );
};

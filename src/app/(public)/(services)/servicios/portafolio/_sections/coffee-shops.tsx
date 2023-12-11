"use client";
import { useState } from "react";
import { SeeAlso } from "./see-also";
import { RectangleCarousel } from "./rectangle-carousel";

export type TCoffeeShop = {
  title: string;
  title1: string;
  title2: string;
  sub1: string;
  sub2: string;
  images: string[];
};
const coffeeShops: TCoffeeShop[] = [
  {
    title: "BOR BUA Heard But Never Seen",
    title1: "BOR BUA",
    title2: "Heard But Never Seen",
    sub1: "Heard But Never Seen",
    sub2: "BOR-BUA",
    images: [
      "/img/portfolio/coffee/borua/1.jpg",
      "/img/portfolio/coffee/borua/2.jpg",
      "/img/portfolio/coffee/borua/3.jpg",
      "/img/portfolio/coffee/borua/4.jpg",
      "/img/portfolio/coffee/borua/5.jpg",
      // "/img/portfolio/coffee/1/1.jpg",
      // "/img/portfolio/coffee/1/2.jpg",
      // "/img/portfolio/coffee/1/3.jpg",
      // "/img/portfolio/coffee/1/4.jpg",
      // "/img/portfolio/coffee/1/5.jpg",
      // "/img/portfolio/coffee/1/6.jpg",
      // "/img/portfolio/coffee/1/7.jpg",
      // "/img/portfolio/coffee/1/8.jpg",
    ],
  },
  {
    title: "HARUDOT By Nana Coffee Roasters",
    title1: "HARUDOT",
    title2: "By Nana Coffee Roasters",
    sub1: "By Nana Coffee Roasters",
    sub2: "HARUDOT",
    images: [
      "/img/portfolio/coffee/harudot/1.jpg",
      "/img/portfolio/coffee/harudot/2.jpg",
      "/img/portfolio/coffee/harudot/3.jpg",
      "/img/portfolio/coffee/harudot/4.jpg",
      "/img/portfolio/coffee/harudot/5.jpg",
      // "/img/portfolio/coffee/2/1.jpg",
      // "/img/portfolio/coffee/2/2.jpg",
      // "/img/portfolio/coffee/2/3.jpg",
      // "/img/portfolio/coffee/2/4.jpg",
      // "/img/portfolio/coffee/2/5.jpg",
      // "/img/portfolio/coffee/2/6.jpg",
      // "/img/portfolio/coffee/2/7.jpg",
      // "/img/portfolio/coffee/2/8.jpg",
      // "/img/portfolio/coffee/2/9.jpg",
      // "/img/portfolio/coffee/2/10.jpg",
      // "/img/portfolio/coffee/2/11.jpg",
      // "/img/portfolio/coffee/2/12.jpg",
      // "/img/portfolio/coffee/2/13.jpg",
    ],
  },
  {
    title: "Tanulo Coffee",
    title1: "TANULO",
    title2: "Coffee",
    sub1: "Coffee",
    sub2: "TANULO",
    images: [
      "/img/portfolio/coffee/tanulo/1.jpg",
      "/img/portfolio/coffee/tanulo/2.jpg",
      "/img/portfolio/coffee/tanulo/3.jpg",
      "/img/portfolio/coffee/tanulo/4.jpg",
      "/img/portfolio/coffee/tanulo/5.jpg",
    ],
  },
  {
    title: "FLORYDAY Café Khaoyai Flower",
    title1: "FLORYDAY",
    title2: "Café Khaoyai Flower",
    sub1: "Café Khaoyai Flower",
    sub2: "FLORYDAY",
    images: [
      "/img/portfolio/coffee/floryday/1.jpg",
      "/img/portfolio/coffee/floryday/2.jpg",
      "/img/portfolio/coffee/floryday/3.jpg",
      "/img/portfolio/coffee/floryday/4.jpg",
      "/img/portfolio/coffee/floryday/5.jpg",
    ],
  },
  {
    title: "APRIL Café Chachoengsao",
    title1: "APRIL",
    title2: "Café Chachoengsao",
    sub1: "Café Chachoengsao",
    sub2: "APRIL",
    images: [
      "/img/portfolio/coffee/april/1.jpg",
      "/img/portfolio/coffee/april/2.jpg",
      "/img/portfolio/coffee/april/3.jpg",
      "/img/portfolio/coffee/april/4.jpg",
      "/img/portfolio/coffee/april/5.jpg",
    ],
  },
  {
    title: "NOTHING HOUSE Cafe",
    title1: "NOTHING HOUSE",
    title2: "Cafe",
    sub1: "Cafe",
    sub2: "NOTHING HOUSE",
    images: [
      "/img/portfolio/coffee/nothing/1.jpg",
      "/img/portfolio/coffee/nothing/2.jpg",
      "/img/portfolio/coffee/nothing/3.webp",
      "/img/portfolio/coffee/nothing/4.jpg",
      "/img/portfolio/coffee/nothing/5.jpg",
    ],
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

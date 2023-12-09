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
      "/img/portfolio/borbua/1.jpg",
      "/img/portfolio/borbua/2.jpg",
      "/img/portfolio/borbua/3.jpg",
      "/img/portfolio/borbua/4.jpg",
      "/img/portfolio/borbua/5.jpg",
      "/img/portfolio/borbua/6.jpg",
      "/img/portfolio/borbua/7.jpg",
      "/img/portfolio/borbua/8.jpg",
    ],
  },
  {
    title: "HARUDOT By Nana Coffee Roasters",
    sub1: "By Nana Coffee Roasters",
    sub2: "HARUDOT",
    images: [],
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

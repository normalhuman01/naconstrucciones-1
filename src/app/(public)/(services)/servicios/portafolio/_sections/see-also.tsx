import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { TCoffeeShop } from "./coffee-shops";

type TSeeAlsoProps = {
  coffeeShops: TCoffeeShop[];
  indexCoffeShop: number;
  setIndexCoffeShop: React.Dispatch<React.SetStateAction<number>>;
};
export const SeeAlso = ({
  coffeeShops,
  setIndexCoffeShop,
  indexCoffeShop,
}: TSeeAlsoProps) => {
  return (
    <div className="flex flex-col gap-8 items-center text-center mt-[60px]">
      <header
        className={cn("underline text-[19px] leading-5", calibriFont.className)}
      >
        <span className="inline-flex justify-center mb-2">VER TAMBIÉN</span>
        <p>
          Si hay un fenómeno que ha transformado por completo la forma de
          entender
          <br />
          el ocio en el mundo, es precisamente el de las cafeterías.
        </p>
      </header>
      <p className="leading-6">
        <span className={cn("text-[32px]", arialBlackFont.className)}>
          ARQUITECTURA EN
        </span>
        <br />
        <span className={cn("text-[32px]", arialBlackFont.className)}>
          CAFETERÍAS
        </span>
      </p>
      <ol
        className={cn("font-bold text-[19px] text-left", calibriFont.className)}
      >
        {coffeeShops.map((shop, index) => (
          <li key={index} onClick={() => setIndexCoffeShop(index)} className="cursor-pointer">
            <span className="mr-[2.5rem]">{index + 1}</span>
            <span className={cn(indexCoffeShop === index && "underline")}>
              {shop.title}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

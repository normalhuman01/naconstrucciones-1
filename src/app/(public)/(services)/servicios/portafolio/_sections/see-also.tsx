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
    <div className="flex flex-col gap-8 items-center text-center mt-[60px] bg-[#E9E6E5] px-8 lg:px-0">
      <p className="leading-6 mt-[96px]">
        <span className={cn("text-[32px]", arialBlackFont.className)}>
          ARQUITECTURA EN CAFETERÍAS
        </span>
      </p>
      <p className={cn("text-[19px] leading-5", calibriFont.className)}>
        Si hay un fenómeno que ha transformado por completo la forma de entender
        <br />
        el ocio en el mundo, es precisamente el de las cafeterías.
      </p>
      <ol
        className={cn(
          "text-[19px] text-left flex lg:gap-[50px] flex-col lg:flex-row",
          calibriFont.className
        )}
      >
        {coffeeShops.map((shop, index) => (
          <li
            key={index}
            onClick={() => setIndexCoffeShop(index)}
            className="cursor-pointer text-center"
          >
            {/* <span className="mr-[2.5rem]">{index + 1}</span> */}
            <span className={cn(indexCoffeShop === index && "underline", indexCoffeShop === index && "font-bold","leading-none")}>
              {shop.title1}
              <br />
              {shop.title2}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

"use client";
import { ButtonBlack } from "@/components/custom";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { TProductEmbedded } from "@/types";
import Link from "next/link";
import { useState } from "react";

export const BtnSizes = ({ product }: { product: TProductEmbedded }) => {
  const [sizes, setSizes] = useState([product.sizes.value[0]]);
  const link = `https://wa.me/+51${
    config.phone
  }?text=Hola, me gustaría más información sobre el producto ${
    product.title.rendered
  }. Tallas: ${sizes.join(", ")}`;
  return (
    <>
      {product.sizes.value.length > 0 && (
        <section className="flex items-start lg:items-center gap-2">
          <h3 className="font-bold">Talla:</h3>
          <ul className="flex items-center flex-wrap gap-2">
            {product.sizes.value?.map((size, index) => {
              return (
                <li
                  key={`${size}_${index}`}
                  onClick={() =>
                    setSizes((prevSizes) => {
                      if (prevSizes.includes(size)) {
                        return prevSizes.filter(
                          (prevSize) => prevSize !== size
                        );
                      }
                      return prevSizes.concat(size);
                    })
                  }
                  className={cn(
                    "w-[30px] h-[30px] cursor-pointer",
                    "flex justify-center items-center",
                    "rounded-full border-black-50 border-[1px]",
                    sizes.includes(size) && "border-black"
                  )}
                >
                  {size}
                </li>
              );
            })}
          </ul>
        </section>
      )}
      <Link target="_blank" href={link}>
        <ButtonBlack>CONSEGUIR</ButtonBlack>
      </Link>
    </>
  );
};

"use client";
import { cn } from "@/lib/utils";
import classes from "./style.module.css";

const array = Array.from({ length: 26 }, (_, i) => i + 1);

export const BrandsCarousel = () => {
  return (
    <div className="my-8 w-full overflow-hidden">
      <div className={cn("flex gap-5 items-center", classes.container)}>
        {array.map((i) => (
          <div
            key={i}
            className="flex h-full items-center justify-center mx-3 max-w-[500px] w-full"
          >
            <img
              src={`/img/brands/logos/${i}.jpg`}
              alt="brand"
              className={cn("w-[auto] object-contain h-[40px]")}
              style={{
                objectFit: "contain",
                maxWidth: "500px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

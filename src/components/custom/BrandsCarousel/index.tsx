"use client";
import { cn } from "@/lib/utils";
import classes from "./style.module.css";

const base = [
  "kleenguard",
  "bullard",
  "3m",
  "steelpro",
  "clute",
  "deltaplus",
  "edelbrock",
  "forte",
  "fullrisk",
  "msa",
  "showa",
  "spro",
  "nazca",
  "tridente",
  "cat",
  "portwest",
  "howard",
  "libus",
  "north",
  "segpro",
  "panduit",
  "haws",
  "segusa",
  "speakman",
  "westland",
  "tecseg",
  "ansell",
];
const array = [...base, ...base];

export const BrandsCarousel = ({ className }: { className?: string }) => {
  return (
    <div className={cn("my-8 w-full overflow-hidden", className)}>
      <div className={cn("flex gap-5 items-center", classes.container)}>
        {array.map((i, index) => (
          <div
            key={i + "_" + index}
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

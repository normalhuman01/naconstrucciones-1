import { cn } from "@/lib/utils";
import classes from "./plants.module.css";
import { calibriFont } from "@/lib/fonts";

export const Plants = () => {
  return (
    <>
      <div
        className={cn(
          "m-auto max-w-[1120px] flex justify-center flex-wrap px-8 lg:px-0 lg:flex-nowrap mt-[96px]",
          classes.container
        )}
      >
        <img
          className={cn(
            "lg:pr-[3rem] max-w-full md:max-w-[440px] m-auto mb-5 lg:mb-0",
            classes.principal
          )}
          src="/img/portfolio/plants/Imagen.jpg"
          alt=""
        />
        <img
          src="/img/portfolio/plants/plants.png"
          alt=""
          className={cn(classes.plants)}
        />
        <h4 className={cn("text-center mb-5 text-[15px]", calibriFont.className, classes.text)}>
          Plantas Arquitectónicas
        </h4>
      </div>

      <div
        className={cn(
          "hidden"
        )}
      >
        <img
          className={cn(
            "lg:pr-[3rem] max-w-full md:max-w-[440px] m-auto mb-5 lg:mb-0"
          )}
          src="/img/portfolio/plants/Imagen.jpg"
          alt=""
        />
        <img src="/img/portfolio/plants/plants.png" alt="" className={cn()} />
        <h4 className={cn("text-center mb-5 text-[19px]")}>
          Plantas Arquitectónicas
        </h4>
      </div>
    </>
  );
};

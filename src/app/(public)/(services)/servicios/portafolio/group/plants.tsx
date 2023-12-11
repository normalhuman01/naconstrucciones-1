import { cn } from "@/lib/utils";
import classes from "./plants.module.css";

export const Plants = () => {
  return (
    <div className={cn("m-auto max-w-[1120px] flex justify-center sm:flex-wrap px-8 lg:px-0 lg:flex-nowrap mt-[96px]", classes.container)}>
      <img
        className={cn(classes.large, "lg:pr-[5rem] max-w-[440px] m-auto mb-5 lg:mb-0")}
        src="/img/portfolio/plants/Imagen.jpg"
        alt=""
      />
      {/* <img className={cn(classes.medium1)} src="/img/portfolio/plants/Plant1.png" alt="" />
      <img className={cn(classes.medium2)} src="/img/portfolio/plants/Plant2.png" alt="" /> */}
      <div className="flex flex-col justify-center">
        <img src="/img/portfolio/plants/plants.png" alt="" />
        <h4 className={cn("text-center", classes.title)}>
          Plantas Arquitectónicas
        </h4>
      </div>
    </div>
  );
};

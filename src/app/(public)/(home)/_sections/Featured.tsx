import { ButtonYellow } from "@/components/custom";
import { cn } from "@/lib/utils";
import bootImage from "../_assets/boot.png";
import { HTMLAttributes } from "react";
import Image from "next/image";
import { arialBlackFont, calibriFont } from "@/lib/fonts";

type TBlackCircleProps = HTMLAttributes<HTMLDivElement>;
const BlackCircle = ({ className, ...props }: TBlackCircleProps) => {
  return (
    <div
      className={cn("w-[140px] md:w-[260px] h-[140px] md:h-[260px] rounded-full bg-[#262626]", className)}
      {...props}
    ></div>
  );
};

const Left = () => {
  return (
    <div className="relative">
      {/* <BlackCircle /> */}
      {/* <Image
        src={bootImage.src}
        width={320}
        height={320}
        alt="boot"
        className="absolute top-[-20px] md:top-[-60px] w-[200px] md:min-w-[320px] md:h-[320px]"
      /> */}
      <Image
        src={"/img/home/boot-circle.png"}
        width={350}
        height={305}
        alt="boot"
        className="scale-90"
        // className="absolute bottom-[20px] opacity-[.1] blur-sm filter backdrop-blur-5 dark w-[200px] md:min-w-[320px] md:h-[40px]"
      />
    </div>
  );
};

const Bg = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-white z-[-1]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[250px] bg-[#E9E6E5] z-[-1]"></div>
    </>
  );
};

export const Featured = () => {
  return (
    <div className="relative py-4 px-5">
      <Bg />
      <div className="bg-white shadow-strong rounded-[40px] p-5 flex justify-center items-center gap-4 md:gap-[60px] max-w-[960px]	m-auto">
        <Left />
        <div className="flex flex-col gap-2 items-start">
          <p>
            <strong
              className={cn(
                "text-xl md:text-[44px] leading-[0] font-bold text-white",
                arialBlackFont.className
              )}
              style={{ WebkitTextStroke: "1px black" }}
            >
              PRODUCTOS
            </strong>
            <br />
            <strong
              className={cn(
                "text-[20px] leading-[0] font-bold tracking-wide",
                arialBlackFont.className
              )}
            >
              PRODUCTOS DESTACADOS
            </strong>
            <br />
            <strong
              className={cn(
                "text-xl md:text-[40.5px] leading-[36px] font-bold text-white",
                arialBlackFont.className
              )}
              style={{ WebkitTextStroke: "1px black" }}
            >
              DESTACADOS
            </strong>
          </p>
          <p className="flex flex-col">
            <strong
              className={cn(
                "max-w-[320px] font-bold text-[20px] leading-5",
                calibriFont.className
              )}
            >
              Zapatilla Conquest Stone High Puma
            </strong>
            <span
              className={cn("font-light text-[18px]", calibriFont.className)}
            >
              Zapato de Seguridad
            </span>
          </p>
          <ButtonYellow>CONSEGUIR</ButtonYellow>
        </div>
      </div>
    </div>
  );
};

import { ButtonYellow } from "@/components/custom";
import { cn } from "@/lib/utils";
import bootImage from "../_assets/boot.png";
import { HTMLAttributes } from "react";
import Image from "next/image";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import Link from "next/link";
import { config } from "@/config";

type TBlackCircleProps = HTMLAttributes<HTMLDivElement>;
const BlackCircle = ({ className, ...props }: TBlackCircleProps) => {
  return (
    <div
      className={cn(
        "w-[140px] md:w-[260px] h-[140px] md:h-[260px] rounded-full bg-[#262626]",
        className
      )}
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
      <img
        src={"/img/home/boot_featured_circle.png"}
        width={330}
        height={305}
        alt="boot"
        // className="scale-90"
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
      <div className="bg-white shadow-strong rounded-[40px] p-5 flex justify-center items-center gap-4 md:gap-[60px] max-w-[1120px]	m-auto">
        <Left />
        <div className="flex flex-col justify-between h-full gap-2 items-start">
          <div className="pt-6">
            <p className="mb-[12px]">
              <strong
                className={cn(
                  "text-xl md:text-[56px] leading-[0] font-bold text-white",
                  arialBlackFont.className
                )}
                style={{ WebkitTextStroke: "1px black" }}
              >
                PRODUCTOS
              </strong>
              <br />
              <strong
                className={cn(
                  "text-[25.25px] leading-[0] font-bold tracking-wide",
                  arialBlackFont.className
                )}
              >
                PRODUCTOS DESTACADOS
              </strong>
              <br />
              <strong
                className={cn(
                  "text-xl md:text-[51.5px] leading-[36px] font-bold text-white",
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
                  "font-bold text-[23.2px] leading-5",
                  calibriFont.className
                )}
              >
                Zapatilla Conquest Stone High Puma
              </strong>
              <span
                className={cn("font-light text-[23.2px]", calibriFont.className)}
              >
                Zapato de Seguridad
              </span>
            </p>
          </div>
          <Link target="_blank" href={`https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre su Zapatilla Conquest Stone High Puma`}>
            <ButtonYellow className="mt-6">CONSEGUIR</ButtonYellow>
          </Link>
        </div>
      </div>
    </div>
  );
};

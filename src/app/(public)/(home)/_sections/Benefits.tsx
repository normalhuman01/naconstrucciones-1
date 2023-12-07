import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Benefits = () => {
  return (
    <div className="bg-dark py-[60px] px-8 flex flex-wrap justify-center items-start gap-10 text-center text-white">
      <div className="flex flex-col items-center w-[260px] h-[220px]">
        <div className="bg-white overflow-hidden flex justify-center items-center p-3 rounded-full w-[90px] h-[90px] mb-4">
          <Image
            src="/img/icons/certificado-icon.png"
            width={48}
            height={48}
            alt=""
            className="object-contain"
          />
        </div>
        <h3
          className={cn(
            "font-bold text-[19px] whitespace-nowrap",
            calibriFont.className
          )}
        >
          Seguridad en tus Compras
        </h3>
        <p className={cn("text-[19px]", calibriFont.className)}>
          Contamos con certificado para todas tus compras
        </p>
      </div>
      <div className="flex flex-col items-center w-[260px] h-[220px]">
        <div className="bg-white overflow-hidden flex justify-center items-center p-3 rounded-full w-[90px] h-[90px] mb-4">
          <Image
            src="/img/icons/callcenter.png"
            width={48}
            height={48}
            alt=""
            className="object-contain"
          />
        </div>
        <h3
          className={cn(
            "font-bold text-[19px] whitespace-nowrap",
            calibriFont.className
          )}
        >
          Asesoría personalizada
        </h3>
        <p className={cn("text-[19px]", calibriFont.className)}>
          Un ejecutivo de cuentas y un staff de cotizadores te acompañarán en tu
          compra
        </p>
      </div>
      <div className="flex pl-3 flex-col items-center justify-between md:items-start gap-4 w-[260px] h-[220px]">
        <span
          className={cn(
            "text-[19px] font-light text-[#A6A6A6]",
            calibriFont.className
          )}
        >
          DESPACHO ÁGIL
        </span>
        <p
          className={cn(
            "flex flex-col gap-1 leading-none md:text-left text-[32px]",
            arialBlackFont.className
          )}
        >
          <span className="text-[#FEE21B] leading-none">DELIVERY</span>
          <span
            className="text-dark leading-none"
            style={{ WebkitTextStroke: "1px white" }}
          >
            EXPRESS
          </span>
        </p>
        <span className={cn("text-[19px] font-light", calibriFont.className)}>
          ventas@naconstrucciones.com
        </span>
      </div>
      <div className="w-[260px] h-[220px] relative">
        <img
          src="/img/others/delivery-packages.png"
          width={1600}
          height={1600}
          alt=""
          className="max-w-[330px] relative bottom-[2rem] right-[4rem]"
        />
      </div>
    </div>
  );
};

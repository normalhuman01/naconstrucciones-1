"use client";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const Benefits = () => {
  const [showSecurity, setShowSecurity] = useState(false);
  const [showAdvice, setShowAdvice] = useState(false);

  return (
    <div className="bg-dark py-[60px] px-2 flex flex-wrap justify-center items-start gap-5 md:gap-10 text-center text-white">
      <div
        className="flex flex-col items-center w-[150px] md:w-[260px] min-h-[220px]"
        onClick={() => setShowSecurity(!showSecurity)}
      >
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
            "font-bold text-[19px] whitespace-wrap md:whitespace-nowrap mb-2 leading-[1]",
            calibriFont.className
          )}
        >
          Seguridad en tus Compras
        </h3>
        {showSecurity && (
          <p className={cn("md:hidden text-[19px] leading-none", calibriFont.className)}>
            Contamos con certificado para todas tus compras
          </p>
        )}
        <p className={cn("hidden md:block text-[19px] leading-none", calibriFont.className)}>
          Contamos con certificado para todas tus compras
        </p>
      </div>
      <div
        className="flex flex-col items-center w-[150px] md:w-[260px] min-h-[220px]"
        onClick={() => setShowAdvice(!showAdvice)}
      >
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
            "font-bold text-[19px] whitespace-wrap md:whitespace-nowrap mb-2 leading-[1]",
            calibriFont.className
          )}
        >
          Asesoría personalizada
        </h3>
        {showAdvice && (
          <p className={cn("md:hidden text-[19px] leading-none", calibriFont.className)}>
            Un ejecutivo de cuentas y un staff de cotizadores te acompañarán en
            tu compra
          </p>
        )}
        <p className={cn("hidden md:block text-[19px] leading-none", calibriFont.className)}>
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
      <div className="w-[230px] md:w-[260px] h-[220px] relative">
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

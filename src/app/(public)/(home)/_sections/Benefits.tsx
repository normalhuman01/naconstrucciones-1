import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Benefits = () => {
  return (
    <div className="bg-dark py-[60px] px-8 flex flex-wrap justify-center items-start gap-6 text-center text-white">
      <div className="flex flex-col items-center w-[240px] h-[193px]">
        <div className="bg-white overflow-hidden flex justify-center items-center p-3 rounded-full w-[90px] h-[90px] mb-4">
          <Image
            src="/img/icons/certificado-icon.png"
            width={48}
            height={48}
            alt=""
            className="object-contain"
          />
        </div>
        <h3 className="font-bold text-[16px] whitespace-nowrap">Seguridad en tus Compras</h3>
        <p className="text-[14px]">
          Contamos con certificado para todas tus compras
        </p>
      </div>
      <div className="flex flex-col items-center w-[240px] h-[193px]">
        <div className="bg-white overflow-hidden flex justify-center items-center p-3 rounded-full w-[90px] h-[90px] mb-4">
          <Image
            src="/img/icons/callcenter.png"
            width={48}
            height={48}
            alt=""
            className="object-contain"
          />
        </div>
        <h3 className="font-bold text-[16px]">Asesoría personalizada</h3>
        <p className="text-[14px]">
          Un ejecutivo de cuentas y un staff de cotizadores te acompañarán en tu
          compra
        </p>
      </div>
      <div className="flex flex-col items-center justify-between md:items-start gap-4 w-[240px] h-[193px]">
        <span className="text-[14px] text-[#A6A6A6]">DESPACHO ÁGIL</span>
        <p className={cn("flex flex-col gap-1 leading-none md:text-left font-bold text-[32px]", arialBlackFont.className)}>
          <span className="text-[#FEE21B] leading-none">DELIVERY</span>
          <span className="text-dark leading-none"
            style={{ WebkitTextStroke: "1px white" }}
          >EXPRESS</span>
        </p>
        <span className={cn("text-[18px] font-light", calibriFont.className)}>ventas@naconstrucciones.com</span>
      </div>
      <div className="w-[240px] h-[193px] relative">
        <Image src="/img/others/delivery-packages.png" width={264} height={232} alt="" className="max-w-[272px] relative bottom-0 right-0" />
      </div>
    </div>
  );
};

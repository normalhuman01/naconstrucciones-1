import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Header } from "../_components/Header";

export const AboutUs = () => {
  return (
    <div className="my-8 px-8">
      <div className="max-w-[960px] mx-auto flex flex-col items-start gap-5">
        <Header top="SOBRE" main="NOSOTROS" />
        <div className="flex flex-wrap gap-10">
          <div className="flex-1 min-w-[280px] bg-dark text-white text-justify px-[3.4rem] pt-14 pb-20 relative">
            <h4 className="font-bold mb-4 text-[24px]">MISIÓN</h4>
            <p className={cn("font-light text-[20px] leading-6", calibriFont.className)}>
              Nuestra misión es transformar ideas en realidades sólidas y
              funcionales. A través de la innovación, la calidad y la
              dedicación, construimos un futuro mejor para nuestros clientes y
              comunidades.
            </p>
            <Image
              src="/img/icons/comillas.png"
              width={100}
              height={100}
              alt=""
              className="absolute bottom-1 right-[28px]"
            />
          </div>
          <div className="flex-1 min-w-[280px] bg-dark text-white text-justify px-[3.4rem] pt-14 pb-20 relative">
            <h4 className="font-bold mb-4 text-[24px]">VISIÓN</h4>
            <p className={cn("font-light text-[20px] leading-6", calibriFont.className)}>
              Nos vemos como líderes de referencia en la industria de la
              construcción, inspirando con diseños vanguardistas y ejecución
              impecable. Nuestra visión es forjar espacios que enriquezcan vidas
              y perduren en el tiempo.
            </p>
            <Image
              src="/img/icons/comillas.png"
              width={100}
              height={100}
              alt=""
              className="absolute bottom-1 right-[28px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Header } from "../_components/Header";

export const AboutUs = () => {
  return (
    <div className="px-8 mb-[124px]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-start gap-5">
        <Header top="SOBRE" main="NOSOTROS" hiddenTop className="mb-8" />
        <div className="flex flex-wrap gap-10">
          <div className="flex-1 min-w-[280px] bg-dark text-white text-justify px-[6rem] pt-[90px] pb-[116px] relative">
            <h4 className={cn("font-bold mb-6 text-[32px]", calibriFont.className)}>MISIÓN</h4>
            <p className={cn("font-light text-[19px] leading-6", calibriFont.className)}>
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
              className="absolute bottom-1 right-[68px]"
            />
          </div>
          <div className="flex-1 min-w-[280px] bg-dark text-white text-justify px-[6rem] pt-[90px] pb-[116px] relative">
            <h4 className={cn("font-bold mb-6 text-[32px]", calibriFont.className)}>VISIÓN</h4>
            <p className={cn("font-light text-[19px] leading-6", calibriFont.className)}>
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
              className="absolute bottom-1 right-[68px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

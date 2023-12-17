import { ButtonBlack } from "@/components/custom";
import { HeroRight } from "@/components/custom/HeroRight";
import { config } from "@/config";
import {
  abadiFont,
  arialBlackFont,
  calibriFont,
  impactFont,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <HeroRight
        top="HERRAMIENTAS"
        image="/img/products/ferreteria.png"
        title1="FERRETERÍA"
        title2="GENERAL"
        description="¡Equipa tu proyecto con nuestra ferretería de calidad superior!"
      />
      <div className="flex flex-col gap-7 items-center p-5 my-5 relative">
        <p
          className={cn(
            "text-center max-w-[500px] underline text-[19px] leading-6",
            calibriFont.className
          )}
        >
          Encuentra una amplia gama de productos y herramientas para
          construcción, bricolaje y más. Todo en un solo lugar para que
          construyas con confianza.
        </p>

        <Image
          src="/img/products/ferreteria/wincha.jpg"
          className="hidden md:inline absolute md:left-[calc(10%)] lg:left-[calc(16%)] xl:left-[calc(23%)] md:translate-x-[-50%]"
          width={160}
          height={160}
          alt="Wincha"
        />
        <Image
          src="/img/products/ferreteria/tornillos.png"
          className="hidden md:inline absolute md:right-[-5%] lg:right-0 xl:right-[calc(15%)] md:translate-x-[-50%]"
          width={140}
          height={140}
          alt="Tornillos"
        />
        <div className="relative flex md:hidden items-center justify-around w-full">
          <Image
            src="/img/products/ferreteria/wincha.jpg"
            className="w-[100px] md:w-[160px] md:absolute md:left-[calc(10%)] lg:left-[calc(16%)] xl:left-[calc(23%)] md:translate-x-[-50%]"
            width={160}
            height={160}
            alt="Wincha"
          />
          <Image
            src="/img/products/ferreteria/tornillos.png"
            className="w-[100px] md:w-[140px] md:absolute md:right-[-5%] lg:right-0 xl:right-[calc(15%)] md:translate-x-[-50%]"
            width={140}
            height={140}
            alt="Tornillos"
          />
        </div>
        <h5 className={cn("text-center text-[23px]", arialBlackFont.className)}>
          OFRECEMOS
        </h5>
        <ol
          className={cn(
            "font-bold text-[19px] leading-[1] md:leading-5",
            calibriFont.className
          )}
        >
          <li className="mb-[1rem] flex">
            <span className="mr-3 md:mr-10">1.</span>
            <p>Herramientas manuales y eléctricas para cada tarea.</p>
          </li>
          <li className="mb-[1rem] flex">
            <span className="mr-3 md:mr-10">2.</span>
            <p>Materiales de construcción duraderos y confiables.</p>
          </li>
          <li className="mb-[1rem] flex">
            <span className="mr-3 md:mr-10">3.</span>
            <p>Suministros para proyectos de ingeniería y campo.</p>
          </li>
          <li className="mb-[1rem] flex">
            <span className="mr-3 md:mr-10">4.</span>
            <p>Productos de plomería, electricidad y saneamiento.</p>
          </li>
          <li className="flex">
            <span className="mr-3 md:mr-10">5.</span>
            <p>Soluciones en ferretería para cada desafío.</p>
          </li>
        </ol>
        <Link
          href={
            config.wspLink +
            "Hola, me gustaría más información sobre sus productos de Ferretería"
          }
          target="_blank"
        >
          <ButtonBlack className="mb-5">CONSÚLTANOS</ButtonBlack>
        </Link>
        <Image
          src="/img/products/ferreteria/alicate.png"
          className="hidden md:inline relative md:absolute bottom-[10%] left-[calc(10%)] lg:left-[calc(12%)] xl:bottom-[20%] xl:left-[calc(22%)] translate-x-[-50%]"
          width={260}
          height={260}
          alt="Alicate"
        />
        <Image
          src="/img/products/ferreteria/martillo.png"
          className="hidden md:inline relative md:absolute bottom-[10%] right-0 xl:bottom-[20%] xl:right-[calc(12%)] translate-x-[-50%]"
          width={170}
          height={170}
          alt="Martillo"
        />

        <div className="relative flex md:hidden items-center justify-around w-full">
          <Image
            src="/img/products/ferreteria/alicate.png"
            className="relative md:absolute lg:left-[calc(12%)] xl:bottom-[20%] xl:left-[calc(22%)]"
            width={140}
            height={140}
            alt="Alicate"
          />
          <Image
            src="/img/products/ferreteria/martillo.png"
            className="relative md:absolute xl:bottom-[20%] xl:right-[calc(12%)]"
            width={110}
            height={110}
            alt="Martillo"
          />
        </div>
      </div>
    </>
  );
};

export default Page;

export const metadata = {
  title: "Ferreteria | N&A Construcciones",
  description:
    "Herramientas manuales y más para construcción, bricolaje y más. Todo en un solo lugar para que construyas con confianza.",
};

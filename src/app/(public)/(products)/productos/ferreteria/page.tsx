import { ButtonBlack } from "@/components/custom";
import { HeroRight } from "@/components/custom/HeroRight";
import {
  abadiFont,
  arialBlackFont,
  calibriFont,
  impactFont,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";

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
      <div className="flex flex-col gap-7 items-center p-5 my-5">
        <p
          className={cn(
            "text-center max-w-[500px] underline text-[20px] leading-6",
            calibriFont.className
          )}
        >
          Encuentra una amplia gama de productos y herramientas para
          construcción, bricolaje y más. Todo en un solo lugar para que
          construyas con confianza.
        </p>
        <h5 className={cn("text-center text-[28px]", arialBlackFont.className)}>
          OFRECEMOS
        </h5>
        <ol className={cn("font-bold leading-9", arialBlackFont.className)}>
          <li>
            <span className="mr-3">1.</span> Herramientas manuales y eléctricas
            para cada tarea.
          </li>
          <li>
            <span className="mr-3">2.</span> Materiales de construcción
            duraderos y confiables.
          </li>
          <li>
            <span className="mr-3">3.</span> Suministros para proyectos de
            ingeniería y campo.
          </li>
          <li>
            <span className="mr-3">4.</span> Productos de plomería, electricidad
            y saneamiento.
          </li>
          <li>
            <span className="mr-3">5.</span> Soluciones en ferretería para cada
            desafío.
          </li>
        </ol>
        <ButtonBlack>CONSÚLTANOS</ButtonBlack>
      </div>
    </>
  );
};

export default Page;

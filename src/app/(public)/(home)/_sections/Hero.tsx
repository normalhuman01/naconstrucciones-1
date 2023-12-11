import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <div className="text-center max-w-[1120px] mx-auto px-5 py-[124px]">
      <span className={cn("text-[#7F7F7F] text-[21px]", calibriFont.className)}>SOMOS EXPERTOS EN SERVICIOS DE:</span>
      <h3 className={cn("mb-[50px] mt-2 text-[48px] md:atext-[64px] leading-[3.5rem] font-bold", calibriFont.className)}>
        INGENIERÍA, CONSTRUCCIÓN Y <br /> MANTENIMIENTO
      </h3>

      <p className={cn("text-[19px] leading-5 mb-2", calibriFont.className)}>
        En <strong>N&A INGENIERÍA Y CONSTRUCCIONES</strong> contamos con amplia
        experiencia en desarrollar y gestionar proyectos de diseño, arquitectura
        y construcción.
      </p>
      <p className={cn("text-[19px] leading-5", calibriFont.className)}>
        La conformamos un <strong>equipo de profesionales</strong> y{" "}
        <strong>especialistas</strong> en diversas áreas que comprometidos con
        cada <strong>proyecto</strong>, buscamos ofrecer permanentemente ideas y soluciones
        <strong> innovadoras</strong> para satisfacer plenamente las necesidades de nuestros
        clientes.
      </p>
    </div>
  );
};

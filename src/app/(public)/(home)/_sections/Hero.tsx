import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <div className="text-center my-8 max-w-[1120px] mx-auto px-5 py-[64px]">
      <span className="text-[#7F7F7F]">SOMOS EXPERTOS EN SERVICIOS DE:</span>
      <h3 className={cn("mb-6 mt-2 text-[50px] leading-[2.75rem] font-bold", calibriFont.className)}>
        INGENIERÍA, CONSTRUCCIÓN Y <br /> MANTENIMIENTO
      </h3>

      <p className={cn("text-[18px] leading-5", calibriFont.className)}>
        En <strong>N&A INGENIERÍA Y CONSTRUCCIONES</strong> contamos con amplia
        experiencia en desarrollar y gestionar proyectos de diseño, arquitectura
        y construcción.
      </p>
      <br />
      <p className={cn("text-[18px] leading-5", calibriFont.className)}>
        La conformamos un <strong>equipo de profesionales</strong> y{" "}
        <strong>especialistas</strong> en diversas áreas que comprometidos con
        cada <strong>proyecto</strong>, buscamos ofrecer permanentemente ideas y soluciones
        <strong> innovadoras</strong> para satisfacer plenamente las necesidades de nuestros
        clientes.
      </p>
    </div>
  );
};

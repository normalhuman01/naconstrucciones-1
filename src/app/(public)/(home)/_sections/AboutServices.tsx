"use client";
import { ButtonBlackMore } from "@/components/custom";
import Link from "next/link";
import { Header } from "../_components/Header";
import { cn } from "@/lib/utils";
import { calibriFont } from "@/lib/fonts";
import { useState } from "react";

type TCard = {
  title: string;
  description: string;
  image: string;
  link: string;
  classesIcon?: string;
};
const Card = ({ title, description, image, link, classesIcon }: TCard) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-1 flex-col items-start justify-between gap-10 max-w-[250px] w-full">
      <div className="flex flex-col gap-3 items-start">
        <div className="w-full mb-3 cursor-pointer" onClick={() => setOpen(!open)}>
          <img
            src={image}
            width={36}
            height={36}
            alt="service"
            className={cn("mb-[12px]", classesIcon)}
          />
          <h4 className={cn("text-[21px] font-bold", calibriFont.className)}>
            {title}
          </h4>
          <hr className="border-dark border-1 w-full" />
        </div>
        {open && (
          <p
            className={cn(
              "block md:hidden text-[16px] md:text-[19px] font-light text-justify leading-[1]",
              // "text-[16px] md:text-[19px] font-light text-justify leading-5 md:leading-6",
              calibriFont.className
            )}
          >
            {description}
          </p>
        )}
        <p
          className={cn(
            "hidden md:block text-[16px] md:text-[19px] font-light text-justify leading-[1]",
            // "text-[16px] md:text-[19px] font-light text-justify leading-5 md:leading-6",
            calibriFont.className
          )}
        >
          {description}
        </p>
      </div>
      <Link href={link}>
        <ButtonBlackMore>VER MÁS</ButtonBlackMore>
      </Link>
    </div>
  );
};

export const AboutServices = () => {
  return (
    <div className="max-w-[1120px] px-4 lg:px-0 mx-auto flex flex-col items-start gap-3 mb-[124px]">
      <Header top="NUESTROS" main="SERVICIOS" hiddenTop className="mb-8" />
      <div className="flex flex-wrap items-stretch w-full gap-3 justify-between md:justify-between">
        <Card
          title="INGENIERÍA"
          description="Somos reconocidos por brindar soluciones prácticas y rentables que
        superan las expectativas de nuestros clientes relacionados con proyectos
        en el campo de la ingeniería."
          image="/img/icons/regla.png"
          link="/servicios/general"
        />
        <Card
          title="ARQUITECTURA"
          description="Nos encargamos del diseño, remodelación y ampliación de espacios residenciales y comerciales. Además ofrecemos asesoría para definir materiales y acabados finales."
          image="/img/icons/compas.png"
          link="/servicios/general"
          classesIcon="mb-[13px]"
        />
        <Card
          title="CONSTRUCCIÓN"
          description="Contamos con una amplia gama y variedad de servicios relacionados con el área de construcción industrial, urbana, edificaciones y obras de infraestructura."
          image="/img/icons/pared.png"
          link="/servicios/general"
          classesIcon="mb-[14.75px]"
        />
        <Card
          title="MANTENIMIENTO"
          description="Contamos con un personal altamente especializado y experimentado en los distintos tipos de servicios de mantenimiento que nuestros clientes requieran."
          image="/img/icons/tuercas.png"
          link="/servicios/general"
          classesIcon="mb-[15px]"
        />
      </div>
    </div>
  );
};

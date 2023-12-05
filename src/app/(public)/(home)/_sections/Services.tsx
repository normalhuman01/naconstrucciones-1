"use client";
import { ButtonYellow } from "@/components/custom";
import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes, ReactNode, useState } from "react";
import ReactCardFlip from "react-card-flip";

type TCard = Omit<HTMLAttributes<HTMLDivElement>, "title" | "description"> & {
  title: string | ReactNode;
  description: string | ReactNode;
  image: string;
  alt?: string;
};
const Card = ({
  title,
  description,
  image,
  className = "",
  alt = "",
}: TCard) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={cn("md:max-w-[220px] w-full", className)}>
      <div
        className="h-[330px] text-white"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Image
            src={image}
            alt={typeof title === "string" ? title : alt}
            width={220}
            height={330}
          />
          <div className="bg-dark max-w-[220px] h-[330px] flex justify-center items-center px-5 text-center text-[14px]">
            {description}
          </div>
        </ReactCardFlip>
      </div>
      <h4 className="text-[20px] leading-5 mt-2">{title}</h4>
    </div>
  );
};

export const Services = () => {
  return (
    <>
      <div className="flex gap-4 justify-center my-10">
        <div className="mt-[140px]">
          <p className="leading-5">
            <span
              className={cn("text-[20px] text-white", arialBlackFont.className)}
              style={{ WebkitTextStroke: ".75px black" }}
            >
              SERVICIOS
            </span>
            <br />
            <span className={cn("text-[20px]", arialBlackFont.className)}>
              SERVICIOS
            </span>
          </p>
        </div>

        <div className="flex gap-4">
          <Card
            title="Electricidad"
            description="Sistemas eléctricos integrales, Diseño de proyecto y ejecución, Sistemas de puesta a tierra, Servicios de mantenimiento."
            image="/img/services/electricidad.jpg"
            className="mb-10"
          />
          <Card
            title="Gasfitería"
            description="Instalación de griferías, Instalación de Equipos sanitarios, Desatoros en red de desagüe, Mantenimiento y Limpieza de cisternas y tanques elevados, Mantenimiento de bombas."
            image="/img/services/gasfiteria.jpg"
            className="mt-12"
          />
        </div>

        <div className="flex flex-col gap-4 items-end mt-[140px]">
          <p className="leading-5">
            <span
              className={cn("text-[20px] text-white", arialBlackFont.className)}
              style={{ WebkitTextStroke: ".75px black" }}
            >
              GENERALES
            </span>
            <br />
            <span className={cn("text-[20px]", arialBlackFont.className)}>
              GENERALES
            </span>
          </p>

          <ButtonYellow className="text-[15px]">VER MÁS</ButtonYellow>
        </div>
      </div>

      <div className="flex gap-4 justify-center my-10">
        <div className="mt-[140px]">
          <p className="leading-5">
            <span
              className={cn("text-[20px] text-white", arialBlackFont.className)}
              style={{ WebkitTextStroke: ".75px black" }}
            >
              SERVICIOS
            </span>
            <br />
            <span className={cn("text-[20px]", arialBlackFont.className)}>
              SERVICIOS
            </span>
          </p>
        </div>

        <div className="flex gap-4">
          <Card
            title="Pintura"
            description="Pintado de viviendas, empresas , residencias ,departamentos y oficinas, Empastado de paredes en Casco gris, Mantenimiento de paredes salitres e impermeabilización."
            image="/img/services/pintura.jpg"
            className="mb-10"
          />
          <Card
            title="Drywall"
            description="Desarrollo sistema drywall, Instalación de cielo raso, Instalación de baldosas acústicas, Cobertura policarbonato, Instalación de tabiquerías de interiores y exteriores."
            image="/img/services/drywall.jpg"
            className="mt-12"
          />
        </div>

        <div className="flex flex-col gap-4 items-end mt-[140px]">
          <p className="leading-5">
            <span
              className={cn("text-[20px] text-white", arialBlackFont.className)}
              style={{ WebkitTextStroke: ".75px black" }}
            >
              GENERALES
            </span>
            <br />
            <span className={cn("text-[20px]", arialBlackFont.className)}>
              GENERALES
            </span>
          </p>

          <ButtonYellow className="text-[15px]">VER MÁS</ButtonYellow>
        </div>
      </div>

      <div className="flex gap-4 justify-center my-10">
        <div className="mt-[140px]">
          <p className="leading-5">
            <span
              className={cn("text-[20px] text-white", arialBlackFont.className)}
              style={{ WebkitTextStroke: ".75px black" }}
            >
              SERVICIOS
            </span>
            <br />
            <span className={cn("text-[20px]", arialBlackFont.className)}>
              SERVICIOS
            </span>
          </p>
        </div>

        <div className="flex gap-4">
          <Card
            title="Sistema de climatización y aire acondicionado"
            description="Diseño , suministro , instalación y mantenimiento."
            image="/img/services/climatizacion.jpg"
            className="mb-10"
          />
          <Card
            title={
              <>
                Carpintería y <br />
                Melamine
              </>
            }
            description="Diseño de todo tipos de muebles hogar y oficina (Melamina y Madera)."
            image="/img/services/carpinteria.jpg"
            className="mt-12"
          />
        </div>

        <div className="flex flex-col gap-4 items-end mt-[140px]">
          <p className="leading-5">
            <span
              className={cn("text-[20px] text-white", arialBlackFont.className)}
              style={{ WebkitTextStroke: ".75px black" }}
            >
              GENERALES
            </span>
            <br />
            <span className={cn("text-[20px]", arialBlackFont.className)}>
              GENERALES
            </span>
          </p>

          <ButtonYellow className="text-[15px]">VER MÁS</ButtonYellow>
        </div>
      </div>
    </>
  );
};

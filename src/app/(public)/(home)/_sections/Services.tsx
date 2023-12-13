"use client";
import { ButtonYellow } from "@/components/custom";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode, useState } from "react";
import ReactCardFlip from "react-card-flip";

type TCard = Omit<HTMLAttributes<HTMLDivElement>, "title" | "description"> & {
  title: string | ReactNode;
  description: string | ReactNode;
  image: string;
};
const Card = ({ title, description, image, className = "" }: TCard) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={cn("max-w-[180px] md:max-w-[260px] w-full mb-5 md:mb-auto", className)}>
      <div
        className="h-[286px] md:h-[400px] text-white"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          cardStyles={{ front: { width: "100%" } }}
        >
          <div
            className="w-[180px] max-w-[180px] md:max-w-[260px] md:w-[260px] h-[286px] md:h-[400px] flex justify-center items-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className={cn(
              "bg-dark max-w-[180px] md:max-w-[260px] h-[286px] md:h-[400px] flex justify-center items-center px-5 text-center text-[15px] md:text-[18px]",
              calibriFont.className
            )}
          >
            {description}
          </div>
        </ReactCardFlip>
      </div>
      <h4 className={cn("text-[28px] leading-5 mt-2", calibriFont.className)}>
        {title}
      </h4>
    </div>
  );
};

const Group = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <div className="hidden md:block md:mt-[140px]">
        <p className="leading-5">
          <span
            className={cn("text-[28px] text-white", arialBlackFont.className)}
            style={{ WebkitTextStroke: ".75px black" }}
          >
            SERVICIOS
          </span>
          <br />
          <span className={cn("text-[28px]", arialBlackFont.className)}>
            SERVICIOS
          </span>
        </p>
      </div>

      <div className="flex flex-row gap-4">{children}</div>

      <div className="hidden md:flex flex-col gap-4 items-end mt-[140px]">
        <p className="leading-5">
          <span
            className={cn("text-[28px] text-white", arialBlackFont.className)}
            style={{ WebkitTextStroke: ".75px black" }}
          >
            GENERALES
          </span>
          <br />
          <span className={cn("text-[28px]", arialBlackFont.className)}>
            GENERALES
          </span>
        </p>

        <ButtonYellow>VER MÁS</ButtonYellow>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <>
      <div className="max-w-[1120px] mx-auto flex flex-col items-center md:items-start gap-5 px-5 md:px-0">
        <div className="block md:hidden text-center">
          <span className="text-[12px]">NUESTROS</span>
          <h3 className="text-2xl font-bold">SERVICIOS</h3>
        </div>

        <div className="flex md:hidden flex-wrap gap-2 md:gap-5 items-start justify-center">
          <Card
            title="Electricidad"
            description="Sistemas eléctricos integrales, Diseño de proyecto y ejecución, Sistemas de puesta a tierra, Servicios de mantenimiento."
            image="/img/services/electricidad.jpg"
            className="md:mb-10"
          />
          <Card
            title="Gasfitería"
            description="Instalación de griferías, Instalación de Equipos sanitarios, Desatoros en red de desagüe, Mantenimiento y Limpieza de cisternas y tanques elevados, Mantenimiento de bombas."
            image="/img/services/gasfiteria.jpg"
            className="md:mt-12"
          />
          <Card
            title="Pintura"
            description="Pintado de viviendas, empresas , residencias ,departamentos y oficinas, Empastado de paredes en Casco gris, Mantenimiento de paredes salitres e impermeabilización."
            image="/img/services/pintura.jpg"
            className="md:mb-10"
          />
          <Card
            title="Drywall"
            description="Desarrollo sistema drywall, Instalación de cielo raso, Instalación de baldosas acústicas, Cobertura policarbonato, Instalación de tabiquerías de interiores y exteriores."
            image="/img/services/drywall.jpg"
            className="md:mt-12"
          />

          <Card
            title="Sistema de climatización y aire acondicionado"
            description="Diseño , suministro , instalación y mantenimiento."
            image="/img/services/climatizacion.webp"
            className="md:mb-10"
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
            className="md:mt-12"
          />
        </div>

        <div className="hidden md:flex flex-col items-center mx-auto">
          <Group>
            <Card
              title="Electricidad"
              description="Sistemas eléctricos integrales, Diseño de proyecto y ejecución, Sistemas de puesta a tierra, Servicios de mantenimiento."
              image="/img/services/electricidad.jpg"
              className="md:mb-10"
            />
            <Card
              title="Gasfitería"
              description="Instalación de griferías, Instalación de Equipos sanitarios, Desatoros en red de desagüe, Mantenimiento y Limpieza de cisternas y tanques elevados, Mantenimiento de bombas."
              image="/img/services/gasfiteria.jpg"
              className="md:mt-12"
            />
          </Group>

          <Group>
            <Card
              title="Pintura"
              description="Pintado de viviendas, empresas , residencias ,departamentos y oficinas, Empastado de paredes en Casco gris, Mantenimiento de paredes salitres e impermeabilización."
              image="/img/services/pintura.jpg"
              className="md:mb-10"
            />
            <Card
              title="Drywall"
              description="Desarrollo sistema drywall, Instalación de cielo raso, Instalación de baldosas acústicas, Cobertura policarbonato, Instalación de tabiquerías de interiores y exteriores."
              image="/img/services/drywall.jpg"
              className="md:mt-12"
            />
          </Group>

          <Group>
            <Card
              title="Sistema de climatización y aire acondicionado"
              description="Diseño , suministro , instalación y mantenimiento."
              image="/img/services/climatizacion.jpg"
              className="md:mb-10"
            />
            <Card
              title={
                <>
                  Carpintería y <br />
                  Melamine
                </>
              }
              description="Diseño de todo tipos de muebles hogar y oficina (Melamina y Madera)."
              image="/img/services/melamine.jpg"
              className="md:mt-12"
            />
          </Group>
        </div>
      </div>
    </>
  );
};

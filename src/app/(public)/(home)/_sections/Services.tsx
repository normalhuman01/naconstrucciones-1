"use client";
import { ButtonYellow } from "@/components/custom";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes, ReactNode, useState } from "react";
import ReactCardFlip from "react-card-flip";

type TCard = Omit<HTMLAttributes<HTMLDivElement>, "title" | "description"> & {
  title: string | ReactNode;
  description: string | ReactNode;
  image: string;
  showLabel?: string;
};
const Card = ({
  title,
  description,
  image,
  className = "",
  showLabel = "",
}: TCard) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className={cn(
        "max-w-[160px] md:max-w-[260px] w-full mb-5 md:mb-auto",
        className
      )}
    >
      {showLabel && (
        <p className="leading-5">
          <span
            className={cn(
              "text-[20px] md:text-[28px] text-white",
              arialBlackFont.className
            )}
            style={{ WebkitTextStroke: ".75px black" }}
          >
            {showLabel}
          </span>
          <br />
          <span
            className={cn(
              "text-[20px] md:text-[28px]",
              arialBlackFont.className
            )}
          >
            {showLabel}
          </span>
        </p>
      )}
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
            className="w-[160px] max-w-[160px] md:max-w-[260px] md:w-[260px] h-[286px] md:h-[400px] flex justify-center items-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className={cn(
              "bg-dark max-w-[160px] md:max-w-[260px] h-[286px] md:h-[400px] flex justify-center items-center px-2 md:px-5 text-center text-[15px] md:text-[18px]",
              calibriFont.className
            )}
          >
            {description}
          </div>
        </ReactCardFlip>
      </div>
      <h4
        className={cn(
          "text-[20px] md:text-[28px] leading-5 mt-2",
          calibriFont.className
        )}
      >
        {title}
      </h4>
    </div>
  );
};

const TextWhite = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "text-[20px] md:text-[28px] text-white",
        arialBlackFont.className,
        className
      )}
      style={{ WebkitTextStroke: ".75px black" }}
      {...props}
    >
      {children}
    </span>
  );
};
const TextBlack = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "text-[20px] md:text-[28px]",
        arialBlackFont.className,
        className
      )}
      {...props}
    >
      {children}
    </span>
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

        <Link href="/servicios/general">
          <ButtonYellow>VER MÁS</ButtonYellow>
        </Link>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <>
      <div className="max-w-[1120px] mx-auto flex flex-col items-center md:items-start px-0 md:px-0">
        <div className="block md:hidden text-center mb-[10px]">
          <span className="hidden md:block text-[12px]">NUESTROS</span>
          <h3 className="hidden md:block text-2xl font-bold">SERVICIOS</h3>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-0 leading-none mb-5">
          <TextBlack className="inline-block text-right pr-1">
            SERVICIOS
          </TextBlack>
          <TextBlack className="relative top-[100%]">GENERALES</TextBlack>
          <TextWhite className="inline-block text-right pr-1">
            SERVICIOS
          </TextWhite>
          <TextWhite className="relative top-[100%]">GENERALES</TextWhite>
        </div>

        <div className="flex md:hidden flex-wrap gap-2 md:gap-5 items-start justify-center">
          <Card
            title="Electricidad"
            description={
              <>
                <ul className="text-left pl-3">
                  <li className="pl-2 list-disc">Sistemas electricos integrales</li>
                  <li className="pl-2 list-disc">Diseño de proyecto y ejecución</li>
                  <li className="pl-2 list-disc">Sistemas de puesta a tierra</li>
                  <li className="pl-2 list-disc">Servicios de mantenimiento</li>
                </ul>
              </>
            }
            image="/img/services/electricidad.jpg"
            className="md:mb-10"
          />
          <Card
            title="Gasfitería"
            description={
              <>
                {/* "Instalación de griferías, Instalación de Equipos sanitarios, Desatoros en red de desagüe, Mantenimiento y Limpieza de cisternas y tanques elevados, Mantenimiento de bombas." */}
                <ul className="text-left pl-3">
                  <li className="pl-2 list-disc">Instalación de griferías</li>
                  <li className="pl-2 list-disc">Instalación de Equipos sanitarios</li>
                  <li className="pl-2 list-disc">Desatoros en red de desagüe</li>
                  <li className="pl-2 list-disc">
                    Mantenimiento y Limpieza de cisternas y tanques elevados
                  </li>
                  <li className="pl-2 list-disc">Mantenimiento de bombas</li>
                </ul>
              </>
            }
            image="/img/services/gasfiteria.jpg"
            className="mt-12"
          />
          <Card
            title="Pintura"
            // description="Pintado de viviendas, empresas , residencias ,departamentos y oficinas, Empastado de paredes en Casco gris, Mantenimiento de paredes salitres e impermeabilización."
            description={
              <>
                <ul className="text-left pl-3">
                  <li className="pl-2 list-disc">
                    Pintado de viviendas, empresas , residencias ,departamentos
                    y oficinas
                  </li>
                  <li className="pl-2 list-disc">Empastado de paredes en Casco gris</li>
                  <li className="pl-2 list-disc">
                    Mantenimiento de paredes salitres e impermeabilización
                  </li>
                </ul>
              </>
            }
            image="/img/services/pintura.jpg"
            className="md:mb-10"
          />
          <Card
            title="Drywall"
            // description="Desarrollo sistema drywall, Instalación de cielo raso, Instalación de baldosas acústicas, Cobertura policarbonato, Instalación de tabiquerías de interiores y exteriores."
            description={
              <>
                <ul className="text-left pl-3">
                  <li className="pl-2 list-disc">Desarrollo sistema drywall</li>
                  <li className="pl-2 list-disc">Instalación de cielo raso</li>
                  <li className="pl-2 list-disc">Instalación de baldosas acústicas</li>
                  <li className="pl-2 list-disc">Cobertura policarbonato</li>
                  <li className="pl-2 list-disc">Instalación de tabiquerías de interiores y exteriores</li>
                </ul>
              </>
            }
            image="/img/services/drywall.jpg"
            className="mt-12"
          />

          <Card
            title="Sistema de climatización y aire acondicionado"
            // description="Diseño , suministro , instalación y mantenimiento."
            description={
              <>
                <ul className="text-left pl-3">
                  <li className="pl-2 list-disc">Diseño</li>
                  <li className="pl-2 list-disc">Suministro</li>
                  <li className="pl-2 list-disc">Instalación y mantenimiento</li>
                </ul>
              </>
            }
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
            description={
              <>
                <ul className="text-left pl-3">
                  <li className="pl-2 list-disc">Diseño de todo tipos de muebles hogar y oficina (Melamina y Madera)</li>
                </ul>
              </>
            }
            image="/img/services/carpinteria.jpg"
            className="mt-12"
          />
        </div>

        <div className="hidden md:flex flex-col items-center mx-auto">
          <Group>
            <Card
              title="Electricidad"
              description={
                <>
                  <ul className="text-left pl-3">
                    <li className="pl-2 list-disc">Sistemas electricos integrales</li>
                    <li className="pl-2 list-disc">Diseño de proyecto y ejecución</li>
                    <li className="pl-2 list-disc">Sistemas de puesta a tierra</li>
                    <li className="pl-2 list-disc">Servicios de mantenimiento</li>
                  </ul>
                </>
              }
              image="/img/services/electricidad.jpg"
              className="md:mb-10"
            />
            <Card
              title="Gasfitería"
              description={
                <>
                  {/* "Instalación de griferías, Instalación de Equipos sanitarios, Desatoros en red de desagüe, Mantenimiento y Limpieza de cisternas y tanques elevados, Mantenimiento de bombas." */}
                  <ul className="text-left pl-3">
                    <li className="pl-2 list-disc">Instalación de griferías</li>
                    <li className="pl-2 list-disc">Instalación de Equipos sanitarios</li>
                    <li className="pl-2 list-disc">Desatoros en red de desagüe</li>
                    <li className="pl-2 list-disc">
                      Mantenimiento y Limpieza de cisternas y tanques elevados
                    </li>
                    <li className="pl-2 list-disc">Mantenimiento de bombas</li>
                  </ul>
                </>
              }
              image="/img/services/gasfiteria.jpg"
              className="md:mt-12"
            />
          </Group>

          <Group>
            <Card
              title="Pintura"
              description={
                <>
                  <ul className="text-left pl-3">
                    <li className="pl-2 list-disc">
                      Pintado de viviendas, empresas , residencias ,departamentos
                      y oficinas
                    </li>
                    <li className="pl-2 list-disc">Empastado de paredes en Casco gris</li>
                    <li className="pl-2 list-disc">
                      Mantenimiento de paredes salitres e impermeabilización
                    </li>
                  </ul>
                </>
              }
              image="/img/services/pintura.jpg"
              className="md:mb-10"
            />
            <Card
              title="Drywall"
              description={
                <>
                  <ul className="text-left pl-3">
                    <li className="pl-2 list-disc">Desarrollo sistema drywall</li>
                    <li className="pl-2 list-disc">Instalación de cielo raso</li>
                    <li className="pl-2 list-disc">Instalación de baldosas acústicas</li>
                    <li className="pl-2 list-disc">Cobertura policarbonato</li>
                    <li className="pl-2 list-disc">Instalación de tabiquerías de interiores y exteriores</li>
                  </ul>
                </>
              }
              image="/img/services/drywall.jpg"
              className="md:mt-12"
            />
          </Group>

          <Group>
            <Card
              title="Sistema de climatización y aire acondicionado"
              description={
                <>
                  <ul className="text-left pl-3">
                    <li className="pl-2 list-disc">Diseño</li>
                    <li className="pl-2 list-disc">Suministro</li>
                    <li className="pl-2 list-disc">Instalación y mantenimiento</li>
                  </ul>
                </>
              }
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
              description={
                <>
                  <ul className="text-left pl-3">
                    <li className="pl-2 list-disc">Diseño de todo tipos de muebles hogar y oficina (Melamina y Madera)</li>
                  </ul>
                </>
              }
              image="/img/services/melamine.jpg"
              className="md:mt-12"
            />
          </Group>
        </div>
      </div>
    </>
  );
};

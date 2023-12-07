import { ButtonBlack, ButtonBlackMore, ButtonYellow } from "@/components/custom";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../_components/Header";
import { cn } from "@/lib/utils";
import { calibriFont } from "@/lib/fonts";

type TCard = {
  title: string;
  description: string;
  image: string;
  link: string;
};
const Card = ({ title, description, image, link }: TCard) => {
  return (
    <div className="flex flex-1 flex-col items-start justify-between gap-5 max-w-[220px]">
      <div className="flex flex-col gap-3 items-start">
        <div className="w-full">
          <Image src={image} width={20} height={20} alt="service" />
          <h4 className="text-[16px] font-bold">{title}</h4>
          <hr className="border-dark border-1" />
        </div>
        <p className={cn("text-[16px] text-justify leading-5", calibriFont.className)}>{description}</p>
      </div>
      <ButtonBlackMore className="text-[15px]">
        <Link href={link}>VER MÁS</Link>
      </ButtonBlackMore>
    </div>
  );
};

export const AboutServices = () => {
  return (
    <div className="my-8">
      <div className="max-w-[1120px] px-8 lg:px-0 mx-auto flex flex-col items-start gap-3">
        <Header top="NUESTROS" main="SERVICIOS" />
        <div className="flex flex-wrap items-stretch w-full gap-4 justify-between md:justify-between">
          <Card
            title="INGENIERÍA"
            description="Somos reconocidos por brindar soluciones prácticas y rentables que
          superan las expectativas de nuestros clientes relacionados con proyectos
          en el campo de la ingeniería."
            image="/img/icons/escuadra.png"
            link="#"
          />
          <Card
            title="ARQUITECTURA"
            description="Nos encargamos del diseño, remodelación y ampliación de espacios residenciales y comerciales. Además ofrecemos asesoría para definir materiales y acabados finales."
            image="/img/icons/escuadra2.png"
            link="#"
          />
          <Card
            title="CONSTRUCCIÓN"
            description="Contamos con una amplia gama y variedad de servicios relacionados con el área de construcción industrial, urbana, edificaciones y obras de infraestructura."
            image="/img/icons/pared.png"
            link="#"
          />
          <Card
            title="MANTENIMIENTO"
            description="Contamos con un personal altamente especializado y experimentado en los distintos tipos de servicios de mantenimiento que nuestros clientes requieran."
            image="/img/icons/tuercas.png"
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

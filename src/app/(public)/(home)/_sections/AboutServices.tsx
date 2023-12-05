import { ButtonBlack, ButtonYellow } from "@/components/custom";
import Image from "next/image";
import Link from "next/link";

type TCard = {
  title: string;
  description: string;
  image: string;
  link: string;
};
const Card = ({ title, description, image, link }: TCard) => {
  return (
    <div className="flex flex-col gap-3 items-start">
      <div className="w-full">
        <Image src={image} width={20} height={20} alt="service" />
        <h4 className="text-[16px] font-bold">{title}</h4>
        <hr className="border-dark border-1" />
      </div>
      <p className="text-[12px] text-justify">{description}</p>
      <ButtonBlack className="text-[15px]">
        <Link href={link}>VER MÁS</Link>
      </ButtonBlack>
    </div>
  );
};

export const AboutServices = () => {
  return (
    <div className="my-8">
      <div className="max-w-[960px] mx-auto flex flex-col items-start gap-5">
        <div>
          <span className="text-[12px]">NUESTROS</span>
          <h3 className="text-2xl font-bold">SERVICIOS</h3>
        </div>
        <div className="flex gap-4 justify-between">
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

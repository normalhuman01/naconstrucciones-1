"use client";
import { ButtonYellow } from "@/components/custom";
import Image from "next/image";
import { useRouter } from "next/navigation";

type TCard = {
  title: string;
  description: string;
  link: string;
  image: string;
};
const Card = ({ title, description, link, image }: TCard) => {
  const router = useRouter();
  return (
    <article className="max-w-[240px] shadow-strong rounded-3xl overflow-hidden">
      <header className="bg-white flex justify-center items-center">
        <Image src={image} alt={title} width={200} height={200} />
      </header>
      <main className="p-5 bg-dark text-white flex items-center flex-col gap-3">
        <h3 className="font-bold"> {title} </h3>
        <p> {description} </p>
        <ButtonYellow className="text-black" onClick={() => router.push(link)}>CONSEGUIR</ButtonYellow>
      </main>
    </article>
  );
};

export const Products = () => {
  return (
    <div className="flex justify-center gap-3 bg-cgray p-5">
      <Card
        title="Botas Full Plus"
        description="Zapato de Seguridad"
        link="#"
        image="/img/products/boot.png"
      />
      <Card
        title="Botas Full Plus"
        description="Zapato de Seguridad"
        link="#"
        image="/img/products/boot.png"
      />
      <Card
        title="Botas Full Plus"
        description="Zapato de Seguridad"
        link="#"
        image="/img/products/boot.png"
      />
      <Card
        title="Botas Full Plus"
        description="Zapato de Seguridad"
        link="#"
        image="/img/products/boot.png"
      />
    </div>
  );
};

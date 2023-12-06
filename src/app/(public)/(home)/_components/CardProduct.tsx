import { ButtonYellow } from "@/components/custom";
import Image from "next/image";
import Link from "next/link";

type TCard = {
  title: string;
  description: string;
  link: string;
  image: string;
};
export const CardProduct = ({ title, description, link, image }: TCard) => {
  return (
    <article className="max-w-[180px] md:max-w-[236px] shadow-strong rounded-3xl overflow-hidden flex flex-col">
      <header className="bg-white flex justify-center items-center">
        <Image src={image} alt={title} width={200} height={200} />
      </header>
      <main className="p-5 bg-dark text-white flex items-center justify-between flex-col gap-3 flex-1">
        <div className="text-center">
          <h3 className="font-bold"> {title} </h3>
          <p> {description} </p>
        </div>
        <Link href={link} target="_blank">
          <ButtonYellow className="text-black">CONSEGUIR</ButtonYellow>
        </Link>
      </main>
    </article>
  );
};

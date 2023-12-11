import { ButtonYellow } from "@/components/custom";
import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
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
    <article className="max-w-[180px] md:max-w-[264px] shadow-strong rounded-3xl overflow-hidden flex flex-col flex-1">
      <header className="bg-white flex justify-center items-center pt-3 pb-5">
        <Image src={image} alt={title} width={200} height={200} />
      </header>
      <main className="px-5 py-7 bg-dark text-white flex items-center justify-between flex-col gap-3 flex-1">
        <div className="text-center">
          <h3 className={cn("font-bold text-[19px] h-[3rem] leading-none", calibriFont.className)}> {title} </h3>
          <p className={cn("font-light text-[19px]", calibriFont.className)}> {description} </p>
        </div>
        <Link href={link} target="_blank">
          <ButtonYellow className="text-black">CONSEGUIR</ButtonYellow>
        </Link>
      </main>
    </article>
  );
};

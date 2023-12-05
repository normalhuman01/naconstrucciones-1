import { ButtonWhite } from "@/components/custom";
import { ContactSection } from "@/components/custom/ContactSection";
import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

const Input = ({ className, ...props }: HTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "border-b-[1px] font-light text-[18px] placeholder:text-[18px] placeholder:text-[rgb(118, 113, 113)] border-black outline-none w-full",
        calibriFont.className,
        className
      )}
      {...props}
    />
  );
};

const Page = () => {
  return (
    <>
      <ContactSection hiddeTop />
      <div className="max-w-[960px] p-5 lg:p-0 mx-auto flex flex-wrap justify-between my-10">
        <div className="flex flex-col justify-between">
          <p className={cn("flex flex-col leading-8", calibriFont.className)}>
            <span className="text-[18px]">¿TIENES UN NUEVO</span>
            <span className="text-[48px] font-bold">PROYECTO</span>
            <span className="text-[18px]">EN MENTE?</span>
          </p>
          <Image
            src="/img/icons/redes_circulares.png"
            alt="redes"
            width={210}
            height={32}
            className="cursor-pointer mb-[72px]"
          />
        </div>
        <form className="flex flex-col items-end gap-2 w-full max-w-[600px]">
          <Input placeholder="Nombre" />
          <Input placeholder="Email" />
          <Input placeholder="Teléfono" />
          <Input placeholder="Dirección" />
          <Input placeholder="Asunto" />
          <textarea
            className="w-full border-b-2 border-black font-light outline-none text-[18px] placeholder:text-[18px] placeholder:text-[rgb(118, 113, 113)]"
            placeholder="Mensaje"
            rows={4}
          ></textarea>
          <ButtonWhite className="mt-5">ENVIAR</ButtonWhite>
        </form>
      </div>
    </>
  );
};

export default Page;

import { ContactSection } from "@/components/custom/ContactSection";
import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Form } from "./_components/form";

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
        <Form />
      </div>
    </>
  );
};

export default Page;

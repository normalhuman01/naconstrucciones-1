import { HeroRight } from "@/components/custom/HeroRight";
import { Items } from "./_actions/items";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <HeroRight
        top="Servicios de"
        image="/img/services/asesoria.png"
        title1="ASESORÍA Y"
        title2="GESTIÓN"
        description="Nuestro personal está capacitado para ofrecerle el mejor servicio."
      />
      <Items />
      <Link href="/contacto">
        <Image src="/img/services/end-asesorias.png" width={1000} height={380} alt="asesoria" className="mx-auto cursor-pointer" />
      </Link>
    </>
  );
};

export default Page;

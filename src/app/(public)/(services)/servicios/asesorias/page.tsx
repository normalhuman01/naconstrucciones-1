import { HeroRight } from "@/components/custom/HeroRight";
import { Items } from "./_actions/items";
import Image from "next/image";
import Link from "next/link";
import { WP_URL } from "@/data";
import { TAdvisoryEmbedded } from "@/types/asesoria";

const Page = async () => {
  const consultancies = (await fetch(
    WP_URL + `/asesoria?_embed&per_page=100`
  ).then((res) => res.json())) as TAdvisoryEmbedded[];

  const items = consultancies.map((item) => ({
    title: item.title.rendered,
    description: item.content.rendered,
  }));

  return (
    <>
      <HeroRight
        top="Servicios de"
        image="/img/services/asesoria.png"
        title1="ASESORÍA Y"
        title2="GESTIÓN"
        description="Nuestro personal está capacitado para ofrecerle el mejor servicio."
      />
      <Items items={items} />
      <Link href="/contacto">
        <Image
          src="/img/services/end-asesorias.png"
          width={1000}
          height={380}
          alt="asesoria"
          className="mx-auto cursor-pointer"
        />
      </Link>
    </>
  );
};

export default Page;

export const metadata = {
  title: "Servicios de Asesoría y Gestión | N&A Construcciones",
  description: "Nuestro personal está capacitado para ofrecerle el mejor servicio.",
}
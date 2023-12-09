import { HeroRight } from "@/components/custom/HeroRight";
import { Cards } from "./_sections/cards";
import { TServiceEmbedded } from "@/types/servicio";
import { WP_URL } from "@/data";

const Page = async () => {
  const services = (await fetch(WP_URL + `/servicio?_embed&per_page=100`).then(
    (res) => res.json()
  )) as TServiceEmbedded[];

  const items = services.map((item) => ({
    title: item.title.rendered,
    description: item.content.rendered,
    image: item._embedded["wp:featuredmedia"][0].source_url,
  }));

  return (
    <>
      <HeroRight
        top="Servicios de"
        image="/img/services/construccion-hero-bg.jpg"
        title1="CONSTRUCCIÓN Y"
        title2="MANTENIMIENTO"
        description="Contamos con una amplia gama y variedad de servicios relacionados con el área de construcción industrial, urbana, edificaciones y obras de infraestructura."
        descriptionClassName="max-w-[500px]"
        link="/servicios/general#show_services"
        buttonProps={{
          id: "#show_services",
        }}
        linkLabel="CONTÁCTANOS"
      />
      <Cards cards={items} />
    </>
  );
};

export default Page;

export const metadata = {
  title: "Servicios de construcción y mantenimiento | N&A Construcciones",
  description:
    "Contamos con una amplia gama y variedad de servicios relacionados con el tamaño de construcción industrial, urbana, edificaciones y obras de infraestructura.",
};

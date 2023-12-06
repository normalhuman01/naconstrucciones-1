import { HeroRight } from "@/components/custom/HeroRight";
import { Cards } from "./_sections/cards";

const Page = () => {
  return (
    <>
      <HeroRight
        top="Servicios de"
        image="/img/services/construccion-hero-bg.jpg"
        title1="CONSTRUCCIÓN Y"
        title2="MANTENIMIENTO"
        description="Contamos con una amplia gama y variedad de servicios relacionados con el área de construcción industrial, urbana, edificaciones y obras de infraestructura."
      />
      <Cards />
    </>
  );
};

export default Page;

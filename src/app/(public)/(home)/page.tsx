import { BrandsCarousel } from "@/components/custom/BrandsCarousel";
import { AboutServices } from "./_sections/AboutServices";
import { AboutUs } from "./_sections/AboutUs";
import { Benefits } from "./_sections/Benefits";
import { Contact } from "./_sections/Contact";
import { Featured } from "./_sections/Featured";
import { Hero } from "./_sections/Hero";
import { Initial } from "./_sections/Initial";
import { Products } from "./_sections/Products";
import { Services } from "./_sections/Services";
import { TProductEmbedded } from "@/types";
import { WP_URL } from "@/data";
import { load } from "cheerio";

const Page = async () => {
  const products = (await fetch(
    WP_URL + `/epp?_embed&page=${1}&per_page=${4}`
  ).then((res) => res.json())) as TProductEmbedded[];

  return (
    <div>
      <Initial />
      <BrandsCarousel />
      <Featured />
      <Products
        products={products.map((product) => ({
          title: product.title.rendered,
          description: load(product.content.rendered).text(),
          image: product._embedded["wp:featuredmedia"][0].source_url,
        }))}
      />
      <Benefits />
      <Hero />
      <AboutUs />
      <AboutServices />
      <Services />
      <Contact />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Inicio | N&A Construcciones",
  description:
    "Nuestra misión es transformar ideas en realidades colores y funcionalidad. A de la innovación, la riqueza y la dedicación, construimos un futuro mejor para nuestros clientes y comunidades.",
};

import { ButtonBlack } from "@/components/custom";
import { BrandsCarousel } from "@/components/custom/BrandsCarousel";
import { ProductCard } from "@/components/custom/ProductsCard/ProductCard";
import { config } from "@/config";
import { WP_URL } from "@/data";
import { TProductEmbedded } from "@/types";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { load } from "cheerio";
import { BtnSizes } from "./BtnSizes";

function getRandomEntries(array: any[], n: number) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const Product = async ({ params: { slug } }: { params: { slug: string } }) => {
  const data = (await fetch(`${WP_URL}/epp?_embed&slug=${slug}`).then((res) =>
    res.json()
  )) as TProductEmbedded[];

  const product = data[0];
  const title = product.title.rendered;
  const image = product._embedded["wp:featuredmedia"][0]!.source_url;
  const category = product.product_category[0];

  const urlProducts =
    WP_URL +
    `/epp?_embed&page=${1}&per_page=${40}&product_category=${category}`;

  const allProducts = (await fetch(urlProducts).then((res) =>
    res.json()
  )) as TProductEmbedded[];

  const products = getRandomEntries(allProducts, 4);

  return (
    <div className="max-w-[1120px] mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mb-[56px]">
        <div>
          <h1 className="md:hidden text-3xl font-bold">{title}</h1>
          <Image src={image} alt={title} width={600} height={600} />
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div>
            <h1 className="hidden md:block text-3xl font-bold">{title}</h1>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: product.content.rendered }}
            />
          </div>
          {product.features.value.length > 0 && (
            <section>
              <h3 className="font-bold">Características:</h3>
              <ul className="list-disc list-inside">
                {product.features.value?.map((feature, index) => {
                  return <li key={`${feature}_${index}`}>{feature}</li>;
                })}
              </ul>
            </section>
          )}
          <BtnSizes product={product} />
        </div>
      </section>
      <section className="mb-[116px]">
        <h3 className="text-center text-3xl font-bold mb-10">
          Principales Marcas
        </h3>
        <BrandsCarousel />
      </section>
      <section className="mb-[116px]">
        <h3 className="text-center text-3xl font-bold mb-4">
          Productos relacionados
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-5 gap-y-8 my-5 px-2 md:px-0">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </div>
  );
};
type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const products = (await fetch(`${WP_URL}/epp?_embed&slug=${slug}`).then(
    (res) => res.json()
  )) as TProductEmbedded[];

  const product = products[0];
  const title = "EPP: " + product.title.rendered;
  const description =
    load(product.content.rendered).text() +
    "Características: " +
    product.features.rendered;

  return {
    title,
    description,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default Product;

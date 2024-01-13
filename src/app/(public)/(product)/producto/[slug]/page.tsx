import { BrandsCarousel } from "@/components/custom/BrandsCarousel";
import { ProductCard } from "@/components/custom/ProductsCard/ProductCard";
import { WP_URL } from "@/data";
import { TProductEmbedded } from "@/types";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { load } from "cheerio";
import { BtnSizes } from "./BtnSizes";
import { BackLink } from "./BackLink";
import { cn } from "@/lib/utils";
import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { TitleFeatured } from "@/components/custom/TitleFeatured";
import { Brands } from "@/app/(public)/(products)/productos/epp/_sections/Brands";

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
      <section
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mb-[56px]",
          calibriFont.className
        )}
      >
        <div>
          <div className="flex md:hidden justify-between items-start gap-2">
            <h1 className={cn("text-3xl leading-[1.7rem] mb-2 font-bold", arialBlackFont.className)}>
              {title}
            </h1>
            <BackLink />
          </div>
          <Image src={image} alt={title} width={600} height={600} />
        </div>
        <div className={cn("p-4 flex flex-col gap-4 text-[19px]")}>
          <div>
            <div className="hidden md:flex justify-between items-start gap-2">
              <h1
                className={cn("text-3xl font-bold", arialBlackFont.className)}
              >
                {title}
              </h1>
              <BackLink />
            </div>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: product.content.rendered }}
            />
          </div>
          {product.features?.value.length > 0 && (
            <section>
              <h3 className="font-bold">Características:</h3>
              <ul className="list-disc list-inside text-[#767171]">
                {product.features.value?.map((feature, index) => {
                  return <li key={`${feature}_${index}`}>{feature}</li>;
                })}
              </ul>
            </section>
          )}
          <BtnSizes product={product} />
        </div>
      </section>
      <section className="my-10 flex flex-col gap-10 items-stretch mb-[116px]">
        <TitleFeatured title="PRODUCTOS" subTitle="RELACIONADOS" className={"block md:hidden"} />
        <TitleFeatured title="PRODUCTOS RELACIONADOS" className={"hidden md:block"} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-5 gap-y-8 my-10 px-2 md:px-0">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
      <section className="mb-[116px]">
        <Brands className="my-10 flex flex-col gap-10 items-stretch" />
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
    load(product.content.rendered).text() + product.features?.rendered
      ? "Características: " + product.features?.rendered
      : "";

  return {
    title,
    description,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export const dynamic = "force-dynamic";

export default Product;

import { WP_URL } from "@/data";
import { TProductCategory, TProductEmbedded } from "@/types";
import { CardCategories } from "../_components/CardCategories";
import { Header } from "../_sections/Header";
import { Brands } from "../_sections/Brands";
import { HeroRight } from "@/components/custom/HeroRight";
import { ProductsCard } from "@/components/custom/ProductsCard";
import { BtnPage } from "../_components/BtnPage";

type TPageProps = {
  params: {
    "slug-category": string;
  };
  searchParams?: {
    [key: string]: string;
  };
};

const Page = async ({ params, ...props }: TPageProps) => {
  const slug = params["slug-category"];
  const { per_page = 12, page = 1 } = props.searchParams || {};
  const metaProducts = {
    total: 0,
    totalPages: 0,
  };

  const categories = (
    (await fetch(WP_URL + "/product_category").then((res) =>
      res.json()
    )) as TProductCategory[]
  ).reverse();

  const category = categories.find((cat) => cat.slug === slug);

  const urlProducts =
    WP_URL +
    `/epp?_embed&page=${page}&per_page=${per_page}&product_category=${category?.id}`;

  const products = (await fetch(urlProducts).then((res) => {
    metaProducts.total = Number(res.headers.get("X-Wp-Total"));
    metaProducts.totalPages = Number(res.headers.get("X-Wp-Totalpages"));
    return res.json();
  })) as TProductEmbedded[];

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <HeroRight
        top="Equipos de"
        image="/img/products/epp.jpg"
        title1="PROTECCIÓN"
        title2="PERSONAL"
        description="Equipo laboral para la salud y seguridad en el trabajo para la industria y el sitio de construcción"
        className="mb-10"
      />
      <div className="max-w-[1120px] m-auto flex flex-col items-center">
        <Header />

        <CardCategories categories={categories} category={category} />

        <ProductsCard products={products} />

        <div className="flex gap-3 my-10">
          {Array.from({ length: metaProducts.totalPages }, (_, i) => (
            <BtnPage
              key={i}
              page={i + 1}
              currentPage={Number(page)}
              slugCategory={slug}
            />
          ))}
        </div>
      </div>
      <Brands className="my-10 flex flex-col gap-10 items-stretch" />
    </>
  );
};

export default Page;

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Equipos de Protección Personal | N&A Construcciones",
  description:
    "Equipos de Protección Personal para la salud y seguridad en el trabajo para la industria y el sitio de construcción",
};

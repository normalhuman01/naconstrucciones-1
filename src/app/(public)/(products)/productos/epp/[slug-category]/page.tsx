import { WP_URL } from "@/data";
import { TProductCategory, TProductEmbedded } from "@/types";
import { Products } from "../_components/Products";
import { CardCategories } from "../_components/CardCategories";
import { Header } from "../_sections/Header";
import { Brands } from "../_sections/Brands";
import { HeroRight } from "@/components/custom/HeroRight";

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

  const products = (await fetch(
    WP_URL +
      `/epp?_embed&page=${page}&per_page=${per_page}&product_category=${category?.id}`
  ).then((res) => {
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
        image="/img/products/epp-hero-bg.png"
        title1="PROTECCIÓN"
        title2="PERSONAL"
        description="Equipo laboral para la salud y seguridad en el trabajo para la industria y el sitio de construcción"
        className="mb-10"
      />
      <div className="max-w-[960px] m-auto flex flex-col items-center">
        <Header />

        <CardCategories categories={categories} category={category} />

        <Products products={products} />
      </div>
      <Brands />
    </>
  );
};

export default Page;

export const dynamic = "force-dynamic";

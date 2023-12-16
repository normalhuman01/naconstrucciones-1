import { WP_URL } from "@/data";
import { TProductCategory, TProductEmbedded } from "@/types";
import { CardCategories } from "./_components/CardCategories";
import { Header } from "./_sections/Header";
import { Brands } from "./_sections/Brands";
import { HeroRight } from "@/components/custom/HeroRight";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProductsCard } from "@/components/custom/ProductsCard";
import { Fragment } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BtnPage = ({
  page,
  currentPage,
  slugCategory,
}: {
  page: number;
  currentPage: number;
  slugCategory?: string;
}) => {
  return (
    <Link
      href={
        slugCategory
          ? `/productos/epp/${slugCategory}?page=${page}#products`
          : `/productos/epp?page=${page}#products`
      }
    >
      <div
        className={cn(
          "w-[33px] h-[33px] flex justify-center items-center border-black border-[1px] cursor-pointer",
          currentPage === page ? "bg-black text-white" : "bg-white"
        )}
      >
        {page}
      </div>
    </Link>
  );
};

type TPageProps = {
  searchParams?: {
    [key: string]: string;
  };
};

const Page = async ({ ...props }: TPageProps) => {
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


  const urlProducts = WP_URL + `/epp?_embed&page=${page}&per_page=${per_page}`

  const products = (await fetch(urlProducts).then((res) => {
    metaProducts.total = Number(res.headers.get("X-Wp-Total"));
    metaProducts.totalPages = Number(res.headers.get("X-Wp-Totalpages"));
    return res.json();
  })) as TProductEmbedded[];

  const currentPage = Number(page);

  const arrayPaginations = Array.from({ length: metaProducts.totalPages }).map(
    (_, i) => {
      const focusedIndex = currentPage - 1;
      const isCurrentPage = focusedIndex === i;
      const esPrimeros = i < 3;
      const isLatests = i > metaProducts.totalPages - 4;

      return metaProducts.totalPages > 6
        ? esPrimeros ||
          isLatests ||
          isCurrentPage ||
          focusedIndex + 1 === i ||
          focusedIndex - 1 === i
          ? i
          : focusedIndex < i
            ? "pre"
            : "post"
        : i;
    }
  );

  const paginations = Array.from(new Set(arrayPaginations));

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

        <CardCategories categories={categories} />

        <ProductsCard products={products} />

        <div className="flex gap-3 my-10">
          {currentPage > 1 && (
            <Link href={`?page=${currentPage + 1}`}>
              <button className="w-[33px] h-[33px] flex justify-center items-center">
                <FaAngleLeft size={32} />
              </button>
            </Link>
          )}
          {paginations.map((numberPage, i) => {
            return (
              <Fragment key={i}>
                {typeof numberPage === "number" ? (
                  <BtnPage page={numberPage + 1} currentPage={currentPage} />
                ) : (
                  "..."
                )}
              </Fragment>
            );
          })}
          {currentPage < metaProducts.totalPages && (
            <Link href={`?page=${currentPage + 1}`}>
              <button className="w-[33px] h-[33px] flex justify-center items-center">
                <FaAngleRight size={32} />
              </button>
            </Link>
          )}
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

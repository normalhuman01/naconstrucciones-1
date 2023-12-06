import { ProductsCard } from "@/components/custom/ProductsCard";
import { WP_URL } from "@/data";
import { redirect } from "next/navigation";
import React from "react";

type TResultsProps = {
  searchParams: {
    search: string;
  };
};

const Page = async ({ searchParams: { search } }: TResultsProps) => {
  if (!search) {
    return redirect("/productos/epp/zapato-de-seguridad");
  }
  const products = await fetch(WP_URL + `/epp?_embed&search=${search}`).then(
    (res) => res.json()
  );
  return (
    <div className="mt-5 mb-12">
      <h1 className="text-3xl text-center my-10">Resultados para "{search}"</h1>
      <div>
        <div className="max-w-[960px] mx-auto">
          <ProductsCard products={products} />
        </div>
      </div>
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Resultados | N&A Construcciones",
  description:
    "Tenemos los mejores productos para usted. Nuestro trabajo nos respalda y nos hace crecer. Conectamos espacios y personas.",
};

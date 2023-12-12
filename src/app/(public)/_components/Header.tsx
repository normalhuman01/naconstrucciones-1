import Link from "next/link";
import { BtnSearch } from "./BtnSearch";
import { BtnTools } from "./BtnTools";
import { CustomLink } from "./CustomLink";
import { WP_URL } from "@/data";
import { TProductCategory } from "@/types";

export const Header = async () => {
  const categories = (await fetch(
    WP_URL + "/product_category?per_page=100"
  ).then((res) => res.json())) as TProductCategory[];

  return (
    <header className="top-0 sticky z-[9999] bg-white shadow-md">
      <div className="max-w-[1120px] mx-auto pt-7 pb-4 px-8 xl:px-0 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <img
            src="/img/logo/logo-largo.jpg"
            width={240}
            height={120}
            alt="Logo"
          />
        </Link>
        <div className="hidden lg:flex gap-6 text">
          <CustomLink href="/" title="INICIO" />
          <CustomLink
            href="/productos/epp/zapato-de-seguridad"
            title="PRODUCTOS"
          />
          <CustomLink href="/servicios/general" title="SERVICIOS" />
          <CustomLink href="/contacto" title="CONTACTO" />
        </div>
        <div className="flex gap-2">
          <BtnSearch />
          <BtnTools categories={categories} />
        </div>
      </div>
    </header>
  );
};

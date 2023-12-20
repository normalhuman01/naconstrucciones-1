"use client";
import Link from "next/link";
import { BtnSearch } from "./BtnSearch";
import { BtnTools } from "./BtnTools";
import { CustomLink } from "./CustomLink";
import { TProductCategory } from "@/types";
import { useEffect, useId, useState } from "react";

export const Header = ({ categories }: { categories: TProductCategory[] }) => {
  const [height, setHeight] = useState<null | number>(null);
  const headerId = useId();
  useEffect(() => {
    const getHeight = () => {
      const header = document.getElementById(headerId);
      return Number(getComputedStyle(header!).height.replace("px", ""));
    };
    const height = getHeight();
    console.log(height, "height");
    setHeight(height);
    window.addEventListener("resize", () => {
      setHeight(getHeight());
    });
    return () => {
      window.removeEventListener("resize", () => {
        setHeight(getHeight());
      });
    };
  }, []);
  return (
    <header className="top-0 sticky z-[4000] bg-white shadow-md" id={headerId}>
      <div className="max-w-[1120px] mx-auto pt-7 pb-4 px-4 pl-2 xl:px-0 flex justify-between items-center">
        <Link href="/" className="cursor-pointer w-[232px] md:w-auto">
          <img
            src="/img/logo/logo-large.svg"
            width={240}
            height={120}
            alt="Logo"
          />
        </Link>
        <div className="hidden lg:flex gap-6 text">
          <CustomLink href="/" title="INICIO" />
          <CustomLink href="/productos/epp" title="PRODUCTOS" />
          <CustomLink href="/servicios/general" title="SERVICIOS" />
          <CustomLink href="/contacto" title="CONTACTO" />
        </div>
        <div className="flex gap-2">
          <BtnSearch />
          <BtnTools categories={categories} parentHeight={height} />
        </div>
      </div>
    </header>
  );
};

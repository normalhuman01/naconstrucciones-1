"use client";
import Image from "next/image";
import Link from "next/link";
import { BtnSearch } from "./BtnSearch";
import { BtnTools } from "./BtnTools";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { calibriFont } from "@/lib/fonts";

const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.includes(href);
  return (
    <Link
      href={href}
      className={cn(
        "text-[20px]",
        isActive ? "text-black" : "text-[#767171]",
        calibriFont.className,
        className
      )}
    >
      {title}
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="top-0 sticky z-[9999] bg-white shadow-md">
      <div className="max-w-[960px] mx-auto py-5 px-8 lg:px-0 flex justify-between items-center">
        <Image
          src="/img/logo/logo-largo.jpg"
          width={200}
          height={100}
          alt="Logo"
        ></Image>
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
          <BtnTools />
        </div>
      </div>
    </header>
  );
};

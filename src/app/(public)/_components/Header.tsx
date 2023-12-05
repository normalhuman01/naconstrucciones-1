import Image from "next/image"
import Link from "next/link"
import { BtnSearch } from "./BtnSearch";
import { BtnTools } from "./BtnTools";

export const Header = () => {
  return (
    <header className="top-0 sticky z-[9999] bg-white shadow-md">
      <div className="max-w-[960px] mx-auto py-5 px-8 lg:px-0 flex justify-between items-center">
        <Image src="/img/logo/logo-largo.jpg" width={200} height={100} alt="Logo"></Image>
        <div className="hidden lg:flex gap-6 text">
          <Link href="/">INICIO</Link>
          <Link href="/productos">PRODUCTOS</Link>
          <Link href="/servicios">SERVICIOS</Link>
          <Link href="/contacto">CONTACTO</Link>
        </div>
        <div className="flex gap-2">
          <BtnSearch />
          <BtnTools />
        </div>
      </div >
    </header>
  )
}

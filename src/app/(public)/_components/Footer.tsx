import { config } from "@/config";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#2F2F2F] text-white">
      <div className="max-w-[960px] mx-auto flex flex-col gap-4 items-center py-3">
        <Image
          src="/img/logo/logo-cuadrado-gris.jpg"
          width={130}
          height={100}
          alt=""
        />
        <div className="w-full flex flex-wrap justify-around text-[12px] text-center font-light">
          <div className="flex flex-col items-center w-[160px] md:w-[240px]">
            <Image
              src="/img/icons/phone.png"
              width={24}
              height={24}
              alt="phone"
            />
            <span>+51 {config.phoneGroupedBy3}</span>
          </div>
          <div className="flex flex-col items-center w-[160px] md:w-[240px]">
            <Image
              src="/img/icons/mark.png"
              width={24}
              height={24}
              alt="address"
            />
            <span>{config.address}</span>
          </div>
          <div className="flex flex-col items-center w-[160px] md:w-[240px]">
            <Image
              src="/img/icons/mail.png"
              width={36}
              height={24}
              alt="mail"
            />
            <span>{config.email}</span>
          </div>
        </div>
        <Image src="/img/icons/redes.png" width={120} height={30} alt="" />
      </div>
      <hr className="bg-white" />
      <div className="max-w-[960px] px-5 lg:px-0 mx-auto flex justify-between py-1 text-[12px] text-[#7F7F7F]">
        <span>
          © 2023 N&A Ingeniería y Construcciones - Todos los derechos reservados
        </span>
        <span>Desarrollado por W Capital</span>
      </div>
    </footer>
  );
};

import { config } from "@/config";
import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="bg-[#2F2F2F] text-white">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center py-3">
        <img
          src="/img/logo/logo-cuadrado-gris.jpg"
          width={220}
          height={160}
          alt=""
          className="mt-3 mb-7"
        />
        <div className="w-full flex flex-wrap justify-around text-[12px] text-center font-light">
          <div className="flex flex-col items-center w-[160px] md:w-[320px]">
            <img
              src="/img/icons/phone.png"
              width={31}
              height={31}
              alt="phone"
              className="my-3"
            />
            {/* <FaPhone fontSize={40} color="#737373" /> */}
            <span className={cn("text-[19px] font-light", calibriFont.className)}>+51 {config.phoneGroupedBy3}</span>
          </div>
          <div className="flex flex-col items-center w-[160px] md:w-[320px]">
            <img
              src="/img/icons/mark.png"
              width={28}
              height={28}
              alt="address"
              className="my-3"
            />
            {/* <FaMapMarkerAlt fontSize={40} color="#737373" /> */}
            <span className={cn("text-[19px] font-light", calibriFont.className)}>{config.address}</span>
          </div>
          <div className="flex flex-col items-center w-[160px] md:w-[320px]">
            <img
              src="/img/icons/mail-new.png"
              width={44}
              height={44}
              alt="mail"
              className="my-4"
            />
            {/* <MdOutlineEmail fontSize={44} color="#737373" /> */}
            <span className={cn("text-[19px] font-light break-all", calibriFont.className)}>{config.email}</span>
          </div>
        </div>
        <img src="/img/icons/redes.png" width={180} height={60} alt="" className="mt-8 mb-3" />
      </div>
      <hr className="bg-white" />
      <div className="max-w-[1120px] px-5 lg:px-0 mx-auto flex justify-between py-1 text-[12px] text-[#7F7F7F]">
        <span>
          © 2023 N&A Ingeniería y Construcciones - Todos los derechos reservados
        </span>
        <span>Desarrollado por W Capital</span>
      </div>
    </footer>
  );
};

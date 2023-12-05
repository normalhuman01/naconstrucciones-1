import Image from "next/image";

export const Benefits = () => {
  return (
    <div className="bg-dark py-8 px-8 flex flex-wrap justify-center items-start gap-4 text-center text-white">
      <div className="flex flex-col items-center w-[240px] h-[132px]">
        <div className="bg-white overflow-hidden flex justify-center items-center p-1 rounded-full w-[44px] h-[44px]">
          <Image
            src="/img/icons/certificado-icon.png"
            width={24}
            height={24}
            alt=""
            className="object-contain"
          />
        </div>
        <h3 className="font-bold whitespace-nowrap">Seguridad en tus Compras</h3>
        <p className="text-[14px]">
          Contamos con certificado para todas tus compras
        </p>
      </div>
      <div className="flex flex-col items-center w-[240px] h-[132px]">
        <div className="bg-white overflow-hidden flex justify-center items-center p-1 rounded-full w-[44px] h-[44px]">
          <Image
            src="/img/icons/callcenter.png"
            width={24}
            height={24}
            alt=""
          />
        </div>
        <h3 className="font-bold">Asesoría personalizada</h3>
        <p className="text-[14px]">
          Un ejecutivo de cuentas y un staff de cotizadores te acompañarán en tu
          compra
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start gap-4 w-[240px] h-[132px]">
        <span className="text-[14px]">DESPACHO ÁGIL</span>
        <p className="leading-6 md:text-left">
          <span className="text-[24px]">DELIVERY</span>
          <br />
          <span className="text-[24px]">EXPRESS</span>
        </p>
        <span className="text-[14px]">ventas@naconstrucciones.com</span>
      </div>
      <div className="w-[240px] h-[132px]">
        <Image src="/img/others/delivery-packages.png" width={166} height={132} alt="" className="max-w-[166px]" />
      </div>
    </div>
  );
};

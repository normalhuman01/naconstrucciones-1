import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="">
      <div className="max-w-[760px] mx-auto flex flex-col items-start gap-5">
        <div>
          <span className="text-[12px]">SOBRE</span>
          <h3 className="text-2xl font-bold">NOSOTROS</h3>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 bg-dark text-white p-10 pb-14 relative">
            <h4 className="font-bold mb-4 text-lg">MISIÓN</h4>
            <p>
              Nuestra misión es transformar ideas en realidades sólidas y
              funcionales. A través de la innovación, la calidad y la
              dedicación, construimos un futuro mejor para nuestros clientes y
              comunidades.
            </p>
            <Image
              src="/img/icons/comillas.png"
              width={50}
              height={50}
              alt=""
              className="absolute bottom-0 right-[28px]"
            />
          </div>
          <div className="flex-1 bg-dark text-white p-10 pb-14 relative">
            <h4 className="font-bold mb-4 text-lg">VISIÓN</h4>
            <p>
              Nos vemos como líderes de referencia en la industria de la
              construcción, inspirando con diseños vanguardistas y ejecución
              impecable. Nuestra visión es forjar espacios que enriquezcan vidas
              y perduren en el tiempo.
            </p>
            <Image
              src="/img/icons/comillas.png"
              width={50}
              height={50}
              alt=""
              className="absolute bottom-0 right-[28px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

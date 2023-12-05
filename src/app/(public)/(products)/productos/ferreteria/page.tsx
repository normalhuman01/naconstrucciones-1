import { ButtonBlack, TButtonBlackMore } from "@/components/custom"
import { abadiFont, arialBlackFont, calibriFont, impactFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const Page = () => {
  return (
    <>
      <div className="h-[370px]" style={{
        backgroundImage: "url('/img/products/ferreteria.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="max-w-[960px] mx-auto flex flex-col items-end justify-center h-full">
          <h2 className="flex flex-col items-end leading-none">
            <span className={cn("text-[24px] mb-3", impactFont.className)}>HERRAMIENTAS</span>
            <span className={cn("text-black leading-none text-[70px] z-10", abadiFont.className)} style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)" }}>FERRETERÍA</span>
            <span className={cn("text-white leading-none text-[70px] relative top-[-25px]", abadiFont.className)} style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>GENERAL</span>
          </h2>
          <p className="max-w-[305px] text-right relative top-[-25px]">¡Equipa tu proyecto con nuestra ferretería de calidad superior!</p>
          <TButtonBlackMore className="relative top-[-5px] border-white">VER MÁS</TButtonBlackMore>
        </div>
      </div>
      <div className="flex flex-col gap-7 items-center p-5 my-5">
        <p className={cn("text-center max-w-[500px] underline text-[20px] leading-6", calibriFont.className)}>Encuentra una amplia gama de productos y herramientas para construcción, bricolaje y más. Todo en un solo lugar para que construyas con confianza.</p>
        <h5 className={cn("text-center text-[28px]", arialBlackFont.className)}>OFRECEMOS</h5>
        <ol className={cn("font-bold leading-9", arialBlackFont.className)}>
          <li><span className="mr-3">1.</span> Herramientas manuales y eléctricas para cada tarea.</li>
          <li><span className="mr-3">2.</span> Materiales de construcción duraderos y confiables.</li>
          <li><span className="mr-3">3.</span> Suministros para proyectos de ingeniería y campo.</li>
          <li><span className="mr-3">4.</span> Productos de plomería, electricidad y saneamiento.</li>
          <li><span className="mr-3">5.</span> Soluciones en ferretería para cada desafío.</li>
        </ol>
        <ButtonBlack>CONSÚLTANOS</ButtonBlack>
      </div>
    </>
  )
}

export default Page
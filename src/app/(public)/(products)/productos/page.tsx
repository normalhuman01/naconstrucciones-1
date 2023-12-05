import {  TButtonBlackMore } from "@/components/custom"
import { abadiFont, impactFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const Page = () => {
  return (
    <div className="h-[370px]" style={{
      backgroundImage: "url('/img/products/epp.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="max-w-[960px] mx-auto flex flex-col items-end justify-center h-full">
        <h2 className="flex flex-col items-end leading-none">
          <span className={cn("text-[24px] mb-3", impactFont.className)}>Equipos de</span>
          <span className={cn("text-black leading-none text-[70px] z-10", abadiFont.className)} style={{textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)"}}>PROTECCIÓN</span>
          <span className={cn("text-white leading-none text-[70px] relative top-[-25px]", abadiFont.className)} style={{textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)"}}>PERSONAL</span>
        </h2>
        <p className="max-w-[305px] text-right relative top-[-25px]">Equipo laboral para la salud y seguridad en el trabajo para la industria y el sitio de construcción</p>
        <TButtonBlackMore className="relative top-[-5px] border-white">VER MÁS</TButtonBlackMore>
      </div>
    </div>
  )
}

export default Page
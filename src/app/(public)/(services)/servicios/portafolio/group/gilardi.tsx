import { arialBlackFont, calibriFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const Gilardi = () => {
  return (
    <div className="max-w-[1120px] m-auto flex justify-between items-stretch flex-wrap px-8 lg:px-0">
      <div className={cn("flex flex-col justify-between m-auto w-full h-full", "lg:max-w-[635px]")}>
        <div className="leading-none">
          <h3 className={cn("text-[32px] font-bold", arialBlackFont.className)}>CASA GILARDI</h3>
          <h4 className={cn("text-[21px] tracking-widest", calibriFont.className)}>Luis Barragán</h4>
        </div>
        <img src="/img/portfolio/gilardi/Fachada.jpg" className="mt-[40px]" alt="" />
      </div>
      <div className={cn("flex flex-col justify-between m-auto w-full h-full min-h-[448px]", "lg:max-w-[360px]")}>
        <img src="/img/portfolio/gilardi/1.png" className="w-full mt-[40px] lg:mt-0" alt="" />
        <img src="/img/portfolio/gilardi/2.png" className="w-full mt-[40px] lg:mt-0" alt="" />
      </div>
    </div>
  )
}

import { ButtonYellow } from "@/components/custom"
import { cn } from "@/lib/utils"
import bootImage from "../_assets/boot.png"
import { HTMLAttributes } from "react"
import Image from "next/image"
import { arialBlackFont, calibriFont } from "@/lib/fonts"


type TBlackCircleProps = HTMLAttributes<HTMLDivElement>
const BlackCircle = ({ className, ...props }: TBlackCircleProps) => {
  return (
    <div className={cn("w-[260px] h-[260px] rounded-full bg-[#262626]", className)} {...props}>
    </div>
  )
}

const Left = () => {
  return (
    <div className="relative">
      <BlackCircle />
      <Image src={bootImage.src} width={320} height={320} alt="boot" className="absolute top-[-60px] min-w-[320px] h-[320px]" />
    </div>
  )
}

export const Featured = () => {

  return (
    <div className="border-2 border-black rounded-[40px] p-5 flex justify-center items-center gap-[60px] max-w-[760px]	m-auto">
      <Left />
      <div className="flex flex-col gap-2 items-start">
        <p className="">
          <strong className={cn("text-[44px] leading-[0] font-bold text-white", arialBlackFont.className)} style={{ WebkitTextStroke: "1px black" }}>PRODUCTOS</strong>
          <br />
          <strong className={cn("text-[20px] leading-[0] font-bold tracking-wide", arialBlackFont.className)}>PRODUCTOS  DESTACADOS</strong>
          <br />
          <strong className={cn("text-[40.5px] leading-[36px] font-bold text-white", arialBlackFont.className)} style={{ WebkitTextStroke: "1px black" }}>DESTACADOS</strong>
        </p>
        <p className="flex flex-col">
          <strong className={cn("max-w-[280px] font-bold text-[20px] leading-5", calibriFont.className)}>
            Zapatilla de Seguridad Conquest Stone High Puma
          </strong>
          <span className={cn("font-light text-[18px]", calibriFont.className)}>
            Zapato de Seguridad
          </span>
        </p>
        <ButtonYellow >CONSEGUIR</ButtonYellow>
      </div>
    </div>
  )
}

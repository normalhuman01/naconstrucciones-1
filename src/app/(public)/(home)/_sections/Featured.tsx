import { ButtonYellow } from "@/components/custom"
import { cn } from "@/lib/utils"
import bootImage from "../_assets/boot.png"
import Image from "next/image"
import { HTMLAttributes } from "react"

type TBlackCircleProps = HTMLAttributes<HTMLDivElement>
const BlackCircle = ({ className, ...props }: TBlackCircleProps) => {
  return (
    <div className={cn("w-[200px] h-[200px] rounded-full bg-[#262626]", className)} {...props}>
    </div>
  )
}

const Left = () => {
  return (
    <div className="relative">
      <BlackCircle />
      <Image src={bootImage.src} width={240} height={100} alt="boot" className="absolute top-[-40px]" />
    </div>
  )
}

export const Featured = () => {

  return (
    <div>
      <Left />
      <div>
        <header>
          <strong>PRODUCTOS</strong>
          <span>PRODUCTOS DESTACADOS</span>
          <strong>DESTACADOS</strong>
        </header>
        <strong>
          Zapatilla de Seguridad Conquest Stone High Puma
        </strong>
        <div>
          Zapato de Seguridad
        </div>
        <ButtonYellow className={cn("")}>CONSEGUIR</ButtonYellow>
      </div>
    </div>
  )
}

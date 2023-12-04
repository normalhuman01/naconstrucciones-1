import { impactFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

type TButtonProps = HTMLAttributes<HTMLButtonElement>
export const Button = ({ className, ...props }: TButtonProps) => {
  return (
    <button
      className={cn("", className)}
      {...props}
    />
  )
}

type TButtonYellowProps = TButtonProps
export const ButtonYellow = ({ className, ...props }: TButtonYellowProps) => {
  return (
    <Button
      className={cn("py-2 px-5 text-xl bg-[#FEE21B] border border-black rounded-full", className, impactFont.className)} {...props} />
  )
}

type TButtonBlackProps = TButtonProps
export const ButtonBlack = ({ className, ...props }: TButtonBlackProps) => {
  return (
    <Button
      className={cn("py-2 px-5 text-xl bg-black text-white border border-black rounded-full", className, impactFont.className)} {...props} />
  )
}
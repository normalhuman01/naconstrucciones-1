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
      className={cn("py-2 px-5 text-xl bg-yellow-500 border border-black rounded-full", className, impactFont.className)} {...props} />
  )
}
import { ButtonWhite } from "@/components/custom"
import { useFormStatus } from "react-dom"

export const BtnSubmit = () => {
  const { pending } = useFormStatus()

  return (
    <ButtonWhite className="mt-5" type="submit" aria-disabled={pending}>ENVIAR</ButtonWhite>
  )
}

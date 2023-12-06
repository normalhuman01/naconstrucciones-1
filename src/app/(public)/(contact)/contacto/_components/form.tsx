"use client"

import { useFormState } from "react-dom"
import { BtnSubmit } from "./btn-submit"
import { Input } from "./input"
import { TState } from "@/types/form"
import { sendMail } from "../action-mail"

const initialState: TState = {
  message: null,
}

export const Form = () => {
  const [state, formAction] = useFormState(sendMail, initialState)

  return (
    <form className="flex flex-col items-end gap-2 w-full max-w-[600px]" action={formAction}>
      <Input placeholder="Nombre" required name="name" />
      <Input placeholder="Email" required name="email" />
      <Input placeholder="Teléfono" required name="phone" />
      <Input placeholder="Dirección" required name="address" />
      <Input placeholder="Asunto" required name="subject" />
      <textarea
        className="w-full border-b-2 border-black font-light outline-none text-[18px] placeholder:text-[18px] placeholder:text-[rgb(118, 113, 113)]"
        placeholder="Mensaje"
        rows={4}
        name="message"
        required
      ></textarea>
      <BtnSubmit />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  )
}

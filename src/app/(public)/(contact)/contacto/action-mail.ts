"use server"
import { TState } from '@/types/form'
import { z } from "zod"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT!),
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASSWORD!,
  },
})

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  subject: z.string(),
  message: z.string(),
})

export const sendMail = async (_prevState: TState, formData: FormData) => {
  const objectFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  const parsed = formSchema.safeParse(objectFormData)

  if (!parsed.success) {
    return {
      message: parsed.error.message,
    }
  }

  const data = parsed.data

  const to = Array.from(new Set([
    "darwin97.va@gmail.com",
    ...process.env.SMTP_TO!.split(",").map((e) => e.trim().toLowerCase()),
  ])).join(",");

  console.log(to, "<--to")

  const result = await transporter.sendMail({
    from: process.env.SMTP_USER!,
    to,
    subject: `Nuevo Mensaje del Formulario de Contacto`,
    html: `
      <p><b>Nombre: </b>${data.name}</p>
      <p><b>Email: </b>${data.email}</p>
      <p><b>Telefono: </b>${data.phone}</p>
      <p><b>Dirección: </b>${data.address}</p>
      <p><b>Asunto: </b>${data.subject}</p>
      <p><b>Mensaje: </b>${data.message}</p>
    `,
  })

  console.log(result)

  return {
    message: "Enviado",
  }
}

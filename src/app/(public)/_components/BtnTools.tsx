"use client";

import { cn } from "@/lib/utils";
import { Fragment, HTMLAttributes, useState } from "react";
import { IoClose } from "react-icons/io5";

const BtnPrimary = ({ children }: HTMLAttributes<HTMLButtonElement>) => {
  return <button className="text-white px-1 py-1 rounded-lg">{children}</button>;
};

const linksPrimary = [
  "INICIO",
  "PRODUCTOS",
  "SERVICIOS",
  "CONTACTOS",
]

/**
 * 
 * Protección Corporal
Protección Facial
Protección Cabeza
Protección Auditiva
Protección Visual
Protección Manual
Zapato de Seguridad
Otros

 */

const linksSecondary = [
  "Protección Corporal",
  "Protección Facial",
  "Protección Cabeza",
  "Protección Auditiva",
  "Protección Visual",
  "Protección Manual",
  "Zapato de Seguridad",
  "Otros",
]

export const BtnTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="flex gap-1 flex-wrap max-w-[44px] items-center justify-center cursor-pointer">
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
        <div className="w-[12px] h-[12px] bg-[black]"></div>
      </div>
      {isOpen && <div className="top-0 left-0 z-[10000] fixed p-3 flex justify-center items-center w-full h-[100vh] bg-dark text-white">
        <div className="max-w-[960px] mx-auto relative flex justify-center items-center w-full">
          <div className="flex gap-9 items-stretch overflow-hidden max-h-[90vh] w-full">
            <div className="flex flex-col gap-2 items-start">
              {linksPrimary.map((link, index) => (
                <>
                  {index ? <hr className="w-full bg-white" /> : null}
                  <BtnPrimary key={index}>{link}</BtnPrimary>
                </>
              ))}
            </div>
            <div className="h-[100vh] w-[1px] bg-white"></div>
            <div className="flex flex-col">
              <div className="text-xl">EPP</div>
              <ul className="mb-4">
                {linksSecondary.map((link, index) => (
                  <li key={index} className={cn("ml-2 text-xl", index ? "text-[rgba(255,255,255,0.5)]" : "")}>{link}</li>
                ))}
              </ul>
              <div className="text-xl">EPP</div>

            </div>
          </div>
        </div>
        <IoClose onClick={() => setIsOpen(false)} className="text-[3rem] text-white absolute top-3 md:top-5 right-3 md:right-5 cursor-pointer" />
      </div>}
    </>

  )
}
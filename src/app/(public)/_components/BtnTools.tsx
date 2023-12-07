"use client";

import { cn } from "@/lib/utils";
import { TProductCategory } from "@/types";
import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const BtnPrimary = ({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="text-white px-1 py-1 rounded-lg" {...props}>
      {children}
    </button>
  );
};

const linksPrimary = ["INICIO", "PRODUCTOS", "SERVICIOS", "CONTACTOS"];

const linksSecondary = [
  "Protección Corporal",
  "Protección Facial",
  "Protección Cabeza",
  "Protección Auditiva",
  "Protección Visual",
  "Protección Manual",
  "Zapato de Seguridad",
  "Otros",
];

export const BtnTools = ({
  categories,
}: {
  categories: TProductCategory[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  const data = [
    {
      label: "INICIO",
      link: "/",
    },
    {
      label: "PRODUCTOS",
      links: [
        {
          label: "EPP",
          links: categories.map((category) => ({
            label: category.name,
            link: `/productos/epp/${category.slug}#products`,
          })),
        },
        {
          label: "FERRETERÍA",
          link: "/productos/ferreteria",
        },
      ],
    },
    {
      label: "SERVICIOS",
      links: [
        {
          label: "GENERAL",
          link: "/servicios/general",
        },
        {
          label: "ASESORÍAS",
          link: "/servicios/asesorias",
        },
      ],
    },
    {
      label: "CONTACTOS",
    },
  ];

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-1 flex-wrap max-w-[44px] items-center justify-center cursor-pointer"
      >
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
      {isOpen && (
        <div className="top-0 left-0 z-[10000] fixed p-3 flex justify-center items-center w-full h-[100vh] bg-dark text-white">
          <div className="max-w-[1120px] mx-auto relative flex justify-center items-center w-full">
            <div className="flex gap-9 items-stretch overflow-hidden max-h-[90vh] w-full">
              <div className="flex flex-col gap-2 items-start">
                {data.map((item, index) => {
                  return (
                    <>
                      {index ? <hr className="w-full bg-white" /> : null}
                      <BtnPrimary onClick={() => setMenu(index)} key={index}>
                        {item.label}
                      </BtnPrimary>
                    </>
                  );
                })}
              </div>
              <div className="h-[100vh] w-[1px] bg-white"></div>
              <div className="flex flex-col">
                <div className="text-xl">{data[menu]?.label}</div>
                <ul className="mb-4">
                  {data[menu]?.links?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={cn(
                          "ml-5 text-xl",
                          index ? "text-[rgba(255,255,255,0.5)]" : ""
                        )}
                      >
                        <Link
                          href={item.link || ""}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <IoClose
            onClick={() => setIsOpen(false)}
            className="text-[3rem] text-white absolute top-3 md:top-5 right-3 md:right-5 cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

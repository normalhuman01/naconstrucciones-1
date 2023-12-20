"use client";

import { cn } from "@/lib/utils";
import { TProductCategory } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  Fragment,
  HTMLAttributes,
  SetStateAction,
  useState,
} from "react";
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

type TLinkData = {
  label: string;
} & (
  | {
      link: string;
    }
  | {
      links: TLinkData[];
    }
);
export const MenuTools = ({
  categories,
  parentHeight,
  setIsOpen,
}: {
  categories: TProductCategory[];
  isOpen: boolean;
  parentHeight: number | null;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [menu, setMenu] = useState(0);
  const pathname = usePathname();

  const data: TLinkData[] = [
    {
      label: "INICIO",
      link: "/",
    },
    {
      label: "PRODUCTOS",
      links: [
        {
          label: "EPP",
          links: [
            {
              label: "TODOS",
              link: "/productos/epp#products",
            },
            ...categories
              .map((category) => ({
                label: category.name,
                link: `/productos/epp/${category.slug}#products`,
              }))
              .reverse(),
          ],
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
        {
          label: "PORTAFOLIO",
          link: "/servicios/portafolio",
        },
      ],
    },
    {
      label: "CONTACTOS",
      link: "/contacto",
    },
  ];

  const currentMenu = data[menu];

  return (
    <div
      className={cn("right-0 z-[10000] sticky p-3 md:px-6 md:pr-5 flex justify-center items-center w-full md:w-auto bg-[rgba(38,38,38,0.98)] text-white")}
      style={{ height: `calc(100vh - ${parentHeight}px)`, top: `${parentHeight}px` }}
    >
      <div className="max-w-[1120px] mx-auto h-full relative flex justify-center items-center w-full">
        <div className="relative flex gap-6 items-stretch max-h-[90vh] w-full h-full">
          <div className="flex flex-col gap-2 justify-between">
            <div className="flex flex-col gap-2 items-start">
              <h4 className="text-md mb-4 w-full text-left font-bold text-[20px]">MENÚ</h4>

              {data.map((item, index) => {
                return (
                  <Fragment key={index}>
                    {index ? <hr className="w-full bg-white" /> : null}
                    {"links" in item ? (
                      <BtnPrimary
                        onClick={() => setMenu(index)}
                        key={index}
                        className="text-md"
                      >
                        {item.label}
                      </BtnPrimary>
                    ) : (
                      <Link
                        href={item.link}
                        onClick={() => {
                          setMenu(index);
                          setIsOpen(false);
                        }}
                      >
                        <BtnPrimary key={index} className="text-md">
                          {item.label}
                        </BtnPrimary>
                      </Link>
                    )}
                  </Fragment>
                );
              })}
            </div>
            <div>
              <img
                src="/img/logo/large-logo-dark.png"
                width={215}
                alt=""
                className="max-w-[160px] md:max-w-[220px]"
              />
            </div>
          </div>
          <div className="h-[90%] w-[1px] bg-white"></div>
          <div className="flex flex-col">
            {"links" in currentMenu && (
              <>
                <h4 className="text-md mb-4 w-full text-left font-bold text-[20px] inline self-start">
                  CATEGORÍAS
                </h4>
                <ul className="mb-4">
                  {currentMenu?.links?.map((item, index) => {
                    const hasLink = "link" in item;
                    return (
                      <li
                        key={index}
                        className={cn(
                          "ml-3 text-md mb-2 md:mb-5",
                          index ? "text-white" : ""
                        )}
                      >
                        {hasLink && (
                          <Link
                            href={item.link || ""}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "md:text-[16px]",
                              pathname === item.link.split("#")[0] &&
                                "text-white"
                            )}
                          >
                            {item.label}
                          </Link>
                        )}
                        {!hasLink && (
                          <div>
                            <div className="md:text-[16px]">{item.label}</div>
                            <ul>
                              {item.links?.map((link, index) => (
                                <li
                                  key={index}
                                  className="ml-3 text-md mb-1 md:mb-2 text-[rgba(255,255,255,0.5)]"
                                >
                                  {"link" in link && (
                                    <Link
                                      href={link.link || ""}
                                      onClick={() => setIsOpen(false)}
                                      className={cn(
                                        "inline-block md:text-[16px] hover:text-white leading-none md:leading-normal",
                                        pathname === link.link.split("#")[0] &&
                                          "text-white"
                                      )}
                                    >
                                      {link.label}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
          <IoClose
            onClick={() => setIsOpen(false)}
            className="hidden text-[3rem] text-white absolute top-[-2rem] md:top-5 right-3 md:right-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

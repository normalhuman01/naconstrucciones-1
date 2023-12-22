"use client";

import { cn } from "@/lib/utils";
import { TProductCategory } from "@/types";
import { X } from "lucide-react";
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
import { NetworksTools } from "./NetworksTools";

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
  open?: boolean;
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
  const [menu, setMenu] = useState(1);
  const pathname = usePathname();

  const data: TLinkData[] = [
    {
      label: "INICIO",
      link: "/",
    },
    {
      label: "PRODUCTOS",
      open: true,
      links: [
        {
          label: "EPP",
          links: [
            {
              label: "Todos",
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
      label: "CONTACTO",
      link: "/contacto",
    },
  ];

  const currentMenu = data[menu];

  return (
    <>
      <div
        className={cn(
          "flex md:hidden justify-center items-center w-full md:w-auto bg-[rgba(38,38,38,0.98)] text-white",
          "right-0 z-[10000] sticky p-3 md:px-6 md:pr-5"
        )}
        style={{
          height: `calc(100vh - ${parentHeight}px)`,
          top: `${parentHeight}px`,
        }}
      >
        <div className="max-w-[1120px] mx-auto h-full relative flex justify-center items-center w-full">
          <div className="relative flex gap-6 items-stretch max-h-[90vh] w-full h-full">
            <div className="flex flex-col gap-2 justify-between">
              <div className="flex flex-col gap-2 items-start">
                {data.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      {index ? <hr className="w-full bg-white" /> : null}
                      {"links" in item ? (
                        <BtnPrimary
                          onClick={() => setMenu(index)}
                          key={index}
                          className={cn(
                            "hover:text-white",
                            index === menu ? "text-white" : "text-[#7F7F7F]"
                          )}
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
                          <BtnPrimary
                            key={index}
                            className={cn(
                              "hover:text-white",
                              index === menu ? "text-white" : "text-[#7F7F7F]"
                            )}
                          >
                            {item.label}
                          </BtnPrimary>
                        </Link>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className="h-[90%] w-[1px] bg-white"></div>
            <div className="flex flex-col">
              {"links" in currentMenu && (
                <>
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
                                    className="ml-3 text-md mb-1 md:mb-2 text-[#7F7F7F]"
                                  >
                                    {"link" in link && (
                                      <Link
                                        href={link.link || ""}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                          "inline-block md:text-[16px] hover:text-white leading-none md:leading-normal",
                                          pathname ===
                                            link.link.split("#")[0] &&
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

      <div
        className={cn(
          "hidden md:flex justify-center items-center bg-[rgba(38,38,38,0.98)] text-white",
          "left-0 z-[10000] top-0 fixed p-3 h-[100vh] w-[100vw] md:px-6 md:pr-5",
          "text-[20px]"
        )}
      >
        <div className="max-w-[1120px] mx-auto h-full relative flex justify-center items-center w-full">
          <div className="relative flex gap-10 items-stretch max-h-[90vh] w-full h-full">
            <X
              size={36}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer absolute top-0 right-5 text-white"
            />
            <NetworksTools className="absolute bottom-0 right-5" />
            <div className="flex flex-col gap-2 justify-between">
              <div className="flex flex-col gap-2 items-start">
                {data.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      {"links" in item ? (
                        <BtnPrimary
                          onClick={() => setMenu(index)}
                          key={index}
                          className={cn(
                            "font-bold",
                            "hover:text-white",
                            index === menu ? "text-white" : "text-[#7F7F7F]"
                          )}
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
                          <BtnPrimary
                            key={index}
                            className={cn(
                              "font-bold",
                              "hover:text-white",
                              index === menu ? "text-white" : "text-[#7F7F7F]"
                            )}
                          >
                            {item.label}
                          </BtnPrimary>
                        </Link>
                      )}
                      <hr
                        className={cn(
                          index + 1 === data.length && "hidden",
                          "w-full my-2",
                          index === menu ? "border-white" : "border-[#7F7F7F]"
                        )}
                      />
                    </Fragment>
                  );
                })}
              </div>
              <div>
                <img src="/img/logo/large-logo-dark.png" width={240} alt="" />
              </div>
            </div>
            <div className="h-[100%] w-[1px] bg-[#7F7F7F]"></div>
            <div className="flex flex-col">
              {"links" in currentMenu && (
                <>
                  <ul className="mb-4">
                    {currentMenu?.links?.map((item, index) => {
                      const hasLink = "link" in item;
                      return (
                        <li
                          key={index}
                          className={cn("ml-3 text-md mb-2 md:mb-5")}
                        >
                          {hasLink && (
                            <Link
                              href={item.link || ""}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "font-bold",
                                pathname === item.link.split("#")[0]
                                  ? "text-white"
                                  : "text-[#7F7F7F]"
                              )}
                            >
                              {item.label}
                            </Link>
                          )}
                          {!hasLink && (
                            <div>
                              <div className="text-[#7F7F7F] font-bold mb-3">
                                {item.label}
                              </div>
                              <ul className="leading-none ml-5">
                                {item.links?.map((link, index) => (
                                  <li
                                    key={index}
                                    className="ml-3 text-[rgba(255,255,255,0.5)]"
                                  >
                                    {"link" in link && (
                                      <Link
                                        href={link.link || ""}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                          "inline-block hover:text-white leading-[.8] md:leading-normal",
                                          pathname ===
                                            link.link.split("#")[0] &&
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
          </div>
        </div>
      </div>
    </>
  );
};

"use client";

import { TProductCategory } from "@/types";
import { useEffect } from "react";

export const BtnTools = ({
  setIsOpen,
  isOpen,
}: {
  categories: TProductCategory[];
  parentHeight?: number | null;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) => {
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

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-1 flex-wrap w-[44px] items-center justify-center cursor-pointer"
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
    </>
  );
};

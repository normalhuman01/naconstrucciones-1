"use client";
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { IoSearch } from "react-icons/io5"

export const BtnSearch = () => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  return (
    <div className="flex items-center gap-1">
      {
        open && <Input className="max-w-[172px] lg:max-w-[210px] border-dark" value={search} onChange={(e) => setSearch(e.target.value)} />
      }
      <div onClick={() => {
        open && !search && setOpen(!open);
        !open && setOpen(!open);
      }} className="w-[44px] h-[44px] bg-[#727272] flex justify-center items-center cursor-pointer">
        <IoSearch className="text-white text-xl" />
      </div>
    </div>
  )
}
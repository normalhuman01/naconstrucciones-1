"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export const BtnSearch = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="flex items-center relative">
      {open && (
        <input
          className="absolute text-xl bg-[#F3F2F3] outline-none px-5 top-0 right-[100%] w-[250px] md:w-[580px] h-[58px] border-[1px] border-[#727272]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) =>
            e.key === "Enter" &&
            search &&
            router.push(`/results?search=${search}`)
          }
          autoFocus
        />
      )}
      <div
        onClick={() => {
          open && search && router.push(`/results?search=${search}`);
          open && !search && setOpen(!open);
          !open && setOpen(!open);
        }}
        className="w-[58px] h-[58px] bg-[#727272] flex justify-center items-center cursor-pointer"
      >
        <IoSearch className="text-white text-2xl" />
      </div>
    </div>
  );
};

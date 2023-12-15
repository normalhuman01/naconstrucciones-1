"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export const BtnSearchCircle = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="hidden md:block relative w-full">
      <div className="absolute w-full mt-[-2px] top-0 right-0 flex justify-end">
        {open && (
          <input
            className="text-lg absolute top-0 right-0 rounded-[1rem] bg-[#F3F2F3] outline-none px-4 w-[200px] md:w-[540px] h-[28px] border-[1px] border-[#727272]"
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
          className="border-black z-10 cursor-pointer border-[1px] rounded-full h-[28px] w-[28px] flex justify-center items-center bg-[#FEE21B]"
        >
          <IoSearch className="text-lg" />
        </div>
      </div>
    </div>
  );
};

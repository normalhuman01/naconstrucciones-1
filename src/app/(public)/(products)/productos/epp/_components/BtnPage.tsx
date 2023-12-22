import { cn } from "@/lib/utils";
import Link from "next/link";

export const BtnPage = ({
  page,
  currentPage,
  slugCategory,
}: {
  page: number;
  currentPage: number;
  slugCategory?: string;
}) => {
  return (
    <Link
      href={{
        pathname: `/productos/epp/${slugCategory || ""}`,
        search: `?page=${page}`,
        hash: "#products",
      }}
      as={`/productos/epp/${slugCategory || ""}?page=${page}#products`}
    >
      <div
        className={cn(
          "w-[33px] h-[33px] flex justify-center items-center border-black border-[1px] cursor-pointer",
          currentPage === page ? "bg-black text-white" : "bg-white"
        )}
      >
        {page}
      </div>
    </Link>
  );
};

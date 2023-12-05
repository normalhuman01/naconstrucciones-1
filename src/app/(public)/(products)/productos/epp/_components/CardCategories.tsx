import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TProductCategory } from "@/types";
import Link from "next/link";

export const CardCategories = ({
  categories,
  category,
}: {
  categories: TProductCategory[];
  category: TProductCategory;
}) => {
  return (
    <div className="inline-flex flex-wrap gap-4 gap-x-10 m-auto max-w-[794px]">
      {categories.map((_category) => (
        <Link
          href={`/productos/epp/${_category.slug}`}
          className={cn(
            "w-[168px] h-[84px] flex justify-center items-center p-2",
            "text-center border-black border-[2px] rounded-2xl cursor-pointer",
            "font-bold",
            _category.id === category.id && "bg-[#FEE21B]",
            calibriFont.className
          )}
          key={_category.id}
        >
          {_category.name}
        </Link>
      ))}
    </div>
  );
};

import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const TitleFeatured = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  subTitle?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "text-center w-full text-[23px] md:text-[29.5px]",
        arialBlackFont.className,
        className
      )}
    >
      <div
        className={cn("bg-[#E9E6E5] text-white")}
        style={{ WebkitTextStroke: "1px black" }}
      >
        {title}
      </div>
      <div className="leading-[1rem] mb-3">{subTitle || title}</div>
    </div>
  );
};

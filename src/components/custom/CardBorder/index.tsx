import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ButtonBlack } from "@/components/custom";
import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TCardProps = {
  title: string;
  description: string;
  image: string;
  fallbackImage?: string;
  action: {
    label: string;
    link: string;
  };
} & TStyle &
  React.HTMLAttributes<HTMLDivElement>;
type TStyle = {
  headerClassName?: string;
};
export const CardBorder = ({
  title,
  description,
  image,
  fallbackImage,
  action: { label, link },
  headerClassName,
  className,
  ...props
}: TCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 justify-between rounded-3xl shadow-strong overflow-hidden w-full max-w-[356px]",
        className
      )}
      {...props}
    >
      <div>
        <header
          className={cn("bg-[#E9E6E5] h-[236px] relative p-5", headerClassName)}
        >
          {!fallbackImage ? (
            <div
              className={cn("w-full h-full")}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <ImageWithFallback
              src={image}
              fallbackSrc={fallbackImage}
            />
          )}
        </header>
        <main className={cn("px-4", calibriFont.className)}>
          <h4 className="font-bold text-[19px] leading-[.9] my-2">{title}</h4>
          <p className="font-light text-[19px] leading-[1]">{description}</p>
        </main>
      </div>
      <footer className="px-5 pb-4">
        <Link target="_blank" href={link || "#"}>
          <ButtonBlack>{label}</ButtonBlack>
        </Link>
      </footer>
    </div>
  );
};

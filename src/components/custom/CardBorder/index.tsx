import { ButtonBlack } from "@/components/custom";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TCardProps = {
  title: string;
  description: string;
  image: string;
  action: {
    label: string;
    link: string;
  };
} & TStyle;
type TStyle = {
  headerClassName?: string;
};
export const CardBorder = ({
  title,
  description,
  image,
  action: { label, link },
  headerClassName,
}: TCardProps) => {
  return (
    <div className="flex flex-col gap-5 justify-between rounded-3xl shadow-xl overflow-hidden w-full max-w-[300px]">
      <div>
        <header
          className={cn("bg-[#E9E6E5] h-[254px] relative p-5", headerClassName)}
        >
          <div
            className={cn("w-full h-full")}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </header>
        <main className="px-5">
          <h4 className="font-bold text-xl">{title}</h4>
          <p>{description}</p>
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

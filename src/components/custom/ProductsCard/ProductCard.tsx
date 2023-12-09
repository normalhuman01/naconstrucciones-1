import { ButtonBlack } from "@/components/custom";
import { config } from "@/config";
import { TProductEmbedded } from "@/types";
import Link from "next/link";
import { load } from "cheerio";
import { FALLBACK_UPLOAD, WP_UPLOAD } from "@/data";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { cn } from "@/lib/utils";
import { calibriFont } from "@/lib/fonts";

export const ProductCard = ({
  product: {
    id,
    content: { rendered: content },
    title: { rendered: title },
    _embedded,
  },
}: {
  product: TProductEmbedded;
}) => {
  const mediaUrl =
    WP_UPLOAD + "/" + _embedded["wp:featuredmedia"][0].media_details.file;
  const fallbackMediaUrl =
    FALLBACK_UPLOAD + "/" + _embedded["wp:featuredmedia"][0].media_details.file;

  const strContent = load(content).text();

  return (
    <div className="flex flex-1 flex-col min-w-[245px] gap-5 justify-between rounded-3xl shadow-strong overflow-hidden">
      <div>
        <header className=" h-[228px] relative p-2">
          <ImageWithFallback
            className="w-full h-full"
            src={mediaUrl}
            fallbackSrc={fallbackMediaUrl}
          />
        </header>
        <main className={cn("px-5 text-[19px]", calibriFont.className)}>
          <h4 className="font-bold leading-none mt-3">{title}</h4>
          <p className={cn("font-light")}>{strContent}</p>
        </main>
      </div>
      <footer className="px-5 pb-4">
        <Link
          target="_blank"
          href={`https://wa.me/+51${config.phone}?text=Hola me gustaría más información sobre ${title}`}
        >
          <ButtonBlack>CONSEGUIR</ButtonBlack>
        </Link>
      </footer>
    </div>
  );
};

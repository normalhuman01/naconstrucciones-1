import { ButtonBlack } from "@/components/custom";
import { config } from "@/config";
import { TProductEmbedded } from "@/types";
import Link from "next/link";
import { load } from "cheerio";
import { FALLBACK_UPLOAD, WP_UPLOAD } from "@/data";
import { ImageWithFallback } from "@/components/ImageWithFallback";

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

  if (id === 1763) {
    console.log(_embedded["wp:featuredmedia"][0]);
  }

  return (
    <div className="flex flex-col gap-5 justify-between rounded-3xl shadow-xl overflow-hidden">
      <div>
        <header className="bg-[#E9E6E5] h-[254px] relative p-5">
          <ImageWithFallback
            className="w-full h-full"
            src={mediaUrl}
            fallbackSrc={fallbackMediaUrl}
          />
          {/* <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${mediaUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div> */}
        </header>
        <main className="px-5">
          <h4 className="font-bold text-xl">{title}</h4>
          <p>{strContent}</p>
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

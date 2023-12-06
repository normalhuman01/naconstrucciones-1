import { ButtonBlack } from "@/components/custom";
import { config } from "@/config";
import { TProductEmbedded } from "@/types";
import Link from "next/link";
import { load } from "cheerio";

export const ProductCard = ({
  product: {
    content: { rendered: content },
    title: { rendered: title },
    _embedded,
  },
}: {
  product: TProductEmbedded;
}) => {
  const mediaUrl =
    _embedded["wp:featuredmedia"][0]!.media_details.sizes.full.source_url;
  const strContent = load(content).text();
  return (
    <div className="flex flex-col gap-5 justify-between rounded-3xl shadow-xl overflow-hidden">
      <div>
        <header className="bg-[#E9E6E5] h-[254px] relative p-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${mediaUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
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

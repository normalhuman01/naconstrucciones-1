import { CardBorder } from "@/components/custom/CardBorder";
import { config } from "@/config";
import { load } from "cheerio";

export const Cards = ({
  cards,
}: {
  cards: {
    image: string;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <div className="max-w-[960px] m-auto">
      <div className="flex gap-5 py-10 flex-wrap">
        {cards.map((card, index) => {
          const title = load(card.title).text();
          const description = load(card.description).text();
          return (
            <CardBorder
              key={index}
              image={card.image}
              action={{
                label: "CONSULTAR",
                link: `https://wa.me/+51${config.phone}?text=${title}`,
              }}
              title={title}
              description={description}
              headerClassName="p-0"
            />
          );
        })}
      </div>
    </div>
  );
};

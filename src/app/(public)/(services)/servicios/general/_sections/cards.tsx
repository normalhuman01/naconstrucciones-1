import { CardBorder } from "@/components/custom/CardBorder";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { load } from "cheerio";

export const Cards = ({
  cards,
  className,
  ...props
}: {
  cards: {
    image: string;
    title: string;
    description: string;
  }[];
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("max-w-[1120px] m-auto px-4 lg:px-0", className)}
      {...props}
    >
      {/* <div className="hidden gap-y-11 justify-evenly lg:justify-between py-10 flex-wrap">
        {cards.map((card, index) => {
          const title = load(card.title).text();
          const description = load(card.description).text();
          return (
            <CardBorder
              key={index}
              image={card.image}
              fallbackImage={card.image.replace(
                "darwinv24.sg-host.com",
                "naconstrucciones.com"
              )}
              action={{
                label: "CONSULTAR",
                link: `https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre sus servicio de ${title}`,
              }}
              title={title}
              description={description}
              headerClassName="p-0"
              className="shadow-strong"
            />
          );
        })}
      </div> */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-10"
        style={{
          gridAutoRows: "auto",
        }}
      >
        {cards.map((card, index) => {
          const title = load(card.title).text();
          const description = load(card.description).text();
          return (
            <CardBorder
              key={index}
              image={card.image}
              fallbackImage={card.image.replace(
                "darwinv24.sg-host.com",
                "naconstrucciones.com"
              )}
              action={{
                label: "CONSULTAR",
                link: `https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre sus servicio de ${title}`,
              }}
              title={title}
              description={description}
              headerClassName="p-0"
              className="shadow-strong"
            />
          );
        })}
      </div>
    </div>
  );
};

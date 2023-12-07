import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const formatNumber = (number: number) =>
  number < 10 ? `0${number}` : `${number}`;

export const Items = ({
  items,
}: {
  items: { title: string; description: string }[];
}) => {
  return (
    <div className="max-w-[1120px] m-auto py-10">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => {
          const number = index + 1;
          const isOne = number % 3 === 1;
          const isTwo = number % 3 === 2;
          const isThree = number % 3 === 0;
          const className = cn(
            isOne && "text-right items-end",
            isTwo && "text-center",
            isThree && "text-left items-start"
          );
          const classNameInter = cn(isOne && "mr-10", isThree && "ml-10");
          return (
            <div className={cn("flex flex-col gap-4", className)} key={index}>
              <div
                className={cn(
                  "inline-flex flex-col items-center",
                  classNameInter
                )}
              >
                <strong>{formatNumber(number)}</strong>
                <strong className="text-[50px] leading-3 mb-[2rem]">.</strong>
              </div>
              <h3
                className={cn(
                  "text-[15px] md:text-[20px] font-bold",
                  className,
                  arialBlackFont.className
                )}
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h3>
              <p
                className={cn(
                  "text-[13px] md:text-[18px] leading-5 mb-4",
                  className,
                  calibriFont.className
                )}
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
    <div className="max-w-[1120px] m-auto pt-10 mt-7 mb-[96px]">
      <div className="grid grid-cols-3 gap-[66px] m-auto">
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
            <div className={cn("flex flex-col gap-4 ", className)} key={index}>
              <div
                className={cn(
                  "inline-flex flex-col items-center",
                  classNameInter
                )}
              >
                <strong className={cn("text-[18px] font-[900] mb-2", calibriFont.className)}>{formatNumber(number)}</strong>
                <strong className="text-[50px] leading-3 mb-[2rem]">.</strong>
              </div>
              <h3
                className={cn(
                  "text-[15px] md:text-[26px] leading-none font-bold uppercase mb-3",
                  className,
                  arialBlackFont.className
                )}
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h3>
              <p
                className={cn(
                  "text-[13px] md:text-[19px] leading-5 mb-4",
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

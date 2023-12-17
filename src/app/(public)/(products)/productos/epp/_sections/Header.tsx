import { BtnSearchCircle } from "@/app/(public)/_components/BtnSearchCircle";
import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <div className="h-[140px] w-full mb-[62px] bg-[#E9E6E5] relative">
      <p className={cn("hidden md:flex flex-col pl-2", "relative bottom-[-52px]")}>
        <span
          className={cn(
            "text-[30px] md:text-[60px] leading-10 text-white",
            arialBlackFont.className
          )}
          style={{ WebkitTextStroke: "1px black" }}
        >
          ¿QUÉ ESTÁS
        </span>
        <span
          className={cn(
            "text-[24px] md:text-[29.5px] leading-[54px] text-black",
            arialBlackFont.className
          )}
        >
          ¿QUÉ ESTÁS BUSCANDO?
        </span>
        <span
          className={cn(
            "text-[30px] md:text-[60.5px] leading-7 text-white",
            arialBlackFont.className
          )}
          style={{ WebkitTextStroke: "1px black" }}
        >
          BUSCANDO?
        </span>
      </p>
      
      <p className={cn("flex md:hidden flex-col pl-2", "relative bottom-[-60px]")}>
        <span
          className={cn(
            "text-[30px] md:text-[60px] mt-7 leading-[1rem] md:leading-10 text-white",
            arialBlackFont.className
          )}
          style={{ WebkitTextStroke: "1px black" }}
        >
          ¿QUÉ ESTÁS
        </span>
        <span
          className={cn(
            "text-[23px] md:text-[29.5px] leading-10 md:leading-12 text-black",
            arialBlackFont.className
          )}
        >
          ¿QUÉ ESTÁS BUSCANDO?
        </span>
        <span
          className={cn(
            "text-[30px] md:text-[60.5px] leading-3 md:leading-7 text-white",
            arialBlackFont.className
          )}
          style={{ WebkitTextStroke: "1px black" }}
        >
          BUSCANDO?
        </span>
      </p>
      {/* <div className="absolute bottom-1 right-1 border-black border-[1px] rounded-full h-[28px] w-[28px] flex justify-center items-center bg-[#FEE21B]">
        <IoSearch className="text-lg" />
      </div> */}
      <BtnSearchCircle></BtnSearchCircle>
    </div>
  );
};

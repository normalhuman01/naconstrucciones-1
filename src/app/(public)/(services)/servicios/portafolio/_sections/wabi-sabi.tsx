import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const WabiSabi = () => {
  return (
    <div className={cn("h-[500px] flex flex-col items-center justify-center text-center", calibriFont.className)}>
      <span className="text-[21px]">WABI SABI</span>
      <h3 className={cn("text-[40px] md:text-[64px] mt-2 mb-[50px] leading-[3.5rem] font-bold", calibriFont.className)}>
        LA BELLEZA DE LA IMPERFECCIÓN,
        <br />
        SIMPLICIDAD Y NATURALIDAD
      </h3>
      <span className="text-[19px]">El encanto de lo simple y funcional</span>
    </div>
  );
};

import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const WabiSabi = () => {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center text-center">
      <span>WABI SABI</span>
      <h3 className={cn("text-[44px] font-bold", calibriFont.className)}>
        LA BELLEZA DE LA IMPERFECCIÓN,
        <br />
        SIMPLICIDAD Y NATURALIDAD
      </h3>
      <span>El encanto de lo simple y funcional</span>
    </div>
  );
};

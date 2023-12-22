import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Input = ({ className, ...props }: HTMLAttributes<HTMLInputElement> & {
  required?: boolean;
  name?: string;
}) => {
  return (
    <input
      className={cn(
        "border-b-[1px] font-light text-[19px] placeholder:text-[19px] placeholder:text-[#757575] border-black outline-none w-full",
        calibriFont.className,
        className
      )}
      {...props}
    />
  );
};

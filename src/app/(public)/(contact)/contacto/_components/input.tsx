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
        "border-b-[1px] font-light text-[18px] placeholder:text-[18px] placeholder:text-[rgb(118, 113, 113)] border-black outline-none w-full",
        calibriFont.className,
        className
      )}
      {...props}
    />
  );
};

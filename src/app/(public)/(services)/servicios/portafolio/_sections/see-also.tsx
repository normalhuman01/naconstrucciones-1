import { arialBlackFont, calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export const SeeAlso = () => {
  return (
    <div className="flex flex-col gap-8 items-center text-center my-10">
      <header className={cn("underline text-[18px] leading-5", calibriFont.className)}>
        <span className="inline-flex justify-center mb-2">VER TAMBIÉN</span>
        <p>
          Si hay un fenómeno que ha transformado por completo la forma de
          entender<br/>el ocio en el mundo, es precisamente el de las cafeterías.
        </p>
      </header>
      <p className="leading-6">
        <span className={cn("text-[20px]",calibriFont.className)}>ARQUITECTURA EN</span><br />
        <span className={cn("text-[28px]", arialBlackFont.className)}>CAFETERÍAS</span>
      </p>
      <ol className={cn("font-bold text-[20px]", calibriFont.className)}>
        <li>1    BOR BUA Heard But Never Seen</li>
        <li>2    BOR BUA Heard But Never Seen</li>
        <li>3    BOR BUA Heard But Never Seen</li>
        <li>4    BOR BUA Heard But Never Seen</li>
        <li>5    BOR BUA Heard But Never Seen</li>
        <li>6    BOR BUA Heard But Never Seen</li>
      </ol>
    </div>
  );
};

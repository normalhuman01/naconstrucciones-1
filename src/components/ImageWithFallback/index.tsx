"use client";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes, useEffect, useState } from "react";

type TImageWithFallbackProps = HTMLAttributes<HTMLImageElement> & {
  fallbackSrc: string;
  src: string;
  alt?: string;
};
export const ImageWithFallback = ({
  src,
  fallbackSrc,
  ...props
}: TImageWithFallbackProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        setImageSrc(src);
      };

      img.onerror = () => {
        setImageSrc(fallbackSrc);
      };
    };

    loadImage();
  }, [src, fallbackSrc]);

  return (
    <div className="relative w-full h-full">
      <img src={imageSrc} className="top-0 left-0 w-full h-full object-cover" {...props} />
    </div>
    // <div
    //   className={cn("w-full h-full")}
    //   style={{
    //     backgroundImage: `url(${imageSrc})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //   }}
    //   {...props}
    // ></div>
  );
};

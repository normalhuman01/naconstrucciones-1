"use client";
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
        // Si la imagen principal carga correctamente, actualiza la ruta de la imagen
        setImageSrc(src);
      };

      img.onerror = () => {
        // Si hay un error al cargar la imagen principal, actualiza la ruta con la imagen de respaldo
        setImageSrc(fallbackSrc);
      };
    };

    loadImage();
  }, [src, fallbackSrc]);

  return (
    <img
      src={imageSrc}
      // onError={() => {
      //   console.log("Image Error");
      //   handleImageError();
      // }}
      className="object-contain"
      {...props}
    />
  );
};

"use client";

import ModalImage from "react-modal-image";

const url = "/img/home/boot_featured_circle.png";

export const FeaturedModal = () => {
  return (
    <>
      {/* <img
        src={url}
        width={360}
        height={305}
        alt="boot"
        // className="scale-90"
        // className="absolute bottom-[20px] opacity-[.1] blur-sm filter backdrop-blur-5 dark w-[200px] md:min-w-[320px] md:h-[40px]"
      /> */}
      <ModalImage
        width={360}
        height={305}
        small={url}
        className="w-[360px] max-h-[320px]"
        large={
          "https://darwinv24.sg-host.com/wp-content/uploads/2023/09/Zapatilla-de-Seguridad-Conquest-Stone-High-Puma.jpg"
        }
        alt="Zapatilla Conquest Stone High Puma"
      />
    </>
  );
};

"use client";
import { ButtonBlack } from "@/components/custom";
import { config } from "@/config";
import { abadiFont, calibriFont, impactFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const bgStyles = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Top = ({
  className,
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      style={{
        color: "transparent",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundImage: "transparent",
        display: "inline-block",
        WebkitTextStroke: ".5px white",
        textShadow: "0px 1px 1px rgba(0, 0, 0, 0.5)",
        ...style,
      }}
      className={cn(
        "z-10 text-[24px] leading-[3rem] font-bold ml-[5px]",
        impactFont.className,
        className
      )}
      {...props}
    />
  );
};
const Title = ({
  className,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <h2
      className={cn(
        "z-10 text-[40px] font-[100] md:text-[75px] leading-[3.5rem]",
        abadiFont.className,
        className
      )}
      style={{
        textShadow: "0px 4px 3px rgba(0, 0, 0, 0.7)",
        fontWeight: 300,
        ...style,
      }}
      {...props}
    />
  );
};

const Description = ({
  className,
  style,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      style={{ textShadow: "0 2px 2px rgb(0, 0, 0, 0.5)", ...style }}
      className={cn(
        "mt-3",
        "font-bold z-10 text-[20px] leading-6",
        calibriFont.className,
        className
      )}
      {...props}
    />
  );
};

const ButtonGroup = ({ carousel }: { carousel: Carousel | null }) => {
  return (
    <>
      <div
        onClick={() => carousel?.previous(1)}
        className="absolute cursor-pointer top-[50%] translate-y-[-50%] left-[30px] text-white w-[30px] h-[30px]  z-10"
      >
        <Image
          src="/img/icons/arrow-left.png"
          alt="arrow left"
          width={30}
          height={30}
        />
      </div>

      <div
        onClick={() => carousel?.next(1)}
        className="absolute cursor-pointer top-[50%] translate-y-[-50%] right-[30px] text-white w-[30px] h-[30px]  z-10"
      >
        <Image
          src="/img/icons/arrow-right.png"
          alt="arrow right"
          width={30}
          height={30}
        />
      </div>
    </>
  );
};

const classesDark =
  "absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.1)] opacity-60";

export const Initial = () => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);
  return (
    <div className="relative">
      <Carousel
        ref={setCarousel}
        responsive={responsive}
        ssr
        infinite
        autoPlay
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup carousel={carousel} />}
        customLeftArrow={<></>}
        customRightArrow={<></>}
      >
        <div
          className="relative flex flex-col items-center justify-center text-white h-[520px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/PROYECTOS.jpg)",
            backgroundPositionY: "-2rem",
          }}
        >
          <div className={classesDark}></div>
          <div className="flex flex-col items-start justify-center max-w-[1120px] w-full z-20">
            <Top>Especialidad</Top>
            <Title>PROYECTOS</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <Link
              target="_blank"
              href={`https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre los proyectos que realizan.`}
            >
              <ButtonBlack className="text-[20px] z-10 mt-10 border-white cursor-pointer">
                CONSULTAR
              </ButtonBlack>
            </Link>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white text-center h-[520px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/REMODELACION.jpg)",
          }}
        >
          <div className={classesDark}></div>
          <div className="flex flex-col items-center justify-center text-center max-w-[1120px] w-full z-20">
            <Top>Especialidad</Top>
            <Title>REMODELACIÓN</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <Link
              target="_blank"
              href={`https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre las remodelaciones que realizan.`}
            >
              <ButtonBlack className="text-[20px] z-10 mt-10 border-white cursor-pointer">
                CONSULTAR
              </ButtonBlack>
            </Link>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white text-center h-[520px] px-10 bg-top-minus8rem"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/AMPLIACION.jpg)",
          }}
        >
          <div className={classesDark}></div>
          <div className="flex flex-col items-center justify-center text-center max-w-[1120px] w-full z-20">
            <Top>Especialidad</Top>
            <Title>AMPLIACIONES</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <Link
              target="_blank"
              href={`https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre las AMPLIACIONES que realizan.`}
            >
              <ButtonBlack className="text-[20px] z-10 mt-10 border-white cursor-pointer">
                CONSULTAR
              </ButtonBlack>
            </Link>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white h-[520px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/EXCAVACION.png)",
            backgroundPositionY: "60%",
          }}
        >
          <div className={classesDark}></div>
          <div className="flex flex-col items-end justify-center text-right max-w-[1120px] w-full z-20">
            <Top>Especialidad</Top>
            <Title>EXCAVACIONES</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <Link
              target="_blank"
              href={`https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre las EXCAVACIONES que realizan.`}
            >
              <ButtonBlack className="text-[20px] z-10 mt-10 border-white cursor-pointer">
                CONSULTAR
              </ButtonBlack>
            </Link>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white h-[520px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/DEMOLICION.png)",
          }}
        >
          <div className={classesDark}></div>
          <div className="flex flex-col items-start justify-center max-w-[1120px] w-full z-20">
            <Top>Especialidad</Top>
            <Title>DEMOLICIONES</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <Link
              target="_blank"
              href={`https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre su servicio de DEMOLICIONES.`}
            >
              <ButtonBlack className="text-[20px] z-10 mt-10 border-white cursor-pointer">
                CONSULTAR
              </ButtonBlack>
            </Link>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white h-[520px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/EPP.jpg)",
          }}
        >
          <div className={classesDark}></div>
          <div className="flex flex-col items-end justify-center text-right max-w-[1120px] w-full z-20">
            <Top>Especialidad</Top>
            <Title>EPP{`'`}s</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <Link
              target="_blank"
              href={`https://wa.me/+51${config.phone}?text=Hola, me gustaría más información sobre sus EPP's.`}
            >
              <ButtonBlack className="text-[20px] z-10 mt-10 border-white cursor-pointer">
                CONSULTAR
              </ButtonBlack>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

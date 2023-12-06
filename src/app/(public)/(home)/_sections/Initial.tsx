"use client";
import { ButtonBlack } from "@/components/custom";
import { abadiFont, calibriFont, impactFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
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
        ...style,
      }}
      className={cn(
        "z-10 text-3xl font-bold ml-[5px]",
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
        "z-10 text-[40px] md:text-[60px] leading-[3.5rem]",
        abadiFont.className,
        className
      )}
      style={{
        textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
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
      className={cn("font-bold z-10 text-[20px] leading-6", calibriFont.className, className)}
      {...props}
    />
  );
};

export const Initial = () => {
  return (
    <div>
      <Carousel responsive={responsive} ssr infinite autoPlay>
        <div
          className="relative flex flex-col items-center justify-center text-white h-[438px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/PROYECTOS.jpg)",
          }}
        >
          <div className="bg-[rgba(117,117,117,0.35)] w-full h-full absolute top-0 left-0"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <div className="flex flex-col items-start justify-center max-w-[960px] w-full">
            <Top>Especialidad</Top>
            <Title>PROYECTOS</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <ButtonBlack className="text-[15px] z-10 mt-8 border-white">
              CONSULTAR
            </ButtonBlack>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white text-center h-[438px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/REMODELACION.jpg)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <Top>Especialidad</Top>
          <Title>REMODELACIÓN</Title>
          <Description>
            Creamos desde cero con visión <br /> y precisión técnica
          </Description>
          <ButtonBlack className="text-[15px] z-10 mt-8 border-white">
            CONSULTAR
          </ButtonBlack>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white text-center h-[438px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/AMPLIACION.jpg)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <Top>Especialidad</Top>
          <Title>AMPLIACIONES</Title>
          <Description>
            Creamos desde cero con visión <br /> y precisión técnica
          </Description>
          <ButtonBlack className="text-[15px] z-10 mt-8 border-white">
            CONSULTAR
          </ButtonBlack>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white h-[438px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/EXCAVACION.png)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <div className="flex flex-col items-end justify-center text-right max-w-[960px] w-full">
            <Top>Especialidad</Top>
            <Title>EXCAVACIONES</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <ButtonBlack className="text-[15px] z-10 mt-8 border-white">
              CONSULTAR
            </ButtonBlack>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white h-[438px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/DEMOLICION.png)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <div className="flex flex-col items-start justify-center max-w-[960px] w-full">
            <Top>Especialidad</Top>
            <Title>DEMOLICIONES</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <ButtonBlack className="text-[15px] z-10 mt-8 border-white">
              CONSULTAR
            </ButtonBlack>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center text-white h-[438px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/EPP.jpg)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <div className="flex flex-col items-end justify-center text-right max-w-[960px] w-full">
            <Top>Especialidad</Top>
            <Title>EPP{`'`}s</Title>
            <Description>
              Creamos desde cero con visión <br /> y precisión técnica
            </Description>
            <ButtonBlack className="text-[15px] z-10 mt-8 border-white">
              CONSULTAR
            </ButtonBlack>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

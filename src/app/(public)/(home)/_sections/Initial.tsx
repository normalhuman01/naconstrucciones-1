"use client";
import { ButtonBlack } from "@/components/custom";
import React from "react";
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
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <div className="flex flex-col items-start justify-center max-w-[960px] w-full">
            <span className="z-10">Especialidad</span>
            <h2 className="z-10 text-[40px] md:text-[60px] font-light" style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)" }}>PROYECTOS</h2>
            <p className="z-10">
              Creamos desde cero con visión <br /> y precisión técnica
            </p>
            <ButtonBlack className="text-[15px] z-10 mt-8 border-white">CONSULTAR</ButtonBlack>
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
          <span className="z-10">Especialidad</span>
          <h2 className="z-10 text-[40px] md:text-[60px] font-light" style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)" }}>REMODELACIÓN</h2>
          <p className="z-10">
            Creamos desde cero con visión <br /> y precisión técnica
          </p>
          <ButtonBlack className="text-[15px] z-10 mt-8 border-white">CONSULTAR</ButtonBlack>
        </div>


        <div
          className="relative flex flex-col items-center justify-center text-white text-center h-[438px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/AMPLIACION.jpg)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <span className="z-10">Especialidad</span>
          <h2 className="z-10 text-[40px] md:text-[60px] font-light" style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)" }}>AMPLIACIONES</h2>
          <p className="z-10">
            Creamos desde cero con visión <br /> y precisión técnica
          </p>
          <ButtonBlack className="text-[15px] z-10 mt-8 border-white">CONSULTAR</ButtonBlack>
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
            <span className="z-10">Especialidad</span>
            <h2 className="z-10 text-[40px] md:text-[60px] font-light" style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)" }}>EXCAVACIONES</h2>
            <p className="z-10">
              Creamos desde cero con visión <br /> y precisión técnica
            </p>
            <ButtonBlack className="text-[15px] z-10 mt-8 border-white">CONSULTAR</ButtonBlack>
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
            <span className="z-10">Especialidad</span>
            <h2 className="z-10 text-[40px] md:text-[60px] font-light" style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)" }}>DEMOLICIONES</h2>
            <p className="z-10">
              Creamos desde cero con visión <br /> y precisión técnica
            </p>
            <ButtonBlack className="text-[15px] z-10 mt-8 border-white">CONSULTAR</ButtonBlack>
          </div>
        </div>
        

        <div
          className="relative flex flex-col items-center justify-center text-white h-[438px] px-10"
          style={{
            ...bgStyles,
            backgroundImage: "url(/img/home/EPP-v2.jpg)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)]"></div>
          <div className="flex flex-col items-end justify-center text-right max-w-[960px] w-full">
            <span className="z-10">Especialidad</span>
            <h2 className="z-10 text-[40px] md:text-[60px] font-light" style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)" }}>EPP{`'`}s</h2>
            <p className="z-10">
              Creamos desde cero con visión <br /> y precisión técnica
            </p>
            <ButtonBlack className="text-[15px] z-10 mt-8 border-white">CONSULTAR</ButtonBlack>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

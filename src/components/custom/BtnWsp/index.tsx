"use client";
import { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import classes from "./style.module.css";
import "./style.css";
import { cn } from "@/lib/utils";
import { calibriFont } from "@/lib/fonts";
import { config } from "@/config";

export const BtnWsp = () => {
  useEffect(() => {
    setTimeout(() => {
      (
        document.querySelector(
          "#customContainerWSP > * > *"
        ) as HTMLButtonElement
      )?.click();
    }, 1000);
  }, []);
  return (
    <div
      id={"customContainerWSP"}
      className={cn(classes.container, calibriFont.className)}
    >
      <FloatingWhatsApp
        avatar="/img/logo/logo-square-black.png"
        phoneNumber={"51" + config.phone}
        accountName="N&A Ingeniería y Construcciones"
        chatMessage="Hola, cómo te puedo ayudar?"
        chatboxHeight={256}
      />
    </div>
  );
};

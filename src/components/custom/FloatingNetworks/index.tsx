import { cn } from "@/lib/utils";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { config } from "@/config";
import classes from "./style.module.css";
import { Lato } from "next/font/google";
import Image from "next/image";
import { HTMLAttributes } from "react";

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
});

type TCardProps = {
  href: string;
  children: React.ReactNode;
  title: string;
  styleTitle?: {
    [key: string]: string | number;
  };
} & HTMLAttributes<HTMLAnchorElement>;
const Card = ({
  href,
  children,
  title,
  style,
  className,
  styleTitle,
}: TCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn("relative", classes.link, className)}
      style={style}
    >
      <div
        className={cn(
          "absolute h-[40px] top-0 left-[100%] text-white flex justify-center items-center z-[-1]",
          className,
          lato.className
        )}
        style={styleTitle}
      >
        {title}
      </div>
      <span
        className={cn("flex justify-center items-center w-[40px] h-[40px]")}
      >
        {children}
      </span>
    </a>
  );
};


const Card2 = ({
  href,
  children,
  title,
  style,
  className,
  styleTitle,
}: TCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn("relative", classes.link2, className)}
      style={style}
    >
      <div
        className={cn(
          "absolute h-[40px] top-0 left-[100%] text-white flex justify-center items-center z-[-1]",
          className,
          lato.className
        )}
        style={styleTitle}
      >
        {title}
      </div>
      <span
        className={cn("flex justify-center items-center w-[40px] h-[40px]")}
      >
        {children}
      </span>
    </a>
  );
};


export const FloatingNetworks = () => {
  return (
    <ul className="hidden md:flex flex-col fixed right-0 top-[50%] translate-y-[-50%] z-100">
      <Card
        title="Facebook"
        href="https://facebook.com/naconstrucciones"
        className="bg-[#365493]"
      >
        <FaFacebookF className="text-white" />
      </Card>
      <Card2
        title="Instagram"
        href="https://facebook.com/naconstrucciones"
        // className="bg-[#d6249f]"
        styleTitle={{
          // backgroundImage: `url(/img/others/bg-instagram.png)`
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
            // "radial-gradient(circle at 107% 30%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        }}
        // className="bg-[#ea6cca]"
      >
        {/* <Image src="/img/logo/instagram.webp" width={25} height={25} alt="logo" /> */}
        <FaInstagram className="text-white" />
      </Card2>
      <Card
        title="Tiktok"
        href="https://facebook.com/naconstrucciones"
        className="bg-black"
      >
        <FaTiktok className="text-white" />
      </Card>
      <Card
        title="Whatsapp"
        href={`https://wa.me/51${config.phone}`}
        className="bg-[#1EBEA5]"
      >
        <FaWhatsapp className="text-white" />
      </Card>
    </ul>
  );
};

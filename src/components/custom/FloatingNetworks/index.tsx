import { cn } from "@/lib/utils";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { config } from "@/config";
import classes from "./style.module.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
});

type TCardProps = {
  href: string;
  children: React.ReactNode;
  className: string;
  title: string;
};
const Card = ({ href, children, title, className }: TCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn("relative", classes.link, className)}
    >
      <div
        className={cn(
          "absolute h-[40px] top-0 left-[100%] text-white flex justify-center items-center z-[-1]",
          className,
          lato.className
        )}
      >
        {title}
      </div>
      <span
        className={cn(
          "flex justify-center items-center w-[40px] h-[40px]",
        )}
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
      <Card
        title="Instagram"
        href="https://facebook.com/naconstrucciones"
        className="bg-[#ea6cca]"
      >
        <FaInstagram className="text-white" />
      </Card>
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

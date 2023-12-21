import { config } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NetworksTools = ({
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center gap-7 text-[28px]", className)}>
      <Link href={config.networks.twitter} target="_blank">
        <FaXTwitter className="cursor-pointer" />
      </Link>

      <Link href={config.networks.tiktok} target="_blank">
        <FaTiktok className="cursor-pointer" />
      </Link>

      <Link href={config.networks.facebook} target="_blank">
        <FaFacebookF className="cursor-pointer" />
      </Link>

      <Link href={config.networks.instagram} target="_blank">
        <FaInstagram className="cursor-pointer" />
      </Link>
    </div>
  );
};

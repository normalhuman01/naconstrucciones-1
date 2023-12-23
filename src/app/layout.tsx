import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N&A Ingeniería y Construcciones",
  description: "N&A Ingeniería y Construcciones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={cn(inter.className, "")}>{children}</body>
    </html>
  );
}

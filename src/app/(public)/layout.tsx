import { ReactNode } from "react";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { BtnWsp } from "@/components/custom/BtnWsp";
import { FloatingNetworks } from "@/components/custom/FloatingNetworks";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children} </main>
      <Footer />
      <BtnWsp />
      <FloatingNetworks />
    </div>
  );
};

export default Layout;

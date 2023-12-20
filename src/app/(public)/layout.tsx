import { ReactNode } from "react";
import { Footer } from "./_components/Footer";
import { BtnWsp } from "@/components/custom/BtnWsp";
import { FloatingNetworks } from "@/components/custom/FloatingNetworks";
import { HeaderWrapper } from "./_components/HeaderWrapper";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWrapper />
      <main className="flex-1">{children} </main>
      <Footer />
      <BtnWsp />
      <FloatingNetworks />
    </div>
  );
};

export default Layout;

import { PseudoBreadCrumbs } from "@/components/custom/PseudoBreadCrumbs";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PseudoBreadCrumbs
        title="PRODUCTOS"
        actions={[
          {
            label: "EPP",
            link: "/productos/epp",
          },
          {
            label: "FERRETERÍA",
            link: "/productos/ferreteria",
          },
        ]}
      />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

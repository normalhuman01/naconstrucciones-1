import { PseudoBreadCrumbs } from "@/components/custom/PseudoBreadCrumbs";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PseudoBreadCrumbs
        title="SERVICIOS"
        actions={[
          {
            label: "GENERAL",
            link: "/servicios/general",
          },
          {
            label: "ASESORÍAS",
            link: "/servicios/asesorias",
          },
          {
            label: "PORTAFOLIO",
            link: "/servicios/portafolio",
          },
        ]}
      />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

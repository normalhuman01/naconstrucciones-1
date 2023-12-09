"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HTMLAttributes, useEffect } from "react";

export const SmoothScrollLink = ({
  href,
  children,
}: HTMLAttributes<HTMLAnchorElement> & { href: string }) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    handleHashChange(); // Scroll al cargar la página si hay un hash en la URL

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return (
    <Link href={href} passHref>
      {children}
    </Link>
  );
};

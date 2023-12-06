import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment, HTMLAttributes } from "react";

type TPseudoBreadCrumbsProps = {
  title: string;
  actions: { link: string; label: string }[];
} & HTMLAttributes<HTMLDivElement>;
export const PseudoBreadCrumbs = ({
  title,
  actions,
  className,
}: TPseudoBreadCrumbsProps) => {
  const children = actions.map((action, index) => (
    <Fragment key={index}>
      {index ? <span>{`>`}</span> : null}
      <h2>
        <Link href={action.link}>{action.label}</Link>
      </h2>
    </Fragment>
  ));
  return (
    <header className={cn("bg-dark text-white p-5 sticky top-[92px] z-10", className)}>
      <div className="max-w-[960px] mx-auto flex gap-1">
        <h1>{title}</h1>
        {children.length && <span>{`>>`}</span>}
        {children}
      </div>
    </header>
  );
};

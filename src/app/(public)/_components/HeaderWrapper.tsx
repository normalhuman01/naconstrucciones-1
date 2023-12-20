import { WP_URL } from "@/data";
import { TProductCategory } from "@/types";
import { Header } from "./Header";

export const HeaderWrapper = async () => {
  const categories = (await fetch(
    WP_URL + "/product_category?per_page=100"
  ).then((res) => res.json())) as TProductCategory[];

  return (
    <Header categories={categories} />
  );
};

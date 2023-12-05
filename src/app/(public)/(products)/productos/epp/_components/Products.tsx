import { TProductEmbedded } from "@/types";
import { ProductCard } from "./ProductCard";

export const Products = ({ products }: { products: TProductEmbedded[] }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-5 gap-y-8 my-5">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

import { TProductEmbedded } from "@/types";
import { ProductCard } from "./ProductCard";

export const ProductsCard = ({
  products,
}: {
  products: TProductEmbedded[];
}) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-5 gap-y-8 my-5 px-2 md:px-0">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

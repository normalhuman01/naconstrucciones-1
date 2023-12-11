import { config } from "@/config";
import { CardProduct } from "../_components/CardProduct";

type TProductsProps = {
  products: {
    title: string;
    description: string;
    image: string;
  }[];
};

export const Products = ({ products }: TProductsProps) => {
  return (
    <div className="bg-cgray p-5 pb-[64px]">
      <div className="max-w-[1120px] mx-auto w-full flex justify-between flex-wrap gap-2 gap-y-4 md:gap-4">
        {products.map((product) => (
          <CardProduct
            key={product.title}
            title={product.title}
            description={product.description}
            link={`https://wa.me/+51${config.phone}?text=Hola,%20me%20interesa%20el%20siguiente%20producto:%20${product.title}`}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

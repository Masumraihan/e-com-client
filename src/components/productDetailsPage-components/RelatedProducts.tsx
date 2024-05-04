import ProductMobileViewCarousel from "../ui/ProductMobileViewCarousel";
import Image, { StaticImageData } from "next/image";
import arrival1 from "../../../public/Products/image 10 (1).png";
import arrival2 from "../../../public/Products/image 10.png";
import arrival3 from "../../../public/Products/image 7 (1).png";
import arrival4 from "../../../public/Products/image 7 (2).png";
import ProductCard from "../ui/ProductCard";
import { TProduct } from "@/app/types";
type TArrival = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  discount?: number;
};
const RelatedProducts = async ({ productSubCategory }: { productSubCategory: string }) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_URL}/product/get-all-products?subCategory=${productSubCategory}`,
  );
  const { data } = await res.json();
  return (
    <div>
      <h2 className='mb-2 text-3xl font-semibold text-center uppercase md:text-3xl'>
        Your Might Also Like
      </h2>
      <div className='hidden grid-cols-1 gap-5 mt-4 lg:grid md:grid-cols-3 lg:grid-cols-4'>
        {data?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='lg:hidden'>
        <ProductMobileViewCarousel products={data} Card={ProductCard} />
      </div>
    </div>
  );
};

export default RelatedProducts;

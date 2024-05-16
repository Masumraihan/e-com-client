import { TProduct } from "@/app/types";
import ProductCard from "../ui/ProductCard";
import ProductMobileViewCarousel from "../ui/ProductMobileViewCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

const Arrivals = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/product/get-all-products?limit=5`, {
    next: {
      revalidate: 30,
    },
  });
  const { data } = await res.json();
  return (
    <div className='relative'>
      <div className='container mx-auto mt-10'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <h2 className='mb-2 text-xl font-bold md:text-3xl'>New Arrivals</h2>
          <Link href='/products' className='cursor-pointer text-underline dark:after:bg-white '>
            View all Product
          </Link>
        </div>
        <hr />
        <div className='hidden grid-cols-1 gap-5 mt-4 lg:grid md:grid-cols-3 lg:grid-cols-5'>
          {data?.map((product: TProduct) => (
            <>
              <ProductCard key={product._id} product={product} />
            </>
          ))}
        </div>
        <div className='lg:hidden'>
          <ProductMobileViewCarousel products={data} Card={ProductCard} />
        </div>
      </div>
    </div>
  );
};

export default Arrivals;

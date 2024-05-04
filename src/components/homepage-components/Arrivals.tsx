import { TProduct } from "@/app/types";
import ProductCard from "../ui/ProductCard";
import ProductMobileViewCarousel from "../ui/ProductMobileViewCarousel";
import { Button } from "../ui/button";

const Arrivals = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/product/get-all-products?limit=5`, {
    next: {
      revalidate: 30,
    },
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <div className='relative'>
      <div className='container mx-auto mt-10'>
        <h2 className='mb-2 text-3xl font-extrabold text-center md:text-3xl'>New Arrival</h2>
        <div className='hidden grid-cols-1 gap-5 mt-4 lg:grid md:grid-cols-3 lg:grid-cols-5'>
          {data?.map((product: TProduct) => (
            <>
              <ProductCard key={product._id} product={product} />
            </>
          ))}
        </div>
        <div className='lg:hidden'>
          {/*<ProductMobileViewCarousel products={data} Card={ProductCard} />*/}
        </div>
        <div className='flex justify-center mt-6'>
          <Button variant='outline' size='lg' className='mx-auto hover:no-underline rounded-3xl'>
            <span className='text-lg capitalize cursor-pointer'>View all</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;

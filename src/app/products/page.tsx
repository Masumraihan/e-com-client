import BreadCrumb from "@/components/breadcrumb";
import FilterProduct from "@/components/products_page-component/FilterProduct";
import { SlidersHorizontal } from "lucide-react";

const ProductPage = () => {
  const breadcrumb = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Products",
      link: "/products",
    },
  ];
  return (
    <div className='relative mt-[50px] md:mt-[80px] container space-y-10 lg:space-y-20'>
      <BreadCrumb items={breadcrumb} />
      <div className='grid gap-10 lg:grid-cols-4'>
        <div className='col-span-1 p-2 space-y-3 border rounded-md'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold'>Filtering</h2>
            <span>
              <SlidersHorizontal size={20} />
            </span>
          </div>
          <span className='inline-block w-full border-b'></span>
          <FilterProduct />
        </div>
        <div className='col-span-3'>products</div>
      </div>
    </div>
  );
};

export default ProductPage;

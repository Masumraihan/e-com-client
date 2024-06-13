import BreadCrumb from "@/components/breadcrumb";
import FilterProduct from "@/components/products_page-component/FilterProduct";
import { SlidersHorizontal } from "lucide-react";
import { TCategory, TProduct, TSubCategory } from "../types";
import ProductCard from "@/components/ui/ProductCard";
import ProductMobileViewCarousel from "@/components/ui/ProductMobileViewCarousel";
import SortingProduct from "@/components/products_page-component/SortingProduct";
import PriceRang from "@/components/products_page-component/PriceRang";

const ProductPage = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/product/get-all-products?`, {
    next: {
      revalidate: 30,
    },
  });
  const { data } = await res.json();

  const categoryRes = await fetch(`${process.env.NEXT_BASE_URL}/category/get-all-categories`);
  const categoryData = await categoryRes.json();
  const categories = categoryData?.data as TCategory[];

  const subcategoryRes = await fetch(
    `${process.env.NEXT_BASE_URL}/sub-category/get-all-sub-categories`,
  );

  const subCategoryData = await subcategoryRes.json();
  const subCategory = subCategoryData?.data as TSubCategory[];

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
    <div className='relative mt-10 md:mt-[80px] container space-y-5'>
      <div className='flex items-center justify-between'>
        <BreadCrumb items={breadcrumb} />
        <div className='flex justify-end w-full'>
          <SortingProduct />
        </div>
      </div>
      <div className='grid gap-10 lg:grid-cols-4'>
        <div className='hidden p-2 border rounded-md sm:col-span-1 lg:block'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold'>Filtering</h2>
          </div>
          <span className='inline-block w-full border-b'></span>
          <div>
            <FilterProduct categories={categories} subCategory={subCategory} />
          </div>
          <span className='inline-block w-full border-b'></span>
          <div className='mt-3'>
            <PriceRang />
          </div>
        </div>
        <div className='overflow-x-hidden sm:col-span-3'>
          <div className='grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {data?.map((product: TProduct) => (
              <>
                <ProductCard key={product._id} product={product} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import { TProduct } from "@/app/types";
import BreadCrumb from "@/components/breadcrumb";
import DetailsTabs from "@/components/productDetailsPage-components/DetailsTabs";
import RelatedProducts from "@/components/productDetailsPage-components/RelatedProducts";
import ProceedToCheckout from "@/components/shared/ProceedToCheckout";
import AddToCard from "@/components/ui/AddToCard";
import { Button } from "@/components/ui/button";
import ProductImages from "@/components/ui/ProductImages";
import SelectColor from "@/components/ui/SelectColor";
import SelectSize from "@/components/ui/SelectSize";
import { Rating, ThinStar } from "@smastrom/react-rating";
import Link from "next/link";

const ProductDetailsPage = async ({ params }: { params: { productId: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_URL}/product/get-single-product/${params.productId}`,
    {
      cache: "no-store",
    },
  );
  const { data }: { data: TProduct } = await res.json();

  const breadcrumb = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: data?.title,
      link: "/products",
    },
  ];

  return (
    <div className='mt-[80px] container'>
      <BreadCrumb items={breadcrumb} />
      <div className='mb-6 md:hidden'>
        <AddToCard product={data} productStock={data.quantity} />
      </div>
      <div className='space-y-10'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div>
            <ProductImages images={data.images} />
          </div>
          <div className='space-y-4'>
            <h1 className='text-2xl font-semibold'>Product Name</h1>
            <div className='flex items-center gap-1'>
              <Rating
                readOnly
                value={4}
                style={{ maxWidth: 120 }}
                itemStyles={{
                  itemShapes: ThinStar,
                  activeFillColor: "#f59e0b",
                  inactiveFillColor: "#ffedd5",
                }}
                className='text-yellow-400'
              />
              4/5
            </div>
            <div className='flex items-center gap-2 pt-2 text-xl font-semibold'>
              <span className='text-2xl'>$200</span>
              <span className='text-gray-400 line-through group-last:hidden'>{data.price}</span>
              {/* {product.discount && */}
              {data.discount && (
                <span className='px-2 py-0.5 text-xs rounded bg-red/10 text-red'>
                  {data.discount}%
                </span>
              )}
            </div>
            <p>{data.description}</p>
            <hr />
            {data.color && (
              <>
                <div>
                  <h3 className='mb-3 text-lightGray'>Select Color</h3>
                  <SelectColor />
                </div>
                <hr />
              </>
            )}
            {data.size && (
              <>
                <div>
                  <h3 className='mb-3 text-lightGray'>Select Size</h3>
                  <SelectSize />
                </div>
                <hr />
              </>
            )}
            <div className='space-y-4'>
              <AddToCard product={data} productStock={data.quantity} />
              <Link href='/cart' className='block'>
                <Button size='lg' className='w-full'>
                  Checkout Your Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <DetailsTabs product={data} />
        <RelatedProducts productSubCategory={data.subCategory} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;

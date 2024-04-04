import BreadCrumb from "@/components/breadcrumb";
import DetailsTabs from "@/components/productDetailsPage-components/DetailsTabs";
import RelatedProducts from "@/components/productDetailsPage-components/RelatedProducts";
import AddToCard from "@/components/ui/AddToCard";
import ProductImages from "@/components/ui/ProductImages";
import SelectColor from "@/components/ui/SelectColor";
import SelectSize from "@/components/ui/SelectSize";
import { Rating, ThinStar } from "@smastrom/react-rating";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const breadcrumb = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: params.productId,
      link: "/products",
    },
  ];

  return (
    <div className='mt-[80px] container'>
      <BreadCrumb items={breadcrumb} />
      <div className='mb-6 md:hidden'>
        <AddToCard />
      </div>
      <div className='space-y-10'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <ProductImages />
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
              <span className='text-gray-400 line-through group-last:hidden'>$200</span>
              {/* {product.discount && */}
              {true && (
                <span className='px-2 py-0.5 text-xs rounded bg-red/10 text-red'>{20}%</span>
              )}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugiat? Veritatis
              enim qui amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
              fugiat? Veritatis enim qui amet!
            </p>
            <hr />
            <div>
              <h3 className='mb-3 text-lightGray'>Select Color</h3>
              <SelectColor />
            </div>
            <hr />
            <div>
              <h3 className='mb-3 text-lightGray'>Select Size</h3>
              <SelectSize />
            </div>
            <hr />
            <div>
              <AddToCard />
            </div>
          </div>
        </div>
        <DetailsTabs />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;

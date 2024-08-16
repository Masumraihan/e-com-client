import { TProduct } from "@/app/types";
import { Badge } from "../ui/badge";

const ProductDetails = ({ product }: { product: TProduct }) => {
  const { title, description, price, size, color, status } = product;
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h5 className='font-bold'>Description</h5>
        <p className='text-sm'>{description}</p>
      </div>
      <div className='grid grid-cols-2 max-w-[250px]'>
        <p>Name</p>
        <Badge className='text-sm' variant={"outline"}>
          {title}
        </Badge>
      </div>
      <div className='grid grid-cols-2 max-w-[250px]'>
        <p>Brand</p>
        <Badge className='text-sm' variant={"outline"}>
          Brand Name
        </Badge>
      </div>
      <div className='grid grid-cols-2 max-w-[250px]'>
        <p>Price</p>
        <Badge className='text-sm' variant={"outline"}>
          {price}
        </Badge>
      </div>
      {size && (
        <div className='grid grid-cols-2 max-w-[250px]'>
          <p>Size</p>
          <Badge className='text-sm' variant={"outline"}>
            {size}
          </Badge>
        </div>
      )}
      {color && (
        <div className='grid grid-cols-2 max-w-[250px]'>
          <p>Color</p>
          <Badge className='text-sm' variant={"outline"}>
            <span className='w-3 h-3 text-white rounded-full' style={{ backgroundColor: color }}>
              {color}
            </span>
          </Badge>
        </div>
      )}
      <div className='grid grid-cols-2 max-w-[250px]'>
        <p>Availability</p>
        <Badge
          className={`text-sm capitalize ${status === "in stock" ? "text-green" : "text-red"} `}
          variant={"outline"}
        >
          {status}
        </Badge>
      </div>
    </div>
  );
};

export default ProductDetails;

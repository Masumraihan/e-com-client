import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { Button } from "./button";
import Link from "next/link";
import { TProduct } from "@/app/types";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className='relative overflow-hidden group'>
      <Card>
        <CardHeader className='p-2'>
          <Image
            src={product.images[0]}
            width={100}
            height={100}
            alt='product image'
            className='object-cover w-full h-full rounded max-h-[200px]'
          />
        </CardHeader>
        <CardContent className='grid space-y-1'>
          <CardTitle className='lg:text-xl'>{product.title}</CardTitle>

          <div className='flex gap-0.5'>
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
            />{" "}
            4/5
          </div>
          <CardDescription>{product.description}</CardDescription>
          <div className='flex items-center gap-2 pt-2 text-xl font-semibold'>
            <span className='text-red'>${product.price}</span>
            <span className='text-gray-400 line-through group-last:hidden'>${product.price}</span>
            {product.discount && (
              <span className='px-2 py-0.5 text-xs rounded bg-red/10 text-red'>
                {product.discount}%
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className='gap-3'>
          <Link href={`/products/${product?._id}`} className='w-full'>
            <Button className='w-full'>
              <ShoppingCart className='w-4 h-4 mr-2' /> Add To Cart
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;

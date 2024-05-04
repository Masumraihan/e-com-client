"use client";
import Image, { StaticImageData } from "next/image";
import arrival1 from "../../../public/Products/image 10 (1).png";
import arrival2 from "../../../public/Products/image 10.png";
import arrival3 from "../../../public/Products/image 7 (1).png";
import arrival4 from "../../../public/Products/image 7 (2).png";
import ProductCard from "../ui/ProductCard";
import ProductMobileViewCarousel from "../ui/ProductMobileViewCarousel";
import { Button } from "../ui/button";
import victor from "../../../public/victors/Vector3.png";
import { TProduct } from "@/app/types";

type TArrival = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  discount?: number;
};

const arrivals: TArrival[] = [
  {
    id: 1,
    name: "Arrival",
    price: 123,
    category: "brand",
    image: arrival1,
    discount: 10,
  },
  {
    id: 2,
    name: "Arrival",
    price: 123,
    category: "brand",
    image: arrival2,
  },
  {
    id: 3,
    name: "Arrival",
    price: 123,
    category: "brand",
    image: arrival3,
    discount: 30,
  },
  {
    id: 4,
    name: "Arrival",
    price: 123,
    category: "brand",
    image: arrival4,
  },
];

const product: TProduct = {
  _id: "1",
  title: "Comfortable Sofa",
  description: "A cozy sofa perfect for relaxing evenings.",
  price: 599,
  subCategory: "Living Room Furniture",
  images: ["sofa1.jpg", "sofa2.jpg"],
  quantity: 10,
  discount: 0,
  status: "in stock",
  user: "user123",
  size: "72x36x32",
  color: "Gray",
  keywords: [{ value: "sofa", isDelete: false }],
  isDeleted: false,
  createdAt: "2024-04-16T12:00:00Z",
  updatedAt: "2024-04-16T12:00:00Z",
};

const TopSales = () => {
  return (
    <div className='relative'>
      <Image
        placeholder='blur'
        src={victor}
        alt='victor'
        className='absolute bottom-0 right-0 rotate-180 '
      />
      <div className='container mx-auto mt-10'>
        <h2 className='mb-2 text-3xl font-extrabold text-center md:text-3xl'>Top Sales</h2>
        <div className='hidden grid-cols-1 gap-5 mt-4 lg:grid md:grid-cols-3 lg:grid-cols-4'>
          {arrivals.map((arrival) => (
            <ProductCard key={arrival.id} product={product} />
          ))}
        </div>
        <div className='lg:hidden'>
          {/*<ProductMobileViewCarousel products={arrivals} Card={ProductCard} />*/}
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

export default TopSales;

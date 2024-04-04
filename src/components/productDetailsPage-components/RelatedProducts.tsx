import ProductMobileViewCarousel from "../ui/ProductMobileViewCarousel";
import Image, { StaticImageData } from "next/image";
import arrival1 from "../../../public/Products/image 10 (1).png";
import arrival2 from "../../../public/Products/image 10.png";
import arrival3 from "../../../public/Products/image 7 (1).png";
import arrival4 from "../../../public/Products/image 7 (2).png";
import ProductCard from "../ui/ProductCard";
type TArrival = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  discount?: number;
};
const RelatedProducts = () => {
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
  return (
    <div>
      <h2 className='mb-2 text-3xl font-semibold text-center uppercase md:text-3xl'>
        Your Might Also Like
      </h2>
      <div className='hidden grid-cols-1 gap-5 mt-4 lg:grid md:grid-cols-3 lg:grid-cols-4'>
        {arrivals.map((arrival) => (
          <ProductCard key={arrival.id} product={arrival} />
        ))}
      </div>
      <div className='lg:hidden'>
        <ProductMobileViewCarousel products={arrivals} Card={ProductCard} />
      </div>
    </div>
  );
};

export default RelatedProducts;

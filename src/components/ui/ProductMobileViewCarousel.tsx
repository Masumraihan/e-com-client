import { TProduct } from "@/app/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ElementType } from "react";

type TProductMobileViewCarouselProps = { Card: ElementType; products: TProduct[] };
const ProductMobileViewCarousel = ({ Card, products }: TProductMobileViewCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className='w-full overflow-hidden'
    >
      <CarouselContent className='-ml-1'>
        {products.map((item: TProduct, index: number) => (
          <CarouselItem key={index} className='pl-1 basis-2/3 md:basis-1/3'>
            <div className='p-1'>
              <Card product={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/*<CarouselPrevious />
      <CarouselNext />*/}
    </Carousel>
  );
};

export default ProductMobileViewCarousel;

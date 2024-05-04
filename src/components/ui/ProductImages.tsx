"use client";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className='grid gap-1 md:grid-cols-4'>
      <div className='order-2 size-full md:order-1'>
        <Tabs className='w-full h-full'>
          <TabsList className='grid w-full grid-cols-3 gap-2 border md:grid-cols-1'>
            {images.slice(0, 3)?.map((image, index) => (
              <TabsTrigger
                className={` ${
                  currentImage === image ? "border-black" : "border-[#F0F0F0]"
                } p-0 border  rounded-lg `}
                key={index}
                onClick={() => setCurrentImage(image)}
                value={"image" + index}
              >
                <Image
                  src={image}
                  alt='product'
                  width={100}
                  height={100}
                  className='rounded-xl size-full'
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        {/*<Image placeholder="blur"  src={image2} alt='product' className='rounded-lg' />
        <Image placeholder="blur"  src={image3} alt='product' className='rounded-lg' />*/}
      </div>
      <Image
        className='order-1 col-span-3 rounded-xl md:order-2 size-full'
        src={currentImage}
        width={500}
        height={500}
        alt='product'
      />
    </div>
  );
};

export default ProductImages;

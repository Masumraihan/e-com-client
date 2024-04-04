"use client";
import Image from "next/image";
import { useState } from "react";
import image1 from "../../../public/Products/image 10 (1).png";
import image2 from "../../../public/Products/image 10.png";
import image3 from "../../../public/Products/image 7 (1).png";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

const ProductImages = () => {
  const [image, setImage] = useState(image1);
  const images = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];

  return (
    <div className='grid gap-1 md:grid-cols-4'>
      <div className='order-2 size-full md:order-1'>
        <Tabs className='w-full h-full'>
          <TabsList className='grid w-full h-full grid-cols-3 gap-2 md:grid-cols-1'>
            {images.map((item, index) => (
              <TabsTrigger
                className={` ${
                  image === item.image ? "border-black" : "border-[#F0F0F0]"
                } p-0 border size-full rounded-lg`}
                key={index}
                onClick={() => setImage(item.image)}
                value={"image" + index}
              >
                <Image
                  placeholder='blur'
                  src={item.image}
                  alt='product'
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
        placeholder='blur'
        className='order-1 col-span-3 rounded-xl md:order-2 size-full'
        src={image}
        alt='product'
      />
    </div>
  );
};

export default ProductImages;

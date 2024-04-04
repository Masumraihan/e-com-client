import Image, { StaticImageData } from "next/image";
import banner2 from "../../../public/Top-Collections/cat-custom-bluetooth-speakers.jpg";
import banner3 from "../../../public/Top-Collections/cat-custom-fitness-headphone.jpg";
import {
  default as banner5,
  default as banner7,
} from "../../../public/Top-Collections/cat-custom-headphone-accessories.jpg";
import banner4 from "../../../public/Top-Collections/cat-custom-mp3-player.jpg";
import banner6 from "../../../public/Top-Collections/cat-custom-on-ears-over-ears.webp";
import banner from "../../../public/Top-Collections/shop-banner-02.jpg";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

type TFandomImage = {
  image: StaticImageData;
};

const images: TFandomImage[] = [
  {
    image: banner2,
  },
  {
    image: banner3,
  },
  {
    image: banner4,
  },
  {
    image: banner5,
  },
  {
    image: banner6,
  },
  {
    image: banner7,
  },
  //{
  //  image: top7,
  //},
  //{
  //  image: top8,
  //},
];
const TopCollections = () => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <h2 className='text-xl md:text-3xl font-bold mb-2'>Top Categories</h2>
        <p className='cursor-pointer text-underline dark:after:bg-white '>View all Categories</p>
      </div>
      <hr />
      <div className='grid lg:grid-cols-12 gap-5 mt-4'>
        <div className='group lg:col-span-5 p-6 flex justify-between bg-cover relative rounded-lg shadow-md overflow-hidden'>
          <Image
            placeholder='blur'
            src={banner}
            alt='background Image'
            className='absolute w-full h-full inset-0 -z-10 rounded-xl shadow-md group-hover:scale-110 transition-all duration-300'
          />
          <div className='flex items-start'>
            <div className='flex flex-col justify-around h-full gap-5'>
              <div className='space-y-2 md:space-y-6 dark:text-black'>
                <h1 className='lg:w-2/3 text-2xl font-bold lg:text-3xl'>
                  Best T-Shirt at the Best prices
                </h1>
                <p className=''>
                  Just Price <span className='text-xl font-extrabold text-red'>$345.50</span>
                </p>
              </div>
              <div>
                <Button size='lg' className='text-xl'>
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-7'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
            {images.map((image, index) => (
              <div
                key={index}
                className='group px-4 py-6 flex items-center justify-between shadow-md rounded-xl cursor-pointer relative overflow-hidden'
              >
                <div className='flex flex-col justify-between h-full'>
                  <h3 className=' lg:w-2/3 text-sm font-bold dark:text-black leading-2'>
                    The best POLO T-Shirt
                  </h3>
                  <div className='flex mb-3 mt-1'>
                    <Star size={14} />
                    <Star size={14} />
                    <Star size={14} />
                    <Star size={14} />
                    <Star size={14} />
                  </div>
                  <span className='text-xs font-bold text-gray-500'>{++index} Item</span>
                </div>
                <Image
                  placeholder='blur'
                  src={image.image}
                  alt='background Image'
                  className='absolute w-full h-full inset-0 -z-10 rounded-xl shadow-md group-hover:scale-110 transition-all duration-300'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollections;

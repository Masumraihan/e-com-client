import Image from "next/image";
import banner from "../../../public/Banner/banner-image.jpg";
import smallStar from "../../../public/Icons/Vector (1).png";
import largeStar from "../../../public/Icons/Vector.png";
import BannerCounter from "../ui/BannerCounter";
import { Button } from "../ui/button";
import Brands from "./Brands";

const Banner = () => {
  return (
    <section>
      <div className='bg-[#f2f0f1] mt-[50px] md:mt-[80px]'>
        <div className='container grid w-full h-full lg:grid-cols-2 mx-auto gap-4 md:gap-8 lg:gap-0 lg:max-h-[80vh] py-[50px] lg:py-[70px] md:overflow-hidden'>
          <div className='space-y-4 md:space-y-8'>
            <h1 className='uppercase font-[900] text-3xl md:text-6xl leading-'>
              Find Clothes That Matches your Style
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem consequatur voluptas
              ducimus incidunt deserunt officiis corrupti aliquid voluptatum assumenda repudiandae
            </p>
            <Button size='lg' color='primary' className='w-full px-16 py-6 md:w-auto rounded-3xl'>
              Shop Now
            </Button>
            <BannerCounter />
          </div>
          <div className='relative'>
            <Image
              placeholder='blur'
              src={smallStar}
              alt='small start'
              className='absolute z-10 -left-4 md:left-10 top-36 md:top-60'
            />
            <div className='w-full h-full max-h-[80vh] lg:max-h-full overflow-hidden'>
              <Image
                placeholder='blur'
                src={banner}
                alt='banner background'
                className='relative lg:-top-20'
              />
            </div>
            <Image
              placeholder='blur'
              src={largeStar}
              alt='large start'
              className='absolute top-0 right-0 z-10'
            />
          </div>
        </div>
      </div>
      <Brands />
    </section>
  );
};

export default Banner;

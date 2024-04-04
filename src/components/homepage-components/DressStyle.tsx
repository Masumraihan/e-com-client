import Image from "next/image";
import image1 from "../../../public/dress-style/image1.png";
import image2 from "../../../public/dress-style/image2.png";
import image3 from "../../../public/dress-style/image3.png";
import image4 from "../../../public/dress-style/image4.png";
import victor from "../../../public/victors/Vector.png";
const DressStyle = () => {
  return (
    <>
      <div className='mt-10 container bg-[#f0f0f0] py-10 lg:p-[64px] rounded-3xl relative'>
        <Image
          placeholder='blur'
          src={victor}
          alt='victor'
          className='absolute top-0 transform translate-x-1/2 right-1/2'
        />
        <h2 className='mb-2 text-3xl font-bold text-center md:text-3xl'>Browse By Dress Style</h2>
        <div className='grid grid-cols-1 gap-5 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 lg:w-10/12'>
          <div className='overflow-hidden h-[170px] md:h-[200px] rounded-xl relative bg-white'>
            <h3 className='absolute min-h-full text-3xl font-bold top-5 left-5'>Category</h3>
            <Image
              placeholder='blur'
              src={image1}
              alt='dress style'
              className='ml-auto md:size-auto md:h-full'
            />
          </div>
          <div className=' lg:col-span-2 h-[170px] md:h-[200px] overflow-hidden min-h-full rounded-xl relative bg-white'>
            <h3 className='absolute text-3xl font-bold top-5 left-5'>Category</h3>
            <Image
              placeholder='blur'
              src={image2}
              alt='dress style'
              className='ml-auto md:size-auto md:h-full'
            />
          </div>
          <div className='lg:col-span-2 h-[170px] md:h-[200px] overflow-hidden bg-white rounded-xl relative'>
            <h3 className='absolute text-3xl font-bold top-5 left-5'>Category</h3>
            <Image
              placeholder='blur'
              src={image3}
              alt='dress style'
              className='ml-auto md:size-auto md:h-full'
            />
          </div>
          <div className='overflow-hidden h-[170px] md:h-[200px] lg:min-h-full rounded-xl relative bg-white'>
            <h3 className='absolute text-3xl font-bold top-5 left-5'>Category</h3>
            <Image
              placeholder='blur'
              src={image4}
              alt='dress style'
              className='ml-auto md:size-auto md:h-full'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DressStyle;

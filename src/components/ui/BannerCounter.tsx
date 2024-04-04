"use client";

import CountUP, { CountUpProps } from "react-countup";

type TBannerCounter = {
  id: number;
  count: number;
  label: string;
};
const BannerCounter = () => {
  const counterData: TBannerCounter[] = [
    {
      id: 1,
      count: 200,
      label: "International Brands",
    },
    {
      id: 2,
      count: 1500,
      label: "International Brands",
    },
    {
      id: 3,
      count: 3200,
      label: "International Brands",
    },
  ];

  return (
    <div className='grid grid-cols-2 gap-4 px-4 pt-4 md:px-0 md:grid-cols-3'>
      <>
        {counterData.map((data) => (
          <div key={data.id} className='md:space-y-2 last:col-span-2 last:text-center md:last:col-span-1'>
            <div className='text-3xl font-bold md:text-5xl'>
              <CountUP start={0} duration={3} end={data.count} />
            </div>
            <p className='text-sm md:text-lg text-lightGray'>{data.label}</p>
          </div>
        ))}
      </>
    </div>
  );
};

export default BannerCounter;

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RangeSlider } from "../ui/RangSlider";

const PriceRang = () => {
  const [range, setRange] = useState([0, 0]);
  const router = useRouter();

  useEffect(() => {
    if (range[0] && range[1]) {
      router.push(`?minPrice=${range[0]}&maxPrice=${range[1]}`);
    }
  }, [range]);

  return (
    <div className='w-full'>
      <h2 className='mb-4 text-xl font-bold'>Price</h2>
      <RangeSlider
        min={0}
        max={40000}
        minStepsBetweenThumbs={1}
        step={1}
        onValueChange={(value) => setRange(value)}
      />
    </div>
  );
};

export default PriceRang;

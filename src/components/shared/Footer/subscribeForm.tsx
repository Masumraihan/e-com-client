import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SubscribeFrom = () => {
  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input
        type='email'
        placeholder='Email'
        className='focus:!ring-[#FF8B13] bg-white dark:text-white'
      />
      <Button type='submit'>Subscribe</Button>
    </div>
  );
};

export default SubscribeFrom;

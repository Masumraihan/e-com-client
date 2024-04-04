import { SlidersHorizontal } from "lucide-react";
import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useState } from "react";
import AddReviewModal from "./AddReviewModal";

const ReviewFilter = () => {
  const [value, setValue] = useState("Latest");
  return (
    <div className='flex flex-col items-center justify-between w-full gap-4 md:gap-2 md:flex-row'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <h1 className='w-full text-sm font-bold md:text-2xl'>
          All Reviews <span className='text-sm font-medium md:text-base text-lightGray'>(5)</span>
        </h1>
        <div className='flex items-center w-full gap-2 md:hidden '>
          <Button variant='outline' size='icon' className='bg-[#F0F0F0] rounded-full size-20 '>
            <SlidersHorizontal size={20} />
          </Button>
          <>
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger className='w-[140px] rounded-full bg-[#F0F0F0] lg:px-4 lg:py-5'>
                <SelectValue placeholder={value} />
              </SelectTrigger>
              <SelectContent className='bg-white'>
                <SelectItem value='Latest'>Latest</SelectItem>
                <SelectItem value='Rating'>Rating</SelectItem>
                <SelectItem value='Best'>Best</SelectItem>
              </SelectContent>
            </Select>
          </>
        </div>
      </div>
      <div className='flex items-center w-full gap-2 md:w-auto'>
        <div className='items-center hidden w-full gap-2 md:flex'>
          <Button variant='outline' size='icon' className='bg-[#F0F0F0] rounded-full size-20 '>
            <SlidersHorizontal size={20} />
          </Button>
          <>
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger className='w-[140px] rounded-full bg-[#F0F0F0] lg:px-4 lg:py-5'>
                <SelectValue placeholder={value} />
              </SelectTrigger>
              <SelectContent className='bg-white'>
                <SelectItem value='Latest'>Latest</SelectItem>
                <SelectItem value='Rating'>Rating</SelectItem>
                <SelectItem value='Best'>Best</SelectItem>
              </SelectContent>
            </Select>
          </>
        </div>
        <AddReviewModal>
          <Button className='w-full bg-black rounded-full' size='lg'>
            Write a review
          </Button>
        </AddReviewModal>
      </div>
    </div>
  );
};

export default ReviewFilter;

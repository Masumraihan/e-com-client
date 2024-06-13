"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FilterProductMobile from "./FIlterProductMobile";
import { SlidersHorizontal } from "lucide-react";
const SortingProduct = () => {
  return (
    <div className='flex items-center justify-between w-full lg:justify-end'>
      <div className='flex items-center space-x-2'>
        <Select>
          <SelectTrigger className='w-fit min-w-24'>
            <SelectValue placeholder='Sort By' />
          </SelectTrigger>
          <SelectContent className='bg-white dark:bg-dark'>
            <SelectGroup>
              <SelectItem value='title'>Title</SelectItem>
              <SelectItem value='price'>Price</SelectItem>
              <SelectItem value='rating'>Rating</SelectItem>
              <SelectItem value='discount'>Discount</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-fit min-w-24'>
            <SelectValue placeholder='Orders By' />
          </SelectTrigger>
          <SelectContent className='bg-white dark:bg-dark'>
            <SelectGroup>
              <SelectItem value='asc'>ASC</SelectItem>
              <SelectItem value='dsc'>Dsc</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='lg:hidden'>
        <FilterProductMobile trigger={<SlidersHorizontal size={20} />} />
      </div>
    </div>
  );
};

export default SortingProduct;

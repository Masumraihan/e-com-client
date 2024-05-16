"use client";
import { TSubCategory } from "@/app/types";

const SubCategoryButton = ({ subCategory }: { subCategory: TSubCategory }) => {
  return <p className='px-2 py-1 cursor-pointer'>{subCategory.subCategory}</p>;
};

export default SubCategoryButton;

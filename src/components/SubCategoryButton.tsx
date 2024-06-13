"use client";
import { TSubCategory } from "@/app/types";
import { useRouter } from "next/navigation";

const SubCategoryButton = ({ subCategory }: { subCategory: TSubCategory }) => {
  const router = useRouter();
  const handleClick = () => {
    // get current url search params
    const urlSearchParams = new URLSearchParams(window.location.search);
    // concat new search params
    urlSearchParams.set("subCategory", subCategory._id);
    // set new search params
    router.push(`?${urlSearchParams.toString()}`);
  };
  return (
    <p onClick={handleClick} className='px-2 py-1 cursor-pointer'>
      {subCategory.subCategory}
    </p>
  );
};

export default SubCategoryButton;

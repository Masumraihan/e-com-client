import { TCategory, TSubCategory } from "@/app/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import SubCategoryButton from "../SubCategoryButton";
const FilterProduct = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/category/get-all-categories`);
  const data = await res.json();
  const categories = data?.data;

  const subcategoryRes = await fetch(
    `${process.env.NEXT_BASE_URL}/sub-category/get-all-sub-categories`,
  );

  const subCategoryData = await subcategoryRes.json();
  const subCategory = await subCategoryData?.data;

  return (
    <div>
      <Accordion type='single' collapsible className='w-full'>
        {categories?.map((category: TCategory) => (
          <AccordionItem key={category._id} value={category._id} className='w-full last:border-b-0'>
            <AccordionTrigger
              icon={<ChevronRight className='w-4 h-4 transition-transform duration-200' />}
              className='[&[data-state=open]>svg]:rotate-90 hover:no-underline'
            >
              <span className='px-2'> {category.category}</span>
            </AccordionTrigger>
            <AccordionContent>
              {subCategory?.map((subCategory: TSubCategory) => {
                if (subCategory.category._id === category._id) {
                  return <SubCategoryButton key={subCategory._id} subCategory={subCategory} />;
                }
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterProduct;

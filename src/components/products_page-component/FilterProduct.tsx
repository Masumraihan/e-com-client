import { TCategory, TSubCategory } from "@/app/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import SubCategoryButton from "../SubCategoryButton";

type TFilterProductProps = {
  categories: TCategory[];
  subCategory: TSubCategory[];
};
const FilterProduct = async ({ categories, subCategory }: TFilterProductProps) => {
  //const [range, setRange] = useState([0, 24]);

  //const handleRangeChange = (value: SetStateAction<number[]>) => {
  //  setRange(value);
  //};

  return (
    <div className='space-y-4'>
      <Accordion type='single' collapsible className='w-full'>
        {categories?.map((category: TCategory) => (
          <AccordionItem key={category._id} value={category._id} className='w-full border-b-0'>
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

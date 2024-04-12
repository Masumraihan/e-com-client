import { TCategory } from "@/app/types";
import CategoryAction from "./CategoryAction";

const SingleCategory = ({ category }: { category: TCategory }) => {
  return (
    <div className='relative px-3 py-4 border border-orange-100 rounded-lg shadow-xl bg-orange-50'>
      <div className='flex items-center justify-between'>
        <p>{category.category}</p>
        <CategoryAction id={category._id} />
      </div>
      <div className='absolute bottom-0 right-0 w-full h-2 bg-orange-500 rounded-b-lg'></div>
    </div>
  );
};

export default SingleCategory;

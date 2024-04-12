import { TCategory } from "@/app/types";
import SingleCategory from "./SingleCategory";

const AllCategories = ({ categories }: { categories: TCategory[] }) => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6'>
      {categories.length ? (
        categories.map((category: TCategory) => (
          <SingleCategory key={category._id} category={category} />
        ))
      ) : (
        <div className='text-4xl text-center'>No categories found</div>
      )}
    </div>
  );
};

export default AllCategories;

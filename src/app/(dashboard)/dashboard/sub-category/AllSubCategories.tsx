import { TSubCategory } from "@/app/types";
import SingleSubCategory from "./SingleSubCategory";

const AllSubCategories = ({ subCategories }: { subCategories: TSubCategory[] }) => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6'>
      {subCategories.length ? (
        subCategories.map((category: TSubCategory) => (
          <SingleSubCategory key={category._id} subCategory={category} />
        ))
      ) : (
        <div className='text-4xl text-center'>No sub categories found</div>
      )}
    </div>
  );
};

export default AllSubCategories;

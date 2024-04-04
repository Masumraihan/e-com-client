import { ScanLine } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import category1 from "../../../public/Products/image 10 (1).png";
import category2 from "../../../public/Products/image 10.png";
import {
  default as category11,
  default as category12,
} from "../../../public/Category/category9.png";
import category3 from "../../../public/Products/image 7 (1).png";
import category4 from "../../../public/Products/image 7 (2).png";
import category5 from "../../../public/Products/image 7.png";
import category6 from "../../../public/Products/image 8 (1).png";
import category7 from "../../../public/Products/image 8.png";
import category9 from "../../../public/Products/image 9.png";

type TCategory = {
  id: number;
  category: string;
  title: string;
  image: string | StaticImageData;
};

const Categories = () => {
  const categories: TCategory[] = [
    {
      id: 4,
      category: "Category",
      title: "Graphic Prints",
      image: category1,
    },
    {
      id: 1,
      category: "Category",
      title: "Basic Essentials",
      image: category2,
    },
    {
      id: 2,
      category: "Category",
      title: "Sports Collection",
      image: category3,
    },
    {
      id: 3,
      category: "Category",
      title: "Fashion Trends",
      image: category4,
    },
    {
      id: 5,
      category: "Category",
      title: "Custom Tees",
      image: category5,
    },
    //{
    //  id: 6,
    //  category: "Category",
    //  title: "T-Shirt",
    //  image: category6,
    //},
    //{
    //  id: 7,
    //  category: "Category",
    //  title: "T-Shirt",
    //  image: category7,
    //},
    //{
    //  id: 8,
    //  category: "Category",
    //  title: "T-Shirt",
    //  image: category8,
    //},
    //{
    //  id: 9,
    //  category: "Category",
    //  title: "T-Shirt",
    //  image: category9,
    //},
    //{
    //  id: 10,
    //  category: "Category",
    //  title: "T-Shirt",
    //  image: category7,
    //},
    //{
    //  id: 11,
    //  category: "Category",
    //  title: "T-Shirt",
    //  image: category5,
    //},
    //{
    //  id: 12,
    //  category: "Category",
    //  title: "T-Shirt",
    //  image: category4,
    //},
  ];

  return (
    <div className='container mx-auto mt-10 relative'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <h2 className='text-xl md:text-3xl font-bold mb-2'>Popular Categories</h2>
        <p className='cursor-pointer text-underline dark:after:bg-white '>View all Categories</p>
      </div>
      <hr />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4'>
        {categories.map((category) => (
          <div
            key={category.id}
            className='group rounded-lg bg-lightPink p-6 flex items-end justify-center text-white cursor-pointer relative h-[200px] md:h-[280px] md:w-[250px] overflow-hidden '
          >
            {/*<div className='space-y-4 hidden group-first:block group-last:block'>
              <h4 className='text-xl md:text-2xl text-slate-600'>{category.category}</h4>
              <h3 className='text-4xl text-slate-700 font-extrabold'>{category.title}</h3>
              <Button className='flex items-center gap-3 mt-8'>
                <span>Shop Now</span>
                <ArrowRight
                  size={20}
                  className='group-hover:transform group-hover:translate-x-1 transition-transform duration-500'
                />
              </Button>
            </div>*/}
            {/*<ScanLine className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 delay-300 z-40' />*/}

            <div className=' bg-gradient-to-t from-black/60 to-transparent absolute top-0 w-full h-full inset-0 rounded-lg z-10' />
            <div className='flex flex-col justify-center items-center'>
              <Image
                placeholder='blur'
                src={category.image}
                alt={category.title}
                className='rounded-lg transition-all group-hover:scale-110 duration-500 absolute inset-0 top-0 left-0 w-full h-full'
              />
            </div>
            <p className='text-lg lg:text-xl font-bold transition-all duration-500 z-10 leading-5'>
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

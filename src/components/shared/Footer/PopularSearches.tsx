import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const popularSearches: string[] = [
  "Plain",
  "Graphic",
  "V-neck",
  "Crewneck",
  "Black",
  "Vintage",
  "Longsleeve",
  "Striped",
  "Logo",
  "Polo",
  "Oversized",
  "Sports",
  "TieDye",
  "Customized",
  "Band",
  "Floral",
  "Neon",
  "Crop",
  "Linen",
  "Organic",
  "Plain",
  "Graphic",
  "V-neck",
  "Crewneck",
  "Black",
  "Vintage",
  "Longsleeve",
  "Striped",
  "Logo",
  "Polo",
  "Oversized",
  "Sports",
  "TieDye",
  "Customized",
  "Band",
  "Floral",
  "Neon",
  "Crop",
  "Linen",
  "Crewneck",
  "Black",
  "Vintage",
  "Longsleeve",
  "Striped",
  "Logo",
  "Polo",
  "Oversized",
  "Sports",
  "TieDye",
  "Customized",
  "Band",
  "Floral",
  "Neon",
  "Crop",
  "Linen",
];

const PopularSearches = () => {
  return (
    <div className='h-64 py-6 md:h-36'>
      <h3 className='text-lg font-bold'>Popular Search Items</h3>
      <div className='flex flex-wrap items-center h-5 text-sm gap-x-3'>
        {popularSearches.map((searchItem, i) => (
          <div key={i} className='flex h-5'>
            <p className='text-sm' key={searchItem}>
              {searchItem}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;

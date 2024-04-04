import { MoveRight } from "lucide-react";
import { Badge } from "../ui/badge";

const ProductDetails = () => {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h5 className='font-bold'>Description</h5>
        <p className='text-sm'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ut asperiores ipsum
          minus. Quis ex odit at voluptatum. Ratione libero quia blanditiis illo? Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Perferendis ut asperiores ipsum minus. Quis ex
          odit at voluptatum. Ratione libero quia blanditiis illo? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perferendis ut asperiores ipsum minus. Quis ex odit at
          voluptatum. Ratione libero quia blanditiis illo?
        </p>
      </div>
      <div className='grid grid-cols-2 max-w-[250px]'>
        <div className='space-y-3'>
          <h5 className='font-semibold py-[0.5px]'>Name</h5>
          <h5 className='font-semibold py-[0.5px]'>Brand</h5>
          <h5 className='font-semibold py-[0.5px]'>Size</h5>
          <h5 className='font-semibold py-[0.5px]'>Gender</h5>
          <h5 className='font-semibold py-[0.5px]'>Color</h5>
        </div>
        <div className='flex flex-col gap-3 w-fit'>
          <>
            <Badge className='text-sm' variant={"outline"}>
              T Shirt
            </Badge>
            <Badge className='text-sm' variant={"outline"}>
              XXL
            </Badge>
            <Badge className='text-sm ' variant={"outline"}>
              Brand Name
            </Badge>
            <Badge className='text-sm ' variant={"outline"}>
              Male
            </Badge>
            <Badge className='text-sm ' variant={"outline"}>
              Black
            </Badge>
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

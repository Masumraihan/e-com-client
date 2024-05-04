"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { toast } from "sonner";

const AddToCard = ({ productStock, productId }: { productStock: number; productId: string }) => {
  const [quantity, setQuantity] = useState(1);

  if (quantity > productStock) {
    toast.error("Out of stock", {
      action: {
        label: "Undo",
        onClick: () => setQuantity(productStock),
      },
      style: {
        color: "red",
      },
    });
    setQuantity(productStock);
  }
  if (quantity < 1) {
    toast.error("Minimum quantity is 1", {
      action: {
        label: "Undo",
        onClick: () => setQuantity(1),
      },
      style: {
        color: "red",
      },
    });

    setQuantity(1);
  }

  return (
    <div className='flex gap-5'>
      <div className='w-2/5 flex items-center bg-[#F0F0F0] px-4 py-2 rounded-full'>
        <Button variant='ghost' size='icon' onClick={() => setQuantity((pre) => pre - 1)}>
          <Minus />
        </Button>
        <Input
          className='text-center border-none shadow-none'
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={1}
          max={productStock}
        />
        <Button variant='ghost' size='icon' onClick={() => setQuantity((pre) => pre + 1)}>
          <Plus />
        </Button>
      </div>
      <div className='w-full'>
        <Button size='lg' className='w-full py-6 rounded-full'>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default AddToCard;

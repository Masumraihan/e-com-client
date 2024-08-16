"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { toast } from "sonner";
import { TProduct } from "@/app/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, TCartItem } from "@/redux/features/cart/cartSlice";

const AddToCard = ({ productStock, product }: { productStock: number; product: TProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

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

  const handleAddToCart = () => {
    if (cartItems.find((item: TCartItem) => item.product._id === product._id)) {
      toast.error("Product already in cart");
    } else {
      dispatch(addToCart({ product, quantity }));
    }
  };

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
        <Button onClick={handleAddToCart} size='lg' className='w-full py-6 rounded-full'>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default AddToCard;

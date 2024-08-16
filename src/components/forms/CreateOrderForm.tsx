"use client";

import CustomForm from "@/components/forms/CustomForm";
import CustomTextArea from "@/components/forms/CustomTextArea";
import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import { useCreateOrderMutation } from "@/redux/features/cart/cartApi";
import { TCartItem } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const createOrderSchema = z.object({
  address: z.string({ required_error: "Please provide your address" }),
  message: z.string().optional(),
});

const CreateOrderForm = () => {
  const [error, setError] = useState("");
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const auth = useAppSelector((state) => state.auth);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (total: number, item: TCartItem) => total + item.product.price * item.quantity,
    0,
  );
  const handleCreateOrder = async (data: z.infer<typeof createOrderSchema>) => {
    console.log(data);
    const payload = {
      products: cartItems.map((item: TCartItem) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      email: auth.user.email,
      address: data.address,
      amount: totalPrice,
    };

    try {
      const res = await createOrder(payload).unwrap();
      if (res.success) {
        router.push("/payment?orderId=" + res.data._id);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div className='w-full'>
      <CustomForm onSubmit={handleCreateOrder} resolver={zodResolver(createOrderSchema)}>
        <div className='py-2'>
          <FormInput type='text' placeholder='Address' name='address' label='Address' />
        </div>
        {error && <p className='text-sm text-red'>{error}</p>}
        <Button disabled={isLoading} type='submit' className='w-full'>
          Create Order
        </Button>
      </CustomForm>
    </div>
  );
};

export default CreateOrderForm;

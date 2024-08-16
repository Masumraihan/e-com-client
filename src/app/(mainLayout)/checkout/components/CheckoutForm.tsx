"use client";

import { useCreateOrderMutation } from "@/redux/features/cart/cartApi";
import { TCartItem } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";

const CheckoutForm = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const auth = useAppSelector((state) => state.cart.auth);
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const totalPrice = cartItems.reduce(
    (total: number, item: TCartItem) => total + item.product.price * item.quantity,
    0,
  );
  const handleCreateOrder = async () => {
    const dummy = {
      products: [
        {
          product: "6645844b69d794a1496f4d25",
          quantity: 2,
        },
      ],
      email: "mdmasumraihan1@gmail.com",
      address: "Natore",
      amount: 100,
    };

    const payload = {
      products: cartItems.map((item: TCartItem) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      email: auth.user?.email,
      address: "Natore",
      amount: totalPrice,
    };
  };
  return (
    <div>
      <h1>This is CheckoutForm component</h1>
    </div>
  );
};

export default CheckoutForm;

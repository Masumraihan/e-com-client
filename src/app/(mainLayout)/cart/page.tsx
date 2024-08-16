"use client";
import BreadCrumb from "@/components/breadcrumb";
import { CartItem } from "@/components/shared/CartDrawer";
import ProceedToCheckout from "@/components/shared/ProceedToCheckout";
import { TCartItem } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (total: number, item: TCartItem) => total + item.product.price * item.quantity,
    0,
  );

  const breadcrumb = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Cart",
      link: "/cart",
    },
  ];
  return (
    <div className='mt-10 md:mt-[80px] container space-y-5'>
      <div className='flex items-center justify-between'>
        <BreadCrumb items={breadcrumb} />
      </div>
      <h3 className='text-3xl font-bold'> Your Cart</h3>

      <div className='grid w-full gap-5 md:grid-cols-5'>
        <div className='p-5 border rounded-md md:col-span-3'>
          <div className='flex items-center pb-1 mb-2 border-b gap-x-3'>
            <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M5.535 7.677c.313-.98.687-2.023.926-2.677H17.46c.253.63.646 1.64.977 2.61c.166.487.312.953.416 1.347c.11.42.148.675.148.779c0 .18-.032.355-.09.515c-.06.161-.144.3-.243.412q-.152.166-.324.245a.8.8 0 0 1-.686 0a1 1 0 0 1-.324-.245q-.152-.169-.242-.412a1.5 1.5 0 0 1-.091-.515a1 1 0 1 0-2 0a1.4 1.4 0 0 1-.333.927a.9.9 0 0 1-.667.323a.9.9 0 0 1-.667-.323A1.4 1.4 0 0 1 13 9.736a1 1 0 1 0-2 0a1.4 1.4 0 0 1-.333.927a.9.9 0 0 1-.667.323a.9.9 0 0 1-.667-.323A1.4 1.4 0 0 1 9 9.74v-.008a1 1 0 0 0-2 .003v.008a1.5 1.5 0 0 1-.18.712a1.2 1.2 0 0 1-.146.209l-.007.007a1 1 0 0 1-.325.248a.8.8 0 0 1-.316.08a.97.97 0 0 1-.563-.256a1 1 0 0 1-.102-.103A1.52 1.52 0 0 1 5 9.724v-.006a3 3 0 0 1 .029-.207q.035-.198.11-.49c.098-.385.237-.85.395-1.344ZM4 12.112a3.52 3.52 0 0 1-1-2.376c0-.349.098-.8.202-1.208c.112-.441.264-.95.428-1.46c.327-1.024.715-2.104.958-2.767A1.985 1.985 0 0 1 6.456 3h11.01c.803 0 1.539.481 1.844 1.243c.258.641.67 1.697 1.019 2.72a22 22 0 0 1 .457 1.487c.114.433.214.903.214 1.286c0 .412-.072.821-.214 1.207A3.3 3.3 0 0 1 20 12.16V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2zM13 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z'
                clipRule='evenodd'
              />
            </svg>
            <h3 className='text-xl font-bold'>Cart Items</h3>
            <p className='ml-auto text-sm font-semibold'>({cartItems.length}) items</p>
          </div>
          <div className='space-y-3'>
            {cartItems.map((item: TCartItem) => (
              <CartItem key={item.product._id} item={item} />
            ))}
          </div>
        </div>
        <div className='p-5 space-y-3 border rounded-md md:col-span-2'>
          <h5>Cart Summery</h5>
          <p className='text-lg font-semibold text-right'>
            Total Price: <strong>${totalPrice}</strong>
          </p>
          <ProceedToCheckout />
        </div>
      </div>
    </div>
  );
};
export default CartPage;

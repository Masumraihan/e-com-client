"use client";

import { TCartItem } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { Button } from "../ui/button";
import LoginModal from "./LoginModal";
import CreateOrderModal from "./CreateOrderModal";
import { useState } from "react";

const ProceedToCheckout = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const auth = useAppSelector((state) => state.auth);

  return (
    <div>
      {auth.user ? (
        <>
          <CreateOrderModal open={open} setOpen={setOpen}>
            <Button size='lg' className='w-full gap-2' disabled={!cartItems.length}>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M22 6v12q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6M4 8h16V6H4zm0 4v6h16v-6zm0 6V6z'
                />
              </svg>
              Proceed to Checkout
            </Button>
          </CreateOrderModal>
        </>
      ) : (
        <LoginModal>
          <Button size='lg' className='w-full gap-2' disabled={!cartItems.length}>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M22 6v12q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6M4 8h16V6H4zm0 4v6h16v-6zm0 6V6z'
              />
            </svg>
            Proceed to Checkout
          </Button>
        </LoginModal>
      )}
    </div>
  );
};

export default ProceedToCheckout;

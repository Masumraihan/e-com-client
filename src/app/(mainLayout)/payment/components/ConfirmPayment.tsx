"use client";
import { useRouter } from "next/navigation";
import PaymentModal from "./PaymentModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { usePaymentInitMutation } from "@/redux/features/cart/cartApi";

const ConfirmPayment = ({ orderId }: { orderId: string }) => {
  const [error, setError] = useState("");
  const [paymentUrl, setPaymentUrl] = useState("");
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const [paymentInit, { isLoading }] = usePaymentInitMutation();

  const [open, setOpen] = useState(false);
  const router = useRouter();
  if (!orderId) router.push("/cart");

  const handlePaymentInit = async () => {
    try {
      const res = await paymentInit({ orderId }).unwrap();
      if (res.success) {
        setPaymentUrl(res.data.paymentUrl);
        setOpen(true);
      } else {
        setError(res.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const totalAmount = cartItems.reduce(
    (total: number, item: any) => total + item.product.price * item.quantity,
    0,
  );

  console.log(orderId);

  return (
    <div className='flex items-center justify-center'>
      <PaymentModal open={open} setOpen={setOpen} paymentUrl={paymentUrl}></PaymentModal>
      {error && <p className='text-sm text-red'>{error}</p>}
      <Button disabled={isLoading} onClick={handlePaymentInit}>
        Payment ${totalAmount}
      </Button>
    </div>
  );
};

export default ConfirmPayment;

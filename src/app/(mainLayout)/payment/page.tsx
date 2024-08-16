import BreadCrumb from "@/components/breadcrumb";
import React from "react";
import ConfirmPayment from "./components/ConfirmPayment";

const PaymentPage = ({ searchParams }: { searchParams: { orderId: string } }) => {
  const breadcrumb = [
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Payment",
      link: "/payment",
    },
  ];
  return (
    <div className='mt-10 md:mt-[80px] container space-y-5'>
      <div className='flex items-center justify-between'>
        <BreadCrumb items={breadcrumb} />
      </div>
      <h3 className='text-3xl font-bold'>Confirm Your Payment</h3>
      <p className='text-gray-500'>Please confirm your payment to complete your order</p>
      <ConfirmPayment orderId={searchParams.orderId} />
    </div>
  );
};

export default PaymentPage;

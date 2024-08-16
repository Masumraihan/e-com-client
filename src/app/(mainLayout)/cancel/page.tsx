"use client";

import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react"; // Importing an icon for the cancellation

import { Button } from "@/components/ui/button";

export default function PaymentCancel() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center p-4 text-center mt-[50px] md:mt-[80px]'>
      <XCircle className='text-yellow-500 w-[80px] h-[80px] mb-4' />
      <h2 className='text-3xl font-bold font-heading'>Payment Cancelled</h2>
      <p className='mt-2 text-lg'>
        Your payment process was cancelled. Please try again if you wish.
      </p>
      <div className='flex justify-center gap-2 mt-8'>
        <Button onClick={() => router.push("/cart")} variant='default' size='lg'>
          Go to Cart
        </Button>
        <Button onClick={() => router.push("/dashboard")} variant='ghost' size='lg'>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

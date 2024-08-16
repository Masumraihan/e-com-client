"use client";

import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react"; // Importing an icon for the check mark

import { Button } from "@/components/ui/button";

export default function PaymentSuccess() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center p-4 text-center mt-[50px] md:mt-[80px]'>
      <CheckCircle className='text-green w-[80px] h-[80px] mb-4' />
      <h2 className='text-3xl font-bold font-heading'>Payment Successful</h2>
      <p className='mt-2 text-lg'>Thank you! Your payment has been successfully processed.</p>
      <div className='flex justify-center gap-2 mt-8'>
        <Button onClick={() => router.push("/orders")} variant='default' size='lg'>
          View Orders
        </Button>
        <Button onClick={() => router.push("/dashboard")} variant='ghost' size='lg'>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

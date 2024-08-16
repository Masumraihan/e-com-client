"use client";

import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react"; // Importing an icon for the failure

import { Button } from "@/components/ui/button";

export default function PaymentFail() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center p-4 text-center mt-[50px] md:mt-[80px]'>
      <AlertCircle className='text-red w-[80px] h-[80px] mb-4' />
      <h2 className='text-3xl font-bold font-heading'>Payment Failed</h2>
      <p className='mt-2 text-lg'>
        Unfortunately, your payment could not be processed. Please try again.
      </p>
      <div className='flex justify-center gap-2 mt-8'>
        <Button onClick={() => router.push("/checkout")} variant='default' size='lg'>
          Retry Payment
        </Button>
        <Button onClick={() => router.push("/dashboard")} variant='ghost' size='lg'>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

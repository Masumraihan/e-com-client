"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='flex flex-col p-4 text-center  mt-[50px] md:mt-[80px]'>
      <span className='bg-gradient-to-b from-primary dark:from-darkSecondary to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent'>
        404
      </span>
      <h2 className='my-2 text-2xl font-bold font-heading'>Something&apos;s missing</h2>
      <p>Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
      <div className='flex justify-center gap-2 mt-8'>
        <Button onClick={() => router.back()} variant='default' size='lg'>
          Go back
        </Button>
        <Button onClick={() => router.push("/dashboard")} variant='ghost' size='lg'>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

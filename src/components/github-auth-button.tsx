"use client";

import { useRouter } from "next/navigation";
import google from "../../public/victors/google.png";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Image from "next/image";

export default function GoogleSignInButton() {
  const router = useRouter();

  return (
    <Button
      className='w-full'
      variant='outline'
      type='button'
      onClick={() => router.push("/dashboard")}
    >
      <Image src={google} alt='google' className='mr-2 size-5' />
      Continue with Google
    </Button>
  );
}

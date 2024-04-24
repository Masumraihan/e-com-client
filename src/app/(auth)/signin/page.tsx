import UserSignInForm from "@/components/forms/user-signin-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
};

export default function SignInPage() {
  return (
    <>
      <div className='relative flex-col items-center justify-center h-screen overflow-auto lg:max-w-none lg:px-0'>
        <Link href={"/"} className='absolute top-4 left-4'>
          <Button className='gap-2' variant='outline' size='sm'>
            <ChevronLeft /> <span className='hidden lg:inline-block'>Back to Home Page</span>
          </Button>
        </Link>
        <div className='flex items-center h-full p-4 lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>Sign in your account</h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email & password below to sign in
              </p>
            </div>
            <UserSignInForm />
            <div className='flex gap-2 px-4 text-sm text-center text-muted-foreground'>
              Don't have an account?
              <Link href={"/signup"} className='text-blue-600'>
                Create Account
              </Link>
            </div>
            <p className='px-8 text-sm text-center text-muted-foreground'>
              By clicking continue, you agree to our{" "}
              <Link href='/terms' className='underline underline-offset-4 hover:text-primary'>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href='/privacy' className='underline underline-offset-4 hover:text-primary'>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

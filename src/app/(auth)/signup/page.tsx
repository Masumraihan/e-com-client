import UserSignUpForm from "@/components/forms/user-signup-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className='relative flex-col items-center justify-center min-h-screen lg:overflow-hidden lg:max-w-none lg:px-0'>
      <Link href={"/"} className='absolute top-4 left-4'>
        <Button className='gap-2' variant='outline' size='sm'>
          <ChevronLeft /> <span className='hidden lg:inline-block'>Back to Home Page</span>
        </Button>
      </Link>
      <div className='flex items-center h-full p-4 border lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Sign up a account</h1>
            <p className='text-sm text-muted-foreground'>
              Enter your information below to create account
            </p>
          </div>
          <UserSignUpForm />
          <div className='flex px-4 text-sm text-center gap-x-2 text-muted-foreground'>
            Already have an account?
            <Link href={"/signin"} className='text-blue-600'>
              Login Account
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
  );
};

export default SignUpPage;

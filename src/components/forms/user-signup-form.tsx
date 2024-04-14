"use client";
import { Button } from "@/components/ui/button";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { TTokenUser, login } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import GoogleSignInButton from "../github-auth-button";
import CustomForm from "./CustomForm";
import FormInput from "./FormInput";

const formSchema = z.object({
  name: z
    .string({ required_error: "Enter a valid name" })
    .min(2, { message: "Enter a valid name" }),
  email: z
    .string({ required_error: "Enter a valid email address" })
    .email({ message: "Enter a valid email address" }),
  password: z
    .string({ required_error: "Password must be at least 6 characters" })
    .min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string({ required_error: "Retype your password" }).min(6, {
    message: "Retype your password",
  }),
  address: z.string({ required_error: "Enter your address" }).min(2, {
    message: "Enter your address",
  }),
});

type UserFormValue = z.infer<typeof formSchema>;
const UserSignUpForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: UserFormValue) => {
    setError("");
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setError("Passwords and confirm password do not match");
      setLoading(false);
      return;
    }
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        address: data.address,
      };
      const res = await register(userInfo).unwrap();
      if (res?.success) {
        router.push("/dashboard");
        const user = jwtDecode(res.data.accessToken) as TTokenUser;
        dispatch(login({ user, token: res.data.accessToken }));
        toast.success("Registration Successful");
      }
    } catch (error: any) {
      setError(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomForm className='space-y-2' onSubmit={onSubmit} resolver={zodResolver(formSchema)}>
        <FormInput
          loading={loading}
          type='text'
          label='Name'
          placeholder='Enter your name'
          name='name'
        />
        <FormInput
          loading={loading}
          type='email'
          label='Email'
          placeholder='Enter your email'
          name='email'
        />
        <FormInput
          loading={loading}
          type='password'
          label='Password'
          placeholder='Enter your password'
          name='password'
        />
        <FormInput
          loading={loading}
          type='password'
          label='Confirm Password'
          placeholder='Confirm your password'
          name='confirmPassword'
        />
        <FormInput
          loading={loading}
          type='text'
          label='Address'
          placeholder='Enter your address'
          name='address'
        />
        {error && <p className='text-sm text-red'>{error}</p>}
        <div className='pt-2'>
          <Button disabled={loading} className='w-full' type='submit'>
            Continue With Email
          </Button>
        </div>
      </CustomForm>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='px-2 bg-background text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <GoogleSignInButton />
    </>
  );
};

export default UserSignUpForm;

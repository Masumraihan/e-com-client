"use client";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TTokenUser, login } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from "jwt-decode";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import * as z from "zod";
import GoogleSignInButton from "../github-auth-button";
import CustomForm from "./CustomForm";
import FormInput from "./FormInput";

const formSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(2, { message: "Email is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(2, { message: "Password is required" }),
});

type UserFormValue = z.infer<typeof formSchema>;

const UserSignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userLogin] = useLoginMutation();
  const dispatch = useAppDispatch();
  const params = useSearchParams();
  const onSubmit = async (data: UserFormValue) => {
    setError("");
    setLoading(true);
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await userLogin(userInfo).unwrap();
      if (res?.success) {
        const user = jwtDecode(res.data.accessToken) as TTokenUser;
        dispatch(login({ user, token: res.data.accessToken }));
        localStorage.setItem("token", res.data.accessToken);
        if (params && params?.get("redirectUrl")) {
          router.push(params?.get("redirectUrl")!);
        } else {
          router.push("/");
        }
      }
    } catch (error: any) {
      setError(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const defaultValues = {
    email: "mdmasumraihan1@gmail.com",
    password: "superAdmin@123",
  };

  const handleCustomLogin = (loginType: "customer" | "admin") => {
    if (loginType === "customer") {
      onSubmit({
        email: "masum@gmail.com",
        password: "123456",
      });
    } else if (loginType === "admin") {
      onSubmit({
        email: "user2@gmail.com",
        password: "123456",
      });
    }
  };

  return (
    <>
      <CustomForm
        className='space-y-2'
        onSubmit={onSubmit}
        resolver={zodResolver(formSchema)}
        defaultValues={defaultValues}
      >
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
        {error && <p className='text-sm text-red'>{error}</p>}
        <div className='w-full pt-2'>
          <Button disabled={loading} className='w-full ml-auto' type='submit'>
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
      <Button onClick={() => handleCustomLogin("admin")}>Login as a Admin</Button>
      <Button onClick={() => handleCustomLogin("customer")}>Login as a Customer</Button>
      <GoogleSignInButton />
    </>
  );
};
export default UserSignInForm;

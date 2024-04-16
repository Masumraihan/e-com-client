"use client";
import { TTokenUser, logout } from "@/redux/features/auth/authSlice";
import { Button } from "./button";
import { UserLogout } from "@/app/utils/logout";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MobileLoginLogoutButton = ({ user }: { user: TTokenUser | null | undefined }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    console.log("logout");
    const response = await UserLogout();
    console.log(response);
    if (response?.success) {
      dispatch(logout());
      console.log("logout succesffully");
      router.push("/signin");
    }
  };

  return (
    <>
      {user ? (
        <p onClick={handleLogout} className='w-full'>
          <Button className='w-full'>Logout</Button>
        </p>
      ) : (
        <Link href='/signin'>
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
};

export default MobileLoginLogoutButton;

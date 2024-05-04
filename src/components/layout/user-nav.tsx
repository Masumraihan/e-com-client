"use client";
import { UserLogout } from "@/app/utils/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { User, UserCog } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icons } from "../icons";
import { AlertModal } from "../modal/alert-modal";
//import { useSession, signIn, signOut } from "next-auth/react";
export function UserNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);
  const onConfirm = async () => {
    const response = await UserLogout();
    if (response?.success) {
      dispatch(logout());
      setOpen(false);
      router.push("/signin");
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onConfirm={onConfirm}
        onClose={() => setOpen(false)}
        description='You want to logout?'
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <User className='w-5 h-5 cursor-pointer text-primary' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 bg-white dark:bg-dark' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>{user?.name}</p>
              <p className='text-xs leading-none text-muted-foreground'>{user?.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className='cursor-pointer hover:bg-gray-100 dark:hover:bg-primary'>
              Update Profile
              <DropdownMenuShortcut>
                <UserCog className='w-5 h-5 cursor-pointer text-primary' />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className='border border-t-primary' />
          <DropdownMenuItem
            className='cursor-pointer hover:bg-gray-100 dark:hover:bg-primary'
            onClick={() => setOpen(true)}
          >
            Log out
            <DropdownMenuShortcut>
              <Icons.login size={18} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

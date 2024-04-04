"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";
//import { useSession, signIn, signOut } from "next-auth/react";
export function UserNav() {
  //const { data: session } = useSession();
  const router = useRouter();

  const user = useAppSelector(useCurrentUser);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative w-8 h-8 rounded-full'>
          <Avatar className='hover:bg-opacity-95'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
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
            Profile
            <DropdownMenuShortcut>
              <Icons.user size={18} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer hover:bg-gray-100 dark:hover:bg-primary'>
            Crete User
            <DropdownMenuShortcut>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-user-round-plus'
              >
                <path d='M2 21a8 8 0 0 1 13.292-6' />
                <circle cx='10' cy='8' r='5' />
                <path d='M19 16v6' />
                <path d='M22 19h-6' />
              </svg>
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer hover:bg-gray-100 dark:hover:bg-primary'>
            Create Admin
            <DropdownMenuShortcut>
              <Icons.addAdmin size={18} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className='border border-t-primary' />
        <DropdownMenuItem
          className='cursor-pointer hover:bg-gray-100 dark:hover:bg-primary'
          onClick={() => router.push("/signin")}
        >
          Log out
          <DropdownMenuShortcut>
            <Icons.login size={18} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

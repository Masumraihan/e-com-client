"use client";

import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { NavItem } from "@/app/types/global";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { AlertModal } from "./modal/alert-modal";
import { UserLogout } from "@/app/utils/logout";

interface DashboardNavProps {
  items: NavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const onConfirm = async () => {
    const response = await UserLogout();
    if (response?.success) {
      dispatch(logout());
      setOpen(false);
      localStorage.removeItem("token");
      router.push("/signin");
    }
  };

  if (!items?.length) {
    return null;
  }



  return (
    <nav className='grid items-start gap-2'>
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className='w-4 h-4 mr-2' />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
      <div className='cursor-pointer' onClick={() => setOpen(true)}>
        <span
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          )}
        >
          <LogOut className='w-4 h-4 mr-2' />
          <span>Logout</span>
        </span>
      </div>
      <AlertModal
        isOpen={open}
        onConfirm={onConfirm}
        onClose={() => setOpen(false)}
        description='You want to logout?'
      />
    </nav>
  );
}

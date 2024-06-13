"use client";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log({ token }, "layout");
    if (!token) {
      router.push("/signin");
    }
  }, []);
  return (
    <>
      <Header />
      <div className='flex h-full overflow-hidden'>
        <Sidebar className='hidden w-1/6 border md:block' />
        <main className='flex-1 pt-10 overflow-x-hidden overflow-y-auto'>{children}</main>
      </div>
    </>
  );
}

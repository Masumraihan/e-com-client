import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='flex h-full overflow-hidden'>
        <Sidebar className='hidden w-1/6 md:block' />
        <main className='flex-1 pt-10 overflow-x-hidden overflow-y-auto'>{children}</main>
      </div>
    </>
  );
}

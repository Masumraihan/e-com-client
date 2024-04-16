import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle/theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";

export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 z-20 border-b supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur'>
      <nav className='flex items-center justify-between px-4 h-14'>
        <div className='hidden md:block'>
          <>
            <Link href='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-circle-chevron-left'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m14 16-4-4 4-4' />
              </svg>
            </Link>
          </>
        </div>
        <div className={cn("block sm:!hidden")}>
          <MobileSidebar />
        </div>

        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <UserNav />
        </div>
      </nav>
    </div>
  );
}

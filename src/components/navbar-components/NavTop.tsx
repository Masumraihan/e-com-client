"use client";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomTooltip from "../shared/CustomTooltip";
import { TCategory } from "../shared/Navbar/navbar.interface";
import MobileNav from "./MobileNav";

const categories = [
  "Plain",
  "Graphic",
  "V-neck",
  "Crewneck",
  "Black",
  "Vintage",
  "Longsleeve",
  "Striped",
  "Logo",
  "Polo",
  "Oversized",
  "Sports",
  "TieDye",
  "Customized",
  "Band",
  "Floral",
  "Neon",
  "Crop",
  "Linen",
  "Organic",
] as const;

const ProductCategories: TCategory[] = [
  {
    title: "Men",
    href: "/men",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Women",
    href: "/women",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Kids",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Top",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "New",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Membership",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavTop = () => {
  const pathname = usePathname();
  return (
    <>
      {/*{pathname?.split("/")?.includes("dashboard") || pathname?.split("/")?.includes("signin") ? (
        ""
      ) : (
        <div className='container flex items-center justify-between w-full py-2 mx-auto'>
          <div className='lg:hidden'>
            <MobileNav categories={ProductCategories} />
          </div>
          <h3 className='text-2xl'>Logo</h3>
          <div className='hidden lg:w-[600px] border border-dark/40 dark:border-white/40 px-4 rounded-3xl py-1 lg:flex items-center'>
            <Select>
              <SelectTrigger className='lg:w-[200px] border-none shadow-none focus:ring-0'>
                <SelectValue placeholder='Select Category' className='w-full' />
              </SelectTrigger>
              <SelectContent className='overflow-y-auto bg-white dark:bg-darkSecondary max-h-60'>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      className='transition-colors duration-150 cursor-pointer hover:bg-black hover:text-white'
                      value={category}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className='flex items-center w-full lg:max-w-[400px]'>
              <Input
                type='search'
                name='search'
                id='search'
                placeholder='Search Product'
                className='border-none shadow-none rounded-2xl focus:ring-white dark:focus:ring-dark'
              />
            </div>
            <Search size={30} />
          </div>
          <div>
            <ul className='flex items-center gap-5 '>
              <li className='hidden lg:inline-block'>
                <>
                  <CustomTooltip tooltip='Bookmarked'>
                    <Heart className='w-5 h-5' />
                  </CustomTooltip>
                </>
              </li>
              <li className='hidden lg:inline-block'>
                <>
                  <CustomTooltip tooltip='Shopping Cart'>
                    <ShoppingCart className='w-5 h-5' />
                  </CustomTooltip>
                </>
              </li>
              <li>
                <Button className='hover:bg-primary/90 dark:text-white'>
                  <Link href='/signin'>Login</Link>
                </Button>
              </li>
              <li className='relative right-0 lg:static'>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}*/}
    </>
  );
};

export default NavTop;

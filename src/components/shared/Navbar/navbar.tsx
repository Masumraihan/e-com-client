"use client";

import MobileNav from "@/components/navbar-components/MobileNav";
import MobileNavigation from "@/components/navbar-components/MobileNavigation";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListItem } from "../../navbar-components/ListItem";
import CustomTooltip from "../CustomTooltip";
import { TCategory } from "./navbar.interface";
import { Button } from "@/components/ui/button";
import NavTopPopup from "@/components/navbar-components/NavTopPopup";
import { useAppSelector } from "@/redux/hooks";
import { TTokenUser, useCurrentUser } from "@/redux/features/auth/authSlice";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { useEffect, useState } from "react";
import { userRole } from "@/constants/global";

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
const Navbar = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<TTokenUser | null>(null);
  const currentUser = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    setUser(currentUser);
  }, []);

  return (
    <>
      {pathname?.split("/").includes("dashboard") ||
      pathname?.split("/").includes("signin") ||
      pathname?.split("/").includes("signup") ? (
        ""
      ) : (
        <div className='container flex items-center justify-between w-full py-4 mx-auto '>
          <div className='lg:hidden'>
            <MobileNav categories={ProductCategories} />
          </div>
          <Link href='/' className='text-3xl font-extrabold md:text-3xl text-primary'>
            E Com
          </Link>
          <div className='hidden lg:block'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <span className='text-base'>Shop</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                      {ProductCategories.map((category) => (
                        <ListItem key={category.title} title={category.title} href={category.href}>
                          {category.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/sale' legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <span className='text-base'> On Sale</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/arrivals' legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <span className='text-base'> New Arrivals</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/brands' legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <span className='text-base'>Brands</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {user?.role === userRole.admin || user?.role === userRole.superAdmin ? (
                  <NavigationMenuItem>
                    <Link href='/dashboard' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className='text-base'>Dashboard</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ) : null}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className='hidden bg-[#f2f0f1] lg:w-1/3 px-4 rounded-3xl py-1 lg:flex items-center '>
            <Search size={20} className='text-primary/40' />

            <div className='flex items-center w-full'>
              <Input
                type='search'
                name='search'
                id='search'
                placeholder='Search Product'
                className='border-none shadow-none outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 focus:ring-0 rounded-2xl placeholder:text-primary/40'
              />
            </div>
          </div>
          <div>
            <ul className='flex items-center gap-5'>
              <li className='hidden lg:inline-block'>
                <>
                  <CustomTooltip tooltip='Bookmarked'>
                    <Heart className='w-5 h-5 cursor-pointer text-primary' />
                  </CustomTooltip>
                </>
              </li>
              <li className='hidden lg:inline-block'>
                <>
                  <CustomTooltip tooltip='Shopping Cart'>
                    <ShoppingCart className='w-5 h-5 cursor-pointer text-primary' />
                  </CustomTooltip>
                </>
              </li>
              <li className='hidden lg:inline-block'>
                {user ? (
                  <CustomTooltip tooltip='Profile'>
                    <CustomTooltip tooltip={user.name}>
                      <User className='w-5 h-5 cursor-pointer text-primary' />
                    </CustomTooltip>
                  </CustomTooltip>
                ) : (
                  <Button className='hover:bg-primary/90 dark:text-white'>
                    <Link href='/signin'>Login</Link>
                  </Button>
                )}
              </li>
              <li className='lg:hidden'>
                <Button variant='ghost'>
                  <NavTopPopup>
                    <Search />
                  </NavTopPopup>
                </Button>
              </li>
              <li className='relative right-0 lg:static'>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}
      <MobileNavigation />
    </>
  );
};

export default Navbar;

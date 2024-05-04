"use client";

import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import MobileNav from "@/components/navbar-components/MobileNav";
import MobileNavigation from "@/components/navbar-components/MobileNavigation";
import NavTopPopup from "@/components/navbar-components/NavTopPopup";
import { Button } from "@/components/ui/button";
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
import { userRole } from "@/constants/global";
import { TTokenUser } from "@/redux/features/auth/authSlice";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useGetAllSubCategoriesQuery } from "@/redux/features/subCategory/subCategoryApi";
import { useAppSelector } from "@/redux/hooks";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ListItem } from "../../navbar-components/ListItem";
import CustomTooltip from "../CustomTooltip";
import { TCategory } from "@/app/types";
import { UserNav } from "@/components/layout/user-nav";

const Navbar = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<TTokenUser | null>(null);
  const currentUser = useAppSelector((state) => state.auth.user);
  const { data: subCategories, isLoading } = useGetAllSubCategoriesQuery(undefined);
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery(undefined);

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
            <MobileNav
              categories={categories?.data}
              subCategories={subCategories?.data}
              user={user}
            />
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
                    <ul className='grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[600px] '>
                      {!isLoadingCategories &&
                        categories?.data?.map((category: TCategory) => (
                          <li className='border-b cursor-pointer' key={category?.category}>
                            <ListItem title={category?.category} />
                          </li>
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
                      <UserNav />
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

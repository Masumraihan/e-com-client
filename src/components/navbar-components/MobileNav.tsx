import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TCategory } from "../shared/Navbar/navbar.interface";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const MobileNav = ({ categories }: { categories: TCategory[] }) => {
  const user = true;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='ml-auto'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='overflow-y-auto bg-white dark:bg-darkSecondary'>
        <SheetHeader className='pt-3'>
          <h1 className='text-3xl text-primary font-[900] text-start'>E Com</h1>
        </SheetHeader>
        <div className='pb-2 border-b-2 border-primary'></div>

        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='hover:no-underline'>Men</AccordionTrigger>
            <AccordionContent>Polo T-shirt</AccordionContent>
            <AccordionContent>Half T-shirt</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='hover:no-underline'>Women T-shirt</AccordionTrigger>
            <AccordionContent>Polo T-shirt</AccordionContent>
            <AccordionContent>Half T-shirt</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='hover:no-underline'>Kids</AccordionTrigger>
            <AccordionContent>Kids Jacket</AccordionContent>
            <AccordionContent>Kids Dresses</AccordionContent>
          </AccordionItem>
        </Accordion>

        {/*<NavigationMenu className='w-full mt-3 ml-auto overflow-y-auto'>
          <NavigationMenuList className='flex-col items-end justify-end '>
            <NavigationMenuItem>
              <CollapsibleMenu categoryName="Winterwear'23" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <CollapsibleMenu categoryName='Topwear' />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <CollapsibleMenu categoryName='Bottomwear' />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`font-bold pr-5 uppercase ${navigationMenuTriggerStyle()}`}
                >
                  Sneakers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <CollapsibleMenu categoryName='Accessories ' />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <CollapsibleMenu categoryName='Collections ' />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <CollapsibleMenu categoryName='Shop by Themes ' />
            </NavigationMenuItem>
            <NavigationMenuItem className=''>
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`font-bold pr-5 uppercase ${navigationMenuTriggerStyle()}`}
                >
                  Membership
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>*/}
        {/*<SheetFooter className='absolute left-0 w-full px-3 bottom-5'>
          <SheetClose className='w-full' asChild>
            <Button>Login</Button>
          </SheetClose>
        </SheetFooter>*/}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

import { TCategory, TSubCategory } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { TTokenUser } from "@/redux/features/auth/authSlice";
import MobileLoginLogoutButton from "../ui/MobileLoginLogoutButton";

type TMobileNavProps = {
  categories: TCategory[] | undefined;
  subCategories: TSubCategory[] | undefined;
  user: TTokenUser | null | undefined;
};

const MobileNav = ({ categories, subCategories, user }: TMobileNavProps) => {
  //const categories = categories?.map((subCategory: TSubCategory) => {
  //  return subCategory.category.category;
  //});

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
          {categories?.length &&
            categories?.map((category: TCategory) => (
              <AccordionItem value={category.category}>
                <AccordionTrigger className='hover:no-underline'>
                  {category.category}
                </AccordionTrigger>
                {subCategories
                  ?.filter(
                    (subCategory: TSubCategory) =>
                      subCategory.category.category === category.category,
                  )
                  .map((subCategory: TSubCategory) => (
                    <AccordionContent className='text-primary'>
                      <Link
                        href={`/category/${subCategory.category.category}/${subCategory.subCategory}`}
                        className='hover:no-underline'
                      >
                        {subCategory.subCategory}
                      </Link>
                    </AccordionContent>
                  ))}
              </AccordionItem>
            ))}
        </Accordion>

        <SheetFooter className='absolute left-0 w-full px-3 bottom-5'>
          <MobileLoginLogoutButton user={user} />
          {/*<SheetClose className='w-full' asChild>
          </SheetClose>*/}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

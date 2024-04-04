"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search } from "lucide-react";

const categories = [
  "Plain",
  "Graphic",
  "V-neck",
  "Crewneck",
  "Black",
  "Vintage",
  //"Longsleeve",
  //"Striped",
  //"Logo",
  //"Polo",
  //"Oversized",
  //"Sports",
  //"TieDye",
  //"Customized",
  //"Band",
  //"Floral",
  //"Neon",
  //"Crop",
  //"Linen",
  //"Organic",
] as const;

const NavTopPopup = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side='top' className='bg-white'>
          <div className='flex items-center px-4 py-1 mt-4 border border-dark/40 rounded-3xl'>
            <div className='flex items-center w-full lg:max-w-[400px]'>
              <Search size={20} className='text-primary/40' />
              <Input
                type='search'
                name='search'
                id='search'
                placeholder='Search Products'
                className='border-none shadow-none rounded-2xl focus:ring-white placeholder:text-primary/40'
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavTopPopup;

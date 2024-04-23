import { Home, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const MobileNavigation = () => {
  return (
    <div
      className='bg-white dark:bg-darkSecondary py-3 lg:hidden fixed z-[99999999999] w-full bottom-0 rounded-t-lg
    '
      style={{ boxShadow: "-10px -10px 30px -10px rgba(0,0,0,0.2)" }}
    >
      <div className='container flex justify-between mx-auto md:justify-around '>
        <Button variant='ghost'>
          <Link href='/'>
            <Home className='text-primary' />
          </Link>
        </Button>
        <Button variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart className='text-primary' />
          </Link>
        </Button>
        <Button variant='ghost'>
          <User className='text-primary' />
        </Button>
      </div>
    </div>
  );
};

export default MobileNavigation;

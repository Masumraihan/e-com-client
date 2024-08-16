"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubscribeFrom from "./subscribeForm";
import PopularSearches from "./PopularSearches";
import ContactLinks from "@/components/ui/ContactLinks";
import StayUpdate from "@/components/ui/StayUpdate";

const categories: string[] = [
  "Technology",
  "Food & Drink",
  "Travel",
  "Fashion",
  "Health & Fitness",
  "Art & Design",
  "Music",
  "Science",
  "Education",
  "Business",
  "Sports",
  "Nature & Environment",
  "Entertainment",
  "Books & Literature",
  "Home & Garden",
  "Automotive",
  "Pets",
  "Finance",
  "Gaming",
  "History",
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {(pathname &&
        (pathname?.split("/")?.includes("dashboard") ||
          pathname?.split("/")?.includes("signin"))) ||
      pathname?.split("/")?.includes("signup") ? (
        ""
      ) : (
        <footer className='w-full h-full sm:min-h-[327px] lg:max-h-[827px] flex flex-col items-center justify-center bg-lightPink dark:bg-darkSecondary mt-[300px] md:mt-72 lg:mt-40 py-10 relative pb-20 lg:pb-5'>
          <div className='absolute w-full transform -translate-x-1/2 translate-y-1/3 left-1/2 -top-1/2'>
            <StayUpdate />
          </div>
          <div className='container mx-auto'>
            {/*<div className='flex flex-col items-center justify-center py-10 gap-y-10'>
        <h2 className='max-w-2xl mx-auto text-4xl font-bold text-center'>
          Lorem ipsum dolor sit, amet consectetur adipi sicing
        </h2>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <Button size='lg' variant='primary'>
            About Us
          </Button>
          <Button size='lg' variant='primary'>
            Contact Us
          </Button>
        </div>
      </div>*/}

            <div className='grid items-start grid-cols-2 md:mt-14 lg:mt-40 md:grid-cols-3 lg:grid-cols-6 lg:gap-10'>
              <div className='flex flex-col justify-between mb-10 lg:col-span-2 lg:space-y-4 col-span-full lg:mb-0 md:flex-row lg:flex-col md:items-center lg:items-start'>
                <div className='flex flex-col justify-between'>
                  <span className='text-4xl font-bold'>Logo</span>
                  <p className='mt-5 text-justify'>
                    We have clothes that suits your style and which you're proud to wear. From women
                    to men.
                  </p>
                  <div className='mt-5'>
                    <ContactLinks />
                  </div>
                  {/*<div>
                    <Link
                      href='tel:+1 (7635) 547-12-97'
                      className='text-sm lg:text-lg block md:py-1 lg:py-2.5'
                    >
                      +1 (7635) 547-12-97
                    </Link>
                    <Link href='mailto:support@lift.agency' className='text-sm'>
                      support@lift.agency
                    </Link>
                  </div>*/}
                </div>
                {/*<div className='pt-7 md:pt-0'>
                  <SubscribeFrom />
                </div>*/}
              </div>
              <ul>
                <li className='mb-2 text-lg font-semibold uppercase lg:mb-4'>Categories</li>
                {categories?.slice(5, 10).map((category, i) => {
                  return (
                    <li key={i}>
                      <Link href='/'>
                        <Button variant='ghost' size='sm' className='px-0'>
                          <span className='text-black dark:text-white text-underline dark:after:bg-white'>
                            {category}
                          </span>
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                <li className='mb-2 text-lg font-semibold uppercase lg:mb-4'>Categories</li>
                {categories?.slice(0, 5).map((category, i) => {
                  return (
                    <li key={i}>
                      <Link href='/'>
                        <Button variant='ghost' size='sm' className='px-0'>
                          <span className='text-black dark:text-white text-underline dark:after:bg-white '>
                            {category}
                          </span>
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                <li className='mb-2 text-lg font-semibold uppercase lg:mb-4'>Categories</li>
                {categories?.slice(10, 15).map((category, i) => {
                  return (
                    <li key={i}>
                      <Link href='/'>
                        <Button variant='ghost' size='sm' className='px-0'>
                          <span className='text-black dark:text-white text-underline dark:after:bg-white '>
                            {category}
                          </span>
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className='lg:'>
                <li className='mb-2 text-lg font-semibold uppercase lg:mb-4'>Categories</li>
                {categories?.slice(10, 15).map((category, i) => {
                  return (
                    <li key={i}>
                      <Link href='/'>
                        <Button variant='ghost' size='sm' className='px-0'>
                          <span className='text-black dark:text-white text-underline dark:after:bg-white '>
                            {category}
                          </span>
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/*<PopularSearches />*/}
            <Separator className='my-5 border border-lightGray/20 dark:border-white' />
            <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
              <p className='text-sm text-lightGray'>© 2022 TShirtify. All rights reserved</p>
              <ul className='flex items-center gap-4'>
                <li>
                  <Link href='/'>Terms & conditions</Link>
                </li>
                <li>
                  <Link href='/'>Private Policies</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

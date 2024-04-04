import { MailOpen } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

const StayUpdate = () => {
  return (
    <div className='container mt-10'>
      <div className='bg-primary py-5 md:py-10 lg:py-[64px] px-4 md:px-[43px] rounded-2xl grid lg:grid-cols-2 gap-5'>
        <h1 className='text-4xl font-bold text-white md:text-[45px] lg:w-11/12 leading-tight'>
          Stay Upto Date About Our Latest Offers
        </h1>
        <div className='w-full ml-auto lg:w-2/3'>
          <div className='relative'>
            <MailOpen
              size={24}
              className='absolute -translate-y-1/2 text-lightGray top-1/2 left-5'
            />
            <Input
              placeholder={"Enter your email address"}
              color='white'
              className='w-full py-6 bg-white rounded-full pl-14'
              type='email'
            />
          </div>
          <Button className='w-full py-6 mt-3 text-base font-semibold text-black bg-white rounded-full'>
            Subscribe to NewsLetter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StayUpdate;

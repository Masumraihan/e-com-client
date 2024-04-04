"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { Check } from "lucide-react";
import { Button } from "./button";

const SelectSize = () => {
  const [size, setSize] = useState("size1");

  return (
    <Tabs>
      <TabsList className='gap-3'>
        <TabsTrigger onClick={() => setSize("size1")} value='size1' className={` rounded-full p-0`}>
          <Button
            className={`${
              size === "size1" ? "bg-black text-white" : "bg-[#F0F0F0] text-black"
            }  rounded-3xl`}
            size='lg'
          >
            size 1
          </Button>
        </TabsTrigger>
        <TabsTrigger onClick={() => setSize("size2")} value='size2' className={`rounded-full p-0`}>
          <Button
            className={`${
              size === "size2" ? "bg-black text-white" : "bg-[#F0F0F0] text-black"
            }  rounded-3xl`}
            size='lg'
          >
            size 2
          </Button>
        </TabsTrigger>
        <TabsTrigger onClick={() => setSize("size3")} value='size3' className={`rounded-full p-0`}>
          <Button
            className={`${
              size === "size3" ? "bg-black text-white" : "bg-[#F0F0F0] text-black"
            }  rounded-3xl`}
            size='lg'
          >
            size 3
          </Button>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default SelectSize;

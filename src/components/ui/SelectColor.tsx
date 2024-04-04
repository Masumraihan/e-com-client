"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { Check } from "lucide-react";

const SelectColor = () => {
  const [color, setColor] = useState("color1");

  return (
    <Tabs>
      <TabsList className='gap-3'>
        <TabsTrigger
          onClick={() => setColor("color1")}
          value='color1'
          className={`size-10 rounded-full bg-[#4F4631]`}
        >
          {<Check className={color === "color1" ? "opacity-100" : "opacity-0"} color='white' />}
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setColor("color2")}
          value='color2'
          className={`size-10 rounded-full bg-[#314F4A]`}
        >
          {<Check className={color === "color2" ? "opacity-100" : "opacity-0"} color='white' />}
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setColor("color3")}
          value='color3'
          className={`size-10 rounded-full bg-[#31344F]`}
        >
          {<Check className={color === "color3" ? "opacity-100" : "opacity-0"} color='white' />}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default SelectColor;

"use client";
import { FC, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const CollapsibleMenu: FC<{ categoryName: string }> = ({ categoryName }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className='w-full px-4 text-end font-bold flex items-center justify-between'>
        <CollapsibleTrigger asChild>
          <div className='w-full min-w-[230px] flex items-center justify-end gap-x-1 my-2'>
            <span className='uppercase text-sm'>{categoryName}</span>
            {!isOpen ? <ChevronDown className='h-4 w-4' /> : <ChevronUp className='h-4 w-4' />}
            <span className='sr-only'>Toggle</span>
          </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className='min-w-[230px]'>
        <div className='w-full px-4 my-2 text-end font-bold text-xs'>Women T-Shirt</div>
        <div className='w-full px-4 my-2 text-end font-bold text-xs'>Men T-Shirt</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleMenu;

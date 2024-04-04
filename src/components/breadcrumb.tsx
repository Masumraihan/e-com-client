import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type BreadCrumbType = {
  title: string;
  link: string;
};

type BreadCrumbPropsType = {
  items: BreadCrumbType[];
};

export default function BreadCrumb({ items }: BreadCrumbPropsType) {
  return (
    <div className='flex items-center mb-4 space-x-1 text-sm text-muted-foreground'>
      {items?.map((item: BreadCrumbType, index: number) => (
        <React.Fragment key={item.title}>
          <Link
            href={item.link}
            className={cn(
              "font-medium flex items-center gap-x-1",
              index === items.length - 1
                ? "text-foreground pointer-events-none"
                : "text-muted-foreground",
            )}
          >
            {item.title}
            {index !== items.length - 1 && <ChevronRightIcon className='w-4 h-4' />}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

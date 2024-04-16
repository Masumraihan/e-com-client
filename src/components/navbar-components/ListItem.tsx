import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "../ui/navigation-menu";
import React from "react";

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
        </a>
      </NavigationMenuLink>
    </>
  );
});
ListItem.displayName = "ListItem";

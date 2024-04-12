"use client";
import { TProduct } from "@/app/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
export const columns: ColumnDef<TProduct>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className='flex items-center gap-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='w-8 h-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='w-4 h-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='bg-white dark:bg-dark'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                className='cursor-pointer'
                onClick={() => navigator.clipboard.writeText(product._id)}
              >
                Copy Product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='cursor-pointer'>Update</DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

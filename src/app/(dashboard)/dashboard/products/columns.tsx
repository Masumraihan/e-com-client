"use client";
import { TProduct } from "@/app/types";
import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import revalidateTags from "@/lib/revalidateTags";
import { useDeleteProductMutation } from "@/redux/features/product/ProductApi";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
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
      const [open, setOpen] = useState(false);
      const [deleteProduct, { isLoading }] = useDeleteProductMutation();
      const onConfirm = async () => {
        try {
          const res = await deleteProduct(product._id).unwrap();
          if (res.success) {
            revalidateTags("products");
            toast.success(res.message);
            setOpen(false);
          }
        } catch (error: any) {
          toast.error(error.message || "Something went wrong");
        }
      };

      return (
        <div className='flex items-center gap-2'>
          <AlertModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onConfirm={onConfirm}
            loading={isLoading}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='w-8 h-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='w-4 h-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='bg-white dark:bg-dark'>
              <DropdownMenuItem
                className='cursor-pointer'
                onClick={() => navigator.clipboard.writeText(product._id)}
              >
                Copy Product ID
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                <Link href={`/dashboard/products/update-product?id=${product._id}`}>Update</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer' onClick={() => setOpen(true)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

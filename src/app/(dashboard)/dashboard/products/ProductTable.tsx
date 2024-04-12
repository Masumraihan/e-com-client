"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { TMeta } from "@/app/types";
import AddSearchParams from "@/components/AddSearchParams";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Suspense } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  meta?: TMeta;
}

const ProductsTable = <TData, TValue>({ columns, data, meta }: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div className='space-y-4'>
      <Suspense fallback='Loading...'>
        <AddSearchParams searchKey='searchTerm' placeholder='Search Products...' />
      </Suspense>
      {data.length ? (
        <div className='border rounded-md'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className='h-24 text-center'>
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className='flex items-center justify-end p-4 space-x-2'>
            {meta && meta.page === 1 ? (
              <Button variant='outline' size='sm' disabled>
                Previous
              </Button>
            ) : (
              <Link href={`/dashboard/products?page=${meta && meta.page - 1}`}>
                <Button variant='outline' size='sm'>
                  Previous
                </Button>
              </Link>
            )}
            {meta && meta.page * meta.limit < meta.total ? (
              <Link
                href={`/dashboard/products?page=${meta && meta.page + 1}`}
                className={meta && meta.page * meta.limit >= meta.total ? "cursor-not-allowed" : ""}
              >
                <Button variant='outline' size='sm'>
                  Next
                </Button>
              </Link>
            ) : (
              <Button variant='outline' size='sm' disabled>
                Next
              </Button>
            )}
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-500'>No products found</p>
      )}
    </div>
  );
};

export default ProductsTable;

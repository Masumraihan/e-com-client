"use client";
import { TQuery } from "@/app/types/global";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { useState } from "react";
import { columns } from "./columns";

export const UserClient = (): any => {
  const [query, setQuery] = useState<TQuery>([]);

  const { data: users, isLoading } = useGetAllUsersQuery(query);

  return (
    <>
      <div className='flex items-start justify-between'>
        <Heading
          title={`Users (${users?.data.length ?? 0})`}
          description='Manage users for your business'
        />
        <Select
          onValueChange={(value) => {
            if (!value) {
              return setQuery([]);
            }
            setQuery([{ name: "isBlocked", value }]);
          }}
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Filter' />
          </SelectTrigger>
          <SelectContent aria-hidden={false}>
            <SelectGroup>
              <SelectItem value=''>All</SelectItem>
              <SelectItem value='false'>Filter By Active</SelectItem>
              <SelectItem value='true'>Filter By Blocked</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      {isLoading ? (
        <p className='text-center'>loading....</p>
      ) : (
        <>
          {users && users?.data.length > 0 ? (
            <DataTable
              searchKey='name'
              columns={columns}
              data={users?.data}
              query={query}
              setQuery={setQuery}
            />
          ) : (
            <p className='text-center'>No data found</p>
          )}
        </>
      )}
    </>
  );
};

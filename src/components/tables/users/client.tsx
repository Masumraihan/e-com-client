"use client";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { TUser } from "@/constants/data";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TQuery } from "@/types";

export const UserClient = (): any => {
  const params = useParams();
  const router = useRouter();
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
          <DataTable
            searchKey='name'
            columns={columns}
            data={users?.data}
            query={query}
            setQuery={setQuery}
          />
        </>
      )}
    </>
  );
};

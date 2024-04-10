"use client";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { TUser } from "@/constants/data";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { columns } from "./columns";

export const UserClient = (): any => {
  const params = useParams();
  const router = useRouter();
  const [query, setQuery] = useState([]);

  const { data: users, isFetching } = useGetAllUsersQuery(query);

  return (
    <>
      <div className='flex items-start justify-between'>
        <Heading
          title={`Users (${users?.data.length ?? 0})`}
          description='Manage users for your business'
        />
        {/*<Button className='text-xs md:text-sm' onClick={() => router.push(`/dashboard`)}>
          <Plus className='w-4 h-4 mr-2' /> Add New
        </Button>*/}
      </div>
      <Separator />
      {isFetching ? (
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

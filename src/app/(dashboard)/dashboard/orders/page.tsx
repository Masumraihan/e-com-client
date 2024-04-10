import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/orders/columns";
import { UsersTable } from "@/components/tables/orders/users-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [{ title: "Orders", link: "/dashboard/orders" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
      (country ? `&search=${country}` : ""),
  );
  const ordersRes = await res.json();
  const totalUsers = ordersRes.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const orders: Employee[] = ordersRes.users;
  return (
    <>
      <div className='flex-1 p-4 pt-6 space-y-4 md:p-8'>
        <BreadCrumb items={breadcrumbItems} />

        <div className='flex items-start justify-between'>
          <Heading title={`Orders (${totalUsers})`} description='Manage orders for your business' />

          <Link href={"/dashboard"} className={cn(buttonVariants({ variant: "default" }))}>
            <Plus className='w-4 h-4 mr-2' /> Add New
          </Link>
        </div>
        <Separator />
        <UsersTable
          searchKey='country'
          pageNo={page}
          columns={columns}
          totalUsers={totalUsers}
          data={orders}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}

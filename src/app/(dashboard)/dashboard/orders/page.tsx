import { TOrder } from "@/app/types/OrderTypes";
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
  const res = await fetch(`${process.env.NEXT_BASE_URL}/order/get-all-orders`);
  const ordersRes = await res.json();

  const totalUsers = ordersRes.data?.data; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const orders: TOrder[] = ordersRes.data?.data;
  console.log(orders);
  return (
    <>
      <div className='flex-1 p-4 pt-6 space-y-4 md:p-8'>
        <BreadCrumb items={breadcrumbItems} />

        <Separator />
        <UsersTable
          searchKey='email'
          pageNo={page}
          columns={columns}
          totalUsers={orders.length}
          data={orders}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}

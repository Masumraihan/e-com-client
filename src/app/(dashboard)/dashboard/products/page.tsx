import { TProduct } from "@/app/types";
import BreadCrumb from "@/components/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import ProductsTable from "./ProductTable";
import { columns } from "./columns";

const breadcrumbItems = [{ title: "Products", link: "/dashboard/products" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const ProductsPage = async ({ searchParams }: paramsProps) => {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  const url = process.env.NEXT_BASE_URL;
  let products: TProduct[] = [];

  try {
    const res = await fetch(`${url}/product/get-all-products`);
    const data = await res.json();
    products = data.data;
  } catch (error) {
    console.log(error);
  }

  console.log(products);

  return (
    <>
      <div className='flex-1 p-4 pt-6 space-y-4 md:p-8'>
        <BreadCrumb items={breadcrumbItems} />

        <div className='flex items-start justify-between'>
          <Heading title={`Products (${0})`} description='Manage products for your business' />

          <Link href={"/dashboard"} className={cn(buttonVariants({ variant: "default" }))}>
            <Plus className='w-4 h-4 mr-2' /> Add New
          </Link>
        </div>
        <Separator />
      </div>
      <Separator />
      <div>
        {products && products.length > 0 ? (
          <ProductsTable columns={columns} data={products} />
        ) : (
          <p className='text-center text-gray-500'>No products found</p>
        )}
      </div>
    </>
  );
};

export default ProductsPage;

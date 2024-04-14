import { TMeta, TProduct } from "@/app/types";
import BreadCrumb from "@/components/breadcrumb";
import FilteringOrSorting from "@/components/ui/FilteringOrSorting";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import ProductsTable from "./ProductTable";
import { columns } from "./columns";
import { ProductFilterItems, ProductSortingItems } from "@/constants/product";

const breadcrumbItems = [{ title: "Products", link: "/dashboard/products" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const ProductsPage = async ({ searchParams }: paramsProps) => {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const searchTerm = searchParams.searchTerm || "";
  const status = searchParams.status;
  const sortBy = searchParams.sortBy;

  const url = process.env.NEXT_BASE_URL;
  let products: TProduct[] = [];
  let meta: TMeta = {
    page: 1,
    limit: 10,
    total: 0,
  };

  try {
    const res = await fetch(
      `${url}/product/get-all-products?limit=${pageLimit}&page=${page}&searchTerm=${searchTerm}&${
        status ? `status=${status}` : ""
      }&${sortBy ? `sortBy=${sortBy}` : ""}`,
      {
        next: { tags: ["products"] },
      },
    );
    const data = await res.json();
    products = data?.data;
    meta = data?.meta;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div className='flex-1 p-4 px-4 mt-6 space-y-4 md:px-8'>
        <BreadCrumb items={breadcrumbItems} />

        <div className='flex items-start justify-between gap-6'>
          <Heading
            title={`Products (${meta.total})`}
            description='Manage products for your business'
          />
          <div className='flex items-center gap-4 ml-auto'>
            <div className='min-w-[180px]'>
              <FilteringOrSorting filterItems={ProductFilterItems} placeholder='Filter Products' />
            </div>
            <div className='min-w-[180px]'>
              <FilteringOrSorting
                filterItems={ProductSortingItems}
                placeholder='Sorting Products'
              />
            </div>
          </div>
          <>
            <Link
              href={"/dashboard/products/add-product"}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <Plus className='w-4 h-4 mr-2' /> Add New
            </Link>
          </>
        </div>
        <Separator />
        <div>
          <ProductsTable columns={columns} data={products} meta={meta} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

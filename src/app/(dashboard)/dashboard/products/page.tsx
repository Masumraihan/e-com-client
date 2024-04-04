import BreadCrumb from "@/components/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [{ title: "Products", link: "/dashboard/products" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const ProductsPage = ({ searchParams }: paramsProps) => {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;


  return (
    <>
      <div className='flex-1 p-4 pt-6 space-y-4 md:p-8'>
        <BreadCrumb items={breadcrumbItems} />

        <div className='flex items-start justify-between'>
          <Heading
            title={`Products (${0})`}
            description='Manage products for your business'
          />

          <Link
            href={"/dashboard"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className='w-4 h-4 mr-2' /> Add New
          </Link>
        </div>
        <Separator />
      </div>
      <Separator />
      <div className='grid grid-cols-2 gap-4 p-4 pt-6 md:p-8 lg:grid-cols-4'>
        {/*<ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />*/}
        Product card is here, need to uncomment the above code
      </div>
    </>
  );
};

export default ProductsPage;

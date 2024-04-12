import BreadCrumb from "@/components/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Category", link: "/dashboard/category" },
];

const CategoryPage = async () => {
  let categories = [];

  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/category/get-all-categories`);
    const data = await res.json();
    categories = data.data;
  } catch (error) {
    console.log(error);
  }

  console.log(categories);

  return (
    <div className='flex-1 p-4 px-4 mt-6 space-y-4 md:px-8'>
      <BreadCrumb items={breadcrumbItems} />
      <div className='flex items-start justify-between'>
        <Heading title='Categories' description='Manage category for your business' />

        <Link
          href={"/dashboard/category/add-category"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className='w-4 h-4 mr-2' /> Add New
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default CategoryPage;

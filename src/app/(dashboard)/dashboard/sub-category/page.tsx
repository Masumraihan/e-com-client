import BreadCrumb from "@/components/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import AllSubCategories from "./AllSubCategories";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Sub Category", link: "/dashboard/sub-category" },
];

const SubCategoryPage = async () => {
  let subCategories = [];

  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/sub-category/get-all-sub-categories`, {
      next: { tags: ["subCategories"] },
    });
    const data = await res.json();
    subCategories = data.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className='flex-1 p-4 px-4 mt-6 space-y-4 md:px-8'>
      <BreadCrumb items={breadcrumbItems} />
      <div className='flex items-start justify-between'>
        <Heading title='Sub Categories' description='Manage sub category for your business' />

        <Link
          href={"/dashboard/sub-category/add-sub-category"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className='w-4 h-4 mr-2' /> Add New
        </Link>
      </div>
      <div>
        <AllSubCategories subCategories={subCategories} />
      </div>
    </div>
  );
};

export default SubCategoryPage;

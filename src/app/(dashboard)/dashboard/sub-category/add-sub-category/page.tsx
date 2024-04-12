import BreadCrumb from "@/components/breadcrumb";
import CreateSubCategoryForm from "@/components/forms/CreateSubCategoryForm";
import { Heading } from "@/components/ui/heading";
import React from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Sub Category", link: "/dashboard/sub-category" },
  { title: "Add Sub Category", link: "/dashboard/sub-category/add-sub-category" },
];
const AddSubCategoryPage = async () => {
  let categories = [];

  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/category/get-all-categories`, {
      cache: "no-cache",
    });
    const data = await res.json();
    categories = data.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className='flex-1 p-4 px-4 mt-6 space-y-4 md:px-8'>
      <BreadCrumb items={breadcrumbItems} />
      <Heading title='Add Sub Category' description='Create sub category for your business' />
      <CreateSubCategoryForm categories={categories} />
    </div>
  );
};

export default AddSubCategoryPage;

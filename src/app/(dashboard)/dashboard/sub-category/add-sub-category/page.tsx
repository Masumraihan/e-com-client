import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import React from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Sub Category", link: "/dashboard/sub-category" },
  { title: "Add Sub Category", link: "/dashboard/sub-category/add-sub-category" },
];
const AddSubCategoryPage = () => {
  return (
    <div className='flex-1 p-4 px-4 mt-6 space-y-4 md:px-8'>
      <BreadCrumb items={breadcrumbItems} />
      <Heading title='Add Sub Category' description='Create sub category for your business' />
    </div>
  );
};

export default AddSubCategoryPage;

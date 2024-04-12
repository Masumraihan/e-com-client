import BreadCrumb from "@/components/breadcrumb";
import CreateCategoryForm from "@/components/forms/CreateCategoryForm";
import { Heading } from "@/components/ui/heading";
const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Category", link: "/dashboard/category" },
  { title: "Add Category", link: "/dashboard/category/add-category" },
];
const CreateCategoryPage = () => {
  return (
    <div className='flex-1 p-4 px-4 mt-6 space-y-4 md:px-8'>
      <BreadCrumb items={breadcrumbItems} />
      <Heading title='Add Category' description='create category for your business' />
      <CreateCategoryForm />
    </div>
  );
};

export default CreateCategoryPage;

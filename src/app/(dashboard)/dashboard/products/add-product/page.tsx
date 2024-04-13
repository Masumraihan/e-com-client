import BreadCrumb from "@/components/breadcrumb";
import CreateProductForm from "@/components/forms/CreateProductForm";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard/" },
  { title: "Products", link: "/dashboard/products" },
  { title: "Add Product", link: "/dashboard/products/add-product" },
];

const getSubCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/sub-category/get-all-sub-categories`, {
      cache: "no-cache",
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const AddProductForm = async () => {
  const subCategories = await getSubCategories();
  

  return (
    <div className='flex-1 p-4 px-4 mt-6 space-y-4 md:px-8'>
      <h1 className='mb-4 text-3xl font-bold'>Add your Product</h1>
      <BreadCrumb items={breadcrumbItems} />
      <CreateProductForm subCategories={subCategories} />
    </div>
  );
};
export default AddProductForm;

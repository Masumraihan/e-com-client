import BreadCrumb from "@/components/breadcrumb";
import UpdateProductForm from "@/components/forms/UpdateProductForm";
import React from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard/" },
  { title: "Products", link: "/dashboard/products" },
  { title: "Update Product", link: "/dashboard/products/update-product" },
];

const getProduct = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/product/get-single-product/${id}`, {
      cache: "no-cache",
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const UpdateProductPage = async ({ searchParams }: { searchParams: { id: string } }) => {
  const product = await getProduct(searchParams.id);
  return (
    <>
      <div className='flex-1 p-4 px-4 mt-6 space-y-4 md:px-8'>
        <h1 className='mb-4 text-3xl font-bold'>Update {product?.title}</h1>
        <BreadCrumb items={breadcrumbItems} />
        <UpdateProductForm product={product} />
      </div>
    </>
  );
};

export default UpdateProductPage;

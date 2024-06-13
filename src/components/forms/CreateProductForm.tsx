"use client";
import { TSubCategory } from "@/app/types";
import { TImageBBResponse } from "@/app/types/global";
import CustomForm from "@/components/forms/CustomForm";
import CustomSelect from "@/components/forms/CustomSelect";
import FormInput from "@/components/forms/FormInput";
import { discounts } from "@/constants/global";
import { uploadImagesIntoImageBB } from "@/lib/imageUploader";
import { useCreateProductMutation } from "@/redux/features/product/ProductApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import MultipleSelector from "../ui/MultipleSelector";
import { Button } from "../ui/button";
import CustomFileUploader from "./CustomFileUploader";
import CustomTextArea from "./CustomTextArea";
import revalidateTags from "@/lib/revalidateTags";
import { Label } from "../ui/label";

const keywordsValidationSchema = z.object({
  value: z.string(),
  isDelete: z.boolean(),
});

const formSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  price: z.string({
    required_error: "Price is required",
  }),
  subCategory: z.string({
    required_error: "Category is required",
  }),
  images: z.any({
    required_error: "Image is required",
  }),
  quantity: z.string({
    required_error: "Quantity is required",
  }),
  discount: z.string().optional(),
  size: z.string().optional(),
  color: z.string().optional(),
  keywords: z.array(keywordsValidationSchema).optional(),
});
const CreateProductForm = ({ subCategories }: { subCategories: TSubCategory[] }) => {
  const subCategoryOptions = subCategories.map((subCategory: TSubCategory) => ({
    value: subCategory._id,
    name: subCategory.subCategory,
  }));

  const [error, setError] = useState("");
  const [keywords, setKeywords] = useState<any>([]);
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError("");
    if (!keywords.length) {
      setError("Keywords are required");
      return;
    }

    const toastId = toast.loading("Product Creating...");
    // UPLOAD IMAGE INTO IMAGE BB FOR GENERATE URL
    const productImages = await uploadImagesIntoImageBB(data.images).catch((error) => {
      toast.error("Something went wrong while uploading images", {
        id: toastId,
      });
    });

    // FORMATE IMAGE FOLLOWING API DATA DESIGN
    const uploadedImages = productImages?.map(
      (image: TImageBBResponse | undefined) => image?.data?.url,
    );

    const selectedKeywords = keywords.map((keyword: any) => ({
      value: keyword.value,
    }));
    const productData = {
      title: data.title,
      description: data.description,
      price: Number(data.price),
      subCategory: data.subCategory,
      images: uploadedImages,
      quantity: Number(data.quantity),
      discount: Number(data.discount) || 0,
      size: data.size || "",
      color: data.color || "",
      keywords: selectedKeywords,
    };
    try {
      const res = await createProduct(productData).unwrap();
      if (res.success) {
        revalidateTags("products");
        toast.success(res.message, {
          id: toastId,
        });
      }
    } catch (error: any) {
      setError(error.data.message);
      toast.error(error.data.message, {
        id: toastId,
      });
    }
  };
  return (
    <CustomForm onSubmit={onSubmit} resolver={zodResolver(formSchema)} className='space-y-4'>
      <FormInput label='Product Title' placeholder='Product Title' name='title' type='text' />
      <CustomSelect
        label='Sub Category'
        name='subCategory'
        placeholder='Select Sub Category'
        options={subCategoryOptions}
      />
      <FormInput label='Price' placeholder='Price' name='price' type='number' />
      <CustomFileUploader label='Images' name='images' multiple={true} />
      <FormInput label='Quantity' placeholder='Quantity' name='quantity' type='number' />
      <CustomSelect label='Discount' placeholder='Discount' name='discount' options={discounts} />
      <FormInput label='Size (Optional)' placeholder='Size' name='size' type='text' />
      <FormInput label='Color (Optional)' placeholder='Color' name='color' type='text' />
      <CustomTextArea label='Description' placeholder='Description' name='description' rows={6} />
      <div className='space-y-2'>
        <Label>Keywords</Label>
        <MultipleSelector
          placeholder='Add Keywords (refresh the page for any issue)'
          creatable
          className='bg-white'
          onChange={(value) => setKeywords(value)}
        />
      </div>
      {error && <p className='text-sm text-red'>{error}</p>}
      <Button type='submit' disabled={isLoading}>
        Submit
      </Button>
    </CustomForm>
  );
};

export default CreateProductForm;

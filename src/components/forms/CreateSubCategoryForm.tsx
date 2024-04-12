"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { Button } from "../ui/button";
import CustomForm from "./CustomForm";
import CustomSelect from "./CustomSelect";
import { TCategory } from "@/app/types";
import FormInput from "./FormInput";
import { useCreateSubCategoryMutation } from "@/redux/features/subCategory/subCategoryApi";
import { toast } from "sonner";
import CustomFileUploader from "./CustomFileUploader";
import { uploadIntoImageBB } from "@/lib/imageUploader";
import { TImageBBResponse } from "@/app/types/global";

const subCategorySchema = z.object({
  category: z.string({ required_error: "Select a category" }),
  subCategory: z.string({ required_error: "SubCategory is required" }),
  icon: z.any({ required_error: "Icon is required" }),
});

const CreateSubCategoryForm = ({ categories }: { categories: TCategory[] }) => {
  const categoryOption = categories.map((category: TCategory) => ({
    name: category.category,
    value: category._id,
  }));
  const [error, setError] = useState("");

  const [createSubCategory, { isLoading }] = useCreateSubCategoryMutation();
  const onSubmit = async (data: z.infer<typeof subCategorySchema>) => {
    setError("");
    const formData = new FormData();
    let icon: TImageBBResponse | undefined;
    if (data.icon) {
      formData.append("image", data.icon);

      icon = await uploadIntoImageBB(formData);
    }

    const subCategoryData = {
      category: data.category,
      subCategory: data.subCategory,
      icon: icon?.data?.url,
    };

    try {
      const res = await createSubCategory(subCategoryData).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      setError(error.data.message);
    }
  };
  return (
    <div>
      <CustomForm
        onSubmit={onSubmit}
        resolver={zodResolver(subCategorySchema)}
        className='space-y-4'
      >
        <CustomSelect
          label='Category'
          name='category'
          options={categoryOption}
          placeholder='Select category'
          loading={!categoryOption.length}
        />
        <FormInput label='Sub Category' name='subCategory' type='text' placeholder='Sub category' />
        <CustomFileUploader label='Icon' name='icon' />
        {error && <p className='text-sm text-red'>{error}</p>}
        <Button type='submit' disabled={isLoading}>
          Submit
        </Button>
      </CustomForm>
    </div>
  );
};

export default CreateSubCategoryForm;

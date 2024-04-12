"use client";
import { z } from "zod";
import CustomForm from "./CustomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./FormInput";
import { Button } from "../ui/button";
import { useCreateCategoryMutation } from "@/redux/features/category/categoryApi";
import { toast } from "sonner";
import { useState } from "react";
import { TCategory } from "@/app/types";

const categorySchema = z.object({
  category: z.string({ required_error: "Category is required" }),
});

const CreateCategoryForm = () => {
  const [error, setError] = useState("");
  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  const onSubmit = async (data: z.infer<typeof categorySchema>) => {
    setError("");
    try {
      const res = await createCategory(data).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      setError(error.data.message);
    }
  };
  return (
    <div>
      <CustomForm onSubmit={onSubmit} resolver={zodResolver(categorySchema)} className='space-y-4'>
        <FormInput label='Category' name='category' placeholder='Enter category' type='text' />
        {error && <p className='text-sm text-red'>{error}</p>}
        <Button type='submit' disabled={isLoading}>
          Submit
        </Button>
      </CustomForm>
    </div>
  );
};

export default CreateCategoryForm;

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { Button } from "../ui/button";
import CustomForm from "./CustomForm";
import FormInput from "./FormInput";

const subCategorySchema = z.object({
  subCategory: z.string({ required_error: "SubCategory is required" }),
  category: z.string({ required_error: "Select a category" }),
  icon: z.string({ required_error: "Icon is required" }),
});

const CreateSubCategoryForm = () => {
  const [error, setError] = useState("");

  const onSubmit = async (data: z.infer<typeof subCategorySchema>) => {
    setError("");
    console.log(data);
    //try {
    //  const res = await createCategory(data).unwrap();
    //  if (res.success) {
    //    toast.success(res.message);
    //  }
    //} catch (error: any) {
    //  setError(error.data.message);
    //}
  };
  return (
    <div>
      <CustomForm
        onSubmit={onSubmit}
        resolver={zodResolver(subCategorySchema)}
        className='space-y-4'
      >
        <FormInput label='Category' name='category' placeholder='Enter category' type='text' />
        {error && <p className='text-sm text-red'>{error}</p>}
        <Button type='submit' disabled={false}>
          Submit
        </Button>
      </CustomForm>
    </div>
  );
};

export default CreateSubCategoryForm;

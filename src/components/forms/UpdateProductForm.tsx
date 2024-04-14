"use client";
import { TKeyword, TProduct } from "@/app/types";
import { TImageBBResponse } from "@/app/types/global";
import CustomForm from "@/components/forms/CustomForm";
import CustomSelect from "@/components/forms/CustomSelect";
import FormInput from "@/components/forms/FormInput";
import { discounts, productStatus } from "@/constants/global";
import { uploadImagesIntoImageBB } from "@/lib/imageUploader";
import revalidateTags from "@/lib/revalidateTags";
import { cn } from "@/lib/utils";
import { useUpdateProductMutation } from "@/redux/features/product/ProductApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import MultipleSelector from "../ui/MultipleSelector";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import CustomFileUploader from "./CustomFileUploader";
import CustomTextArea from "./CustomTextArea";
import KeywordBadge from "../ui/KeywordBadge";

const keywordsValidationSchema = z.object({
  value: z.string(),
  isDelete: z.boolean(),
});

const formSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .optional(),
  description: z
    .string({
      required_error: "Description is required",
    })
    .optional(),
  price: z
    .string({
      required_error: "Price is required",
    })
    .optional(),
  images: z
    .any({
      required_error: "Image is required",
    })
    .optional(),
  status: z.enum([productStatus.inStock, productStatus.outOfStock]).optional(),
  quantity: z
    .string({
      required_error: "Quantity is required",
    })
    .optional(),
  discount: z.string().optional(),
  size: z.string().optional(),
  color: z.string().optional(),
  keywords: z.array(keywordsValidationSchema).optional(),
});
const UpdateProductForm = ({ product }: { product: TProduct | undefined }) => {
  const [error, setError] = useState("");
  const [keywords, setKeywords] = useState<any>([]);
  const [currentKeywords, setCurrentKeywords] = useState<TKeyword[]>([]);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const defaultValues = {
    title: product?.title,
    description: product?.description,
    price: product?.price.toString(),
    quantity: product?.quantity.toString(),
    discount: product?.discount.toString(),
    size: product?.size,
    color: product?.color,
    status: product?.status,
  };

  const statusOptions = [
    {
      value: productStatus.inStock,
      name: "In Stock",
    },
    {
      value: productStatus.outOfStock,
      name: "Out of Stock",
    },
  ];

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError("");

    const toastId = toast.loading("Uploading Product...");
    let productImages;
    // UPLOAD IMAGE INTO IMAGE BB FOR GENERATE URL
    if (data.images && data.images.length > 0) {
      productImages = await uploadImagesIntoImageBB(data?.images).catch((error) => {
        console.log(error);
        toast.error("Something went wrong while uploading images", {
          id: toastId,
        });
      });
    }

    // FORMATE IMAGE FOLLOWING API DATA DESIGN
    const uploadedImages = productImages?.map(
      (image: TImageBBResponse | undefined) => image?.data?.url,
    );

    // FORMATE KEYWORDS
    const allKeywords = keywords?.map((keyword: any) => ({
      value: keyword.value,
      isDelete: false,
    }));

    const updatedKeywords = [...currentKeywords, ...allKeywords];
    const filterDuplicateKeywords = updatedKeywords.filter(
      (item: any, index: any) =>
        updatedKeywords.findIndex((obj: any) => obj.value === item.value) === index,
    );

    const productData = {
      title: data.title,
      description: data.description,
      price: Number(data.price),
      images: uploadedImages,
      quantity: Number(data.quantity),
      discount: Number(data.discount),
      size: data.size,
      color: data.color,
      keywords: filterDuplicateKeywords,
      status: data.status,
    };

    const updatedData = [];
    for (const [key, value] of Object.entries(productData)) {
      if (value) {
        updatedData.push({ key, value });
      }
    }

    try {
      const res = await updateProduct({ data: productData, id: product?._id }).unwrap();
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

  useEffect(() => {
    setCurrentKeywords(product?.keywords || []);
  }, [product]);

  return (
    <div>
      <CustomForm
        onSubmit={onSubmit}
        resolver={zodResolver(formSchema)}
        defaultValues={defaultValues}
        className='space-y-4'
      >
        <FormInput label='Product Title' placeholder='Product Title' name='title' type='text' />
        <FormInput label='Price' placeholder='Price' name='price' type='number' />
        <CustomFileUploader label='Images' name='images' multiple={true} />
        <FormInput label='Quantity' placeholder='Quantity' name='quantity' type='number' />
        <CustomSelect label='Discount' placeholder='Discount' name='discount' options={discounts} />
        <CustomSelect label='Status' placeholder='Status' name='status' options={statusOptions} />
        <FormInput label='Size (Optional)' placeholder='Size' name='size' type='text' />
        <FormInput label='Color (Optional)' placeholder='Color' name='color' type='text' />
        <CustomTextArea label='Description' placeholder='Description' name='description' rows={6} />
        <div className='space-y-2'>
          {!currentKeywords?.length ? null : (
            <div className='space-y-1'>
              <Label>current keywords</Label>
              <div className='flex flex-wrap gap-2'>
                {currentKeywords?.map((keyword) =>
                  keyword.isDelete ? null : (
                    <Badge
                      variant={"outline"}
                      key={keyword?.value}
                      className={cn(
                        "data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground",
                        "data-[fixed]:bg-muted-foreground data-[fixed]:text-muted data-[fixed]:hover:bg-muted-foreground",
                      )}
                    >
                      {keyword?.value}
                      <button
                        className={
                          "ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          const selectedKeyword = currentKeywords?.filter(
                            (k) => k?.value === keyword?.value,
                          );
                          const otherKeywords = currentKeywords?.filter(
                            (k) => k?.value !== keyword?.value,
                          );
                          if (selectedKeyword.length > 0) {
                            setCurrentKeywords([
                              ...otherKeywords,
                              { ...selectedKeyword[0], isDelete: true },
                            ]);
                          }
                        }}
                      >
                        <X className='w-3 h-3 text-muted-foreground hover:text-foreground' />
                      </button>
                    </Badge>
                  ),
                )}
              </div>
            </div>
          )}
          <Label>Add New Keywords</Label>
          <MultipleSelector
            placeholder='Add Keywords (refresh the page for any issue)'
            creatable
            className='bg-white'
            onChange={(value) => setKeywords(value)}
            defaultOptions={[{ value: "1", label: "1" }]}
          />
        </div>

        {error && <p className='text-sm text-red'>{error}</p>}
        <Button type='submit' disabled={isLoading}>
          Submit
        </Button>
      </CustomForm>
    </div>
  );
};

export default UpdateProductForm;

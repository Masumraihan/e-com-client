"use client";
import { AlertModal } from "@/components/modal/alert-modal";
import { useDeleteCategoryMutation } from "@/redux/features/category/categoryApi";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const CategoryAction = ({ id }: { id: string }) => {
  const [open, setIfOpen] = useState(false);

  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();
  const router = useRouter();
  const onConfirm = async () => {
    try {
      const res = await deleteCategory(id).unwrap();
      if (res.success) {
        router.refresh();
        setIfOpen(false);
        toast.success(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setIfOpen(false)}
        onConfirm={onConfirm}
        loading={isLoading}
      />
      <div className='cursor-pointer' onClick={() => setIfOpen(true)}>
        <Trash2 className='text-red' size={20} />
      </div>
    </>
  );
};

export default CategoryAction;

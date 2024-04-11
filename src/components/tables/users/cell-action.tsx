"use client";
import UserUpdateModal from "@/components/UserUpdateModal";
import { AlertModal } from "@/components/modal/alert-modal";
import BlockModal from "@/components/ui/BlockModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteUserMutation, useUpdateUserMutation } from "@/redux/features/user/user.api";
import { TResponseUser } from "@/types/user.types";
import { Edit, MoreHorizontal, Trash, UserX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CellActionProps {
  data: TResponseUser;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [blockModalLoading, setBlockModalLoading] = useState(false);

  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const onConfirm = async () => {
    setLoading(true);
    try {
      const res = await deleteUser(data._id).unwrap();
      if (res?.success) {
        setOpen(false);
        toast.success(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBlockConfirm = async () => {
    setBlockModalLoading(true);
    try {
      const res = await updateUser({ id: data._id, isBlocked: !data.isBlocked }).unwrap();
      if (res?.success) {
        setBlockModalOpen(false);
        toast.success(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    } finally {
      setBlockModalLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <BlockModal
        isOpen={blockModalOpen}
        onClose={() => setBlockModalOpen(false)}
        onConfirm={handleBlockConfirm}
        loading={blockModalLoading}
      />
      <UserUpdateModal open={updateModalOpen} setOpen={setUpdateModalOpen} user={data} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='w-8 h-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='w-4 h-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='bg-white dark:bg-dark'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              setBlockModalOpen(true);
            }}
          >
            <UserX className='w-4 h-4 mr-2' /> {data.isBlocked ? "Unblock" : "Block"}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setUpdateModalOpen(true);
            }}
          >
            <Edit className='w-4 h-4 mr-2' /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className='w-4 h-4 mr-2' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

"use client";
import { useState } from "react";
import CustomForm from "./CustomForm";
import FormInput from "./FormInput";
import { Modal } from "../ui/modal";

import { userRole } from "@/constants/global";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomSelect from "./CustomSelect";
import { Button } from "../ui/button";

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Enter a valid email" }).optional(),
  role: z.string().optional(),
  address: z.string().optional(),
});

type TUserModalProps = {
  open: boolean;
  setOpen: any;
  user: any;
};

type TUserFormValue = z.infer<typeof updateUserSchema>;

const UserUpdateModal = ({ open, setOpen, user }: TUserModalProps) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [updateUser] = useUpdateUserMutation();
  const handleSubmit = async (data: TUserFormValue) => {
    setError("");
    setIsLoading(true);

    const userData = {
      ...data,
      id: user._id,
    };

    try {
      const res = await updateUser(userData).unwrap();
      if (res?.success) {
        setOpen(false);
        console.log(res);
      }
    } catch (error: any) {
      setError(error?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultValues = {
    name: user.name,
    role: user.role,
    email: user.email,
    address: user.address,
  };

  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      title={`Update ${user.name}`}
      description=''
    >
      <CustomForm
        onSubmit={handleSubmit}
        resolver={zodResolver(updateUserSchema)}
        defaultValues={defaultValues}
        className='w-full space-y-4'
      >
        <FormInput name='name' label='Name' placeholder='Enter your name' type='text' />
        <FormInput name='email' label='Email' placeholder='Enter your email' type='email' />
        <FormInput name='address' label='Address' placeholder='Enter your address' type='text' />
        <CustomSelect
          name='role'
          label='Role'
          options={[
            { name: userRole.admin, value: userRole.admin },
            { name: userRole.customer, value: userRole.customer },
          ]}
          placeholder='Select role'
        />
        {error && <p className='text-sm text-red'>{error}</p>}
        <div className='flex justify-end'>
          <Button type='submit'>
            <span>Update</span>
          </Button>
        </div>
      </CustomForm>
    </Modal>
  );
};

export default UserUpdateModal;

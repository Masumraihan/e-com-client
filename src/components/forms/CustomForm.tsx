import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import FormInput from "./FormInput";
import { ReactNode } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";

type TFormConfig = {
  resolver: any;
  defaultValues?: Record<string, unknown>;
};

type TFormInputProps = {
  children: ReactNode;
  resolver: any;
  defaultValues?: Record<string, unknown>;
  className?: string;
  onSubmit: SubmitHandler<any>;
};

const CustomForm = ({
  children,
  resolver,
  defaultValues,
  className,
  onSubmit,
}: TFormInputProps) => {
  type TFormValue = z.infer<typeof resolver>;

  const formConfig: TFormConfig = {
    resolver,
  };
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const form = useForm<TFormValue>(formConfig);

  const submit: SubmitHandler<TFormValue> = (data) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form className={cn("w-full", className)} onSubmit={form.handleSubmit(submit)}>
        {children}
      </form>
    </Form>
  );
};

export default CustomForm;

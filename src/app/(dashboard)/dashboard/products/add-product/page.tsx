"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  product_name: z.string().min(5, {
    message: "Product name must be at least 2 characters.",
  }),
  category: z.string({ required_error: "Select a category" }),
  price: z.string({ required_error: "Price is required" }),
  description: z.string({ required_error: "Description is required" }),
});

export default function AddProductForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    //console.log(values);
  }

  return (
    <div className='p-4 md:p-8 pt-6'>
      <h1 className='text-3xl font-bold mb-4'>Add your Product</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='product_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='focus:ring-primary'
                    placeholder='Product Name'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-red-700' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className='focus:ring-primary'>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='bg-white dark:bg-dark'>
                    <SelectItem
                      className='cursor-pointer hover:bg-gray-100 dark:hover:bg-primary'
                      value='Category One'
                    >
                      Category One
                    </SelectItem>
                    <SelectItem
                      className='cursor-pointer hover:bg-gray-100 dark:hover:bg-primary'
                      value='Category Two'
                    >
                      Category Two
                    </SelectItem>
                    <SelectItem
                      className='cursor-pointer hover:bg-gray-100 dark:hover:bg-primary'
                      value='Category Three'
                    >
                      Category Three
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className='text-red-700' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    className='focus:ring-primary'
                    placeholder='Price'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-red-700' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder='Product Description'
                    className='resize-none focus:ring-primary'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-red-700' />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
}

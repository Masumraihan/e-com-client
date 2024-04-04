import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

function ProductCard({ product }: { product: any }) {
  return (
    <Card className='max-w-[350px] pt-6'>
      <CardContent>
        <Image placeholder='blur' src='/5533834_130.jpg' alt='product' width={400} height={400} />
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
      </CardContent>
      <CardFooter className='flex justify-end gap-4'>
        <Button variant='outline'>Update</Button>
        <Button className='text-white bg-red-500'>Delete</Button>
      </CardFooter>
    </Card>
  );
}
export default ProductCard;

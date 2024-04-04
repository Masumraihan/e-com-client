import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Textarea } from "./textarea";

const AddReviewModal = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className='sm:max-w-[425px] md:max-w-[600px] bg-white'>
          <DialogHeader>
            <DialogTitle>Add Review</DialogTitle>
            <DialogDescription>Add your review to help others</DialogDescription>
          </DialogHeader>
          <ReviewForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className='bg-white'>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Add Review</DrawerTitle>
          <DrawerDescription>Add your review to help others</DrawerDescription>
        </DrawerHeader>
        <ReviewForm className='px-4' />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

function ReviewForm({ className }: React.ComponentProps<"form">) {
  const [rating, setRating] = useState(5);
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className='grid gap-2'>
        <Label>Rating</Label>
        <div className='flex items-center gap-1'>
          <Rating
            value={rating}
            style={{ maxWidth: 120 }}
            onChange={setRating}
            itemStyles={{
              itemShapes: ThinStar,
              activeFillColor: "#f59e0b",
              inactiveFillColor: "#ffedd5",
            }}
            className='text-yellow-400'
          />
          <span className='text-sm'>({rating})</span>
        </div>
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' defaultValue='email@gmail.com' />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='message'>Message</Label>
        <Textarea id='message' defaultValue={"Md Masum Raihan"}></Textarea>
      </div>
      <Button type='submit'>Send Review</Button>
    </form>
  );
}
export default AddReviewModal;

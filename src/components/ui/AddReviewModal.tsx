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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { Textarea } from "./textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddReviewMutation } from "@/redux/features/reivew/reviewApi";
import { toast } from "sonner";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";

const reviewSchema = z.object({
  comment: z.string({ required_error: "Comment is required" }).min(15, {
    message: "Comment must be at least 15 characters",
  }),
});
type TReviewSchema = z.infer<typeof reviewSchema>;

const AddReviewModal = ({ children, productId }: { children: ReactNode; productId: string }) => {
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
          <ReviewForm productId={productId} setOpen={setOpen} />
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
        <ReviewForm productId={productId} setOpen={setOpen} className='px-4' />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

type TReviewFormProps = {
  productId: string;
  className?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
function ReviewForm({ productId, className, setOpen }: TReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [addReview] = useAddReviewMutation();
  const [error, setError] = useState("");
  const user = useAppSelector(useCurrentUser);
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm<TReviewSchema>({
    //resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: TReviewSchema) => {
    if (!user) {
      setOpen(false);
      toast.error("Please login to add review");
      router.push(`/signin?redirectUrl=${pathname}`);
      return;
    }

    const toastId = toast.loading("Sending...");
    const reviewData = {
      product: productId,
      rating: rating,
      comment: data.comment,
    };
    try {
      const res = await addReview(reviewData).unwrap();
      console.log(res);
      if (res.success) {
        toast.success("Review send successfully", { id: toastId });
        setOpen(false);
        form.reset();
      }
    } catch (error: any) {
      setError(error.data.message || "Something went wrong");
      toast.dismiss(toastId);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-4", className)}
      >
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

        <FormField
          control={form.control}
          name='comment'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea placeholder='Write a review' {...field} />
              </FormControl>
              <FormMessage className='text-red' />
            </FormItem>
          )}
        />

        {error && <p className='text-sm text-red'>{error}</p>}
        <Button type='submit'>Send Review</Button>
      </form>
    </Form>
  );
}
export default AddReviewModal;

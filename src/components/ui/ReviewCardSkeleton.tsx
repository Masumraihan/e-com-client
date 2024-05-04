import { Skeleton } from "@/components/ui/skeleton";

const ReviewCardSkeleton = () => {
  return (
    <div className='space-y-2'>
      <div className='flex items-center gap-x-2'>
        <Skeleton className='w-5 h-5 rounded-full' />
        <Skeleton className='w-5 h-5 rounded-full' />
        <Skeleton className='w-5 h-5 rounded-full' />
        <Skeleton className='w-5 h-5 rounded-full' />
        <Skeleton className='w-5 h-5 rounded-full' />
      </div>
      <div className='flex items-center gap-x-2'>
        <Skeleton className='h-5 w-[70%]' />
        <Skeleton className='w-5 h-5 rounded-full' />
      </div>
      <Skeleton className='w-full h-2' />
      <Skeleton className='w-full h-2' />
      <Skeleton className='w-full h-2' />
      <br />
      <Skeleton className='w-full h-2' />
    </div>
  );
};
export default ReviewCardSkeleton;

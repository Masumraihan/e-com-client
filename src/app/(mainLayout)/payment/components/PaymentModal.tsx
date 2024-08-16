"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

type TPaymentModalProps = {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  paymentUrl: string;
};
const PaymentModal = ({ open, setOpen, children, paymentUrl }: TPaymentModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-white'>
        <DialogHeader>
          <DialogTitle>Payment</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Link href={paymentUrl}>
            <Button>Choose Payment Method</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;

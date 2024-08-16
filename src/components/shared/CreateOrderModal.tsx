import CreateOrderForm from "../forms/CreateOrderForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

type TCreateOrderModalProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateOrderModal = ({ children, open, setOpen }: TCreateOrderModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-white'>
        <DialogHeader>
          <DialogTitle>Create Order</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <CreateOrderForm open={open} setOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrderModal;

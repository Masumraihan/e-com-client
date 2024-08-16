import CreateOrderForm from "../forms/CreateOrderForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const CreateOrderModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-white'>
        <DialogHeader>
          <DialogTitle>Create Order</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <CreateOrderForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrderModal;

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import UserSignInForm from "../forms/user-signin-form";

const LoginModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-white'>
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <UserSignInForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;

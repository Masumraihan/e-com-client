"user client";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "./ui/input";

type TAddSearchParamsProps = {
  placeholder?: string;
  searchKey: string;
};
const AddSearchParams = ({ searchKey, placeholder }: TAddSearchParamsProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => {
        if (!e.target.value) {
          return router.push(`${pathname}`);
        }
        router.push(`${pathname}?${searchKey}=${e.target.value}`);
      }}
      className='max-w-sm focus:ring-primary'
    />
  );
};

export default AddSearchParams;

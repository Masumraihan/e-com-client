"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

type TFilterItems = {
  label: string;
  value: string;
}[];
type TFilterDataProps = {
  filterItems: TFilterItems;
  placeholder?: string;
};

const FilteringOrSorting = ({ filterItems, placeholder }: TFilterDataProps) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Select
      onValueChange={(value) => {
        if (value === "") {
          router.push(pathName);
        } else {
          router.push(`${pathName}?${value.split(":")[0]}=${value.split(":")[1]}`);
        }
      }}
    >
      <SelectTrigger className='w-full'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className='bg-white dark:bg-dark'>
        <SelectGroup>
          {filterItems.map((item) => (
            <SelectItem key={item.value} value={`${item.value}`}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default FilteringOrSorting;

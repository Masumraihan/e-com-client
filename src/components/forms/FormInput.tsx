import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type TFormInputProps = {
  loading?: boolean;
  type: string;
  label?: string;
  placeholder: string;
  name: string;
};

const FormInput = ({ loading, type, label, placeholder, name }: TFormInputProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      defaultValue={""}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className='focus:!ring-primary w-full'
              type={type}
              placeholder={placeholder}
              disabled={loading}
              {...field}
            />
          </FormControl>
          <FormMessage className='text-red' />
        </FormItem>
      )}
    />
  );
};

export default FormInput;

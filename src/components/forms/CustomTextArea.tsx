import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

type TFormInputProps = {
  loading?: boolean;
  label?: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  rows?: number;
  cols?: number;
};

const CustomTextArea = ({
  loading,
  label,
  placeholder,
  name,
  defaultValue,
  rows,
  cols,
}: TFormInputProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              className='focus:!ring-primary w-full'
              placeholder={placeholder}
              disabled={loading}
              rows={rows}
              cols={cols}
              {...field}
            />
          </FormControl>
          <FormMessage className='text-red' />
        </FormItem>
      )}
    />
  );
};

export default CustomTextArea;

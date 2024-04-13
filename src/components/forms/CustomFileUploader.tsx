import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type TCustomFileUploaderProps = {
  label: string;
  name: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  loading?: boolean;
  placeholder?: string;
};

const CustomFileUploader = ({
  label,
  name,
  accept,
  multiple,
  ...props
}: TCustomFileUploaderProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, onChange, ...fieldProps } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...fieldProps}
              placeholder={props.placeholder || "Upload"}
              type='file'
              accept={accept || "*"}
              multiple={multiple}
              onChange={(event) => {
                if (multiple) {
                  onChange(event.target.files && event.target.files);
                } else {
                  onChange(event.target.files && event.target.files[0]);
                }
              }}
            />
          </FormControl>
          <FormMessage className='text-red' />
        </FormItem>
      )}
    />
  );
};

export default CustomFileUploader;

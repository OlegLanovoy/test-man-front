import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { postSchema } from "@/validation-schemas/post-schemas";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface FormFieldTitleProps {
  form: UseFormReturn<z.infer<typeof postSchema>>;
}

export const FormFieldTitle = ({ form }: FormFieldTitleProps) => {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder="Enter post title" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

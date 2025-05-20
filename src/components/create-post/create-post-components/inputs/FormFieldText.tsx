import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { postSchema } from "@/validation-schemas/post-schemas";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface FormFieldTextProps {
  form: UseFormReturn<z.infer<typeof postSchema>>;
}

export const FormFieldText = ({ form }: FormFieldTextProps) => {
  return (
    <FormField
      control={form.control}
      name="text"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Text</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Write your full post content here..."
              className="resize-y min-h-[150px]"
              {...field}
            />
          </FormControl>
          <FormDescription>This is the full body of your post.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

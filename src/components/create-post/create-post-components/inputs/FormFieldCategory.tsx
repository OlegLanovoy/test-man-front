import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { postSchema } from "@/validation-schemas/post-schemas";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const categories = [
  "Technology",
  "Design",
  "Business",
  "Marketing",
  "Development",
  "Lifestyle",
  "Health",
  "Education",
];

interface FormFieldTitleProps {
  form: UseFormReturn<z.infer<typeof postSchema>>;
}

export const FormFieldCategory = ({ form }: FormFieldTitleProps) => {
  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Category</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

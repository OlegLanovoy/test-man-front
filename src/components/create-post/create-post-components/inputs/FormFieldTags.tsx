import { Button } from "@/components/ui/button";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { postSchema } from "@/validation-schemas/post-schemas";
import { Hash, Plus, X } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface FormFieldTagsProps {
  form: UseFormReturn<z.infer<typeof postSchema>>;
  tags: string[];
  setTags: (str: string[]) => void;
  tagInput: string;
  setTagInput: (str: string) => void;
  removeTag: (str: string) => void;
  handleTagKeyDown: (e: any) => void;
}

export const FormFieldTags = ({
  form,
  tags,
  setTags,
  tagInput,
  setTagInput,
  removeTag,
  handleTagKeyDown,
}: FormFieldTagsProps) => {
  return (
    <FormField
      control={form.control}
      name="tags"
      render={() => (
        <FormItem>
          <FormLabel>Tags</FormLabel>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
              >
                <Hash className="w-3 h-3 mr-1" />
                {tag}
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 ml-1 p-0"
                  onClick={() => removeTag(tag)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove tag</span>
                </Button>
              </div>
            ))}
          </div>
          <div className="flex">
            <Input
              placeholder="Add a tag and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              className="ml-2"
              onClick={() => {
                if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
                  setTags([...tags, tagInput.trim()]);
                  form.setValue("tags", [...tags, tagInput.trim()]);
                  setTagInput("");
                }
              }}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
          <FormDescription>
            Press Enter after each tag or click the Add button.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

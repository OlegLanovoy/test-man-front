import { Card, CardContent } from "@/components/ui/card";

import { Clock, Hash } from "lucide-react";
import { format } from "date-fns";
import { z } from "zod";
import { postSchema } from "@/validation-schemas/post-schemas";
import { UseFormReturn } from "react-hook-form";

interface PostPreviewProps {
  form: UseFormReturn<z.infer<typeof postSchema>>;
  tags: string[];
}

export const PostPreview = ({ form, tags }: PostPreviewProps) => {
  const title = form.watch("title");
  const text = form.watch("text");
  // const readTime = form.watch("readTime");
  const category = form.watch("category");
  const coverImage = form.watch("coverImage");
  const authorName = form.watch("authorName");
  // const authorAvatar = form.watch("authorAvatar");
  const date = form.watch("date");

  if (!title) return null;

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4">Post Preview</h3>
        <div className="space-y-4">
          {coverImage && (
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src={coverImage || "/placeholder.svg"}
                alt="Cover preview"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/placeholder.svg?height=400&width=800";
                }}
              />
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
            </div>
            <span>•</span>
            <span>{category || "Category"}</span>
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-muted-foreground">{text?.substring(0, 300)}...</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full text-xs"
                >
                  <Hash className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
          {authorName && (
            <div className="flex items-center gap-2 pt-2">
              <div className="text-sm">
                <p className="font-medium">{authorName}</p>
                <p className="text-xs text-muted-foreground">
                  {date ? format(date, "MMM d, yyyy") : "Publication date"}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

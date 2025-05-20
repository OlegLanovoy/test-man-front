import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  text: z
    .string()
    .min(10, { message: "Excerpt must be at least 10 characters" }),
  coverImage: z.string().url({ message: "Please enter a valid URL" }),
  date: z.date(),
  authorName: z
    .string()
    .min(2, { message: "Author name must be at least 2 characters" }),

  category: z.string().min(1, { message: "Please select a category" }),

  tags: z.array(z.string()),
});

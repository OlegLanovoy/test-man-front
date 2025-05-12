import { z } from "zod";
export type ProfileFormValues = z.infer<typeof profileFormSchema>;

export const profileFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).optional(),
  urls: z.object({
    website: z
      .string()
      .url({ message: "Please enter a valid URL." })
      .optional()
      .or(z.literal("")),
    twitter: z.string().optional().or(z.literal("")),
    linkedin: z.string().optional().or(z.literal("")),
  }),
  notifications: z.object({
    email: z.boolean().default(false),
    push: z.boolean().default(false),
    sms: z.boolean().default(false),
    marketing: z.boolean().default(false),
  }),
});

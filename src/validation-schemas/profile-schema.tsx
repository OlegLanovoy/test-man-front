import { z } from "zod";
export type ProfileFormValues = z.infer<typeof profileFormSchema>;

export const profileFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).optional(),
  webSite: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  twitter: z.string().optional().or(z.literal("")),
  linkedIn: z.string().optional().or(z.literal("")),
  instagram: z.string().optional().or(z.literal("")),
});

export const accountFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  company: z.string().optional().or(z.literal("")),
  role: z.string().optional().or(z.literal("")),
});

export type AccountFormValues = z.infer<typeof accountFormSchema>;

export const passwordSchema = z
  .object({
    currentPassword: z.string().min(4, "Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type PasswordFormValues = z.infer<typeof passwordSchema>;

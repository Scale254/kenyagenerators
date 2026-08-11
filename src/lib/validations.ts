import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  company: z.string().max(120).optional().or(z.literal("")),
  subject: z.enum(
    ["General Enquiry", "Generators", "Air Compressors", "Spare Parts", "Service & Maintenance", "Quotation"],
    { message: "Please select a subject" }
  ),
  message: z.string().min(10, "Please tell us a little more").max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  product: z.string().min(1, "Please select a product"),
  details: z.string().min(5, "Please add a few details").max(1000),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

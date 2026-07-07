import { z } from "zod";
import { services } from "./site";

export const consultationSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional().or(z.literal("")),
  company: z.string().optional().or(z.literal("")),
  service: z.enum(services as unknown as [string, ...string[]], {
    message: "Please select a service",
  }),
  message: z.string().min(10, "Tell us a little more (min 10 characters)"),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

import { loginSchema, signupSchema } from "@/validations/auth.validation";
import z from "zod";

export type SignupFormValues = z.infer<typeof signupSchema>;

export type LoginFormValues = z.infer<typeof loginSchema>;

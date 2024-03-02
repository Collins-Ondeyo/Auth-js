import * as z from "zod";

export const SignUpSchema = z.object({
    name: z.string().min(4, { message: "atleast 4 characters" }),
    email: z.string().email({ message: "invalid email address" }),
    password: z.string().min(5, { message: "atleast 5 characters" })
})

export type SignUpSchemaTypes = z.infer<typeof SignUpSchema>;
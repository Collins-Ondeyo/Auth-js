"use server"

import { signIn } from "@/auth";
import { SignInSchemaTypes } from "@/schemas";
import { CreateFormMessage } from "@/utils";
import { AuthError } from "next-auth";

export const signInUser = async (
    data: SignInSchemaTypes,
    callbackUrl?:string
) => {
    const res = await signIn("credentials", { email: data.email, password: data.password, redirectTo: callbackUrl || "/" })
        .then(() => {
            return CreateFormMessage({ success: true, message: "success" });
        })
        .catch(error => {
            if (error instanceof AuthError) {
                switch (error.type) {
                    case "CredentialsSignin":
                        return CreateFormMessage({ success: false, message: "Invalid credentials" });
                    default:
                        return CreateFormMessage({ success: false, message: "Something went wrong" });
                }
            }
            throw error
        });
    
    return res;
}
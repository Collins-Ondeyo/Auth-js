"use server"

import { signIn } from "@/auth";
import { SignInSchemaTypes } from "@/schemas";
import { CreateFormMessage } from "@/utils"
import { AuthError } from "next-auth";


export const SignInUser = async (
    data: SignInSchemaTypes,
    callbackUrl?: string
) => {
    const { email, password } = data;
    try {
        await signIn("credentials", { email, password, redirectTo:callbackUrl || "/" });
        return CreateFormMessage({ success: true, message: "success" });
    } catch (err) {
        if (err instanceof AuthError) {
            switch (err.type) {
                case "CredentialsSignin":
                    return CreateFormMessage({ success: false, message: "invalid credentials" });
                default:
                    return CreateFormMessage({ success: false, message: "Something went wrong" });
            }
        }
        
        throw err
    }
}
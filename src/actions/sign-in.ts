"use server"

import { SignInSchemaTypes } from "@/schemas";
import { CreateFormMessage } from "@/utils";


export const SignInUser = async (
    data: SignInSchemaTypes,
    callbackUrl?: string
) => {
    console.log(data)
    return CreateFormMessage({ success: true, message: "details submitted" });
}
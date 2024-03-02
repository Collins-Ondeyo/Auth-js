"use server"

import { SignUpSchemaTypes } from "@/schemas"
import { CreateFormMessage } from "@/utils"

export const Signup = async (data: SignUpSchemaTypes) => {
    console.log(data)
    return CreateFormMessage({ success: true, message: "data received" });
}
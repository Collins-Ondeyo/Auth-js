"use server"

import { SignUpSchemaTypes } from "@/schemas"
import { CreateFormMessage } from "@/utils"

import { prisma } from "@/lib/prisma"

export const Signup = async (data: SignUpSchemaTypes) => {
    const userExists = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    });
    if (userExists) return CreateFormMessage({ success: false, message: "user already registered" });

    try {
        await prisma.user.create({ data });
        return CreateFormMessage({ success: true, message: "user registered" });
    } catch (error) {
        return CreateFormMessage({ success: false, message: "An error occured" });
    }
}
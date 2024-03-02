"use server"

import { SignUpSchemaTypes } from "@/schemas"
import { CreateFormMessage } from "@/utils"

import { prisma } from "@/lib/prisma"

import bcryptjs from "bcryptjs"

export const UserSignUp = async (data: SignUpSchemaTypes) => {
    const userExists = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    });
    if (userExists) return CreateFormMessage({ success: false, message: "user already registered" });

    try {
        const {password, ...userData} = data;
        await prisma.user.create({
            data: {                
                ...userData,
                password:await bcryptjs.hash(password, 10)
            }
        });
        return CreateFormMessage({ success: true, message: "user registered" });
    } catch (error) {
        return CreateFormMessage({ success: false, message: "An error occured" });
    }
}
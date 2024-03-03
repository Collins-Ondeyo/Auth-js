"use server"

import { SignUpSchemaTypes } from "@/schemas"
import { CreateFormMessage } from "@/utils"

import { prisma } from "@/lib/prisma"

import bcryptjs from "bcryptjs"
import { generateVerificationToken, getUserByEmail } from "@/utils/db-utils"
import { SendVerificationEmail } from "@/utils/resend-utils"

export const UserSignUp = async (data: SignUpSchemaTypes) => {
    const userExists = await getUserByEmail(data.email);
    if (userExists) return CreateFormMessage({ success: false, message: "invalid credentials" });

    try {
        const {password, ...userData} = data;
        const newUser = await prisma.user.create({
            data: { ...userData, password: await bcryptjs.hash(password, 10) }
        });
        const token = await generateVerificationToken(newUser.id);
        const verificationUrl = `http://localhost:3000/activate?tokenId=${token?.token_id}`
        await SendVerificationEmail({
            to: newUser.email!,
            subject: "verify your email address",
            receiverName: newUser.name!,
            url: verificationUrl
        });

        return CreateFormMessage({ success: true, message: "Email sent" });
    } catch (error) {
        return CreateFormMessage({ success: false, message: "An error occured" });
    }
}
"use server"

import { prisma } from "@/lib/prisma";
import { CreateFormMessage } from "@/utils";

const createVerificationMessage = (messageObj: {
    success: boolean,
    cause?: "tokenExpired" | "tokenNotFound" | "unknownError" | "nullToken";
    message: string;
}) => {
    const { success, cause, message } = messageObj;
    return {success, cause, message}
}


export const verifyUserEmail = async (verificationTokenId:string) => {
    const token = await prisma.verificationToken.findFirst({
        where: {
            token_id:verificationTokenId
        }
    })
    if (!token) return createVerificationMessage({ success: false, cause: "tokenNotFound", message: "token not found" });

    if (token.expires < new Date(new Date().getTime())) {
        return createVerificationMessage({ success: false, cause: "tokenExpired", message: "the token has already expired" });
    };

    try {        
        await prisma.user.update({
            where: { id: token.user_id },
            data: {
                emailVerified: Date()
            }
        })
        return createVerificationMessage({ success: true, message: "email verified" });
    } catch (error) {
        return createVerificationMessage({success:false, cause:"unknownError", message:"an error occured"})
    }
};
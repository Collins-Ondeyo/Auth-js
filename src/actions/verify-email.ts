"use server"

import { prisma } from "@/lib/prisma"

const createVerificationEror = (errorObject: {
    cause: "tokenNotFound" | "expiredToken";
    message: string;
}) => {
    return { cause: errorObject.cause, message: errorObject.message };
}

const createVerificationSuccess = (message: string) => {
    return {ok:true, message}
}

export const verifyEmail = async (tokenId: string) => {
    const token = await prisma.verificationToken.findFirst({ where: { token_id: tokenId } });
    if (!token) {
        throw createVerificationEror({ cause: "tokenNotFound", message: "token not found in the database" });
    }
    if (token.expires < new Date(new Date().getTime())) {
        throw createVerificationEror({ cause: "expiredToken", message: "token has expired" });
    };

    await prisma.user.update({
        where: { id: token.user_id },
        data: { emailVerified: Date() }
    });

    return createVerificationSuccess("email verified");
 }
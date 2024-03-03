import { prisma } from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({ where: { email } });
    return user;
};


export const generateVerificationToken = async (userId: string) => {
    const expires = new Date(new Date().getTime() + 60 * 60 * 1000)
    try {
        const token = await prisma.verificationToken.create({
            data: {
                user_id: userId,
                expires
            }
        });
        return token;
    }
    catch (error) {
        throw error
    }
}
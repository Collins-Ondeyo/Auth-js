import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { prisma } from "@/lib/prisma";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(...inputs))
}



export const CreateFormMessage = (messageObject: {
    success: boolean,
    message: string;
}) => {
    const { success, message } = messageObject;
    return { success, message };
}


export const getUserByEmail = async (email:string) => {
    const user = await prisma.user.findFirst({ where: { email } });
    return user;
}
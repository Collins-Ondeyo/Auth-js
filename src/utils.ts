import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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



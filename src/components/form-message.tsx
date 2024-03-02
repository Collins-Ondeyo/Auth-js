import { AlertTriangle, CheckCircle } from "lucide-react";
import clsx from "clsx";

export const FormMessage = ({ messageObject, className }: {
    messageObject: {        
        success: boolean,
        message: string;
    },
    className?: string;
}) => {
    return (
        <div
            className={clsx("text-sm p-2 rounded-sm text-white flex flex-row justify-center gap-1", className, {
                "bg-emerald-500": messageObject.success,
                "bg-red-600":!messageObject.success
            })}
        >
            {
                messageObject.success ?
                    <CheckCircle className="w-[20px] h-[20px]" />
                    :
                    <AlertTriangle className="w-[20px] h-[20px]"/>
            }
            {messageObject.message}
        </div>
    )
}
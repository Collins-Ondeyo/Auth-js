"use client"

import { cn } from "@/utils";
import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react"

interface InputInterface extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    type: string;
    error?: string;
    className?: string;
}
export const Input = forwardRef<HTMLInputElement, InputInterface>(    
    ({placeholder, type, error, className, ...rest}, ref) => {
    return (
        <div>
            <input 
                className={
                    cn(
                        clsx("px-2 py-1 rounded-md  border-[2px] outline-none", {
                            "border-[red]": error,
                            "border-[black]": !error
                        }),
                        className
                    )
                }
                {...rest}
                ref={ref}
                placeholder={placeholder}
                type={type}
            />
            {error && (<div className="text-sm text-[red]">{error}</div>)}
        </div>
    )
}
)

export const Ex = forwardRef(
    () => {
        return (
            <div></div>
        )
    }
)
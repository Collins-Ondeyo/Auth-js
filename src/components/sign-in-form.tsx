"use client"

import {useForm, SubmitHandler} from "react-hook-form"

import Link from "next/link"
import { Input } from "./Input-Field"
import { SignInSchemaTypes } from "@/schemas"
import { useState, useTransition } from "react"
import { CreateFormMessage } from "@/utils"


export const SignInForm = () => {
    const [formMessage, setFormMessage] = useState<ReturnType<typeof CreateFormMessage> | undefined>(undefined)
    const [isSubmitting, startSubmitting] = useTransition();
    const { register, handleSubmit, formState: { errors } } = useForm<SignInSchemaTypes>();
    return (
        <form
            className="bg-[---color-primary] shadow-lg border px-3 py-5 rounded overflow-hidden flex flex-col justify-center gap-3"
        >
            <Input
                placeholder="email"
                type="email"
            />
            <Input
                placeholder="password"
                type="password"
            />

            <button
                disabled={false}
                className="bg-black text-white rounded-md py-1 cursor-pointer font-semibold disabled:opacity-85 disabled:cursor-progress"
                type="submit"
            >
                Submit
            </button>

            <Link
                className="text-center text-sm text-[blue] underline cursor-pointer"
                href={"/signin"}
            >
                already signed up
            </Link>
        </form>
    )
}
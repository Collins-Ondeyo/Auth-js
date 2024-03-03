"use client"

import {useForm, SubmitHandler} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"

import { Input } from "./Input-Field"
import { SignInSchema, SignInSchemaTypes } from "@/schemas"
import { CreateFormMessage } from "@/utils"
import { FormMessage } from "./form-message";
import { signInUser } from "@/actions/sign-in"



export const SignInForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") ?? undefined;

    const [formMessage, setFormMessage] = useState<ReturnType<typeof CreateFormMessage> | undefined>(undefined);
    const [isSubmitting, startSubmitting] = useTransition();
    const { register, handleSubmit, formState: { errors } } = useForm<SignInSchemaTypes>({
        resolver: zodResolver(SignInSchema)
    });

    const onSubmit: SubmitHandler<SignInSchemaTypes> = (data) => {
        setFormMessage(undefined)
        startSubmitting(async () => {
            signInUser(data, callbackUrl)
                .then((res) => {
                    setFormMessage(res)
                })
        });
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[---color-primary] shadow-lg border px-3 py-5 rounded overflow-hidden flex flex-col justify-center gap-3"
        >

            <Input
                error={errors.email?.message}
                {...register("email")}
                placeholder="email"
                type="email"
            />
            <Input
                error={errors.password?.message}
                {...register("password")}
                placeholder="password"
                type="password"
            />

            {formMessage && <FormMessage messageObject={formMessage}/>}
            <button
                disabled={isSubmitting}
                className="bg-black text-white rounded-md py-1 cursor-pointer font-semibold disabled:opacity-85 disabled:cursor-progress"
                type="submit"
            >
                {isSubmitting ? "Submitting...":"Submit"}
            </button>

            <Link
                className="text-center text-sm text-[blue] underline cursor-pointer"
                href={"/signup"}
            >
                not signed up
            </Link>
        </form>
    )
}
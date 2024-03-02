"use client"

import { SignUpSchema, SignUpSchemaTypes } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { Signup } from "@/actions/sign-up";

import { FormMessage } from "./form-message";
import { Input } from "./Input-Field";

export const SignUpForm = () => {
    const { register, handleSubmit, formState:{errors} } = useForm<SignUpSchemaTypes>({
        resolver: zodResolver(SignUpSchema)
    });

    const onSubmit: SubmitHandler<SignUpSchemaTypes> = (data) => {
        Signup(data)
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[---color-primary] shadow-lg border px-3 py-5 rounded overflow-hidden flex flex-col justify-center gap-3">

            <Input
                error={errors?.name?.message}
                type="text"
                placeholder="name"
                {...register("name")}
            />

            <Input
                error={errors.email?.message}
                type="email"
                placeholder="email"
                {...register("email")}
            />

            <Input
                error={errors.password?.message}
                {...register("password")}
                placeholder="password"
                type="password"
            />

            <FormMessage messageObject={ {success:true, message:"valid input"} } />

            <button
                className="bg-black text-white rounded-md py-1 cursor-pointer font-semibold"
                type="submit">
                Submit
            </button>
        </form>
    )
}
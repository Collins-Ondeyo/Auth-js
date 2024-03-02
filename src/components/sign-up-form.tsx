"use client"

import { useForm, SubmitHandler } from "react-hook-form";

export const SignUpForm = () => {
    const { register, handleSubmit } = useForm<{ name: string; email: string; password: string; }>();
    const onSubmit: SubmitHandler<{ name: string; email: string; password: string; }> = (data) => {
        console.log(data)
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[---color-primary] shadow-lg border px-3 py-5 rounded overflow-hidden flex flex-col justify-center gap-3">

            <input
                {...register("name")}
                placeholder="name"
                type="text"
                className="px-2 py-1 rounded-md border-[black] border-[2px] outline-none"
            />
            <input
                {...register("email")}
                placeholder="email"
                type="email"
                className="px-2 py-1 rounded-md border-[black] border-[2px] outline-none"
            />
            <input
                {...register("password")}
                placeholder="password"
                type="password"
                className="px-2 py-1 rounded-md border-[black] border-[2px] outline-none"
            />

            <button
                className="bg-black text-white rounded-md py-1 cursor-pointer font-semibold"
                type="submit">
                Submit
            </button>
        </form>
    )
}
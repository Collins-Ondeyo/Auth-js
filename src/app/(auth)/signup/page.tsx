import { SignUpForm } from "@/components/sign-up-form"

export default function SignUpPage() {
    return (
        <div className="h-[100vh] flex flex-col justify-center gap-3 items-center bg-white">
            <div className="text-2xl font-semibold">Sign Up</div>
            <SignUpForm/>
        </div>
    )
}
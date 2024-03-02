import { SignInForm } from "@/components/sign-in-form"
export default function SignInPage() {
    return (
        <div
            className="h-[100vh] flex flex-col justify-center gap-3 items-center">
            <div className="text-3xl font-semibold">Sign In</div>
            <SignInForm/>
        </div>
    )
}
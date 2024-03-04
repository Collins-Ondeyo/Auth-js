import { EmailVerificationCard } from "@/components/email-verification-card";

export default function ActivatePage() {

    return (
        <div className="h-[100vh] flex flex-col justify-center gap-2 items-center">
            <EmailVerificationCard/>
        </div>
    )
}
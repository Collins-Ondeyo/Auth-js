"use client"

import { verifyUserEmail } from "@/actions/verify-email";
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";


export const EmailVerificationCard = () => {
    const tokenId = useSearchParams().get("tokenId")
    const [verificationMessage, setVerificationMessage] = useState<Awaited<ReturnType<typeof verifyUserEmail>> | undefined>(undefined);

    useEffect(() => {
        if (!tokenId) {
            setVerificationMessage({ success: false, cause: "nullToken", message: "token is null" })
            return
        }

        verifyUserEmail(tokenId)
            .then(res => {
                setVerificationMessage(res);
            });
    }, [tokenId])

    return (
        <div className="px-3 py-2 shadow-lg border flex flex-col gap-2 items-center">
            <div className="font-semibold">Email Verification</div>
        </div>
    )
}
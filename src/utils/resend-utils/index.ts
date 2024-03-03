import { resend } from "@/lib/resend";

export const SendVerificationEmail = async (data : {
        to: string,
        subject: string,
        url: string,
        receiverName: string
}
) => {
    try {
        await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: data.to,
            subject: data.subject,
            html: `<p>Hi ${data.receiverName}, click <a href=${data.url}>here</a> to verify your email address </p>`
        })
    } catch (error) {
        throw error
    }
}
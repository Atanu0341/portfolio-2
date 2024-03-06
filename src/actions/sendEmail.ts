"use server"

import { Resend } from "resend"
import { getErrorMessage, validateString } from "../lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid messagel"
        }
    }

    try {

        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'atanumajumder2004@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            text: message as string,
        })
    }
    catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
}


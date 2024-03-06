"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import SubmitBtn from './SubmitBtn';
import { useSectionInView } from '../lib/hooks';
import { motion } from "framer-motion";
import { sendEmail } from '../actions/sendEmail';
import toast from 'react-hot-toast';

export default function Contact() {

    const { ref } = useSectionInView("Contact");

    return (
        <motion.section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6 ">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:atanumajumder2004@gmail.com">
                    atanumajumder2004@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form action={async (formData) => { const { data, error } = await sendEmail(formData); if (error) { toast.error(error); return } toast.success('Email sent successfully') }} className="mt-10 flex flex-col">
                <input type="email" name="senderEmail" placeholder="Your email" maxLength={500} className="h-14 px-4 rounded-lg border border-black/10 transition-all" required />
                <textarea className="h-52 my-3 rounded-lg border border-black/10 p-4 transition-all" name="message" placeholder="Your message" maxLength={5000} required />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}

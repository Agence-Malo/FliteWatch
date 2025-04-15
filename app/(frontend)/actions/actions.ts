'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const submit = async ({ formData, dialCode }: { formData: FormData; dialCode: string }) => {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    tel: formData.get('tel'),
    message: formData.get('message'),
  }

  if (
    !rawFormData.message ||
    typeof rawFormData.message !== 'string' ||
    !rawFormData.email ||
    typeof rawFormData.email !== 'string' ||
    !rawFormData.name ||
    typeof rawFormData.name !== 'string'
  ) {
    return { error: 'Invalid message' }
  }

  await resend.emails.send({
    from: `${rawFormData.name} <onboarding@resend.dev>`,
    to: `${process.env.MAIL_TO}`,
    replyTo: rawFormData.email,
    subject: 'Contact Request',
    text: `${rawFormData.message}\n\n${rawFormData.name}\n\n${rawFormData.email}\n${rawFormData.tel && typeof rawFormData.tel === 'string' && rawFormData.tel.length > 0 ? dialCode + rawFormData.tel : '(No phone number provided)'}`,
  })
}

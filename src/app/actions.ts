"use server";

import { contactSchema, type ContactFormValues } from "@/lib/validations";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please correct the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data: ContactFormValues = parsed.data;

  try {
    // Prefer Resend if configured, otherwise fall back to Nodemailer SMTP.
    if (process.env.RESEND_API_KEY) {
      await sendViaResend(data);
    } else if (process.env.SMTP_HOST) {
      await sendViaSmtp(data);
    } else {
      // No provider configured — log for local dev.
      console.info("[contact] enquiry received:", data);
    }
    return {
      ok: true,
      message:
        "Thank you! Your enquiry has been received. Our team will get back to you shortly.",
    };
  } catch (err) {
    console.error("[contact] failed to send:", err);
    return {
      ok: false,
      message:
        "Something went wrong sending your message. Please call us directly or try again.",
    };
  }
}

function buildBody(d: ContactFormValues) {
  return `New enquiry from the KGCS website\n\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nCompany: ${d.company || "—"}\nSubject: ${d.subject}\n\nMessage:\n${d.message}`;
}

async function sendViaResend(d: ContactFormValues) {

  const to = process.env.CONTACT_TO_EMAIL || "kenyasolutions23@gmail.com";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "KGCS Website <onboarding@resend.dev>",
      to: [to],
      reply_to: d.email,
      subject: `Website enquiry: ${d.subject}`,
      text: buildBody(d),
    }),
  });
  if (!res.ok) throw new Error(`Resend error ${res.status}`);
}

async function sendViaSmtp(d: ContactFormValues) {
  const nodemailer = await import("nodemailer");
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transport.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.CONTACT_TO_EMAIL || "kenyasolutions23@gmail.com",
    replyTo: d.email,
    subject: `Website enquiry: ${d.subject}`,
    text: buildBody(d),
  });
}

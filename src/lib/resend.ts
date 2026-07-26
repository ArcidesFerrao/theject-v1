import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

// export const NEWSLETTER_FROM = process.env.NEWSLETTER_FROM ?? "TheJect <onboarding@resend.dev>";

export const NEWSLETTER_FROM = process.env.NEWSLETTER_FROM ?? "TheJect <newsletter@evolurelabs.com>";
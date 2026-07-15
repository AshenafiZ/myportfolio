import { NextResponse } from "next/server";
<<<<<<< HEAD

export async function POST(req: Request) {
  try {
    const formData = await req.json(); 

    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzL80VpcKItReHDSYh9sC4efxbbFeDWNVIugQtEC19LM5NAUeoEdxfgH3KPoujebjg/exec"; 

    const response = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", 
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error submitting data",error }, { status: 500 });
  }
}
=======
import { Resend } from "resend";

export const runtime = "nodejs";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

function isValidPayload(data: Partial<ContactPayload>): data is ContactPayload {
  return Boolean(
    data.firstName &&
    data.lastName &&
    data.email &&
    data.phone &&
    data.message
  );
}

// Logs a submission to the Google Sheet via Apps Script. The script parses
// e.postData.contents as JSON, so the body must be JSON (not form-encoded).
async function logToSheet(data: ContactPayload) {
  const sheetUrl = process.env.GOOGLE_SHEET_URL;
  if (!sheetUrl) {
    throw new Error("GOOGLE_SHEET_URL is not configured");
  }

  const payload = JSON.stringify({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    service: data.service ?? "",
    message: data.message,
  });

  // Apps Script web apps can have slow cold starts, and occasionally drop a
  // request transiently — retry once before giving up.
  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20_000);

    try {
      const response = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Sheet logging failed with status ${response.status}`);
      }

      const text = await response.text();
      // The Apps Script returns an error payload with a 200 status on
      // internal failures (e.g. quota errors), so check the body too.
      if (text.includes('"status":"error"') || text.startsWith("Error:")) {
        throw new Error(`Apps Script reported an error: ${text}`);
      }

      return;
    } catch (err) {
      lastError = err;
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError;
}

// Sends a notification email via Resend so a flaky Apps Script mailer is
// no longer the only way a new lead reaches an inbox.
async function sendNotificationEmail(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    throw new Error("RESEND_API_KEY or CONTACT_EMAIL is not configured");
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: data.email,
    subject: `New portfolio inquiry from ${data.firstName} ${data.lastName}`,
    text: [
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service || "Not specified"}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}

export async function POST(req: Request) {
  let formData: Partial<ContactPayload>;

  try {
    formData = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  if (!isValidPayload(formData)) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  // Run both integrations independently so one failing (e.g. the sheet
  // being briefly unreachable) doesn't silently swallow the email, or
  // vice versa. Each failure is reported back individually.
  const [emailResult, sheetResult] = await Promise.allSettled([
    sendNotificationEmail(formData),
    logToSheet(formData),
  ]);

  const errors: string[] = [];
  if (emailResult.status === "rejected") {
    console.error("Email notification failed:", emailResult.reason);
    errors.push("email");
  }
  if (sheetResult.status === "rejected") {
    console.error("Sheet logging failed:", sheetResult.reason);
    errors.push("sheet");
  }

  if (errors.length === 2) {
    return NextResponse.json(
      { message: "Both email and sheet logging failed", failed: errors },
      { status: 502 }
    );
  }

  if (errors.length === 1) {
    // Partial success: the submission wasn't fully lost, but flag it.
    return NextResponse.json(
      { message: "Submitted with a partial failure", failed: errors },
      { status: 207 }
    );
  }

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
>>>>>>> redesign-and-fixes

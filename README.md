# Ashenafi Zewdie — Portfolio

Personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form: email + Google Sheet

The contact form (`app/contact/page.tsx`) posts to `app/api/submit/route.ts`, which does two things
independently:

1. **Emails you** via [Resend](https://resend.com) — a transactional email API with a generous free tier.
2. **Logs the submission to a Google Sheet** via a Google Apps Script "Web app" URL.

Each runs in parallel with its own error handling (`Promise.allSettled`), so if one fails the other
still goes through, and the response tells you which one failed instead of hiding it.

### Set up Resend

1. Create a free account at [resend.com](https://resend.com).
2. Verify a sending domain (or use `onboarding@resend.dev` for testing — it can only send to the
   email you signed up with).
3. Create an API key.
4. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=re_xxx
   CONTACT_EMAIL=ashenafizewdie19@gmail.com
   CONTACT_FROM_EMAIL=Portfolio <you@yourdomain.com>   # optional once you've verified a domain
   ```

### Set up the Google Sheet logging

Reuse your existing Apps Script Web App URL, or replace its `doPost` with this hardened version.
It appends to the sheet *first* and wraps the email send in its own try/catch, so a `MailApp`
failure (e.g. Gmail's 100-email/day quota) can no longer take down the sheet logging or the
response:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (!e || !e.postData || !e.postData.contents) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "No data received" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Invalid JSON" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    sheet.appendRow([data.firstName, data.lastName, data.email, data.service, data.message, data.phone, new Date()]);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Sheet write failed: " + err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Optional backup notification — the app already emails you via Resend,
  // so a failure here should never fail the whole request.
  try {
    MailApp.sendEmail(
      "ashenafizewdie19@gmail.com",
      "New form submission from " + data.firstName + " " + data.lastName,
      "Name: " + data.firstName + " " + data.lastName + "\n" +
      "Email: " + data.email + "\n" +
      "Service: " + data.service + "\n" +
      "Message: " + data.message + "\n" +
      "Date: " + new Date()
    );
  } catch (err) {
    // Swallow — the row is already saved, and Resend already sent the
    // primary notification. Logged so you can still see it in executions.
    console.error("MailApp failed: " + err.message);
  }

  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**Important:** if this `doPost` lives in the same Apps Script project as any other `doPost`
function (e.g. an unrelated image-upload script), delete the others or move them to a separate
project — Apps Script only runs the *last* `doPost` defined in a file, silently ignoring the rest.

After editing, use **Deploy → Manage deployments → Edit → New version**, or the URL won't pick up
your changes.

If submissions still silently stop after a while, check **Apps Script → Executions** in the
script editor for failed runs — that's usually a quota (`MailApp` free-tier limit is 100/day) or
an authorization that needs to be re-granted (open the script, run any function manually once to
re-trigger the permission prompt).

### Deploying (e.g. Vercel)

Add the same three environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`, `GOOGLE_SHEET_URL`,
and optionally `CONTACT_FROM_EMAIL`) in your hosting provider's dashboard — `.env.local` is only
read locally.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)

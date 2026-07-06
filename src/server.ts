import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

function jsonResponse(payload: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init?.headers ?? {}),
    },
  });
}

function getResendApiKey(env: unknown) {
  if (env && typeof env === "object" && "RESEND_API_KEY" in env) {
    const value = (env as { RESEND_API_KEY?: unknown }).RESEND_API_KEY;
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  const value = process.env.RESEND_API_KEY;
  return value?.trim();
}

function getContactToEmail(env: unknown) {
  if (env && typeof env === "object" && "CONTACT_TO_EMAIL" in env) {
    const value = (env as { CONTACT_TO_EMAIL?: unknown }).CONTACT_TO_EMAIL;
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  return process.env.CONTACT_TO_EMAIL?.trim() || "zulqurnainkkc786@gmail.com";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function handleContactRequest(request: Request, env: unknown) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, { status: 405 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message) {
    return jsonResponse({ error: "Name, email, and message are required" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return jsonResponse({ error: "Please enter a valid email address" }, { status: 400 });
  }

  const apiKey = getResendApiKey(env);
  if (!apiKey) {
    return jsonResponse({ error: "Email service is not configured" }, { status: 500 });
  }

  const contactToEmail = getContactToEmail(env);

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactToEmail],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error(`Resend failed: ${resendResponse.status} ${errorBody}`);
    return jsonResponse({ error: getResendErrorMessage(resendResponse.status, errorBody) }, { status: 502 });
  }

  return jsonResponse({ ok: true });
}

function getResendErrorMessage(status: number, body: string) {
  try {
    const payload = JSON.parse(body) as { message?: unknown };
    if (typeof payload.message === "string" && payload.message.trim()) {
      if (status === 403 && payload.message.includes("testing emails")) {
        return "Resend is in testing mode. Use the verified Resend account email, or verify a domain in Resend to send to another address.";
      }
      return payload.message;
    }
  } catch {
    // Fall through to the generic message.
  }

  return "Unable to send message right now";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/contact") {
        return await handleContactRequest(request, env);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

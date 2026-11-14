"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ContactForm() {
  const [draft, setDraft] = useState<{ href: string; text: string } | null>(
    null,
  );
  const [copyStatus, setCopyStatus] = useState("");

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get("interest")} — ${String(data.get("name")).trim()}`;
    const body = `Hello AUVERAI,\n\n${String(data.get("message")).trim()}\n\nName: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}\nCompany: ${String(data.get("company")).trim() || "Not specified"}\nInterest: ${data.get("interest")}`;
    setDraft({
      href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      text: `To: ${site.email}\nSubject: ${subject}\n\n${body}`,
    });
    setCopyStatus("");
  }

  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.text);
      setCopyStatus("Email draft copied.");
    } catch {
      setCopyStatus(
        "Copy isn’t available in this browser. You can select and copy the draft below.",
      );
    }
  }

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm shadow-black/3 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight">
        How can we help?
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Your project goals and priorities help us understand the support you
        need.
      </p>
      <form
        className="mt-7 space-y-5"
        onSubmit={prepareDraft}
        onChange={() => {
          setDraft(null);
          setCopyStatus("");
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-medium" htmlFor="name">
            Your name <span className="text-primary">*</span>
            <input
              className="contact-input"
              name="name"
              id="name"
              placeholder="Alex Morgan"
              autoComplete="name"
              required
              maxLength={100}
            />
          </label>
          <label className="text-xs font-medium" htmlFor="email">
            Email address <span className="text-primary">*</span>
            <input
              className="contact-input"
              name="email"
              id="email"
              type="email"
              placeholder="alex@company.com"
              autoComplete="email"
              required
              maxLength={200}
            />
          </label>
        </div>
        <label className="block text-xs font-medium" htmlFor="company">
          Company{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
          <input
            className="contact-input"
            name="company"
            id="company"
            placeholder="Your company"
            autoComplete="organization"
            maxLength={150}
          />
        </label>
        <div>
          <label className="block text-xs font-medium" htmlFor="interest">
            What would you like to explore?
          </label>
          <select
            className="contact-input"
            id="interest"
            name="interest"
            defaultValue="Business Software"
          >
            <option>Business Software</option>
            <option>AI & Automation</option>
            <option>Systems integration</option>
            <option>Business process consultancy</option>
            <option>A partnership</option>
            <option>Something else</option>
          </select>
        </div>
        <label className="block text-xs font-medium" htmlFor="message">
          A little about your idea <span className="text-primary">*</span>
          <textarea
            className="contact-input h-32 resize-y py-3"
            id="message"
            name="message"
            placeholder="What are you working on? What would you like to make possible?"
            required
            minLength={10}
            maxLength={1800}
          />
        </label>
        <p className="text-xs leading-5 text-muted-foreground">
          This form prepares an email draft on your device. Nothing is sent
          until you send it from your email app.
        </p>
        <Button type="submit" className="h-11 w-full gap-3">
          Prepare email <ArrowUpRight className="size-4" />
        </Button>
      </form>
      {draft && (
        <div
          className="mt-6 rounded-lg border border-indigo-100 bg-indigo-50/40 p-5"
          role="status"
        >
          <p className="flex items-center gap-2 text-sm font-medium">
            <Check className="size-4 text-primary" /> Your draft is ready.
          </p>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            The draft can be reviewed and sent to {site.email} in your email app.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              nativeButton={false}
              render={
                <a href={draft.href}>
                  <Mail className="size-3.5" /> Open email app
                </a>
              }
              className="h-9 px-3"
            />
            <Button
              type="button"
              variant="outline"
              className="h-9 bg-card px-3"
              onClick={copyDraft}
            >
              <Copy className="size-3.5" /> Copy draft
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
            {copyStatus}
          </p>
          <details className="mt-3 text-xs text-muted-foreground">
            <summary className="py-2">View email draft</summary>
            <pre className="mt-2 whitespace-pre-wrap break-words font-sans leading-6">
              {draft.text}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}

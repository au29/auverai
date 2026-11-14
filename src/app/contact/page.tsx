import type { Metadata } from "next";
import { ArrowUpRight, Globe2, Mail } from "lucide-react";
import { Eyebrow } from "@/components/sections";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we can help",
  description:
    "AUVERAI helps businesses with business software, AI and automation. Project and partnership enquiries: contact@auverai.com.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main
      id="main"
      className="page-container grid gap-14 py-18 sm:py-24 lg:grid-cols-[1fr_1.12fr]"
    >
      <div>
        <Eyebrow>How we can help</Eyebrow>
        <h1 className="page-title mt-6">
          Helping your
          <br />
          business move
          <br />
          <span className="text-primary">forward.</span>
        </h1>
        <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground">
          We help businesses develop software, apply AI and automate workflows.
          We welcome project and partnership enquiries.
        </p>
        <div className="mt-12 space-y-6">
          <div className="flex gap-4">
            <span className="flex size-10 items-center justify-center rounded-lg border bg-card">
              <Mail className="size-4 text-zinc-500" />
            </span>
            <div>
              <p className="text-[11px] text-muted-foreground">
                Project & partnership enquiries
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-flex items-center gap-3 text-sm font-medium hover:text-primary"
              >
                {site.email}
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex size-10 items-center justify-center rounded-lg border bg-card">
              <Globe2 className="size-4 text-zinc-500" />
            </span>
            <div>
              <p className="text-[11px] text-muted-foreground">
                Based in Dubai
              </p>
              <p className="mt-1 text-sm font-medium">
                Open to conversations worldwide.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-10 max-w-sm text-xs leading-6 text-muted-foreground">
          {site.legalName} is registered in Meydan Free Zone, Dubai, UAE.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}

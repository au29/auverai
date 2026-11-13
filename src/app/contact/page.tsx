import type { Metadata } from "next";
import { ArrowUpRight, Globe2, Mail } from "lucide-react";
import { Eyebrow } from "@/components/sections";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Let’s build something",
  description:
    "Talk to AUVERAI about a new venture, AI, software engineering or a technology partnership. Contact us at contact@auverai.com.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main
      id="main"
      className="page-container grid gap-14 py-18 sm:py-24 lg:grid-cols-[1fr_1.12fr]"
    >
      <div>
        <Eyebrow>Start a conversation</Eyebrow>
        <h1 className="page-title mt-6">
          Good things
          <br />
          start with
          <br />
          <span className="text-primary">“what if?”</span>
        </h1>
        <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground">
          Bring us your idea, your challenge, or a question worth exploring.
          Let’s see what we could build together.
        </p>
        <div className="mt-12 space-y-6">
          <div className="flex gap-4">
            <span className="flex size-10 items-center justify-center rounded-lg border bg-card">
              <Mail className="size-4 text-zinc-500" />
            </span>
            <div>
              <p className="text-[11px] text-muted-foreground">
                Prefer a direct introduction?
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
          AUVERAI Innovations is being established in Meydan Free Zone, UAE.
          Project scope and availability are confirmed through direct
          discussion.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}

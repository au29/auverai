import type { Metadata } from "next";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { Eyebrow, ContactCTA, VentureIcon } from "@/components/sections";
import { ventures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our venture ecosystem",
  description:
    "AUVERAI’s intended ecosystem spans independent digital ventures, from specialist communities to AI-powered business software.",
  alternates: { canonical: "/ventures/" },
};

export default function VenturesPage() {
  return (
    <main id="main">
      <section className="page-container pt-18 pb-16 sm:pt-24">
        <Eyebrow>Our intended ecosystem</Eyebrow>
        <h1 className="page-title mt-6">
          One ambition.
          <br />
          Many possibilities.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Different products. Distinct identities. A shared belief in technology
          that solves real problems.
        </p>
        <div className="mt-10 rounded-xl border bg-card/70 p-5 text-sm leading-6 text-muted-foreground">
          <span className="font-medium text-foreground">
            A vision taking shape.
          </span>{" "}
          These projects represent AUVERAI’s intended product and venture
          ecosystem. Their inclusion does not establish that every venture is
          already legally owned or operational under AUVERAI.
        </div>
      </section>
      <section className="page-container pb-20" aria-label="Planned ventures">
        <div className="space-y-5">
          {ventures.map((v, i) => (
            <article
              id={v.id}
              key={v.id}
              className="grid overflow-hidden rounded-2xl border bg-card md:grid-cols-[.8fr_1.2fr]"
            >
              <div className={`venture-cover cover-${v.color}`}>
                <span className="absolute top-6 left-6 font-mono text-[10px] opacity-50">
                  AUVERAI / VENTURE 0{i + 1}
                </span>
                <div className="cover-grid" />
                <VentureIcon name={v.initials} color={v.color} large />
                <p className="relative mt-6 text-3xl font-semibold tracking-tight">
                  {v.name}
                </p>
                <span className="absolute bottom-6 left-6 text-[10px] tracking-widest uppercase opacity-60">
                  Intended ecosystem
                </span>
              </div>
              <div className="p-7 sm:p-10">
                <Eyebrow>{v.category}</Eyebrow>
                <h2 className="mt-5 text-2xl leading-snug font-semibold tracking-tight">
                  {v.description}
                </h2>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {v.detail}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {v.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-md border bg-background px-2.5 py-1.5 text-[11px] text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact/"
                  className="mt-7 inline-flex items-center gap-3 text-sm font-medium hover:text-primary"
                >
                  Discuss this venture <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-5 rounded-2xl border border-dashed p-7">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border bg-card">
            <Plus className="size-5 text-primary" />
          </span>
          <div>
            <h2 className="text-base font-medium">
              And room for what comes next.
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              We remain open to new industries, original ideas and opportunities
              worth building.
            </p>
          </div>
        </div>
        <p className="mt-7 text-xs leading-6 text-muted-foreground">
          Trading-related ventures describe technology concepts. AUVERAI is not
          presented here as a provider of regulated financial services.
        </p>
      </section>
      <div className="border-t">
        <ContactCTA />
      </div>
    </main>
  );
}

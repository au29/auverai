import type { Metadata } from "next";
import { ArrowUpRight, Focus, Globe2, Layers3 } from "lucide-react";
import Link from "next/link";
import { Eyebrow, ContactCTA } from "@/components/sections";
import { BrandMark } from "@/components/brand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About AUVERAI",
  description:
    "AUVERAI Innovations is a technology and venture-building company registered in Meydan Free Zone, Dubai, UAE.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-container pt-18 pb-16 sm:pt-24">
        <Eyebrow>Technology with a purpose</Eyebrow>
        <h1 className="page-title mt-6">
          Ideas are a beginning.
          <br />
          We’re here for the building.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
          AUVERAI Innovations brings technology, intelligence and practical
          business thinking together to turn possibility into something real.
        </p>
      </section>
      <section className="page-container">
        <div className="about-wide-art" aria-hidden="true">
          <div className="architecture-lines" />
          <BrandMark className="size-36 text-zinc-300 sm:size-52" />
          <div className="absolute inset-x-7 bottom-7 flex justify-between font-mono text-[10px] tracking-widest text-zinc-500">
            <span>INDEPENDENT THINKING</span>
            <span>DUBAI → WORLD</span>
          </div>
        </div>
      </section>
      <section className="page-container section-space grid gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="section-title mt-5">
            Built around possibility.
            <br />
            Grounded in real work.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            {site.legalName} is a technology and venture-building company
            registered in Meydan Free Zone, Dubai, UAE. We create, develop and
            grow digital products, technology platforms and independent
            businesses.
          </p>
          <p>
            We believe useful innovation happens where disciplines meet. Product
            strategy informs design. Engineering makes ideas work. AI opens up
            new ways to operate. Business thinking gives it all a direction.
          </p>
          <p>
            We develop our own ventures and support other businesses through
            dedicated technology and AI services. This combination
            gives us room to follow worthwhile problems across industries.
          </p>
        </div>
      </section>
      <section className="border-y bg-card/50 py-20">
        <div className="page-container">
          <Eyebrow>What guides us</Eyebrow>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Focus,
                title: "Technology with a purpose.",
                text: "We focus on real business needs and clear user experiences, so the technology we build helps people work more effectively.",
              },
              {
                icon: Layers3,
                title: "Care beyond delivery.",
                text: "We take a long-term view of the products and brands we develop, with attention to maintainability, usability and room to grow.",
              },
              {
                icon: Globe2,
                title: "Curiosity across industries.",
                text: "We explore new industries and technologies with an open mind, looking for opportunities to solve meaningful problems.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="size-6 text-primary" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="page-container section-space grid gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>Our ambition</Eyebrow>
          <h2 className="section-title mt-5">
            An ecosystem of ideas.
            <br />A lasting contribution.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-muted-foreground">
            Our vision is to build a global ecosystem of intelligent products
            and technology-driven businesses that create meaningful value for
            people and organisations.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            We pursue that vision one useful product, one thoughtful partnership and
            one well-built venture at a time.
          </p>
          <Link
            href="/ventures/"
            className="mt-7 inline-flex items-center gap-3 text-sm font-medium hover:text-primary"
          >
            Explore our venture concepts <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
      <div className="border-t">
        <ContactCTA />
      </div>
    </main>
  );
}

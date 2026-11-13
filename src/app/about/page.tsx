import type { Metadata } from "next";
import { ArrowUpRight, Focus, Globe2, Layers3 } from "lucide-react";
import Link from "next/link";
import { Eyebrow, ContactCTA } from "@/components/sections";
import { BrandMark } from "@/components/brand";

export const metadata: Metadata = {
  title: "About AUVERAI",
  description:
    "Meet AUVERAI Innovations, a Dubai-based technology and venture-building company being established in Meydan Free Zone.",
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
            AUVERAI is a Dubai-based technology and venture-building company
            being established in Meydan Free Zone, UAE. Our focus is to create,
            develop and grow digital products, technology platforms and
            independent businesses.
          </p>
          <p>
            We believe useful innovation happens where disciplines meet. Product
            strategy informs design. Engineering makes ideas work. AI opens up
            new ways to operate. Business thinking gives it all a direction.
          </p>
          <p>
            Our model brings together developing our own ventures and helping
            external businesses through dedicated technology and AI services. It
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
                title: "Useful over complicated.",
                text: "Start with a real need. Keep the experience clear. Make technology serve the people who use it.",
              },
              {
                icon: Layers3,
                title: "Build with ownership.",
                text: "Think beyond a delivery date. Develop products and brands with a clear purpose and a long-term direction.",
              },
              {
                icon: Globe2,
                title: "Stay open to possibility.",
                text: "Let good questions lead to new ideas. Remain curious about industries, technologies and opportunities.",
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
            We aim to do that one useful product, one thoughtful partnership and
            one well-built venture at a time.
          </p>
          <Link
            href="/ventures/"
            className="mt-7 inline-flex items-center gap-3 text-sm font-medium hover:text-primary"
          >
            Explore our intended ecosystem <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
      <div className="border-t">
        <ContactCTA />
      </div>
    </main>
  );
}

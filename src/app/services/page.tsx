import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Eyebrow, ContactCTA, ServiceIcon } from "@/components/sections";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Software & AI Services",
  description:
    "AUVERAI provides business software, AI and automation services, including application development, software publishing, systems integration and process consultancy.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <main id="main">
      <section className="page-container pt-18 pb-16 sm:pt-24">
        <Eyebrow>Our services</Eyebrow>
        <h1 className="page-title mt-6">
          Better tools.
          <br />
          Better ways of working.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          We help businesses organise information, connect their systems and
          improve everyday processes through software, AI and automation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="rounded-full border bg-card px-4 py-2.5 text-xs font-medium transition-colors hover:border-primary/30 hover:text-primary"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </section>
      <section className="page-container pb-20" aria-label="Service areas">
        <div className="space-y-6">
          {services.map((service, i) => (
            <article
              id={service.id}
              key={service.id}
              className="grid scroll-mt-28 overflow-hidden rounded-2xl border bg-card md:grid-cols-[.75fr_1.25fr]"
            >
              <div className={`service-cover cover-${service.color}`}>
                <span className="absolute top-6 left-6 font-mono text-[10px] tracking-widest opacity-50">
                  AUVERAI / SERVICE 0{i + 1}
                </span>
                <div className="cover-grid" />
                <ServiceIcon id={service.id} color={service.color} large />
                <p className="relative mt-6 text-center text-3xl font-semibold tracking-tight">
                  {service.name}
                </p>
                <span className="absolute bottom-6 left-6 text-[10px] tracking-widest uppercase opacity-60">
                  Technology for business
                </span>
              </div>
              <div className="p-7 sm:p-10">
                <Eyebrow>{service.category}</Eyebrow>
                <h2 className="mt-5 text-2xl leading-snug font-semibold tracking-tight">
                  {service.description}
                </h2>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {service.detail}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.focus.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-md border bg-background px-2.5 py-1.5 text-[11px] text-muted-foreground"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
                <div className="mt-8 space-y-5 border-t pt-7">
                  {service.areas.map((area) => (
                    <div key={area.name}>
                      <h3 className="text-sm font-medium">{area.name}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact/"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-medium hover:text-primary"
                >
                  Discuss your requirements <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">
          Our work is shaped around each business’s goals, existing tools and
          operational needs. We agree on the approach and scope before
          implementation begins.
        </p>
      </section>
      <div className="border-t">
        <ContactCTA />
      </div>
    </main>
  );
}

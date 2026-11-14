import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Compass,
  Globe2,
  Layers3,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CapabilityMap,
  ProductIllustration,
  WorkflowIllustration,
  EngineeringIllustration,
  StrategyIllustration,
} from "@/components/illustrations";
import { services } from "@/lib/content";
import { BrandMark } from "@/components/brand";

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`eyebrow ${light ? "text-zinc-400" : "text-muted-foreground"}`}
    >
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </p>
  );
}

// Tailark Quartz hero-section-1, adapted with an AUVERAI capability map.
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 sm:pt-22">
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-7 flex justify-center">
          <Eyebrow>Technology. Intelligence. Innovation.</Eyebrow>
        </div>
        <h1 className="hero-heading">
          Building <span className="text-primary">what’s next.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-balance text-muted-foreground sm:text-lg">
          We build business software and AI solutions
          <br className="hidden sm:block" /> that help companies work more effectively.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            className="h-11 gap-5 px-5 shadow-sm"
            nativeButton={false}
            render={
              <Link href="/services/">
                Explore our services <ArrowUpRight className="size-4" />
              </Link>
            }
          />
          <Button
            variant="outline"
            className="h-11 gap-5 bg-card px-5 shadow-xs"
            nativeButton={false}
            render={
              <Link href="/contact/">
                Build with us <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>
      </div>
      <div className="mx-auto mt-9 max-w-6xl px-4 sm:mt-6">
        <CapabilityMap />
      </div>
      <div className="mx-auto mt-1 flex max-w-6xl items-center justify-between gap-3 border-t px-6 pt-7 text-[11px] tracking-wide text-muted-foreground">
        <span className="flex items-center gap-2">
          <Globe2 className="size-3.5" /> Based in Dubai. Built for a connected
          world.
        </span>
        <a
          href="#capabilities"
          className="flex items-center gap-2 hover:text-foreground"
        >
          <span className="hidden sm:inline">Discover AUVERAI</span>
          <ArrowDown className="size-3.5" />
        </a>
      </div>
    </section>
  );
}

const capabilities = [
  {
    icon: Layers3,
    number: "01",
    title: "We develop business software.",
    description:
      "We design, develop and publish business applications that help teams manage information, coordinate work and improve everyday operations.",
    tags: ["Business applications", "Software publishing"],
    Illustration: ProductIllustration,
  },
  {
    icon: Workflow,
    number: "02",
    title: "We put AI to work.",
    description:
      "We help businesses apply AI and automation to reduce repetitive tasks, connect workflows and give their teams more time for valuable work.",
    tags: ["Applied AI", "Automation & agents"],
    Illustration: WorkflowIllustration,
  },
  {
    icon: Code2,
    number: "03",
    title: "We connect business systems.",
    description:
      "We help businesses connect their applications and data so teams can work across tools with fewer manual steps.",
    tags: ["Systems integration", "Connected data"],
    Illustration: EngineeringIllustration,
  },
  {
    icon: Compass,
    number: "04",
    title: "We improve business processes.",
    description:
      "We help businesses review their workflows, plan technology improvements and turn operational challenges into practical software and automation projects.",
    tags: ["Process consultancy", "Technology planning"],
    Illustration: StrategyIllustration,
  },
];

// The paired subgrid panels follow Tailark Quartz features-1.
export function Capabilities() {
  return (
    <section id="capabilities" className="section-space">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="section-title mt-5">
              Different disciplines.
              <br />
              One shared ambition.
            </h2>
          </div>
          <p className="section-description">
            We bring software, AI and process expertise together to help
            businesses work more effectively and make better use of technology.
          </p>
        </div>
        <div className="capability-grid relative mt-12 grid overflow-hidden rounded-2xl border border-transparent bg-card/50 shadow-md shadow-black/5 ring-1 ring-border md:grid-cols-2">
          {capabilities.map(
            ({
              icon: Icon,
              number,
              title,
              description,
              tags,
              Illustration,
            }) => (
              <article
                key={number}
                className="capability-card relative flex min-w-0 flex-col overflow-hidden p-7 pb-0 sm:p-9 sm:pb-0"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-lg border bg-card shadow-xs">
                    <Icon className="size-4 text-zinc-600" />
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400">
                    / {number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border bg-card/70 px-2.5 py-1 text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-1 items-end">
                  <Illustration />
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export function ServiceIcon({
  id,
  color,
  large = false,
}: {
  id: string;
  color: string;
  large?: boolean;
}) {
  const Icon = id === "business-software" ? Layers3 : Workflow;
  return (
    <span
      className={`service-icon service-${color} ${large ? "service-icon-large" : ""}`}
      aria-hidden="true"
    >
      <Icon className={large ? "size-10" : "size-5"} />
    </span>
  );
}

export function ServiceAreas() {
  return (
    <section
      id="services"
      className="dark relative overflow-hidden bg-background py-22 text-foreground sm:py-28"
    >
      <div className="page-container relative z-10">
        <div className="section-heading">
          <div>
            <Eyebrow light>Our service areas</Eyebrow>
            <h2 className="section-title mt-5">
              Software that connects.
              <br />
              Automation that helps.
            </h2>
          </div>
          <p className="section-description">
            Two areas of focus, shaped around real business needs. We help
            companies organise their work, connect their tools and put
            technology to practical use.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              href={`/services/#${service.id}`}
              key={service.id}
              className="group rounded-xl border bg-card p-6 transition-colors hover:border-white/20 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <ServiceIcon id={service.id} color={service.color} />
                <ArrowUpRight className="size-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
              <p className="mt-9 text-[10px] tracking-[.12em] text-zinc-400 uppercase">
                {service.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-5 flex justify-end border-b border-white/10 pb-7">
          <Link
            href="/services/"
            className="flex items-center gap-3 text-sm text-zinc-200 hover:text-white"
          >
            Explore our services <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Three-column progression adapted from Tailark Quartz how-it-works-1.
export function Approach() {
  const steps = [
    {
      number: "01",
      title: "We understand the work.",
      body: "We work with businesses to understand their goals, existing tools and day-to-day processes before shaping a software or automation solution.",
      labels: ["Research", "Discovery", "Strategy"],
      icon: Compass,
    },
    {
      number: "02",
      title: "We develop the solution.",
      body: "We combine software design, engineering and AI integration to build, configure and test solutions around the way a business operates.",
      labels: ["Design", "Engineering", "Validation"],
      icon: Code2,
    },
    {
      number: "03",
      title: "We support the next step.",
      body: "We help businesses introduce new tools, refine workflows and improve their solutions as operational needs evolve.",
      labels: ["Rollout", "Support", "Improvement"],
      icon: Layers3,
    },
  ];
  return (
    <section id="approach" className="section-space">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="section-title mt-5">
              Curiosity starts it.
              <br />
              Execution makes it matter.
            </h2>
          </div>
          <p className="section-description">
            Our approach connects business goals with practical delivery. We
            support each stage, from understanding an operational need to
            developing and improving the solution.
          </p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map(({ number, title, body, labels, icon: Icon }) => (
            <article key={number} className="process-card">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border bg-card shadow-sm">
                  <Icon className="size-5 text-zinc-600" />
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs text-zinc-400">
                  {number}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {body}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] text-zinc-500">
                {labels.map((l, i) => (
                  <span key={l} className="contents">
                    <span className="rounded-md border bg-card/60 px-2 py-1">
                      {l}
                    </span>
                    {i < 2 && <ArrowRight className="size-2.5 text-zinc-400" />}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="pb-24">
      <div className="page-container">
        <div className="grid overflow-hidden rounded-2xl border bg-card md:grid-cols-2">
          <div className="about-art" aria-hidden="true">
            <div className="architecture-lines" />
            <BrandMark className="about-mark" />
            <div className="absolute inset-x-7 bottom-7 flex justify-between font-mono text-[9px] tracking-widest text-zinc-500">
              <span>DUBAI, UAE</span>
              <span>25.20° N / 55.27° E</span>
            </div>
          </div>
          <div className="p-8 sm:p-12">
            <Eyebrow>Meet AUVERAI</Eyebrow>
            <h2 className="mt-6 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Rooted in Dubai.
              <br />
              Open to possibility.
            </h2>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              AUVERAI is a software and business technology company registered
              in Meydan Free Zone, Dubai. We believe the best way to shape the
              future is to build something useful.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              We help businesses develop useful applications, apply AI and
              automate workflows, with practical support from planning through
              implementation.
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-4 text-sm font-medium hover:text-primary"
              href="/about/"
            >
              Get to know AUVERAI <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-7 flex size-13 items-center justify-center rounded-2xl border bg-card shadow-sm">
          <BrandMark className="size-8" />
        </div>
        <Eyebrow>Technology shaped around your business</Eyebrow>
        <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-.045em] sm:text-6xl">
          What could we build together?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-balance text-muted-foreground">
          We help businesses turn new ideas and complex challenges into
          practical digital solutions.
        </p>
        <Button
          className="mt-8 h-11 gap-5 px-5 shadow-sm"
          nativeButton={false}
          render={
            <Link href="/contact/">
              Start a conversation <ArrowUpRight className="size-4" />
            </Link>
          }
        />
      </div>
    </section>
  );
}

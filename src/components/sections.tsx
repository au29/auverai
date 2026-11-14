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
  VentureMap,
  ProductIllustration,
  WorkflowIllustration,
  EngineeringIllustration,
  StrategyIllustration,
} from "@/components/illustrations";
import { ventures } from "@/lib/content";
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
          We turn ambitious ideas into intelligent products
          <br className="hidden sm:block" /> and technology-driven businesses.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            className="h-11 gap-5 px-5 shadow-sm"
            nativeButton={false}
            render={
              <Link href="/ventures/">
                Explore our ventures <ArrowUpRight className="size-4" />
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
        <VentureMap />
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
    title: "Ideas into independent ventures.",
    description:
      "We bring product thinking, design and engineering together to create digital businesses with a purpose of their own.",
    tags: ["Venture building", "SaaS & digital products"],
    Illustration: ProductIllustration,
  },
  {
    icon: Workflow,
    number: "02",
    title: "Intelligence that does the work.",
    description:
      "Practical AI and connected workflows that help businesses spend less time on repetitive tasks and more time moving forward.",
    tags: ["Applied AI", "Automation & agents"],
    Illustration: WorkflowIllustration,
  },
  {
    icon: Code2,
    number: "03",
    title: "Strong ideas. Strong foundations.",
    description:
      "Thoughtful interfaces, dependable software and scalable infrastructure. Built with the care that lasting products deserve.",
    tags: ["Software engineering", "Platforms & infrastructure"],
    Illustration: EngineeringIllustration,
  },
  {
    icon: Compass,
    number: "04",
    title: "A clearer path to what’s possible.",
    description:
      "We connect technology and business thinking to find useful opportunities, shape better experiences and bring new ideas to life.",
    tags: ["Product strategy", "Digital innovation"],
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
            The capabilities behind our ventures—and the technology services
            we offer to help other businesses build what comes next.
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

export function VentureIcon({
  name,
  color,
  large = false,
}: {
  name: string;
  color: string;
  large?: boolean;
}) {
  return (
    <span
      className={`venture-icon venture-${color} ${large ? "venture-icon-large" : ""}`}
    >
      {name}
    </span>
  );
}

export function Ecosystem() {
  return (
    <section
      id="ventures"
      className="dark relative overflow-hidden bg-background py-22 text-foreground sm:py-28"
    >
      <div className="page-container relative z-10">
        <div className="section-heading">
          <div>
            <Eyebrow light>The venture ecosystem</Eyebrow>
            <h2 className="section-title mt-5">
              Independent ideas.
              <br />
              Connected by AUVERAI.
            </h2>
          </div>
          <p className="section-description">
            A vision for a family of focused digital businesses. Each with its
            own identity. Each built around a real opportunity.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {ventures.map((v) => (
            <Link
              href={`/ventures/#${v.id}`}
              key={v.id}
              className="group rounded-xl border bg-card p-6 transition-colors hover:border-white/20 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <VentureIcon name={v.initials} color={v.color} />
                <ArrowUpRight className="size-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
              <p className="mt-9 text-[10px] tracking-[.12em] text-zinc-400 uppercase">
                {v.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {v.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {v.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-5 flex justify-end border-b border-white/10 pb-7">
          <Link
            href="/ventures/"
            className="flex items-center gap-3 text-sm text-zinc-200 hover:text-white"
          >
            Explore the ecosystem <ArrowRight className="size-4" />
          </Link>
        </div>
        <p className="mt-5 max-w-2xl text-xs leading-5 text-zinc-400">
          These ventures form our intended ecosystem. Their inclusion does not
          imply that every venture is already operational or legally owned by
          AUVERAI.
        </p>
      </div>
    </section>
  );
}

// Three-column progression adapted from Tailark Quartz how-it-works-1.
export function Approach() {
  const steps = [
    {
      number: "01",
      title: "Find the right problem.",
      body: "Start with people, real needs and a clear opportunity. Ask better questions before deciding what to build.",
      labels: ["Listen", "Explore", "Define"],
      icon: Compass,
    },
    {
      number: "02",
      title: "Make the idea real.",
      body: "Connect strategy, design and engineering. Test assumptions, build with intent and focus on what is useful.",
      labels: ["Design", "Develop", "Validate"],
      icon: Code2,
    },
    {
      number: "03",
      title: "Build for what comes next.",
      body: "Launch thoughtfully, learn from real use and keep improving. A product’s first release is only its beginning.",
      labels: ["Launch", "Learn", "Evolve"],
      icon: Layers3,
    },
  ];
  return (
    <section id="approach" className="section-space">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="section-title mt-5">
              Curiosity starts it.
              <br />
              Execution makes it matter.
            </h2>
          </div>
          <p className="section-description">
            Good technology is only part of the story. We believe the best
            businesses connect a meaningful problem with a well-built solution.
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
              AUVERAI is a technology and venture-building company registered
              in Meydan Free Zone, Dubai. We believe the best way to shape the
              future is to build something useful.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              We bring together technology, creativity and practical
              business thinking to develop ventures that can grow beyond a
              single industry.
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
          <BrandMark className="size-8 text-primary" />
        </div>
        <Eyebrow>Every venture starts with a conversation</Eyebrow>
        <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-.045em] sm:text-6xl">
          What could we build together?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-balance text-muted-foreground">
          An idea, a challenge, or a new possibility.
          <br />
          We’d like to hear what you have in mind.
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

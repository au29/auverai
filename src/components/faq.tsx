"use client";

// Adapted from Tailark Quartz faqs-1.
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section className="border-y py-20 sm:py-24">
      <div className="page-container grid gap-10 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          <p className="eyebrow text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />A little more
            clarity
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Good questions.
            <br />
            Straight answers.
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Curious about something else?
          </p>
          <Link
            href="/contact/"
            className="mt-2 inline-flex items-center gap-3 text-sm font-medium hover:text-primary"
          >
            Let’s have a conversation <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
        <div className="md:col-span-3">
          <Accordion defaultValue={["faq-0"]}>
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`faq-${i}`}
                className="rounded-xl px-5 py-2 data-open:border-transparent data-open:bg-card data-open:shadow-sm data-open:ring-1 data-open:shadow-black/5 data-open:ring-border"
              >
                <AccordionTrigger className="items-center gap-4 py-4 text-sm leading-6 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

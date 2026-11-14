import type { Metadata } from "next";
import {
  Hero,
  Capabilities,
  ServiceAreas,
  Approach,
  AboutPreview,
  ContactCTA,
} from "@/components/sections";
import { FAQ } from "@/components/faq";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Capabilities />
      <ServiceAreas />
      <Approach />
      <AboutPreview />
      <FAQ />
      <ContactCTA />
    </main>
  );
}

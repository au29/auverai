import type { Metadata } from "next";
import { Eyebrow } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website privacy",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-20">
      <Eyebrow>Website information</Eyebrow>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">
        Your privacy, in plain language.
      </h1>
      <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Using this website
          </h2>
          <p>
            This website is operated by {site.legalName}, a company registered
            in Meydan Free Zone, Dubai, UAE. It introduces our business software,
            AI and automation services. It does not require an account. We have not added
            advertising trackers or analytics cookies to this website.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Contacting AUVERAI
          </h2>
          <p>
            The contact form prepares an email draft in your browser. Its
            contents are not submitted to a website database. When you choose to
            open and send the draft using your email app, your email provider
            sends the message to AUVERAI. We use information you choose to send
            to understand and respond to your enquiry.
          </p>
          <p className="mt-3">
            Please avoid including passwords, financial account credentials or
            other sensitive information in an initial enquiry.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Technical delivery
          </h2>
          <p>
            Hosting and email providers may process technical information needed
            to deliver their services, such as network addresses and request
            information. Their own privacy terms also apply to those services.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Questions or requests
          </h2>
          <p>
            For questions about information you have shared with AUVERAI,
            contact{" "}
            <a
              className="text-primary underline underline-offset-4"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

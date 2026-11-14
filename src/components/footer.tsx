import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-card/50 pt-14 pb-6">
      <div className="page-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <Link href="/" aria-label="AUVERAI home">
              <Brand />
            </Link>
            <p className="mt-5 max-w-60 text-sm leading-6 text-muted-foreground">
              Business software.
              <br />
              Practical automation.
              <br />Better ways of working.
            </p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <div className="footer-links">
              <Link href="/#capabilities">Capabilities</Link>
              <Link href="/services/">Our services</Link>
              <Link href="/#approach">Our approach</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">Company</p>
            <div className="footer-links">
              <Link href="/about/">About AUVERAI</Link>
              <Link href="/contact/">Get in touch</Link>
              <Link href="/privacy/">Privacy</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">Let’s build something</p>
            <a
              className="mt-5 inline-flex items-center gap-2 text-sm hover:text-primary"
              href={`mailto:${site.email}`}
            >
              {site.email}
              <ArrowUpRight className="size-3.5" />
            </a>
            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              Dubai, United Arab Emirates
              <br />
              Thinking beyond borders.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t pt-6 text-[11px] text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} AUVERAI Innovations. All rights
            reserved.
          </p>
          <p>Technology. Intelligence. Innovation.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main id="main" className="page-container py-28 text-center">
      <p className="font-mono text-xs text-primary">
        404 / A DIFFERENT DIRECTION
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">
        This page hasn’t been built.
      </h1>
      <p className="mt-5 text-muted-foreground">
        Let’s get you back to what’s next.
      </p>
      <Button
        className="mt-8 h-11 gap-3 px-5"
        nativeButton={false}
        render={
          <Link href="/">
            <ArrowLeft className="size-4" /> Back to AUVERAI
          </Link>
        }
      />
    </main>
  );
}

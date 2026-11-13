import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 36 36"
      fill="none"
      className={cn("size-8", className)}
    >
      <path d="M3 29 14.4 7h7.2L10.2 29H3Z" fill="currentColor" />
      <path d="m22.6 10 10.4 19h-7.6l-6.5-11.8L22.6 10Z" fill="currentColor" />
      <path
        d="M15.1 24h7.4l2.8 5h-13l2.8-5Z"
        fill="currentColor"
        opacity=".5"
      />
    </svg>
  );
}

export function Brand({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark />
      <span className="text-[19px] font-semibold tracking-[.06em]">
        AUVERAI<span className="ml-0.5 text-primary">.</span>
      </span>
    </span>
  );
}

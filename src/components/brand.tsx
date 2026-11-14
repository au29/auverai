import { cn } from "@/lib/utils";
import { logo, symbol } from "@/lib/brand-assets.json";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("brand-mark relative inline-flex size-8 shrink-0 items-center justify-center", className)}
    >
      <img
        src={symbol.src}
        alt=""
        width={Math.round(symbol.width)}
        height={Math.round(symbol.height)}
        className="block h-auto w-full"
      />
    </span>
  );
}

export function Brand({ className }: { className?: string }) {
  return (
    <img
      src={logo.src}
      alt="AUVERAI"
      width={Math.round(logo.width)}
      height={Math.round(logo.height)}
      className={cn("block h-auto shrink-0", className)}
      style={{ width: logo.displayWidth }}
    />
  );
}

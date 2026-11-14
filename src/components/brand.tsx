import { cn } from "@/lib/utils";
import { logo, symbol } from "@/lib/brand-assets.json";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("brand-mark inline-flex size-8 shrink-0 items-center justify-center", className)}
    >
      <span
        className="relative block w-full"
        style={{ aspectRatio: `${symbol.width} / ${symbol.height}` }}
      >
        {symbol.parts.map((part) => (
          <img
            key={part.nodeId}
            src={part.src}
            alt=""
            width={Math.round(part.width)}
            height={Math.round(part.height)}
            className="absolute block max-w-none"
            style={{
              left: `${(part.x / symbol.width) * 100}%`,
              top: `${(part.y / symbol.height) * 100}%`,
              width: `${(part.width / symbol.width) * 100}%`,
              height: "auto",
            }}
          />
        ))}
      </span>
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

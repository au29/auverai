import {
  ArrowRight,
  Check,
  Code2,
  Command,
  Component,
  GitBranch,
  Layers3,
  Lightbulb,
  ScanLine,
  Workflow,
  Zap,
} from "lucide-react";
import { BrandMark } from "@/components/brand";

export function VentureMap() {
  return (
    <div
      className="venture-map"
      role="img"
      aria-label="AUVERAI connects venture building, artificial intelligence, engineering and business strategy."
    >
      <div className="map-grid" />
      <div className="map-orbit orbit-one" />
      <div className="map-orbit orbit-two" />
      <svg
        className="map-paths"
        viewBox="0 0 960 360"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path
          d="M260 102h90q30 0 30 30v18q0 30 30 30h70M700 102h-90q-30 0-30 30v18q0 30-30 30h-70M260 270h90q30 0 30-30v-30q0-30 30-30h70M700 270h-90q-30 0-30-30v-30q0-30-30-30h-70"
          stroke="#d4d4d8"
          strokeWidth="1.25"
        />
        <path
          d="M260 102h90q30 0 30 30v18q0 30 30 30h70M700 270h-90q-30 0-30-30v-30q0-30-30-30h-70"
          className="signal-path"
          stroke="#818cf8"
          strokeWidth="2"
          strokeDasharray="5 150"
        />
        {[
          [260, 102],
          [700, 102],
          [260, 270],
          [700, 270],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#f4f4f5"
            stroke="#a1a1aa"
          />
        ))}
      </svg>
      <div className="map-chip">
        <div className="chip-pins pins-left" />
        <div className="chip-pins pins-right" />
        <div className="chip-face">
          <BrandMark className="size-18 text-primary" />
        </div>
        <span>AUVERAI</span>
      </div>
      <div className="map-node node-venture">
        <span className="node-icon">
          <Layers3 />
        </span>
        <div>
          <span className="node-overline">01 / CREATE</span>
          <strong>Venture building</strong>
          <p>From possibility to product</p>
        </div>
        <span className="node-status" />
      </div>
      <div className="map-node node-ai">
        <span className="node-icon">
          <Workflow />
        </span>
        <div>
          <span className="node-overline">02 / CONNECT</span>
          <strong>Applied intelligence</strong>
          <p>Technology that works smarter</p>
        </div>
        <span className="node-status" />
      </div>
      <div className="map-node node-engineering">
        <span className="node-icon">
          <Code2 />
        </span>
        <div>
          <span className="node-overline">03 / BUILD</span>
          <strong>Software engineering</strong>
          <p>Made for the real world</p>
        </div>
        <span className="node-status" />
      </div>
      <div className="map-node node-growth">
        <span className="node-icon">
          <Component />
        </span>
        <div>
          <span className="node-overline">04 / EVOLVE</span>
          <strong>Digital innovation</strong>
          <p>Better ways of doing business</p>
        </div>
        <span className="node-status" />
      </div>
      <div className="map-caption">
        <span /> ONE CONNECTED WAY TO BUILD
      </div>
    </div>
  );
}

export function ProductIllustration() {
  return (
    <div className="product-illustration" aria-hidden="true">
      <div className="mini-app">
        <div className="mini-toolbar">
          <span className="flex gap-1">
            <i />
            <i />
            <i />
          </span>
          <span>From idea to impact</span>
          <Command className="size-3" />
        </div>
        <div className="mini-app-body">
          <div className="mini-sidebar">
            <BrandMark className="size-5" />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="flex-1 p-5">
            <div className="mb-5 flex items-center gap-2 text-xs font-medium">
              <span className="rounded bg-indigo-50 p-1.5 text-indigo-500">
                <Layers3 className="size-3.5" />
              </span>{" "}
              Your next venture{" "}
              <span className="ml-auto rounded-full border px-2 py-1 text-[9px] text-zinc-500">
                Product roadmap
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Discover", "Build", "Launch"].map((t, i) => (
                <div key={t} className="rounded-md bg-zinc-50 p-2.5">
                  <div className="mb-3 flex items-center gap-1.5 text-[10px] text-zinc-500">
                    <span
                      className={
                        i === 1
                          ? "size-1.5 rounded-full bg-indigo-400"
                          : "size-1.5 rounded-full bg-zinc-300"
                      }
                    />
                    {t}
                  </div>
                  <div className="mini-task">
                    <span />
                    <span />
                    <small>
                      {["Opportunity", "Prototype", "Go to market"][i]}
                    </small>
                  </div>
                  <div className="mini-task mt-2">
                    <span />
                    <small>
                      {["Research", "Experience", "Learn & improve"][i]}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowIllustration() {
  return (
    <div className="workflow-illustration" aria-hidden="true">
      <div className="workflow-line" />
      <div className="flow-box flow-start">
        <span className="rounded-md bg-amber-50 p-2 text-amber-600">
          <Zap className="size-4" />
        </span>
        <div>
          <span className="text-[10px] text-zinc-500">TRIGGER</span>
          <p className="text-xs font-medium">A new opportunity</p>
        </div>
        <Check className="ml-auto size-3 text-zinc-400" />
      </div>
      <div className="flow-box flow-mid">
        <span className="rounded-md bg-indigo-50 p-2 text-primary">
          <BrandMark className="size-4" />
        </span>
        <div>
          <span className="text-[10px] text-zinc-500">INTELLIGENCE</span>
          <p className="text-xs font-medium">Understand. Decide. Act.</p>
        </div>
        <span className="ml-auto size-1.5 rounded-full bg-indigo-400" />
      </div>
      <div className="flex justify-center gap-4">
        <div className="flow-result">
          <Check className="size-3 text-emerald-600" /> Less busywork
        </div>
        <div className="flow-result">
          <ArrowRight className="size-3 text-primary" /> More possibility
        </div>
      </div>
    </div>
  );
}

export function EngineeringIllustration() {
  return (
    <div className="code-illustration" aria-hidden="true">
      <div className="mini-toolbar">
        <span className="flex items-center gap-2">
          <Code2 className="size-3.5" /> built-with-purpose.ts
        </span>
        <GitBranch className="size-3" />
      </div>
      <div className="space-y-2 p-5 font-mono text-[11px] leading-relaxed">
        <div>
          <span className="mr-5 text-zinc-300">01</span>
          <span className="text-violet-500">const</span> foundation = {"{"}
        </div>
        <div>
          <span className="mr-5 text-zinc-300">02</span>&nbsp; experience:{" "}
          <span className="text-emerald-600">&quot;human-first&quot;</span>,
        </div>
        <div>
          <span className="mr-5 text-zinc-300">03</span>&nbsp; architecture:{" "}
          <span className="text-emerald-600">&quot;built to scale&quot;</span>,
        </div>
        <div>
          <span className="mr-5 text-zinc-300">04</span>&nbsp; details:{" "}
          <span className="text-emerald-600">
            &quot;never an afterthought&quot;
          </span>
        </div>
        <div>
          <span className="mr-5 text-zinc-300">05</span>
          {"}"};
        </div>
      </div>
      <div className="flex gap-4 border-t px-5 py-3 text-[10px] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="size-1 rounded-full bg-emerald-500" /> Thoughtfully
          engineered
        </span>
        <span className="ml-auto">AUVERAI / BUILD</span>
      </div>
    </div>
  );
}

export function StrategyIllustration() {
  return (
    <div className="strategy-illustration" aria-hidden="true">
      <div className="strategy-card strategy-back">
        <ScanLine className="size-5 text-zinc-400" />
        <span>See the opportunity</span>
      </div>
      <div className="strategy-card strategy-front">
        <span className="mb-4 inline-flex rounded-lg border bg-white p-2 shadow-xs">
          <Lightbulb className="size-5 text-primary" />
        </span>
        <p className="text-sm font-medium">Clarity before complexity.</p>
        <p className="mt-2 max-w-50 text-xs leading-relaxed text-zinc-500">
          The right problem. A useful solution. A clear way forward.
        </p>
        <div className="mt-5 flex gap-1.5">
          {["Strategy", "Design", "Growth"].map((t) => (
            <span
              key={t}
              className="rounded border bg-zinc-50 px-2 py-1 text-[9px] text-zinc-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

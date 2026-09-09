import Link from "next/link";
import { biz } from "@/lib/business";

export function Section({
  children,
  pad = "py-16 sm:py-20",
}: {
  children: React.ReactNode;
  /** Tailwind vertical-padding classes. Override instead of using !important. */
  pad?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 ${pad}`}>{children}</section>
  );
}

export function Heading({
  children,
  lead,
}: {
  children: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl sm:text-4xl">{children}</h2>
      {lead && (
        <p className="mt-4 text-lg leading-relaxed text-mist">{lead}</p>
      )}
    </div>
  );
}

export function ServiceGrid({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ul className="mt-10 grid gap-px overflow-hidden rounded border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <li key={s.title} className="bg-slate-deep p-7">
          <h3 className="text-xl text-paper">{s.title}</h3>
          <p className="mt-2.5 leading-relaxed text-mist">{s.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function CallBand({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="border-y border-line/60 bg-steel">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="mt-2.5 leading-relaxed text-mist">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3 sm:ml-auto">
          <a
            href={`tel:${biz.phoneHref}`}
            className="rounded bg-brass px-6 py-3.5 font-display text-lg font-semibold text-ink transition-colors hover:bg-brass-deep hover:text-paper"
          >
            {biz.phone}
          </a>
          <Link
            href="/contact"
            className="rounded border border-line px-6 py-3.5 font-display text-lg text-paper transition-colors hover:border-brass hover:text-brass"
          >
            Send details
          </Link>
        </div>
      </div>
    </div>
  );
}

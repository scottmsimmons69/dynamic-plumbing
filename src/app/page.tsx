import Link from "next/link";
import { biz } from "@/lib/business";
import { Section, Heading, CallBand } from "@/components/Bits";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="font-display text-lg text-brass">{biz.counties}</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">
            Commercial plumbing that shows up when the building can&rsquo;t wait.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
            Licensed plumbers for general contractors, property managers and
            facility teams &mdash; and for the homeowner whose sewer line just
            gave out. Same crew, same phone number, usually on site within the
            hour.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`tel:${biz.phoneHref}`}
              className="rounded bg-brass px-7 py-4 font-display text-lg font-semibold text-ink transition-colors hover:bg-brass-deep hover:text-paper"
            >
              Call {biz.phone}
            </a>
            <Link
              href="/commercial"
              className="rounded border border-line px-7 py-4 font-display text-lg text-paper transition-colors hover:border-brass hover:text-brass"
            >
              Commercial services
            </Link>
          </div>

          <dl className="mt-14 grid max-w-3xl gap-px overflow-hidden rounded border border-line/60 bg-line/60 sm:grid-cols-3">
            <div className="bg-slate-deep p-6">
              <dt className="text-sm text-mist">Licensed</dt>
              <dd className="mt-1 font-display text-xl text-paper">
                WV Master #{biz.masterLicense}
              </dd>
            </div>
            <div className="bg-slate-deep p-6">
              <dt className="text-sm text-mist">Insured</dt>
              <dd className="mt-1 font-display text-xl text-paper">
                {biz.liabilityLimit} general liability
              </dd>
            </div>
            <div className="bg-slate-deep p-6">
              <dt className="text-sm text-mist">Response</dt>
              <dd className="mt-1 font-display text-xl text-paper">
                {biz.commercialResponse}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Two lanes */}
      <Section>
        <div className="grid gap-px overflow-hidden rounded border border-line/60 bg-line/60 lg:grid-cols-2">
          <div className="bg-slate-deep p-9">
            <h2 className="text-2xl">Commercial &amp; industrial</h2>
            <p className="mt-3 leading-relaxed text-mist">
              Service and repair, new construction, tenant fit-out, backflow
              certification and scheduled maintenance. We coordinate with your
              other trades and we file the paperwork so you aren&rsquo;t chasing
              it.
            </p>
            <Link
              href="/commercial"
              className="mt-6 inline-block font-display text-lg text-brass hover:text-paper"
            >
              What we handle
            </Link>
          </div>
          <div className="bg-slate-deep p-9">
            <h2 className="text-2xl">Homes</h2>
            <p className="mt-3 leading-relaxed text-mist">
              Water heaters, drains, leaks, sewer lines and remodels. The same
              licensed plumbers who work the commercial jobs — not a separate
              crew and not a subcontractor.
            </p>
            <Link
              href="/residential"
              className="mt-6 inline-block font-display text-lg text-brass hover:text-paper"
            >
              Home services
            </Link>
          </div>
        </div>
      </Section>

      <CallBand
        title="Water where it shouldn't be?"
        body="Call it in and talk to somebody who can tell you what to shut off."
      />

      <Section>
        <Heading lead={`We work across ${biz.counties}.`}>
          Where we work
        </Heading>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {biz.serviceArea.map((t) => (
            <li
              key={t}
              className="rounded border border-line/60 bg-slate-deep px-4 py-2 text-mist"
            >
              {t}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

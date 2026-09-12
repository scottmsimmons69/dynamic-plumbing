import type { Metadata } from "next";
import { biz } from "@/lib/business";
import { Section, Heading, ServiceGrid, CallBand, Differentiators } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Commercial Plumbing",
  description: `Commercial plumbing service, new construction, tenant fit-out and backflow certification across ${biz.counties}.`,
};

export default function Commercial() {
  return (
    <>
      <Section pad="pt-16 pb-8 sm:pt-20">
        <p className="font-display text-lg text-brass">Commercial</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
          A plumber your GC won&rsquo;t have to chase.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          Licensed, insured and used to working inside somebody else&rsquo;s
          schedule. We show up when we said, we hit inspection the first time,
          and we tell you early if something is going to slip.
        </p>
      </Section>

      <Section pad="pt-0 pb-16 sm:pb-20">
        <ServiceGrid items={biz.commercialServices} />
      </Section>

      <Section>
        <Heading lead="What a general contractor or property manager asks before they call. Here it is up front.">
          Qualifications
        </Heading>
        <dl className="mt-9 grid gap-px overflow-hidden rounded border border-line/60 bg-line/60 sm:grid-cols-2">
          {[
            ["WV master plumber license", `#${biz.masterLicense}`],
            ["General liability", biz.liabilityLimit],
            ["Bonding capacity", biz.bonded],
            ["Licensed plumbers on staff", biz.crewSize],
            ["Labor", biz.labor],
            ["Response time", biz.commercialResponse],
            ["Certifications", biz.certifications.join(", ")],
          ].map(([k, v]) => (
            <div key={k} className="bg-slate-deep p-6">
              <dt className="text-sm text-mist">{k}</dt>
              <dd className="mt-1 font-display text-xl text-paper">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-mist">
          Certificate of insurance on request &mdash; same day.
        </p>
      </Section>

      {biz.projects.length > 0 && (
        <Section>
          <Heading>Recent work</Heading>
          <ul className="mt-9 grid gap-px overflow-hidden rounded border border-line/60 bg-line/60 sm:grid-cols-2">
            {biz.projects.map((p) => (
              <li key={p.name} className="bg-slate-deep p-7">
                <h3 className="text-xl text-paper">{p.name}</h3>
                <p className="mt-2 leading-relaxed text-mist">{p.scope}</p>
                {p.year && <p className="mt-2 text-sm text-mist">{p.year}</p>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Differentiators
        items={biz.differentiators}
        heading="Why contractors keep calling us back"
        lead="Six things a one-truck shop cannot say."
      />

      <CallBand
        title="Bidding something out?"
        body="Send the scope and we will get you a number. No sales visit required."
      />
    </>
  );
}

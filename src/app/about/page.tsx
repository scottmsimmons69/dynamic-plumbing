import type { Metadata } from "next";
import { biz } from "@/lib/business";
import { Section, Heading, CallBand } from "@/components/Bits";

export const metadata: Metadata = {
  title: "About",
  description: `${biz.legalName} — licensed plumbing contractor serving ${biz.counties}.`,
};

export default function About() {
  return (
    <>
      <Section pad="pt-16 pb-8 sm:pt-20">
        <p className="font-display text-lg text-brass">About</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
          {biz.legalName}
        </h1>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-mist">
          {biz.story.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      <Section pad="pt-0 pb-16 sm:pb-20">
        <dl className="grid gap-px overflow-hidden rounded border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["WV master plumber", `#${biz.masterLicense}`],
            ["General liability", biz.liabilityLimit],
            ["Bonded", biz.bonded],
            ["Service area", biz.counties],
          ].map(([k, v]) => (
            <div key={k} className="bg-slate-deep p-6">
              <dt className="text-sm text-mist">{k}</dt>
              <dd className="mt-1 font-display text-xl text-paper">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <Heading lead="Both sides of the business run out of the same shop, with licensed plumbers.">
          Commercial and residential
        </Heading>
      </Section>

      <CallBand
        title="Talk to us"
        body="Commercial bid, service call, or a question about your water heater. Same number."
      />
    </>
  );
}

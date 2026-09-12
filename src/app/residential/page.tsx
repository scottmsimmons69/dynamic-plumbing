import type { Metadata } from "next";
import { biz, photos } from "@/lib/business";
import { Section, Heading, ServiceGrid, CallBand, PhotoGrid } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Residential Plumbing",
  description: `Water heaters, drain cleaning, leak repair and sewer lines for homes across ${biz.counties}.`,
};

export default function Residential() {
  return (
    <>
      <Section pad="pt-16 pb-8 sm:pt-20">
        <p className="font-display text-lg text-brass">Homes</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
          A licensed plumber, at your house.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          We do a lot of commercial work, and it makes us better in a crawlspace,
          not worse. You get a licensed plumber who has seen the problem before,
          and a straight answer about what it takes to fix it.
        </p>
      </Section>

      <Section pad="pt-0 pb-16 sm:pb-20">
        <ServiceGrid items={biz.residentialServices} />
      </Section>

      <Section>
        <Heading>How it goes</Heading>
        <ol className="mt-9 grid gap-px overflow-hidden rounded border border-line/60 bg-line/60 sm:grid-cols-3">
          {[
            ["You call", "You talk to somebody who knows plumbing, not a call center."],
            ["We look at it", "We tell you what is wrong and what it costs before we start."],
            ["We fix it", "Cleaned up behind us, and it works when we leave."],
          ].map(([t, b], i) => (
            <li key={t} className="bg-slate-deep p-7">
              <span className="font-display text-2xl text-brass">{i + 1}</span>
              <h3 className="mt-2 text-xl text-paper">{t}</h3>
              <p className="mt-2 leading-relaxed text-mist">{b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <PhotoGrid
        items={photos.residential}
        heading="Recent work"
        lead="Water heaters, sewer and water lines, gas service and under-slab rough-in."
      />

      <CallBand
        title="No hot water?"
        body="Call and tell us what it is doing. Most of the time we can get to you the same day."
      />
    </>
  );
}

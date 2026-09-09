import type { Metadata } from "next";
import { biz, addressLine } from "@/lib/business";
import { Section } from "@/components/Bits";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request commercial or residential plumbing service across ${biz.counties}.`,
};

export default function Contact() {
  return (
    <Section>
      <p className="font-display text-lg text-brass">Contact</p>
      <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
        Tell us what it&rsquo;s doing.
      </h1>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm />

        <aside className="grid content-start gap-8">
          <div className="rounded border border-line/60 bg-slate-deep p-7">
            <h2 className="text-xl text-paper">Faster: just call</h2>
            <a
              href={`tel:${biz.phoneHref}`}
              className="mt-3 block font-display text-3xl text-brass hover:text-paper"
            >
              {biz.phone}
            </a>
            <p className="mt-3 leading-relaxed text-mist">
              {biz.hours}
              <br />
              {biz.emergency}
            </p>
          </div>

          <div>
            <h2 className="text-xl text-paper">Shop</h2>
            <address className="mt-2.5 not-italic leading-relaxed text-mist">
              {biz.legalName}
              <br />
              {addressLine}
            </address>
          </div>

          <div>
            <h2 className="text-xl text-paper">We cover</h2>
            <p className="mt-2.5 leading-relaxed text-mist">
              {biz.serviceArea.join(" · ")}
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { biz } from "@/lib/business";

const nav = [
  { href: "/commercial", label: "Commercial" },
  { href: "/residential", label: "Residential" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <Link href="/" className="shrink-0" aria-label={`${biz.name} home`}>
          <Image
            src="/logo/dpm-full-light-800.png"
            alt={biz.legalName}
            width={800}
            height={359}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-display text-[15px] tracking-wide text-mist transition-colors hover:text-paper"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${biz.phoneHref}`}
          className="ml-auto rounded bg-brass px-4 py-2.5 font-display text-[15px] font-semibold text-ink transition-colors hover:bg-brass-deep hover:text-paper md:ml-0"
        >
          {biz.phone}
        </a>
      </div>

      <nav className="flex justify-center gap-6 border-t border-line/40 px-5 py-2 md:hidden">
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="font-display text-sm text-mist"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

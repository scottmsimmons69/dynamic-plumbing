import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { biz } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line/60 bg-slate-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/logo/dpm-full-light-800.png"
            alt={biz.legalName}
            width={800}
            height={359}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-mist">
            Licensed plumbing for commercial buildings and homes across{" "}
            {biz.counties}.
          </p>
        </div>

        {/* NAP block — must match the Google Business Profile.
            GBP is a service-area listing with the address hidden, so the
            street is deliberately NOT published. City/state only. */}
        <div>
          <h3 className="text-sm tracking-wider text-paper">Reach us</h3>
          <address className="mt-3 space-y-1.5 text-[15px] not-italic leading-relaxed text-mist">
            <div>{biz.legalName}</div>
            <div>
              {biz.address.city}, {biz.address.state} {biz.address.zip}
            </div>
            <div className="pt-1">
              <a href={`tel:${biz.phoneHref}`} className="text-paper hover:text-brass">
                {biz.phone}
              </a>
            </div>
          </address>
          <div className="mt-4 space-y-1.5 text-[15px]">
            <div>
              <a href={biz.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brass hover:text-paper">
                <FcGoogle className="h-4 w-4 shrink-0" aria-hidden="true" />
                Read our reviews on Google
              </a>
            </div>
            <div>
              <a href={biz.facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-mist hover:text-paper">
                <FaFacebook className="h-4 w-4 shrink-0 text-[#1877F2]" aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm tracking-wider text-paper">Hours</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-mist">
            {biz.hours}
            <br />
            <span className="text-paper">{biz.emergency}</span>
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-wider text-paper">Service area</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-mist">
            {biz.serviceArea.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-line/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-5 text-sm text-mist">
          <span>
            © {new Date().getFullYear()} {biz.legalName}
          </span>
          <span>WV Master Plumber #{biz.masterLicense}</span>
          <Link href="/contact" className="ml-auto hover:text-paper">
            Request service
          </Link>
        </div>
      </div>
    </footer>
  );
}

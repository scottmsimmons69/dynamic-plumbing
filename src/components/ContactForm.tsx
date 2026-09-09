"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded border border-line bg-ink px-3.5 py-3 text-paper placeholder:text-mist/60 focus:border-brass";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setState("sent");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded border border-brass bg-slate-deep p-8">
        <h2 className="text-2xl text-paper">Got it.</h2>
        <p className="mt-2.5 leading-relaxed text-mist">
          We&rsquo;ll call you back. If it&rsquo;s water running right now, call
          instead of waiting on us to read this.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-mist">Name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-mist">Phone</span>
          <input
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className={field}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-mist">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={field}
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-mist">Service address</span>
          <input name="address" className={field} />
        </label>
      </div>

      <fieldset className="grid gap-2">
        <legend className="mb-1 text-mist">This is for</legend>
        <div className="flex flex-wrap gap-5">
          {["A business or building", "A home"].map((v) => (
            <label key={v} className="flex items-center gap-2.5">
              <input
                type="radio"
                name="kind"
                value={v}
                defaultChecked={v.startsWith("A business")}
                className="h-4 w-4 accent-[#4a9fd4]"
              />
              <span className="text-paper">{v}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-1.5">
        <span className="text-mist">What&rsquo;s going on?</span>
        <textarea name="details" rows={5} required className={field} />
      </label>

      {/* honeypot — bots fill this, people never see it */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded bg-brass px-7 py-3.5 font-display text-lg font-semibold text-ink transition-colors hover:bg-brass-deep hover:text-paper disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send it"}
        </button>
        {state === "error" && (
          <p className="text-brass">
            That didn&rsquo;t send. Call us instead. ({message})
          </p>
        )}
      </div>
    </form>
  );
}

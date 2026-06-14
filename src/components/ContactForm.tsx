"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = encodeURIComponent(`Wiadomość od ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nOd: ${name}\nEmail: ${email}`,
    );
    window.open(
      `mailto:piotr@sobczyk.io?subject=${subject}&body=${body}`,
      "_self",
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-yellow border-2 border-ink rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-ink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink mb-2">
          Wiadomość przygotowana
        </h3>
        <p className="text-muted">
          Otwarto klienta poczty z Twoją wiadomością. Piotr odpowie w ciągu
          48 godzin.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-ink hover:text-yellow-dark text-sm font-semibold underline decoration-yellow decoration-2 underline-offset-4 transition-colors cursor-pointer"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-dark mb-1.5"
        >
          Imię i nazwisko
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-ink/20 bg-white text-ink placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-yellow focus:border-ink transition-all"
          placeholder="Jan Kowalski"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-dark mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-ink/20 bg-white text-ink placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-yellow focus:border-ink transition-all"
          placeholder="jan@firma.pl"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-dark mb-1.5"
        >
          Wiadomość
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl border-2 border-ink/20 bg-white text-ink placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-yellow focus:border-ink transition-all resize-none"
          placeholder="Opisz swoją sytuację i czego szukasz..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-ink text-paper font-semibold py-3.5 rounded-full border-2 border-ink hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 cursor-pointer"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}

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
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-accent"
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
        <h3 className="text-2xl font-semibold text-dark mb-2">
          Wiadomość przygotowana
        </h3>
        <p className="text-muted">
          Otwarto klienta poczty z Twoją wiadomością. Piotr odpowie w ciągu
          24h.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-accent hover:text-accent-dark text-sm font-medium transition-colors cursor-pointer"
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
          className="w-full px-4 py-3 rounded-xl border border-line bg-white text-dark placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
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
          className="w-full px-4 py-3 rounded-xl border border-line bg-white text-dark placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
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
          className="w-full px-4 py-3 rounded-xl border border-line bg-white text-dark placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
          placeholder="Opisz swoją sytuację i czego szukasz..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent text-white font-medium py-3.5 rounded-xl hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 cursor-pointer"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}

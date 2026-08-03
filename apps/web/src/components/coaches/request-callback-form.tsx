'use client';

import { useState } from 'react';

export function RequestCallbackForm({ coachName }: { coachName: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center">
        <h3 className="text-xl font-bold mb-2">Request Sent Successfully!</h3>
        <p>
          Our team will forward your request to {coachName}. You will be contacted shortly via your
          preferred method.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-emerald-600 font-medium hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--color-background-secondary)] p-8 rounded-3xl border border-[var(--color-border-subtle)] space-y-6"
    >
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
        Request a Callback
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-secondary)]">
            Full Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-[var(--color-text-secondary)]">
            Phone Number
          </label>
          <input
            required
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
            placeholder="+91 90000 00000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)]">
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="contactMethod"
            className="text-sm font-medium text-[var(--color-text-secondary)]"
          >
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            className="w-full px-4 py-2 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
          >
            <option value="whatsapp">WhatsApp</option>
            <option value="phone">Phone Call</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="goal" className="text-sm font-medium text-[var(--color-text-secondary)]">
            Primary Goal
          </label>
          <select
            id="goal"
            name="goal"
            className="w-full px-4 py-2 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
          >
            <option value="general">General Wellness</option>
            <option value="weight">Weight Management</option>
            <option value="energy">Better Energy</option>
            <option value="sleep">Better Sleep</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium text-[var(--color-text-secondary)]">
            Preferred Callback Time
          </label>
          <select
            id="time"
            name="time"
            className="w-full px-4 py-2 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
          >
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 8 PM)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-secondary)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
          placeholder={`Hi ${coachName}, I'd like to learn more about...`}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--color-accent-primary)] text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-600 transition-colors shadow-sm disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          'Request Callback'
        )}
      </button>

      <p className="text-xs text-center text-[var(--color-text-tertiary)]">
        By submitting this form, you agree to be contacted by our wellness team. Your information is
        kept confidential.
      </p>
    </form>
  );
}

'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2 } from 'lucide-react'

// Get a free access key at https://web3forms.com — no signup required.
// Replace the placeholder below with your real key.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactUs() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New message from Esmeralda\'s website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await res.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-black px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 lg:py-32">
      <div className="max-w-6xl mx-auto text-center mb-12 lg:mb-16">
        <h2 className="text-2xl font-serif text-amber-400 sm:text-3xl md:text-4xl">Contact Us</h2>
        <p className="text-amber-200 mt-3 text-base sm:text-lg md:mt-4">We'd love to hear from you</p>
      </div>

      <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto md:grid-cols-2 md:gap-10 lg:gap-16">

        {/* Contact info */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-start gap-4">
            <div className="rounded-full border border-amber-500 p-3 shrink-0">
              <Phone size={20} className="text-amber-300" />
            </div>
            <div>
              <h3 className="text-amber-200 font-serif text-base sm:text-lg">Phone</h3>
              <a href="tel:+13055551234" className="text-amber-300 hover:text-amber-400 transition-colors text-sm sm:text-base">
                (786) 505-3607
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full border border-amber-500 p-3 shrink-0">
              <Mail size={20} className="text-amber-300" />
            </div>
            <div>
              <h3 className="text-amber-200 font-serif text-base sm:text-lg">Email</h3>
              <a href="mailto:hello@esmeraldassaltyair.com" className="text-amber-300 hover:text-amber-400 transition-colors text-sm sm:text-base break-all sm:break-normal">
                hello@esmeraldassaltyair.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full border border-amber-500 p-3 shrink-0">
              <MapPin size={20} className="text-amber-300" />
            </div>
            <div>
              <h3 className="text-amber-200 font-serif text-base sm:text-lg">Visit</h3>
              <p className="text-amber-300 text-sm sm:text-base">
                11055 SW 186th St Suite 102<br />
                Cutler Bay, FL 33157
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full border border-amber-500 p-3 shrink-0">
              <Clock size={20} className="text-amber-300" />
            </div>
            <div>
              <h3 className="text-amber-200 font-serif text-base sm:text-lg">Hours</h3>
              <p className="text-amber-300 text-sm sm:text-base">
                Mon &ndash; Fri: 9 AM - 6PM <br />
                Sat: 10AM &ndash; 6AM<br />
                Sun: 8AM - 10PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-amber-950/30 border border-amber-800 rounded-3xl p-6 space-y-4 sm:p-8 sm:space-y-5 md:p-10"
        >
          {/* Honeypot field — bots fill this in, humans never see it */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div>
            <label htmlFor="name" className="block text-amber-200 text-sm mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl bg-black/60 border border-amber-800 px-4 py-3 text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-amber-200 text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl bg-black/60 border border-amber-800 px-4 py-3 text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-amber-200 text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-xl bg-black/60 border border-amber-800 px-4 py-3 text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500 resize-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-black font-medium px-6 py-3 transition-colors"
          >
            {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-amber-300 text-sm justify-center">
              <CheckCircle2 size={16} />
              Message sent — we'll be in touch soon.
            </p>
          )}

          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>

      </div>
    </section>
  )
}
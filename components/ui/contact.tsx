import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactUs() {
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
                (305) 555-1234
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
                Tue &ndash; Sat: 10am &ndash; 6pm<br />
                Sun &ndash; Mon: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form className="bg-amber-950/30 border border-amber-800 rounded-3xl p-6 space-y-4 sm:p-8 sm:space-y-5 md:p-10">
          <div>
            <label htmlFor="name" className="block text-amber-200 text-sm mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
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
              className="w-full rounded-xl bg-black/60 border border-amber-800 px-4 py-3 text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500 resize-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-3 transition-colors"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Facebook, Instagram } from '@mui/icons-material';
import { Menu, X, } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/locations', label: 'Locations' },
  { href: '/story', label: 'Our Story' },
  
]

const bookingUrl = 
'https://www.vagaro.com/esmeraldassaltyairretreat'
const instagramURL = 
'https://www.instagram.com/esmeraldassaltyairretreat/?hl=en'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-amber-900/40 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5 md:px-20">

        <Link href="/" className="flex items-center gap-3 font-serif text-xl text-amber-400">
          {/* <Image
            src="/public/logo.png"
            alt="Esmeralda's Salty Air Retreat logo"
            width={30}
            height={30}
            className="rounded-full"
            priority
          /> */}
          Esmeralda's Salty Air Retreat
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 font-serif text-lg text-amber-200 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-amber-400">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
               <Link
              href={instagramURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-amber-200 transition-colors hover:text-amber-400"
            >
         <Instagram style={{ fontSize: "30px", height: "30px" }} />
            </Link>
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-amber-500 px-6 py-2.5 text-black transition-colors hover:bg-amber-600"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-amber-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col items-center gap-6 border-t border-amber-900/40 bg-black/95 px-8 py-8 font-serif text-lg text-amber-200 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-amber-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-amber-500 px-6 py-2.5 text-black transition-colors hover:bg-amber-600"
            >
              Book Now
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
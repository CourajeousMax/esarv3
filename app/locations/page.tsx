import { MapPin } from 'lucide-react'

export default function Locations() {
  return (
    <section id="locations" className="bg-gradient-to-b from-black to-amber-950 px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 lg:py-32">
      <div className="max-w-6xl mx-auto text-center mb-12 lg:mb-16">
        <h2 className="text-2xl font-serif text-amber-400 sm:text-3xl md:text-4xl">Our Locations</h2>
        <p className="text-amber-200 mt-3 text-base sm:text-lg md:mt-4">Find your healing space</p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto sm:gap-10 md:grid-cols-2">

        {/* Miami */}
        <div className="group bg-black/60 border border-amber-800 rounded-3xl overflow-hidden shadow-xl transition-colors hover:border-amber-600">
          <div className="relative h-48 overflow-hidden sm:h-56 md:h-64">
            <img
              src="/assets/esaar2.jpeg"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Miami Reiki"
            />
            <span className="absolute top-3 left-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] uppercase tracking-wide text-amber-300 border border-amber-700 sm:top-4 sm:left-4 sm:px-3 sm:text-xs">
              Primary location
            </span>
          </div>

          <div className="p-6 space-y-3 sm:p-8 sm:space-y-4">
            <h3 className="text-xl text-amber-400 font-serif sm:text-2xl">Cutler Bay, Florida</h3>
            <p className="text-amber-200 leading-relaxed text-sm sm:text-base">
              Our primary sanctuary where healing sessions, Reiki, and energy work are offered in an intimate, grounded setting.
            </p>
            <p className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm">
              <MapPin size={16} className="text-amber-500 shrink-0" />
              11055 SW 186th St Suite 102, Cutler Bay, FL 33157
            </p>
                 <a
              href="https://www.vagaro.com/esmeraldassaltyairretreat"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full rounded-2xl bg-amber-500 px-6 py-3 text-center text-black font-medium transition-colors hover:bg-amber-600"
            >
              Book Miami session
            </a>
          </div>
        </div>

        {/* Pennsylvania */}
     <div className="group relative bg-black/60 border border-amber-800 rounded-3xl overflow-hidden shadow-xl transition-colors hover:border-amber-600">
          <div className="relative h-48 overflow-hidden sm:h-56 md:h-64">
            <img
              src="/assets/penn.jpg"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Pennsylvania location"
            />
            <span className="absolute top-3 left-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] uppercase tracking-wide text-amber-300 border border-amber-700 sm:top-4 sm:left-4 sm:px-3 sm:text-xs">
              Seasonal location
            </span>
          </div>
 
          <div className="p-6 space-y-3 sm:p-8 sm:space-y-4">
            <h3 className="text-xl text-amber-400 font-serif sm:text-2xl">Pennsylvania</h3>
            <p className="text-amber-200 leading-relaxed text-sm sm:text-base">
              A seasonal and expanding healing location offering spiritual services, classes, and guided energy experiences.
            </p>
            <p className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm">
              <MapPin size={16} className="text-amber-500 shrink-0" />
              Available seasonally
            </p>
            <button className="mt-2 w-full rounded-2xl border border-amber-500 px-6 py-3 text-amber-300 font-medium transition-colors hover:bg-amber-500 hover:text-black">
              Inquire availability
            </button>
          </div>
 
          {/* Coming soon overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <span className="rounded-full border border-amber-500 px-5 py-2 text-sm uppercase tracking-[3px] text-amber-300 sm:px-6 sm:text-base">
              Coming Soon
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
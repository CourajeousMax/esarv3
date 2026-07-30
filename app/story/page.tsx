import React from "react"
import Image from "next/image"
export default function Story() {
  
     {/* Our Story - History Section */}
 return (
    <div className="bg-amber-950 px-8 py-16 text-center md:px-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/esar.webp"
            width={500}
            height={900}
            alt="Esmeralda's Salty Air Retreat salt cave"
            className="w-full h-[420px] object-cover"
          />
        </div>
        <h2 className="text-4xl font-serif text-amber-400">
          Every Stone Tells a Story
        </h2>
        <h3 className="text-2xl text-amber-300">Our Story. Your Healing.</h3>
        <p className="text-amber-200 leading-relaxed">
          Esmeralda Salty Air Retreat was once located within Cauley Square, where it offered a serene and rejuvenating salt cave experience. The sanctuary provided visitors with a tranquil environment filled with therapeutic microsalt particles known for their respiratory and relaxation benefits.
        </p>
        <p className="text-amber-200 leading-relaxed">
          The cave's soothing ambiance and salt-infused air created a peaceful haven for wellness seekers. Though the property has since moved, the spirit of healing, restoration, and sacred energy continues to guide its mission forward.
        </p>
        <p className="text-amber-200 text-sm mt-2">
          The journey continues in a new space, carrying the same intention of peace, balance, and renewal.
        </p>
        <p className="text-amber-300 font-medium">
          Located at: 11055 SW 186ST Suite 102, Cutler Bay, FL 33157
        </p>
      </div>
 
      {/* MJ Gonzalez bio */}
      <section id="mj-bio" className="bg-amber-950 px-8 py-24 max-w-5xl mx-auto md:px-20">
        <h2 className="text-4xl font-serif text-amber-400 text-center mb-6">MJ Gonzalez</h2>
        <p className="text-center text-amber-300 mb-10">Reverend, Master Therapist & Energist</p>
 
        <div className="space-y-6 text-amber-200 leading-relaxed">
          <Image
            src="/assets/mj.JPG"
            width={500}
            height={900}
            alt="Reverend MJ Gonzalez"
            className="w-full h-[40rem] object-cover"
          />
          <p>
            Rev. MJ Gonzalez began her spiritual journey at age six after a profound divine encounter. This awakened her intuitive gifts including clairvoyance, clairsentience, and advanced energy work.
          </p>
          <p>
            Over the years, her practice expanded to encompass energy clearing, spiritual guidance, and holistic healing, helping individuals restore balance while also clearing and harmonizing the energy of homes and sacred spaces.
          </p>
          <p>
            After years of serving the Florida community through Esmeralda's Salty Air Retreat, Rev. MJ has since passed the torch to Mary, allowing the retreat to continue its mission of healing and spiritual wellness under new stewardship.
          </p>
          <p>
            Now residing in Pennsylvania, Rev. MJ is embracing a new chapter in her life's calling. Her vision is to establish the Mojozzie Center—a peaceful sanctuary dedicated to spiritual growth, holistic healing, energy work, educational workshops, and transformational retreats. Through the Mojozzie Center, she hopes to create a welcoming space where individuals from all walks of life can reconnect with themselves, deepen their spiritual journey, and experience profound healing and personal transformation.
          </p>
        </div>
      </section>
 
      {/* Marylin bio */}
      <section id="mary-bio" className="bg-amber-950 px-8 py-24 max-w-5xl mx-auto md:px-20">
        <h2 className="text-4xl font-serif text-amber-400 text-center mb-6">Marylin</h2>
        <p className="text-center text-amber-300 mb-10">Owner &amp; Reiki Master, Esmeralda's Salty Air Retreat</p>
 
        <div className="space-y-6 text-amber-200 leading-relaxed">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/mary.jpg"
              width={500}
              height={900}
              alt="Marylin, owner of Esmeralda's Salty Air Retreat"
              className="w-full h-[40rem] object-cover"
            />
          </div>
          <p>
            I am Marylin, a Reiki Master dedicated to helping others find balance, healing, and inner peace through holistic wellness. Alongside my passion for energy healing, I own a healthcare consulting business where I assist healthcare providers and entrepreneurs with licensing, credentialing, and business growth.
          </p>
          <p>
            I am also the proud mother of two amazing adult children—a son and a daughter—who continue to inspire me every day.
          </p>
          <p>
            As the owner of Esmeralda's Salty Air Retreat in South Florida, I have created a peaceful sanctuary where people can relax, restore, and reconnect through salt therapy, Reiki, sound healing, meditation, and other wellness experiences.
          </p>
          <p>
            My mission is simple: to serve others with compassion, integrity, and love—supporting healing of the mind, body, and spirit while empowering individuals to live healthier, more fulfilling lives.
          </p>
        </div>
      </section>
    </div>
  )
}
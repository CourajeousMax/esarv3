import Image from "next/image";
import Contact from "../components/ui/contact"
import { Card, CardContent } from "@/components/ui/card";
import {
  Flame,
  Sparkles,
  Heart,
  Shield,
  Flower2,
  Gem,
  HeartHandshake,
  Hand,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Home() {
  const bookingUrl = 
'https://www.vagaro.com/esmeraldassaltyairretreat'
  const services = [
    {
      title: "Facials",
      subtitle: "Glow. Refresh. Renew.",
      icon: Sparkles,
    },
    {
      title: "Massages",
      subtitle: "Relax. Release. Rejuvenate.",
      icon: Hand,
    },
    {
      title: "Salt Room",
      subtitle: "Breathe. Reset. Be Present.",
      icon: Gem,
    },
    {
      title: "Reiki",
      subtitle: "Energy Healing. Restore Balance.",
      icon: HeartHandshake,
    },
    {
      title: "Chakra Alignments",
      subtitle: "Balance Your Energy.",
      icon: Flower2,
    },
  ];

  return (
    <div className="flex min-h-full items-center justify-center bg-black font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-black py-16 px-6 dark:bg-black sm:py-20 sm:px-10 md:px-16 lg:max-w-6xl lg:py-32 lg:px-20">

        {/* Hero */}
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-16">

          <section className="grid items-center gap-6 text-center md:flex-1 md:text-left lg:gap-8">
            <h1 className="font-serif text-3xl leading-tight text-amber-200 sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to your spiritual home,
              <br />
              <span className="text-amber-400">Illuminate Your Space</span>
            </h1>

            <p className="mx-auto max-w-xl text-base text-amber-200 md:mx-0 md:text-lg">
              Restore balance. Awaken your energy. Step into healing.
            </p>

            <a
              href="https://www.vagaro.com/esmeraldassaltyairretreat"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto block w-full rounded-2xl bg-amber-500 px-6 py-4 text-center text-sm text-black shadow-xl transition-colors hover:bg-amber-600 sm:w-auto sm:px-8 sm:py-6 sm:text-base md:mx-0 md:inline-block"
            >
              Book Now
            </a>
            
          </section>

          <Image
            className="w-40 items-center dark:invert sm:w-56 md:w-64 lg:w-[500px]"
            src="/light.webp"
            alt="salt lamp"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Reiki Services */}
        <section className="w-full bg-gradient-to-b from-black to-amber-950 px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 lg:py-24">
          <div className="mx-auto mb-12 max-w-6xl text-center lg:mb-16">
            <Flower2 className="mx-auto mb-4 text-amber-200 sm:mb-6" size={32} />
            <h2 className="font-serif text-2xl text-amber-400 sm:text-3xl md:text-4xl">
              Reiki Services
            </h2>
            <p className="mt-3 text-base text-amber-200 sm:text-lg md:mt-4 md:text-xl">
              Energy Healing
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-amber-200 sm:text-base md:mt-6">
              Experience the transformative power of Reiki, a holistic healing
              practice that balances your energy and enhances your well-being.
              Book a session to alleviate stress, improve mental clarity, and
              restore harmony to your mind and body.
            </p>
          </div>

          <div className="mt-8 space-y-5 sm:space-y-6 md:mt-12 md:space-y-7">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex items-center gap-4 border-b border-amber-700/30 pb-4 sm:gap-5 sm:pb-5"
                >
                  <div className="shrink-0 rounded-full border border-amber-500 p-3 sm:p-4">
                    <Icon size={22} className="text-amber-300 sm:hidden" />
                    <Icon size={28} className="hidden text-amber-300 sm:block" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg text-amber-200 sm:text-xl md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="text-xs uppercase tracking-wide text-amber-300 sm:text-sm">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-8 text-center md:mt-12">
            <button className="w-full rounded-2xl bg-amber-500 px-6 py-4 text-sm text-black shadow-lg hover:bg-amber-600 sm:w-auto sm:px-8 sm:py-6 sm:text-base">
              Book your Experience
            </button>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 lg:py-24">
          <div className="mx-auto mb-12 max-w-6xl text-center lg:mb-16">
            <h2 className="font-serif text-2xl text-amber-400 sm:text-3xl md:text-4xl">
              The Benefits
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
            <Card className="rounded-2xl border-0 border-amber-700 bg-amber-900/30 shadow-lg">
              <CardContent className="space-y-3 p-6 text-center sm:space-y-4 sm:p-8">
                <Sparkles className="mx-auto text-amber-200" size={30} />
                <h3 className="text-lg font-semibold text-amber-200 sm:text-xl">
                  Mineral Soak
                </h3>
                <p className="text-sm text-amber-400">
                  Relax while infusing the body with essential minerals.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 border-amber-700 bg-amber-900/30 shadow-lg">
              <CardContent className="space-y-3 p-6 text-center sm:space-y-4 sm:p-8">
                <Heart className="mx-auto text-amber-200" size={30} />
                <h3 className="text-lg font-semibold text-amber-200 sm:text-xl">
                  Soothe Soreness
                </h3>
                <p className="text-sm text-amber-400">
                  Ease tension and encourage physical restoration.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 border-amber-700 bg-amber-900/30 shadow-lg sm:col-span-2 md:col-span-1">
              <CardContent className="space-y-3 p-6 text-center sm:space-y-4 sm:p-8">
                <Shield className="mx-auto text-amber-200" size={30} />
                <h3 className="text-lg font-semibold text-amber-200 sm:text-xl">
                  Detoxification
                </h3>
                <p className="text-sm text-amber-400">
                  Support cleansing and energetic renewal.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}
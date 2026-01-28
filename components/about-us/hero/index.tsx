import { ArrowRight, MapPin } from "lucide-react";

export default function AboutUsHero() {
  return (
    <section className="pt-32 bg-gradient-to-b from-gray-50 to-white scroll-section mb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-8 card-animate mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-primary text-white px-6 py-3 rounded-2xl shadow-lg mb-4 animate-pulse-slow">
              <MapPin size={18} />
              <p className="text-sm font-bold tracking-wider">
                HOUSTON, TEXAS, USA
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional Satellite TV Solutions for Homes & Businesses
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Satellite Connect LLC is a professional satellite TV solutions
              company based in Houston, Texas, USA. We specialize in providing
              reliable satellite dish installation, signal optimization,
              maintenance, and troubleshooting services for residential and
              commercial customers.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                <p className="text-gray-700">
                  Fast response times & affordable pricing
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                <p className="text-gray-700">
                  Quality workmanship & reliable service
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                <p className="text-gray-700">
                  Seamless entertainment connectivity
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
            >
              Get In Touch <ArrowRight size={20} />
            </a>
          </div>

          <div className="card-animate">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] opacity-20 blur-lg animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/about_us_hero_1.webp"
                  alt="Satellite Connect professional team"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-2 right-10 bg-gradient-primary text-white px-6 py-3 rounded-2xl shadow-xl rotate-3 animate-smooth-float">
                <p className="text-sm font-black tracking-wider">
                  PROFESSIONAL TEAM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="card-animate">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] opacity-20 blur-lg animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/about_us_hero_2.webp"
                  alt="Satellite dish installation service"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-2 right-10 bg-gradient-primary text-white px-6 py-3 rounded-2xl shadow-xl -rotate-3 animate-smooth-float-delay">
                <p className="text-sm font-black tracking-wider">
                  MODERN TOOLS
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 card-animate lg:order-1 order-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Customer-Focused Satellite TV Services You Can Trust
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a customer-focused LLC dedicated to connecting homes and
              businesses with dependable satellite TV services. Our trained
              technicians use modern tools and industry best practices to ensure
              safe and efficient installations.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Our Commitment
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full" />
                  <span className="text-gray-700">
                    Trained & certified technicians
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full" />
                  <span className="text-gray-700">Industry best practices</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full" />
                  <span className="text-gray-700">
                    Safe & efficient installations
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full" />
                  <span className="text-gray-700">
                    Residential & commercial services
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
            >
              Get In Touch <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

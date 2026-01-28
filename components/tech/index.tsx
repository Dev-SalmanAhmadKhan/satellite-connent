import { ArrowRight } from "lucide-react";

export default function TechnologySection() {
  return (
    <section className="py-24 bg-white scroll-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Row 1: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8 card-animate">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Experience cutting-edge technology in Dish TV
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our advanced satellite systems deliver crystal-clear 4K
              resolution, lightning-fast channel switching, and reliable
              connectivity even in severe weather conditions. Experience
              entertainment like never before.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
            >
              Get Your Connection Today <ArrowRight size={20} />
            </a>
          </div>
          <div className="card-animate">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] opacity-20 blur-lg animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/about_1.png"
                  alt="Cutting-edge Dish TV technology"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating tech badge */}
              <div className="absolute -top-2 right-1 bg-gradient-primary text-white px-6 py-3 rounded-2xl shadow-xl rotate-3 animate-smooth-float">
                <p className="text-sm font-black tracking-wider">
                  TECH ADVANCED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Image Left, Text Right (Reversed) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="card-animate">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] opacity-20 blur-lg animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/about_2.png"
                  alt="Family enjoying TV together"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating family badge */}
              <div className="absolute -top-2 left-1 bg-gradient-primary text-white px-6 py-3 rounded-2xl shadow-xl -rotate-3 animate-smooth-float">
                <p className="text-sm font-black tracking-wider">
                  FAMILY FOCUSED
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8 card-animate lg:order-1 order-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              TV made for the heartland, where family, stories & moments matter
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              More than just entertainment, our service brings families
              together. Share laughter, create memories, and bond over shows
              that resonate with your values. Quality time starts with quality
              connection.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
            >
              Get Your Connection Today <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

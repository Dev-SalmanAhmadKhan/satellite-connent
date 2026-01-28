import { ArrowRight, Star, Zap } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-40 pb-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 backdrop-blur-sm border border-blue-100 text-primary text-xs font-bold uppercase tracking-widest shadow-sm animate-fade-in">
            Professional Satellite Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
            Crystal Clear <br />
            <span className="text-gradient-primary animate-gradient">
              Viewing Quality
            </span>
          </h1>
          <p
            className="text-xl text-gray-600 max-w-lg leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Premium installation and maintenance for residential and commercial
            properties in Houston.
          </p>
          <div
            className="flex gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="bg-gradient-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-xl"
            >
              Get Started <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative z-10 w-full max-w-[500px]">
            <div
              className="absolute inset-1 bg-gradient-primary rounded-[3.5rem] opacity-20 blur-lg animate-pulse"
              style={{ animationDuration: "4s" }}
            />

            <Image
              src="/images/hero_img_1.png"
              alt="Professional satellite installation"
              width={500}
              height={500}
              className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-[500px] object-cover relative z-10"
              priority
            />
          </div>

          <div className="absolute top-24 left-0 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-smooth-float [animation-duration:4s] border border-blue-100">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white">
              <Zap size={20} fill="white" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">
                Signal
              </p>
              <p className="text-sm font-bold text-primary">100% Stable</p>
            </div>
          </div>

          <div className="absolute bottom-20 right-0 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-smooth-float [animation-duration:5s] [animation-delay:1s] border border-blue-100">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white">
              <Star size={20} fill="white" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">
                Rating
              </p>
              <p className="text-sm font-bold text-primary">5/5 stars</p>
            </div>
          </div>

          <div className="absolute top-12 right-24 z-20 bg-gradient-primary px-4 py-2 rounded-xl shadow-lg text-white animate-pulse border border-white/20">
            <p className="text-xs font-black tracking-widest italic">
              4K ULTRA HD
            </p>
          </div>

          <div className="absolute -top-4 right-32 z-10 animate-bounce-slow">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

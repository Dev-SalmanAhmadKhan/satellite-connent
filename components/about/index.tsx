import { ArrowRight } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="py-24 bg-white scroll-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Centered Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6 card-animate">
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-gradient-primary">Us</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Satellite Connect LLC is a professional satellite TV solutions
            company based in Houston, Texas, USA. We specialize in providing
            reliable satellite dish installation, signal optimization,
            maintenance, and troubleshooting services for residential and
            commercial customers. Our goal is to deliver seamless entertainment
            connectivity with fast response times, affordable pricing, and
            quality workmanship.
          </p>
        </div>

        {/* Who We Are: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 card-animate">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Who We Are
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a customer-focused LLC dedicated to connecting homes and
              businesses with dependable satellite TV services. Our trained
              technicians use modern tools and industry best practices to ensure
              safe and efficient installations.
            </p>
            <a
              href="#learn-more"
              className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform hover:shadow-xl group"
            >
              Learn More{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="card-animate">
            <div className="relative">
              {/* Glow effect matching your previous style */}
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] opacity-20 blur-lg animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/about-us-section-1.webp"
                  alt="Technician installing satellite dish"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

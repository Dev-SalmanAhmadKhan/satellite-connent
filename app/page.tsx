"use client";
import { useState, useEffect, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ShoppingCart,
  Headphones,
  Settings,
  Star,
  ArrowRight,
  Quote,
  Facebook,
  Twitter,
  Instagram,
  HardDrive,
  Zap,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export default function SatelliteConnect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("section-visible");
      });
    }, observerOptions);

    document
      .querySelectorAll(".scroll-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  src="/logos/logo.png"
                  alt="Satellite Connect Logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center font-semibold text-sm uppercase tracking-wider">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a
              href="#solutions"
              className="hover:text-primary transition-colors"
            >
              Solutions
            </a>
            <a href="#process" className="hover:text-primary transition-colors">
              Process
            </a>
            <a
              href="#contact"
              className="bg-gradient-primary text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="px-4 py-6 space-y-6">
            <a
              href="#home"
              className="block font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors py-2"
              onClick={handleNavClick}
            >
              Home
            </a>
            <a
              href="#solutions"
              className="block font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors py-2"
              onClick={handleNavClick}
            >
              Solutions
            </a>
            <a
              href="#process"
              className="block font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors py-2"
              onClick={handleNavClick}
            >
              Process
            </a>
            <a
              href="#contact"
              className="block bg-gradient-primary text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-center font-semibold text-sm uppercase tracking-wider mt-4"
              onClick={handleNavClick}
            >
              Free Quote
            </a>
          </div>
        </div>
      </nav>

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
              Premium installation and maintenance for residential and
              commercial properties in Houston.
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
            {/* Central Static Image with glow effect */}
            <div className="relative z-10 w-full max-w-[500px]">
              <div
                className="absolute inset-1 bg-gradient-primary rounded-[3.5rem] opacity-20 blur-lg animate-pulse"
                style={{ animationDuration: "4s" }}
              />
              <img
                src="/images/hero_img_1.png"
                className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-[500px] object-cover relative z-10"
                alt="Professional satellite installation"
              />
            </div>

            {/* Floating Div 1: Signal Quality - Smooth Float */}
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

            {/* Floating Div 2: Happy Users - Smooth Float (Offset timing) */}
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

            {/* Floating Div 3: Feature Tag - Subtle Pulse */}
            <div className="absolute top-12 right-24 z-20 bg-gradient-primary px-4 py-2 rounded-xl shadow-lg text-white animate-pulse border border-white/20">
              <p className="text-xs font-black tracking-widest italic">
                4K ULTRA HD
              </p>
            </div>

            {/* Floating satellite icon */}
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

      {/* Rest of your existing code continues... */}
      {/* Trust Bar */}
      <section className="pt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
            Secure Payments Accepted Via
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <span className="text-2xl font-black italic text-blue-800">
              VISA
            </span>
            <span className="text-2xl font-black italic text-blue-600">
              MasterCard
            </span>
            <span className="text-2xl font-black italic text-blue-900">
              AMEX
            </span>
            <span className="text-2xl font-black italic text-blue-500">
              PayPal
            </span>
            <span className="text-2xl font-black italic text-orange-600">
              Discover
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 scroll-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-primary rounded-[3rem] p-12 text-white flex flex-col md:flex-row justify-around items-center gap-12 text-center shadow-2xl">
            <div className="card-animate hover:scale-110 transition-transform cursor-default">
              <div className="text-5xl font-black mb-2">1,500+</div>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-wider">
                Happy Clients
              </p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
            <div className="card-animate hover:scale-110 transition-transform cursor-default">
              <div className="text-5xl font-black mb-2">100%</div>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-wider">
                Signal Quality
              </p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
            <div className="card-animate hover:scale-110 transition-transform cursor-default">
              <div className="text-5xl font-black mb-2">24/7</div>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-wider">
                Tech Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-gray-50 scroll-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              One-Stop <span className="text-gradient-primary">Solutions</span>
            </h2>
            <p className="text-gray-500">
              Everything for your Satellite TV ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShoppingCart />,
                title: "Sales",
                desc: "Premium dish hardware and receiver packages.",
              },
              {
                icon: <Zap />,
                title: "Repairs",
                desc: "Expert diagnostics and hardware restoration.",
              },
              {
                icon: <HardDrive />,
                title: "Spare Parts",
                desc: "Genuine LNBs, cabling, and mounting gear.",
              },
              {
                icon: <Settings />,
                title: "Maintain Connections",
                desc: "Scheduled tuning for optimal signal year-round.",
              },
              {
                icon: <Headphones />,
                title: "After Sales Support",
                desc: "Dedicated concierge for your account and bills.",
              },
              {
                icon: <CheckCircle />,
                title: "New Installation",
                desc: "Professional setup for home or office.",
              },
            ].map((sol, i) => (
              <div
                key={i}
                className="card-animate p-8 border border-gray-100 rounded-3xl hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group bg-white"
              >
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-gray-500">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Heartland Section */}
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
                TV made for the heartland, where family, stories & moments
                matter
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

      {/* Process Section */}
      <section id="process" className="py-24 scroll-section bg-process">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
              Our Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Free site survey and signal path assessment.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Custom hardware selection for your needs.",
              },
              {
                step: "03",
                title: "Installation",
                desc: "Professional mounting and cable management.",
              },
              {
                step: "04",
                title: "Handover",
                desc: "System training and final signal verification.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-animate p-8 bg-white rounded-3xl relative border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold mb-6 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 bg-white scroll-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Trusted by{" "}
              <span className="text-gradient-primary"> Thousands</span>
            </h2>
            <div className="flex justify-center gap-1 text-orange-400">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={18} fill="currentColor" />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James Wilson",
                text: "The installation was spotless. I haven't had a single signal drop even in Houston storms.",
                image: "/images/review_1.png",
              },
              {
                name: "Sarah Chen",
                text: "Professional team that respected our office hours. Highly recommended for commercial setups.",
                image: "/images/review_2.png",
              },
              {
                name: "Marcus Reed",
                text: "The only satellite partner we trust. Their spare parts are always genuine and high quality.",
                image: "/images/review_3.png",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="card-animate bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group"
              >
                <Quote
                  className="text-primary/20 mb-6 group-hover:text-primary transition-colors duration-500"
                  size={40}
                />
                <p className="italic text-gray-700 mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 scroll-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="card-animate">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Get in <span className="text-gradient-primary">Touch</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Our experts are ready to help with your installation and
                  billing needs.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin />,
                    label: "Visit",
                    val: "16711 Cold Harbour LN, Houston, TX",
                    color: "bg-blue-50",
                  },
                  {
                    icon: <Phone />,
                    label: "Call",
                    val: "307-206-0647",
                    color: "bg-purple-50",
                  },
                  {
                    icon: <Mail />,
                    label: "Email",
                    val: "info@satelliteconnect.site",
                    color: "bg-pink-50",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="card-animate flex gap-5 items-start p-6 rounded-3xl border border-gray-100 hover:border-primary/40 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div
                      className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-gray-900 font-semibold">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 card-animate">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 lg:p-12 p-4 rounded-[3rem] border border-gray-100 space-y-4 hover:shadow-2xl transition-shadow duration-500"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-white rounded-2xl outline-none border border-gray-100 focus:ring-4 ring-primary/10 focus:border-primary transition-all"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-white rounded-2xl outline-none border border-gray-100 focus:ring-4 ring-primary/10 focus:border-primary transition-all"
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 bg-white rounded-2xl outline-none border border-gray-100 focus:ring-4 ring-primary/10 focus:border-primary transition-all"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Project Details"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-white rounded-2xl outline-none border border-gray-100 focus:ring-4 ring-primary/10 focus:border-primary resize-none transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white py-5 rounded-2xl font-bold shadow-xl hover:shadow-primary/40 active:scale-95 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Sending..." : "Send Request Now"}{" "}
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f0c1a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-12 text-left mb-16 border-b border-white/5 pb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/logo.png"
                  alt="Satellite Connect Logo"
                  width={160}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Houston's premier satellite infrastructure experts.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li>
                  <a
                    href="#home"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-primary transition-colors"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="hover:text-primary transition-colors"
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                <Facebook
                  size={20}
                  className="hover:text-primary cursor-pointer transition-colors"
                />
                <Twitter
                  size={20}
                  className="hover:text-primary cursor-pointer transition-colors"
                />
                <Instagram
                  size={20}
                  className="hover:text-primary cursor-pointer transition-colors"
                />
              </div>
              <div className="mt-6 space-y-3 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>307-206-0647</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>info@satelliteconnect.site</span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Satellite Connect. Houston, TX. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

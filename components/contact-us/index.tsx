"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const contactInfo = [
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
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 scroll-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="card-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-gradient-primary">Touch</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Our experts are ready to help with your installation and billing
                needs.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
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
  );
}

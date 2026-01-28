"use client";

import { Shield, Lock, Eye, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-4xl mx-auto px-4 pt-40 pb-24 ">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Commitment
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Satellite Connect LLC respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and protect your data when you visit our
              website or use our services.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">Full Name</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">Phone Number</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">Email Address</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">Service Address</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Payment Information (only for billing purposes)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Any information you provide through contact forms or service
                  requests
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Technical data such as IP address, browser type, and website
                  usage (for analytics and performance improvement)
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Provide and manage our satellite TV installation and repair services",
                "Schedule appointments and communicate with customers",
                "Process payments and invoices",
                "Improve our website and customer experience",
                "Send service updates or promotional messages (only if you agree)",
              ].map((use, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{use}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Data Sharing Policy
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do <span className="font-bold text-red-600">NOT</span> sell,
              rent, trade, or share your personal information with any third
              party for marketing or commercial purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your information is only shared when required by law or necessary
              to complete a service request (such as payment processing or legal
              compliance).
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Request access to your personal data",
                "Request correction or deletion of your data",
                "Opt out of marketing communications",
              ].map((right, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{right}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, contact us
              at:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@satelliteconnect.site</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>307-206-0647</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span>Satellite Connect LLC, Houston, Texas, USA</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

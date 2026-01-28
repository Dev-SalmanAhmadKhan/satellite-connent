"use client";

import {
  FileText,
  Calendar,
  Shield,
  AlertTriangle,
  Copyright,
  Scale,
} from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-4xl mx-auto px-4 pt-40 pb-24 ">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Notice */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
          <p className="text-blue-800 text-center font-medium">
            By accessing this website or using our services, you agree to the
            following Terms and Conditions.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Satellite Connect LLC provides satellite dish installation, TV
              signal setup, maintenance, troubleshooting, and related services
              in Houston and surrounding areas.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Appointments & Payments
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Customers must provide accurate contact and service details.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Payment is due upon completion unless agreed otherwise.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Prices may change without prior notice.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cancellations
            </h2>
            <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-100">
              <p className="text-gray-700">
                Appointments canceled less than 24 hours before the scheduled
                time may be subject to a cancellation fee.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Customer Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">Customers must:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Provide safe access to installation areas",
                "Ensure permission from property owners or landlords",
                "Inform us of any existing wiring or structural limitations",
              ].map((responsibility, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{responsibility}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Limitation of Liability
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Satellite Connect LLC is not responsible for:
            </p>
            <div className="space-y-3">
              {[
                "Signal interruptions caused by weather, trees, buildings, or satellite provider issues",
                "Damage caused by pre-existing wiring or structures",
                "Indirect or incidental losses",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-red-50 rounded-lg"
                >
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Warranty</h2>
              </div>
              <p className="text-gray-700">
                We provide limited workmanship warranty as stated on your
                invoice. Manufacturer warranties apply separately for equipment.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Copyright className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-gray-700">
                All website content, logos, images, and text belong to Satellite
                Connect LLC and may not be copied without permission.
              </p>
            </section>
          </div>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Governing Law
              </h2>
            </div>
            <p className="text-gray-700">
              These Terms are governed by the laws of the State of Texas, USA.
            </p>
          </section>

          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to update these Terms at any time. Continued
              use of our website means acceptance of updated terms.
            </p>
            <div className="space-y-3">
              <p className="text-white/90">
                📄{" "}
                <Link
                  href="/privacy-policy"
                  className="underline hover:no-underline"
                >
                  Privacy Policy
                </Link>
              </p>
              <p className="text-white/90">
                💵{" "}
                <Link
                  href="/refund-policy"
                  className="underline hover:no-underline"
                >
                  Refund Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

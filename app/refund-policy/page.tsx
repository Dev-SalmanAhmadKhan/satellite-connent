"use client";

import {
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-4xl mx-auto px-4 pt-40 pb-24 ">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            30-Day Refund Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Customer satisfaction is our top priority
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              At Satellite Connect LLC, customer satisfaction is our priority.
              We offer a 30-day refund policy on eligible services and products.
            </p>
          </section>

          <section className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Eligibility for Refund
              </h2>
            </div>
            <p className="text-gray-700 mb-6">You may request a refund if:</p>
            <div className="space-y-4">
              {[
                "The service was not completed as agreed",
                "There was a technical issue caused by our installation",
                "You are not satisfied with the service quality (verified by inspection)",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border">
              <p className="text-gray-700 font-medium">
                ⏰ Refund requests must be submitted within 30 days of the
                service date or purchase date.
              </p>
            </div>
          </section>

          <section className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Non-Refundable Situations
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Refunds will NOT be issued for:
            </p>
            <div className="space-y-4">
              {[
                "Damage caused by customer misuse or third-party modifications",
                "Services already fully completed and approved by the customer",
                "Subscription fees or third-party provider charges",
                "Delays caused by weather, building restrictions, or access issues",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Refund Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 font-bold">1</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">
                  Via phone or email with your invoice number and reason
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 font-bold">2</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Review</h3>
                <p className="text-gray-600 text-sm">
                  Our team will review the request within 5–7 business days
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 font-bold">3</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Refund</h3>
                <p className="text-gray-600 text-sm">
                  If approved, refund issued to original payment method
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Processing Time
                </h2>
                <p className="text-gray-700">
                  Approved refunds may take{" "}
                  <span className="font-bold">7–14 business days</span> to
                  appear depending on your bank or payment provider.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-primary rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Contact for Refunds</h2>
            </div>
            <div className="space-y-4">
              <p className="text-white/90">Satellite Connect LLC</p>
              <p className="text-white/90">Houston, Texas, USA</p>
              <p className="text-white/90">Email: info@satelliteconnect.site</p>
              <p className="text-white/90">Phone: 307-206-0647</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

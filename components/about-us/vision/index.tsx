"use client";

import {
  CheckCircle,
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Clock,
  DollarSign,
  Star,
  Zap,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function VisionSection() {
  return (
    <section className="py-20 bg-gray-50 scroll-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-2xl shadow-sm mb-4">
            <Target size={18} />
            <p className="text-sm font-bold tracking-wider uppercase">
              Our Commitment
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our Core <span className="text-primary">Values</span> & Vision
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Guided by principles of excellence, transparency, and
            customer-centric service
          </p>
        </div>

        {/* Row 1: Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm  border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide high-quality satellite connectivity solutions that
                  enhance customer satisfaction, reliability, and long-term
                  trust.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm  border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a trusted and recognized satellite service provider
                  in Texas by delivering consistent excellence, innovation, and
                  customer care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Goals - Split into 2 cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Goals Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm  border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Service Goals</h3>
                <p className="text-gray-600">
                  Delivering excellence in every installation
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Deliver fast and professional installation services",
                "Maintain transparent pricing and honest communication",
                "Ensure customer safety and satisfaction",
              ].map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Goals Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm  border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Star className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Growth Goals</h3>
                <p className="text-gray-600">
                  Building lasting relationships & improving standards
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Build long-term customer relationships",
                "Continuously improve technical skills",
                "Enhance service standards regularly",
              ].map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Benefits Card 1 */}
          <div className="bg-gradient-primary rounded-3xl p-8 shadow-xl group hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Our Advantages
                </h3>
                <p className="text-white/90">
                  Why we stand out from the competition
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Users, text: "Experienced technicians" },
                { icon: DollarSign, text: "Affordable & transparent pricing" },
                { icon: Clock, text: "Quick response & scheduling" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
                >
                  <item.icon className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Card 2 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl group hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Customer Care</h3>
                <p className="text-white/90">
                  Our commitment to your satisfaction
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, text: "Customer-first approach" },
                { icon: CheckCircle, text: "Reliable after-service support" },
                { icon: Award, text: "Quality guarantee on all work" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
                >
                  <item.icon className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  ShoppingCart,
  Zap,
  HardDrive,
  Settings,
  Headphones,
  CheckCircle,
} from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
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
  ];

  return (
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
          {solutions.map((sol, i) => (
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
  );
}

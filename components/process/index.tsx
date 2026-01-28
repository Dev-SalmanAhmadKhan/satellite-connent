export default function ProcessSection() {
  const processes = [
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
  ];

  return (
    <section id="process" className="py-24 scroll-section bg-process">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
            Our Process
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {processes.map((item, i) => (
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
  );
}

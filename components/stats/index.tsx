export default function StatsSection() {
  const stats = [
    { value: "1,500+", label: "Happy Clients" },
    { value: "100%", label: "Signal Quality" },
    { value: "24/7", label: "Tech Support" },
  ];

  return (
    <section className="py-20 scroll-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-primary rounded-[3rem] p-12 text-white flex flex-col md:flex-row justify-around items-center gap-12 text-center shadow-2xl">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="card-animate hover:scale-110 transition-transform cursor-default">
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <p className="text-primary-foreground/80 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

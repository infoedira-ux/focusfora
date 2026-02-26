export default function StatsBar() {
  const stats = [
    { number: "70K+", label: "Free Books" },
    { number: "200M+", label: "Research Papers" },
    { number: "CBC–PhD", label: "Every Level" },
    { number: "M-Pesa", label: "Easy Payments" },
  ];

  return (
    <div className="bg-aubergine py-10 px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <span className="font-serif text-4xl font-light text-saffron block">{stat.number}</span>
          <span className="text-offwhite/60 text-xs uppercase tracking-widest mt-1 block">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

const plans = [
  {
    id: "free",
    name: "Explorer",
    price: "Free",
    period: "forever",
    features: ["Access to all 70K+ books", "5 AI summaries/month", "Basic quiz mode", "KCSE past papers (last 3 years)"],
    featured: false,
  },
  {
    id: "scholar",
    name: "Scholar",
    price: "KSh 249",
    period: "per month",
    features: ["Everything in Explorer", "Unlimited AI simplifications", "Full past paper library", "Offline reading mode", "CBC complete guides", "No ads"],
    featured: true,
  },
  {
    id: "institution",
    name: "Institution",
    price: "Custom",
    period: "per term",
    features: ["Whole school access", "Teacher dashboard", "Student analytics", "Custom branding option", "Priority support"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-8 md:px-16 bg-aubergine text-center">
      <span className="ff-section-eyebrow block mb-3">Simple Pricing</span>
      <h2 className="font-serif text-4xl md:text-5xl font-light text-offwhite leading-tight mb-3">
        Knowledge shouldn't be expensive
      </h2>
      <p className="text-offwhite/50 text-sm mb-14 font-light">Pay with M-Pesa. Cancel anytime.</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-sm p-8 text-left transition-all duration-300 hover:-translate-y-1 ${
              plan.featured
                ? "bg-saffron"
                : "bg-white/[0.04] border border-white/10"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-aubergine text-saffron text-[10px] uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap font-medium">
                Most Popular
              </div>
            )}

            <div className={`font-serif text-xl mb-2 ${plan.featured ? "text-aubergine" : "text-offwhite"}`}>
              {plan.name}
            </div>
            <div className={`font-serif text-5xl font-light mb-1 ${plan.featured ? "text-aubergine" : "text-saffron-light"}`}>
              {plan.price}
            </div>
            <div className={`text-xs mb-8 ${plan.featured ? "text-aubergine/60" : "text-offwhite/40"}`}>
              {plan.period}
            </div>

            <ul className="space-y-2 mb-8">
              {plan.features.map((f) => (
                <li key={f} className={`text-xs flex gap-2 ${plan.featured ? "text-aubergine/80" : "text-offwhite/60"}`}>
                  <span className={plan.featured ? "text-aubergine" : "text-saffron"}>✦</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 text-xs font-medium uppercase tracking-widest rounded-sm transition-all duration-300 ${
                plan.featured
                  ? "bg-aubergine text-offwhite hover:bg-aubergine-mid"
                  : "border border-offwhite/20 text-offwhite hover:bg-offwhite hover:text-aubergine"
              }`}
            >
              {plan.id === "institution" ? "Contact Us" : plan.id === "free" ? "Get Started" : "Start Free Trial"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

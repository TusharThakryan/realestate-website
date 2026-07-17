const points = [
  {
    title: "Local Market Experts",
    desc: "Our agents live and work in the neighborhoods they sell, so you get insight you can't find online.",
    icon: (
      <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
    ),
  },
  {
    title: "Transparent Process",
    desc: "Clear timelines, honest pricing guidance, and no surprises from offer to closing.",
    icon: (
      <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    title: "Full-Service Support",
    desc: "From financing partners to inspectors, we coordinate the whole team around your move.",
    icon: (
      <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m5-5.13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6 1a4 4 0 1 0-3-6.65m-9 6.65a4 4 0 1 1 3-6.65" />
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-navy-800 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            About Whitecollar Realty
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
            Real estate, handled with care
          </h2>
          <p className="text-navy-100 leading-relaxed mb-6">
            For over a decade, Whitecollar Realty has helped families and investors
            navigate one of the biggest decisions of their lives. We pair deep local
            knowledge with a modern, low-stress process — whether you're buying your
            first home or selling your fifth.
          </p>
          <a
            href="#agents"
            className="inline-block text-gold-400 font-semibold hover:text-gold-300 transition-colors duration-200 underline underline-offset-4"
          >
            Meet our agents
          </a>
        </div>

        <div className="grid gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 bg-navy-700/60 rounded-xl p-6 hover:bg-navy-700 transition-colors duration-200"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-gold-400/10 flex items-center justify-center text-gold-400">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {point.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-cream font-semibold mb-1">{point.title}</h3>
                <p className="text-navy-200 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

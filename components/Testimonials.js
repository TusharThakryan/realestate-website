const testimonials = [
  {
    quote:
      "Our agent made a stressful first-time purchase feel manageable. We closed two weeks ahead of schedule.",
    name: "The Alvarez Family",
    detail: "Bought in Cedar Creek",
  },
  {
    quote:
      "They priced our home perfectly and we had three offers within the first week on the market.",
    name: "Janet Ruiz",
    detail: "Sold in Maple Ridge",
  },
  {
    quote:
      "Responsive, honest, and genuinely invested in finding us the right place, not just any place.",
    name: "Tom & Erika Byrne",
    detail: "Bought in Harbor View",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900">
            What our clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-8 border border-navy-100 hover:border-gold-300 hover:shadow-lg transition-all duration-200"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gold-400 mb-4">
                <path d="M7.17 6C4.87 8.09 3 11.03 3 14.5A4.5 4.5 0 0 0 7.5 19c2.31 0 4-1.79 4-4a3.5 3.5 0 0 0-3.5-3.5c-.34 0-.66.05-.97.13.28-1.6 1.55-3.13 3.35-4.3L7.17 6Zm10 0c-2.3 2.09-4.17 5.03-4.17 8.5A4.5 4.5 0 0 0 17.5 19c2.31 0 4-1.79 4-4a3.5 3.5 0 0 0-3.5-3.5c-.34 0-.66.05-.97.13.28-1.6 1.55-3.13 3.35-4.3L17.17 6Z" />
              </svg>
              <p className="text-navy-700 leading-relaxed mb-6">{t.quote}</p>
              <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
              <p className="text-navy-400 text-xs">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

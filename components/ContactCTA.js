export default function ContactCTA() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="bg-navy-900 rounded-2xl px-8 py-16 lg:px-16 grid lg:grid-cols-2 gap-10 items-center overflow-hidden relative">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
            Ready to make your move?
          </h2>
          <p className="text-navy-100 max-w-md">
            Tell us what you're looking for and a Whitecollar Realty agent will
            reach out within one business day.
          </p>
        </div>

        <form className="relative grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="rounded-lg px-4 py-3 text-sm bg-navy-800 text-cream placeholder-navy-300 border border-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
          <input
            type="email"
            placeholder="Email address"
            className="rounded-lg px-4 py-3 text-sm bg-navy-800 text-cream placeholder-navy-300 border border-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="sm:col-span-2 rounded-lg px-4 py-3 text-sm bg-navy-800 text-cream placeholder-navy-300 border border-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
          <textarea
            placeholder="What are you looking for?"
            rows={3}
            className="sm:col-span-2 rounded-lg px-4 py-3 text-sm bg-navy-800 text-cream placeholder-navy-300 border border-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
          <button
            type="button"
            className="sm:col-span-2 bg-gold-400 text-navy-900 font-semibold rounded-lg px-6 py-3 text-sm hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/30 transition-all duration-200"
          >
            Request a Consultation
          </button>
        </form>
      </div>
    </section>
  );
}

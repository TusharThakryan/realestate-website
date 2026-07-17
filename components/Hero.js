export default function Hero() {
  return (
    <section id="home" className="relative bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Modern home exterior"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <p className="text-gold-400 tracking-[0.2em] text-xs font-semibold uppercase mb-4">
          Trusted Real Estate Partners
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream max-w-3xl leading-tight">
          Find a home that feels like{" "}
          <span className="text-gold-400">yours</span>.
        </h1>
        <p className="text-navy-100 mt-6 max-w-xl text-lg">
          Whitecollar Realty connects buyers and sellers with expert local agents,
          curated listings, and a smoother way to move.
        </p>

        {/* Search bar */}
        <div className="mt-10 bg-cream rounded-xl p-3 sm:p-4 shadow-2xl max-w-3xl grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="City, neighborhood, or ZIP"
            className="sm:col-span-2 rounded-lg border border-navy-100 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
          <select className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold-400">
            <option>Any type</option>
            <option>House</option>
            <option>Condo</option>
            <option>Townhome</option>
          </select>
          <button className="bg-navy-800 text-cream font-semibold rounded-lg px-4 py-3 text-sm hover:bg-gold-400 hover:text-navy-900 transition-colors duration-200">
            Search Listings
          </button>
        </div>

        <div className="flex flex-wrap gap-10 mt-14">
          {[
            ["12+", "Years in Business"],
            ["850+", "Homes Sold"],
            ["4.9/5", "Client Rating"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="text-3xl font-display font-semibold text-gold-400">{stat}</p>
              <p className="text-navy-200 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

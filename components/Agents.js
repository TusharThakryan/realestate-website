const agents = [
  {
    name: "Dana Whitfield",
    role: "Principal Broker",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcus Lee",
    role: "Senior Agent",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Anand",
    role: "Listing Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ryan Castillo",
    role: "Buyer's Agent",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Our Team
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900">
          Agents who know the market
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {agents.map((agent) => (
          <div key={agent.name} className="group text-center">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors duration-300" />
            </div>
            <h3 className="font-display font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
              {agent.name}
            </h3>
            <p className="text-sm text-navy-400">{agent.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

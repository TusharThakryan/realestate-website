const columns = [
  {
    title: "Explore",
    links: ["Home", "Listings", "About", "Agents", "Testimonials", "Contact"],
  },
  {
    title: "Resources",
    links: ["Buyer's Guide", "Seller's Guide", "Mortgage Calculator", "Market Reports"],
  },
  {
    title: "Company",
    links: ["Careers", "Press", "Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="text-2xl font-display font-semibold text-cream">
            Whitecollar<span className="text-gold-400"> Realty</span>
          </span>
          <p className="text-navy-300 text-sm mt-4 max-w-xs leading-relaxed">
            Helping buyers and sellers move forward, with local expertise and a
            modern, transparent process.
          </p>
          <div className="flex gap-3 mt-6">
            {["Facebook", "Instagram", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-9 h-9 rounded-full border border-navy-600 flex items-center justify-center text-navy-200 hover:border-gold-400 hover:text-gold-400 transition-colors duration-200 text-xs"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-cream text-sm font-semibold uppercase tracking-wide mb-4">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-navy-300 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-cream text-sm font-semibold uppercase tracking-wide mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-navy-300">
            <li>123 Main Street, Austin, TX</li>
            <li>
              <a href="tel:+10000000000" className="hover:text-gold-400 transition-colors duration-200">
                (000) 000-0000
              </a>
            </li>
            <li>
              <a href="mailto:hello@whitecollarrealty.com" className="hover:text-gold-400 transition-colors duration-200">
                hello@whitecollarrealty.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-navy-400">
          <span>© {new Date().getFullYear()} Whitecollar Realty. All rights reserved.</span>
          <span>Equal Housing Opportunity</span>
        </div>
      </div>
    </footer>
  );
}

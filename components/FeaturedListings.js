const listings = [
  {
    title: "Maple Ridge Residence",
    address: "128 Maple Ridge Dr, Austin, TX",
    price: "$685,000",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Harbor View Condo",
    address: "45 Harbor View Ave, Austin, TX",
    price: "$412,500",
    beds: 2,
    baths: 2,
    sqft: "1,340",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Wellington Estate",
    address: "902 Wellington Ln, Austin, TX",
    price: "$1,240,000",
    beds: 5,
    baths: 4,
    sqft: "4,120",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cedar Creek Townhome",
    address: "310 Cedar Creek Way, Austin, TX",
    price: "$358,000",
    beds: 3,
    baths: 2,
    sqft: "1,780",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sunset Hollow House",
    address: "77 Sunset Hollow Rd, Austin, TX",
    price: "$525,000",
    beds: 4,
    baths: 3,
    sqft: "2,410",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Birchwood Cottage",
    address: "16 Birchwood Ct, Austin, TX",
    price: "$299,000",
    beds: 2,
    baths: 1,
    sqft: "1,120",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedListings() {
  return (
    <section id="listings" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <p className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Featured Listings
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900">
            Homes on the market
          </h2>
        </div>
        <a
          href="#listings"
          className="text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors duration-200 underline underline-offset-4"
        >
          View all listings
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((home) => (
          <div
            key={home.title}
            className="group bg-white rounded-xl overflow-hidden border border-navy-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={home.image}
                alt={home.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-navy-900 text-gold-400 text-xs font-semibold px-3 py-1.5 rounded-md">
                {home.price}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                {home.title}
              </h3>
              <p className="text-sm text-navy-400 mt-1">{home.address}</p>
              <div className="flex gap-4 mt-4 text-sm text-navy-600">
                <span>{home.beds} bd</span>
                <span>{home.baths} ba</span>
                <span>{home.sqft} sqft</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

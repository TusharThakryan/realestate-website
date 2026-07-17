import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedListings from "../components/FeaturedListings";
import WhyChooseUs from "../components/WhyChooseUs";
import Agents from "../components/Agents";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedListings />
      <WhyChooseUs />
      <Agents />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import About from '@/components/About';
import ServicesMenu from '@/components/ServicesMenu';
import WhyChoose from '@/components/WhyChoose';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-accent-50 text-secondary-800">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <ServicesMenu />
        <WhyChoose />
        <Gallery />
        <Reviews />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

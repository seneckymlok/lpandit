import Navigation from './components/Navigation';
import ProductHero from './components/ProductHero';
import Benefits from './components/Benefits';
import DeepDive from './components/DeepDive';
import ProductDetails from './components/ProductDetails';
import FeaturedCollection from './components/FeaturedCollection';
import VedicWisdom from './components/VedicWisdom';
import SpiritualStory from './components/SpiritualStory';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SpiritualAmbience from './components/SpiritualAmbience';

function App() {
  return (
    <div className="min-h-screen bg-mystic-indigo font-sans text-neutral-100 selection:bg-divine-gold/30 selection:text-divine-gold">
      <SpiritualAmbience />
      <Navigation />
      <main className="relative z-10">
        <ProductHero />
        <SpiritualStory />
        <Benefits />
        <DeepDive />
        <ProductDetails />
        <FeaturedCollection />
        <VedicWisdom />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

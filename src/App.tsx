/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomCard from './components/RoomCard';
import Amenities from './components/Amenities';
import Footer from './components/Footer';
import { motion } from 'motion/react';

const rooms = [
  {
    title: "Riviera Suite",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    price: "850",
    size: "65m²",
    rating: 4.9
  },
  {
    title: "Horizon Grand Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    price: "1,200",
    size: "80m²",
    rating: 5.0
  },
  {
    title: "Terrace Garden Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074",
    price: "450",
    size: "45m²",
    rating: 4.8
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-marble selection:bg-gold/30">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Introduction Section */}
        <section className="py-32 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 inline-block">Since 1924</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8 text-charcoal">
                The Heritage of <br />
                <span className="italic">Coastal Elegance</span>
              </h2>
              <p className="text-charcoal/70 leading-relaxed font-light mb-8 max-w-lg">
                Nestled along the pristine coastline of the French Riviera, L'Horizon Resort & Spa 
                has been the sanctuary for discerning travelers for nearly a century. Our philosophy 
                combines traditional European hospitality with contemporary luxury to create 
                unforgettable moments under the Mediterranean sun.
              </p>
              <div className="flex gap-12">
                <div>
                  <span className="block text-3xl font-serif text-charcoal mb-2">950+</span>
                  <span className="text-[8px] uppercase tracking-widest text-charcoal/50">Luxury Suites</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-charcoal mb-2">12</span>
                  <span className="text-[8px] uppercase tracking-widest text-charcoal/50">Michelin Stars</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-charcoal mb-2">100%</span>
                  <span className="text-[8px] uppercase tracking-widest text-charcoal/50">Guest Satisfaction</span>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                 <img 
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080" 
                    alt="Resort Entrance" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                 />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 aspect-square bg-stone p-8 hidden md:block">
                 <p className="text-[10px] uppercase tracking-widest text-charcoal/60 leading-relaxed italic">
                   "A sanctuary where the sky meets the sea, and time slows to the rhythm of the waves."
                 </p>
                 <span className="block mt-4 text-[8px] uppercase tracking-[0.3em] font-bold">— Le Monde Voyage</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rooms Showcase */}
        <section id="rooms" className="py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 inline-block">Refined Comfort</span>
                <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Residences & Suites</h2>
              </div>
              <button className="luxury-button border border-charcoal/10 bg-transparent text-charcoal hover:text-white">
                View All Residences
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
              {rooms.map((room, index) => (
                <RoomCard 
                  key={index} 
                  title={room.title}
                  image={room.image}
                  price={room.price}
                  size={room.size}
                  rating={room.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Grid */}
        <Amenities />

        {/* Quote Section */}
        <section className="py-40 bg-charcoal text-white text-center relative overflow-hidden">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="container mx-auto px-6 z-10 relative"
           >
             <h3 className="text-3xl md:text-5xl font-serif italic font-light max-w-4xl mx-auto leading-tight">
               "Luxury must be comfortable, otherwise it is not luxury."
             </h3>
             <span className="block mt-8 text-xs uppercase tracking-[0.4em] text-gold">Gabrielle Chanel</span>
           </motion.div>
           
           {/* Decorative elements */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-96 h-[1px] bg-white transform -rotate-45" />
              <div className="absolute bottom-1/2 right-0 w-96 h-[1px] bg-white transform -rotate-45" />
           </div>
        </section>

        {/* Location Section */}
        <section className="py-32">
           <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6">Discovery</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-12">In the Heart of Paradise</h2>
              <div className="w-full h-[500px] bg-stone/50 rounded-sm relative overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073" 
                    alt="Map" 
                    className="w-full h-full object-cover grayscale opacity-60"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                       <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center animate-ping absolute -inset-0" />
                       <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center relative z-10 border-4 border-marble">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                             <div className="w-2 h-2 bg-white rounded-full" />
                          </motion.div>
                       </div>
                       <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 shadow-xl whitespace-nowrap">
                          <span className="text-xs font-bold tracking-widest uppercase">Visit L'Horizon</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { motion } from 'motion/react';
import { ChefHat, Wind, Waves, Coffee } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { title: 'Infinity Pool', icon: Waves, description: 'Overlooking the azure Mediterranean horizon.', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070' },
    { title: 'Michelin Dining', icon: ChefHat, description: 'Culinary masterpieces by Chef Marco Lurent.', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074' },
    { title: 'Resort Spa', icon: Wind, description: 'Holistic rituals from ancient traditions.', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974' },
    { title: 'Morning Lounge', icon: Coffee, description: 'Start your day with artisan coffee and sea breeze.', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070' },
  ];

  return (
    <section id="amenities" className="py-32 bg-stone/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 inline-block">Curated Experiences</span>
          <h2 className="text-4xl md:text-5xl font-serif">Indulge in Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img 
                src={item.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-gold/40 transition-colors duration-500" />
              
              <div className="absolute bottom-10 left-10 right-10 text-white transform group-hover:-translate-y-4 transition-transform duration-500">
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-charcoal transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-xs font-light tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

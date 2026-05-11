import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

interface RoomProps {
  title: string;
  image: string;
  price: string;
  size: string;
  rating: number;
  key?: number | string;
}

export default function RoomCard({ title, image, price, size, rating }: RoomProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-marble/90 backdrop-blur-sm px-3 py-1 flex items-center gap-1">
          <Star size={12} className="text-gold fill-gold" />
          <span className="text-[10px] font-bold">{rating}</span>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="luxury-button transform translate-y-4 group-hover:translate-y-0 text-[10px]">
             View Details
          </button>
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-serif mb-1 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50">
            {size} • Ocean View
          </p>
        </div>
        <div className="text-right">
          <span className="text-lg font-serif">€{price}</span>
          <span className="block text-[8px] uppercase tracking-widest text-charcoal/40">per night</span>
        </div>
      </div>

      <div className="pt-4 border-t border-charcoal/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[10px] uppercase tracking-widest font-medium">Bespoke Butler Service Included</span>
        <ArrowRight size={16} className="text-gold" />
      </div>
    </motion.div>
  );
}

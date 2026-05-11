import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070" 
          alt="Luxury Resort" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 px-6 lg:px-12 text-center text-white">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="inline-block text-xs lg:text-sm tracking-[0.4em] uppercase font-medium mb-6 animate-pulse">
            Experience Serenity
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-tight mb-8">
            The Art of <br /> 
            <span className="italic font-normal">Living Well</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm lg:text-base font-light tracking-widest text-white/80 mb-12">
            Discover a sanctuary where timeless elegance meets the horizons of the French Riviera. 
            Indulge in unparalleled luxury and bespoke service.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="luxury-button border border-white hover:border-gold px-12 py-4">
              Explore Our Suites
            </button>
            <button className="px-12 py-4 text-xs tracking-[0.3em] uppercase border border-white/30 backdrop-blur-md hover:bg-white hover:text-charcoal transition-all duration-500">
              Virtual Tour
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Book Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 z-30"
      >
        <div className="glass-card p-6 lg:p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="flex items-center gap-4 px-4 py-2 border-r border-charcoal/10">
            <Calendar size={20} className="text-gold" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-charcoal/50">Check In</span>
              <button className="text-sm font-medium">Select Date</button>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 py-2 border-r border-charcoal/10">
            <Calendar size={20} className="text-gold" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-charcoal/50">Check Out</span>
              <button className="text-sm font-medium">Select Date</button>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 py-2 border-r border-charcoal/10">
            <Users size={20} className="text-gold" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-charcoal/50">Guests</span>
              <button className="text-sm font-medium">2 Adults, 0 Children</button>
            </div>
          </div>
          <button className="luxury-button w-full h-full py-4 text-[10px]">
            Check Availability
          </button>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-10 bg-white/30 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-slideDown" />
        </div>
      </motion.div>
    </section>
  );
}

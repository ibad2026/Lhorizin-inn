import { motion } from 'motion/react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-marble/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Helper Info */}
        <div className="hidden lg:flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase font-medium text-charcoal/60">
          <div className="flex items-center gap-2">
            <Globe size={12} className="text-gold" />
            <span>French Riviera</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-gold" />
            <span>+33 4 93 00 00 00</span>
          </div>
        </div>

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <a href="/" className="flex flex-col items-center">
            <span className="text-2xl lg:text-3xl font-serif tracking-[0.1em] text-charcoal uppercase">
              L'Horizon
            </span>
            <span className="text-[10px] tracking-[0.5em] text-gold uppercase mt-1">
              Resort & Spa
            </span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link text-charcoal">
                {item.name}
              </a>
            ))}
          </div>
          <button className="luxury-button">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-charcoal p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-marble border-t border-charcoal/5 px-6 py-10"
        >
          <div className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-2xl font-serif tracking-widest uppercase hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="luxury-button w-full mt-4">
              Book Your Stay
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

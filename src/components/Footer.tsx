import { Mail, Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <span className="text-3xl font-serif tracking-[0.1em] uppercase">
                L'Horizon
              </span>
              <span className="block text-[10px] tracking-[0.5em] text-gold uppercase mt-1">
                Resort & Spa
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed text-white/60 mb-8 max-w-xs">
              A testament to refined elegance and coastal serenity on the shores of the French Riviera. 
              Since 1924.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">Our Suites</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Dining Experiences</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Wellness & Spa</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Private Events</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Resort Offers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-6 text-sm font-light text-white/80">
              <li className="flex gap-4">
                <MapPin size={20} className="text-gold shrink-0" />
                <span>124 Promenade des Anglais, <br />06000 Nice, France</span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-gold shrink-0" />
                <span>+33 4 93 00 00 00</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-gold shrink-0" />
                <span>reservations@lhorizon.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-8">Newsletter</h4>
            <p className="text-sm font-light text-white/60 mb-6">
              Subscribe to receive exclusive offers and news from L'Horizon.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border-b border-white/20 py-3 text-sm focus:outline-none focus:border-gold transition-all"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gold hover:translate-x-1 transition-transform">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 text-center">
            © 2024 L'Horizon Resort & Spa. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

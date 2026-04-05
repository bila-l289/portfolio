import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-4 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
                <ShoppingBag className="text-zinc-950 w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="text-white">PORT</span>
                <span className="text-gold">FOLIO</span>
              </span>
            </Link>
            <p className="text-zinc-500 leading-relaxed">
              Shopify Expert & Digital Marketer from Karachi, Pakistan. Helping brands scale with high-converting stores and data-driven marketing.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-bilal-61234a3bb/' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold/30 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-zinc-500 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-white">Services</h3>
            <ul className="space-y-4">
              {['Shopify Setup', 'Facebook Ads', 'Social Media', 'Store Management', 'CRO'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-zinc-500 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:bilalsaifullah2211@gmail.com"
                className="flex items-center gap-3 text-zinc-500 hover:text-gold transition-colors group"
              >
                <Mail className="w-5 h-5 text-gold/50 group-hover:text-gold" />
                bilalsaifullah2211@gmail.com
              </a>
              <a
                href="https://wa.me/923702272662"
                className="flex items-center gap-3 text-zinc-500 hover:text-gold transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-gold/50 group-hover:text-gold" />
                +92 370 2272662
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Muhammad Bilal. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Made with ❤️ in Karachi</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800" />
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

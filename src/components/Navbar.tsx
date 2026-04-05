import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingBag, BarChart3, User, Mail, Home, Star } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Portfolio', path: '/portfolio', icon: ShoppingBag },
  { name: 'Services', path: '/services', icon: BarChart3 },
  { name: 'Reviews', path: '/reviews', icon: Star },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
              <ShoppingBag className="text-zinc-950 w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="text-white">PORT</span>
              <span className="text-gold">FOLIO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-gold/10 text-gold shadow-sm shadow-gold/5"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 rounded-xl bg-gold text-zinc-950 font-bold text-sm hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 px-4"
        >
          <div className="glass rounded-2xl p-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all",
                  location.pathname === item.path
                    ? "bg-gold/10 text-gold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full py-4 rounded-xl bg-gold text-zinc-950 font-bold text-center shadow-lg shadow-gold/20"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

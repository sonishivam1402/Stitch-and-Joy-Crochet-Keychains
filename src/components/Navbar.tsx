import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Custom Order', path: '/custom' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-pastel-cream/80 backdrop-blur-md border-b border-pastel-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center">
              <Heart className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-serif font-bold text-crochet-ink tracking-tight">Stitch & Joy</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-pastel-pink ${
                  location.pathname === link.path ? 'text-pastel-pink' : 'text-crochet-ink/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/shop" className="bg-pastel-pink text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pastel-pink/90 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
              <ShoppingBag size={18} />
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-crochet-ink p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-pastel-pink/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-crochet-ink hover:bg-pastel-pink/10 rounded-2xl"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-pastel-pink text-white px-6 py-4 rounded-2xl text-base font-semibold"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

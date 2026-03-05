import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-pastel-beige/50 pt-16 pb-8 border-t border-pastel-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-pastel-pink rounded-full flex items-center justify-center">
                <Heart className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-serif font-bold text-crochet-ink">Stitch & Joy</span>
            </Link>
            <p className="text-crochet-ink/70 text-sm leading-relaxed">
              Handmade crochet creations crafted with love and soft yarn. Bringing a little joy to your everyday accessories.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-crochet-ink mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-crochet-ink/70">
              <li><Link to="/" className="hover:text-pastel-pink transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-pastel-pink transition-colors">Shop All</Link></li>
              <li><Link to="/custom" className="hover:text-pastel-pink transition-colors">Custom Orders</Link></li>
              <li><Link to="/about" className="hover:text-pastel-pink transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-crochet-ink mb-6">Categories</h4>
            <ul className="space-y-3 text-sm text-crochet-ink/70">
              <li><Link to="/shop?cat=Animals" className="hover:text-pastel-pink transition-colors">Animals</Link></li>
              <li><Link to="/shop?cat=Food" className="hover:text-pastel-pink transition-colors">Food & Fruits</Link></li>
              <li><Link to="/shop?cat=Flowers" className="hover:text-pastel-pink transition-colors">Flowers</Link></li>
              <li><Link to="/shop?cat=Characters" className="hover:text-pastel-pink transition-colors">Characters</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-crochet-ink mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-crochet-ink hover:bg-pastel-pink hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-crochet-ink hover:bg-pastel-pink hover:text-white transition-all shadow-sm">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-crochet-ink hover:bg-pastel-pink hover:text-white transition-all shadow-sm">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-xs text-crochet-ink/50">
              Questions? DM us on Instagram or WhatsApp for quick replies!
            </p>
          </div>
        </div>

        <div className="border-t border-crochet-ink/5 pt-8 text-center">
          <p className="text-xs text-crochet-ink/40">
            © 2026 Handmade Crochet Creations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

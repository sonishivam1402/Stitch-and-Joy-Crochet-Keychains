import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${product.name} Keychain.`);
  const whatsappUrl = `https://wa.me/916351009028?text=${whatsappMessage}`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-pastel-pink/10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-md text-crochet-ink px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            ₹{product.price}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-[10px] uppercase tracking-widest text-pastel-pink font-bold">
            {product.category}
          </span>
          <h3 className="font-serif text-lg font-bold text-crochet-ink leading-tight group-hover:text-pastel-pink transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-crochet-ink/60 text-sm line-clamp-2 mb-6 flex-grow">
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex items-center justify-center gap-2 bg-pastel-lavender/50 text-crochet-ink py-2.5 rounded-2xl text-xs font-bold hover:bg-pastel-lavender transition-colors"
          >
            <Eye size={14} />
            Details
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-pastel-pink text-white py-2.5 rounded-2xl text-xs font-bold hover:bg-pastel-pink/90 transition-all shadow-sm"
          >
            <MessageCircle size={14} />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
};

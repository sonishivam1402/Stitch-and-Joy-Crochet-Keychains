import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, ArrowLeft, Heart, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCTS } from '../constants';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-serif font-bold text-crochet-ink mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-pastel-pink font-bold flex items-center gap-2">
          <ArrowLeft size={20} />
          Back to Shop
        </Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${product.name} Keychain.`);
  const whatsappUrl = `https://wa.me/916351009028?text=${whatsappMessage}`;

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-crochet-ink/60 hover:text-pastel-pink font-bold mb-10 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden glass-card p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden glass-card p-1 cursor-pointer hover:border-pastel-pink transition-colors">
                  <img
                    src={`https://picsum.photos/seed/product-${product.id}-${i}/300/300`}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-8">
              <span className="inline-block bg-pastel-pink/10 text-pastel-pink px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-crochet-ink mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-pastel-pink">₹{product.price}</p>
            </div>

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="font-serif font-bold text-lg text-crochet-ink mb-3">Description</h3>
                <p className="text-crochet-ink/70 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif font-bold text-sm text-crochet-ink/50 uppercase tracking-wider mb-2">Material</h3>
                  <p className="font-medium">{product.material}</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-crochet-ink/50 uppercase tracking-wider mb-2">Size</h3>
                  <p className="font-medium">{product.size}</p>
                </div>
              </div>

              <div className="bg-pastel-mint/20 p-6 rounded-3xl border border-pastel-mint/30">
                <div className="flex items-start gap-4">
                  <Sparkles className="text-pastel-mint shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-crochet-ink text-sm mb-1">Handmade Disclaimer</h4>
                    <p className="text-xs text-crochet-ink/60 leading-relaxed">
                      As each item is 100% handmade, slight variations in color and shape may occur, making your keychain truly one-of-a-kind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow bg-pastel-pink text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-pastel-pink/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                Order via WhatsApp
              </a>
              <button className="bg-white text-crochet-ink border border-pastel-pink/20 w-full sm:w-16 h-16 rounded-full flex items-center justify-center hover:bg-pastel-pink/5 transition-all">
                <Heart size={24} className="text-pastel-pink" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-crochet-ink/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pastel-lavender/30 rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} className="text-crochet-ink/70" />
                </div>
                <span className="text-sm font-medium text-crochet-ink/70">Secure Handcraft</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pastel-lavender/30 rounded-full flex items-center justify-center">
                  <Truck size={20} className="text-crochet-ink/70" />
                </div>
                <span className="text-sm font-medium text-crochet-ink/70">Pan India Shipping</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

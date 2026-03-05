import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, Sparkles, Heart, ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-12 px-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-pink/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pastel-lavender/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pastel-mint/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-pastel-pink/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-pastel-pink w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-crochet-ink/70">Handmade with Love</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-crochet-ink leading-[1.1] mb-6">
              Handmade Crochet Keychains – <span className="text-pastel-pink italic">Cute, Cozy</span> & Crafted with Love
            </h1>
            <p className="text-lg text-crochet-ink/70 mb-10 max-w-lg leading-relaxed">
              Add a touch of warmth to your keys, bags, and life with our adorable, hand-stitched crochet creations. Each piece is unique and made just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="bg-pastel-pink text-white px-8 py-4 rounded-full font-bold hover:bg-pastel-pink/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Shop Now
                <ShoppingBag size={20} className="group-hover:rotate-12 transition-transform" />
              </Link>
              <Link to="/custom" className="bg-white text-crochet-ink border border-pastel-pink/20 px-8 py-4 rounded-full font-bold hover:bg-pastel-pink/5 transition-all flex items-center gap-2">
                Custom Order
                <Heart size={20} className="text-pastel-pink" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 glass-card p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://oss-us-east.mademine.com/mademine/front-end/XHBPPS5854-1.jpg"
                alt="Crochet Collection"
                className="rounded-2xl w-full h-auto shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pastel-mint rounded-full flex items-center justify-center -rotate-12 shadow-md z-20">
              <span className="text-white font-bold text-sm text-center leading-tight">100%<br/>Handmade</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pastel-lavender rounded-full flex items-center justify-center rotate-12 shadow-md z-20">
              <span className="text-crochet-ink font-bold text-sm text-center leading-tight">Soft<br/>Premium Yarn</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-crochet-ink mb-4">Featured Keychains</h2>
              <p className="text-crochet-ink/60 max-w-md">Our most loved and popular creations. Grab yours before they are gone!</p>
            </div>
            <Link to="/shop" className="text-pastel-pink font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-crochet-ink mb-4">Explore Categories</h2>
            <p className="text-crochet-ink/60">Find the perfect companion for your keys</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={cat}
                to={`/shop?cat=${cat}`}
                className={`group relative h-48 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all ${
                  idx % 2 === 0 ? 'bg-pastel-pink/20' : 'bg-pastel-lavender/20'
                }`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="text-pastel-pink" size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-crochet-ink">{cat}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-pastel-beige/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/crochet-process/800/600"
                alt="Crochet Process"
                className="rounded-[40px] shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6 max-w-[200px]">
                <p className="text-sm font-medium italic text-crochet-ink">"Every stitch tells a story of patience and love."</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-serif font-bold text-crochet-ink mb-8">Crafted With Care</h2>
            <div className="space-y-6 text-crochet-ink/70 leading-relaxed">
              <p>
                Our crochet creations are handmade with love. Each keychain is carefully crafted using soft, high-quality yarn to bring a little joy to your everyday accessories.
              </p>
              <p>
                What started as a small hobby has grown into a passion for creating tiny friends that you can take anywhere. We believe that handmade items have a soul that mass-produced products simply can't match.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 text-pastel-pink font-bold hover:translate-x-2 transition-transform">
                Read Our Story
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-crochet-ink mb-4">Follow Our Journey</h2>
            <p className="text-crochet-ink/60">Catch us on Instagram for latest drops and behind the scenes</p>
            <a href="#" className="inline-flex items-center gap-2 text-pastel-pink font-bold mt-4 hover:opacity-80 transition-opacity">
              <Instagram size={20} />
              @stitchandjoy_crochet
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-3xl overflow-hidden group relative">
                <img
                  src={`https://picsum.photos/seed/insta-${i}/600/600`}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-pastel-pink rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Ready for your own tiny friend?</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Whether it's a gift for a loved one or a treat for yourself, we're here to help you find the perfect keychain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/916351009028" target="_blank" rel="noopener noreferrer" className="bg-white text-pastel-pink px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center gap-3">
                <MessageCircle size={24} />
                Order Now via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

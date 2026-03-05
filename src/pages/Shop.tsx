import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('cat') || 'All';
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-crochet-ink mb-4">Our Collection</h1>
          <p className="text-crochet-ink/60">Browse through our handmade treasures</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSearchParams({ cat: 'All' })}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                categoryFilter === 'All' 
                ? 'bg-pastel-pink text-white shadow-md' 
                : 'bg-white text-crochet-ink border border-pastel-pink/10 hover:bg-pastel-pink/5'
              }`}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSearchParams({ cat })}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  categoryFilter === cat 
                  ? 'bg-pastel-pink text-white shadow-md' 
                  : 'bg-white text-crochet-ink border border-pastel-pink/10 hover:bg-pastel-pink/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-crochet-ink/30" size={20} />
            <input
              type="text"
              placeholder="Search keychains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-pastel-pink/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all text-sm"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white/30 rounded-[40px] border border-dashed border-pastel-pink/30">
            <div className="w-20 h-20 bg-pastel-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-pastel-pink" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-crochet-ink mb-2">No products found</h3>
            <p className="text-crochet-ink/60">Try adjusting your filters or search query</p>
            <button 
              onClick={() => {setSearchParams({ cat: 'All' }); setSearchQuery('');}}
              className="mt-8 text-pastel-pink font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

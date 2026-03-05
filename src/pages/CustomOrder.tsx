import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Send, Sparkles, Heart } from 'lucide-react';

export const CustomOrder = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    idea: '',
    quantity: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hi! I'd like to place a custom order.\n\n` +
      `Name: ${formData.name}\n` +
      `Idea: ${formData.idea}\n` +
      `Quantity: ${formData.quantity}\n` +
      `Message: ${formData.message}`
    );
    window.open(`https://wa.me/916351009028?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-pastel-pink/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-pastel-pink w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-pastel-pink">Your Vision, Our Stitches</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-crochet-ink mb-6">Custom Crochet Requests</h1>
            <p className="text-lg text-crochet-ink/70 mb-10 leading-relaxed">
              Have a specific character, fruit, or animal in mind? We love bringing your unique ideas to life! Fill out the form below and we'll get back to you with a quote and timeline.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pastel-lavender rounded-2xl flex items-center justify-center shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-crochet-ink mb-1">Personalized Design</h4>
                  <p className="text-sm text-crochet-ink/60">We work closely with you to match colors and details.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pastel-mint rounded-2xl flex items-center justify-center shrink-0">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-crochet-ink mb-1">Perfect for Gifts</h4>
                  <p className="text-sm text-crochet-ink/60">Custom keychains make the most thoughtful birthday or anniversary gifts.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 md:p-12 shadow-xl border-pastel-pink/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-crochet-ink/70 ml-1">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-crochet-ink/70 ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-crochet-ink/70 ml-1">Crochet Design Idea</label>
                <input
                  required
                  type="text"
                  value={formData.idea}
                  onChange={(e) => setFormData({...formData, idea: e.target.value})}
                  className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all"
                  placeholder="e.g. A tiny blue penguin with a red scarf"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-crochet-ink/70 ml-1">Quantity</label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all appearance-none"
                >
                  {[1, 2, 3, 4, 5, '10+'].map(q => <option key={q} value={q}>{q}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-crochet-ink/70 ml-1">Additional Details</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all resize-none"
                  placeholder="Any specific colors or sizes?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pastel-pink text-white py-5 rounded-full font-bold text-lg hover:bg-pastel-pink/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                Send via WhatsApp
              </button>
              <p className="text-center text-xs text-crochet-ink/40">
                We'll respond within 24-48 hours with a quote!
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

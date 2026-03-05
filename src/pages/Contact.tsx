import { motion } from 'motion/react';
import { MessageCircle, Instagram, Mail, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-crochet-ink mb-6">Get In Touch</h1>
          <p className="text-crochet-ink/60 max-w-2xl mx-auto">
            Have a question about an order, want to collaborate, or just want to say hi? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8"
            >
              <h3 className="font-serif font-bold text-xl text-crochet-ink mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="https://wa.me/916351009028" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-pastel-mint/20 rounded-2xl flex items-center justify-center group-hover:bg-pastel-mint transition-colors">
                    <MessageCircle size={24} className="text-crochet-ink group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-crochet-ink/40 uppercase tracking-widest">WhatsApp</p>
                    <p className="font-bold text-crochet-ink">+91 98765 43210</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-pastel-pink/20 rounded-2xl flex items-center justify-center group-hover:bg-pastel-pink transition-colors">
                    <Instagram size={24} className="text-crochet-ink group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-crochet-ink/40 uppercase tracking-widest">Instagram</p>
                    <p className="font-bold text-crochet-ink">@stitchandjoy_crochet</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-pastel-lavender/20 rounded-2xl flex items-center justify-center group-hover:bg-pastel-lavender transition-colors">
                    <Mail size={24} className="text-crochet-ink group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-crochet-ink/40 uppercase tracking-widest">Email</p>
                    <p className="font-bold text-crochet-ink">hello@stitchandjoy.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-pastel-beige/50 rounded-2xl flex items-center justify-center group-hover:bg-pastel-beige transition-colors">
                    <MapPin size={24} className="text-crochet-ink group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-crochet-ink/40 uppercase tracking-widest">Location</p>
                    <p className="font-bold text-crochet-ink">Vadodara, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="bg-pastel-pink rounded-[40px] p-8 text-white">
              <h4 className="font-serif font-bold text-xl mb-4">Wholesale Orders</h4>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Interested in stocking our keychains in your shop? We offer special pricing for bulk orders!
              </p>
              <button className="bg-white text-pastel-pink px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                Inquire Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass-card p-8 md:p-12"
          >
            <h3 className="font-serif font-bold text-2xl text-crochet-ink mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-crochet-ink/70 ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-crochet-ink/70 ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-crochet-ink/70 ml-1">Subject</label>
                <input
                  type="text"
                  className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-crochet-ink/70 ml-1">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-pastel-cream/50 border border-pastel-pink/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pastel-pink/20 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="button"
                className="w-full bg-pastel-pink text-white py-5 rounded-full font-bold text-lg hover:bg-pastel-pink/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Send size={24} />
                Send Message
              </button>
              <p className="text-center text-xs text-crochet-ink/40 italic">
                Note: This form is for demonstration. For real orders, please use WhatsApp!
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

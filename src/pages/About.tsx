import { motion } from 'motion/react';
import { Heart, Sparkles, Coffee, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-serif font-bold text-crochet-ink mb-6">Our Story</h1>
          <p className="text-xl text-crochet-ink/60 italic">"Where every loop is a labor of love."</p>
        </motion.div>

        <div className="space-y-24">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold text-crochet-ink mb-6 flex items-center gap-3">
                <Heart className="text-pastel-pink" />
                The Beginning
              </h2>
              <div className="space-y-4 text-crochet-ink/70 leading-relaxed">
                <p>
                  Stitch & Joy started in a cozy corner of a small living room, with just a single crochet hook and a ball of mint green yarn. What began as a way to de-stress after long days quickly turned into a deep passion for amigurumi—the Japanese art of knitting or crocheting small, stuffed yarn creatures.
                </p>
                <p>
                  Friends and family soon started asking for their own "tiny friends," and that's when we realized that these little creations had the power to bring a genuine smile to anyone's face.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://picsum.photos/seed/about-1/800/800"
                alt="Our first creation"
                className="rounded-[40px] shadow-lg rotate-2"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://picsum.photos/seed/about-2/800/800"
                alt="Working on crochet"
                className="rounded-[40px] shadow-lg -rotate-2"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-crochet-ink mb-6 flex items-center gap-3">
                <Sparkles className="text-pastel-mint" />
                Our Philosophy
              </h2>
              <div className="space-y-4 text-crochet-ink/70 leading-relaxed">
                <p>
                  In a world of fast fashion and mass-produced plastic, we believe in the beauty of the slow and the handmade. Every keychain we make takes hours of focused attention, ensuring that every stitch is perfect and every detail is just right.
                </p>
                <p>
                  We use only the softest premium yarns and eco-friendly fillers, because we believe that even the smallest accessories deserve the highest quality materials.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-pastel-lavender/20 p-12 md:p-20 rounded-[60px] text-center">
            <h2 className="text-3xl font-serif font-bold text-crochet-ink mb-12">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-pastel-pink mb-2">500+</div>
                <div className="text-sm font-bold text-crochet-ink/50 uppercase tracking-wider">Keychains Made</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pastel-pink mb-2">100%</div>
                <div className="text-sm font-bold text-crochet-ink/50 uppercase tracking-wider">Handmade</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pastel-pink mb-2">50+</div>
                <div className="text-sm font-bold text-crochet-ink/50 uppercase tracking-wider">Custom Designs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pastel-pink mb-2">∞</div>
                <div className="text-sm font-bold text-crochet-ink/50 uppercase tracking-wider">Love Poured In</div>
              </div>
            </div>
          </section>

          <section className="text-center pb-12">
            <h2 className="text-3xl font-serif font-bold text-crochet-ink mb-6">Meet the Maker</h2>
            <p className="max-w-2xl mx-auto text-crochet-ink/70 leading-relaxed mb-10">
              Hi! I'm the hands behind Stitch & Joy. I'm a self-taught crochet artist who loves coffee, rainy afternoons, and seeing my creations travel all over the world on your backpacks and keys. Thank you for supporting my small dream!
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center text-white shadow-md">
                <Coffee size={28} />
              </div>
              <div className="w-16 h-16 bg-pastel-mint rounded-full flex items-center justify-center text-white shadow-md">
                <Users size={28} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

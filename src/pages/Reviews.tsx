import { motion } from 'motion/react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, Tote & Tread',
    content: 'Working with Bilal was a game changer for our brand. The store design is beautiful and the conversion rate has doubled since launch. His attention to detail in Shopify setup is unmatched.',
    rating: 5
  },
  {
    name: 'Ahmed Raza',
    role: 'CEO, Urbanwolfs',
    content: 'The Facebook ad strategy Bilal implemented brought us a 4.8x ROAS in the first month. Highly professional and data-driven. He knows exactly how to target the right audience.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Owner, Nube Vape',
    content: 'Exceptional service! Bilal handled everything from store setup to scaling. Our sales growth has been consistent and impressive. He is truly an extension of our team.',
    rating: 5
  },
  {
    name: 'Maria Garcia',
    role: 'E-commerce Director, Luxe Decor',
    content: "Bilal's Shopify expertise helped us migrate seamlessly from our old platform. Our site speed improved by 40%, and the user experience is now top-notch. Highly recommended!",
    rating: 5
  },
  {
    name: 'Zain Malik',
    role: 'Founder, Urban Fit',
    content: 'The social media management strategy brought a fresh look to our brand. Engagement is up significantly, and we are seeing a lot more organic traffic coming from Instagram.',
    rating: 5
  },
  {
    name: 'Chloe Thompson',
    role: 'Marketing Manager, Bloom & Co',
    content: "Incredible attention to detail. Our ad campaigns are finally profitable thanks to Bilal's constant optimization and creative testing. He really understands the numbers.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <main className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-white"
          >
            Client <span className="text-gold-gradient">Reviews</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Don't just take my word for it. Here's what my clients and partners have to say about our collaboration and the results we've achieved together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2.5rem] space-y-6 flex flex-col relative group hover:border-gold/30 transition-all duration-500"
            >
              <div className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/20 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-zinc-300 italic leading-relaxed flex-grow">
                "{review.content}"
              </p>

              <div className="pt-6 border-t border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold">{review.name}</p>
                  <p className="text-gold text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="glass p-12 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-4xl font-display font-bold text-white">Want to be my next success story?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Let's work together to build a high-converting store and scale your brand to new heights.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="px-12 py-5 rounded-2xl bg-gold text-zinc-950 font-bold text-xl hover:bg-gold-light transition-all shadow-2xl shadow-gold/20 inline-flex items-center gap-3 group"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

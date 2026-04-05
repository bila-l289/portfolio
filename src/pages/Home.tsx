import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, BarChart3, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 relative">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-gold border-gold/20"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Based in Karachi, Pakistan
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[1.1]"
          >
            Shopify Expert & <br />
            <span className="text-gold-gradient">Digital Marketer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            Helping brands scale with high-converting Shopify stores and data-driven marketing strategies. 
            Transforming store sessions into loyal customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gold text-zinc-950 font-bold text-lg hover:bg-gold-light transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass text-white font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
            >
              My Services
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Recent Projects Preview */}
      <section className="py-20 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold text-white">Recent Projects</h2>
              <p className="text-zinc-400 max-w-xl">
                Real results from real brands. Here's a glimpse of some of my recent work.
              </p>
            </div>
            <Link to="/portfolio" className="text-gold font-bold flex items-center gap-2 hover:text-gold-light transition-colors">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tote & Tread',
                category: 'E-commerce Management',
                image: '/WhatsApp Image 2026-03-31 at 10.38.38 AM (7).jpeg',
                stats: 'Rs. 407,998 Sales',
              },
              {
                title: 'Nube Vape',
                category: 'Digital Marketing',
                image: '/WhatsApp Image 2026-03-31 at 9.48.39 AM (6).jpeg',
                stats: '4.81x ROAS',
              },
              {
                title: 'Urbanwolfs',
                category: 'Store Scaling',
                image: '/WhatsApp Image 2026-03-31 at 10.38.38 AM (5).jpeg',
                stats: '177% Sales Growth',
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl glass"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 scale-[1.1] origin-bottom"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
                  <p className="text-gold font-medium">{project.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold text-white">What I Do</h2>
              <p className="text-zinc-400 max-w-xl">
                I provide end-to-end solutions for e-commerce brands, from store setup to scaling through paid ads.
              </p>
            </div>
            <Link to="/services" className="text-gold font-bold flex items-center gap-2 hover:text-gold-light transition-colors">
              See all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Shopify Store Setup',
                desc: 'Custom, high-converting store designs tailored to your brand identity.',
                icon: ShoppingBag,
              },
              {
                title: 'Facebook Ads',
                desc: 'Data-driven ad campaigns that maximize ROAS and drive consistent sales.',
                icon: BarChart3,
              },
              {
                title: 'Social Media Management',
                desc: 'Building a strong social presence to engage and grow your audience.',
                icon: Globe,
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl space-y-6 group hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="text-gold w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold text-white">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Gallery */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-bold text-white">Visual Showcase</h2>
            <p className="text-zinc-400">A glimpse into the high-converting interfaces I build.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/WhatsApp Image 2026-03-31 at 10.37.18 AM (1).jpeg',
              '/WhatsApp Image 2026-03-31 at 10.37.23 AM (1).jpeg',
              '/WhatsApp Image 2026-03-31 at 10.38.37 AM (3).jpeg',
              '/WhatsApp Image 2026-03-31 at 10.38.38 AM (6).jpeg',
              '/WhatsApp Image 2026-03-31 at 9.48.38 AM (8).jpeg',
              '/WhatsApp Image 2026-03-31 at 9.48.38 AM (9).jpeg',
              '/WhatsApp Image 2026-03-31 at 9.48.39 AM (7).jpeg',
              '/WhatsApp Image 2026-03-31 at 9.48.39 AM (8).jpeg'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-2xl overflow-hidden glass p-1"
              >
                <img 
                  src={img} 
                  alt="Work Showcase" 
                  className="w-full h-full object-cover object-top rounded-xl hover:scale-125 transition-transform duration-500 scale-[1.1] origin-bottom"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass text-white font-bold hover:bg-zinc-800 transition-all"
            >
              View Full Portfolio <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

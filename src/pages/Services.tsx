import { motion } from 'motion/react';
import { ShoppingBag, BarChart3, Globe, Settings, Target, Users, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Shopify Store Setup',
    desc: 'I will build your Shopify store from scratch. This includes theme setup, product listings, payment and shipping settings, and making the store ready to take orders.',
    icon: ShoppingBag,
  },
  {
    title: 'Shopify Store Management',
    desc: 'Already have a store? I will manage it for you. Adding new products, making updates, fixing issues, and keeping everything running smoothly.',
    icon: Settings,
  },
  {
    title: 'Facebook & Instagram Ads',
    desc: 'I will create and run paid ad campaigns to bring real customers to your store. I have achieved 13.39x ROAS on my own store campaigns.',
    icon: BarChart3,
  },
  {
    title: 'Social Media Management',
    desc: 'I will manage your Facebook and Instagram pages, create content, and grow your audience to bring in more sales.',
    icon: Users,
  },
  {
    title: 'Product Listing & Store Optimization',
    desc: 'I will add your products properly with good descriptions, images, and pricing so customers are more likely to buy.',
    icon: Target,
  },
];

const packages = [
  {
    name: 'Basic',
    originalPrice: '35,000',
    currentPrice: '25,000',
    discount: '28% OFF',
    desc: 'Perfect for new businesses starting their e-commerce journey.',
    features: [
      'Shopify Store Setup',
      'Basic Theme Customization',
      'Up to 10 Product Listings',
      'Payment Gateway Integration',
      'Essential Apps Setup',
    ],
  },
  {
    name: 'Pro',
    originalPrice: '55,000',
    currentPrice: '40,000',
    discount: '27% OFF',
    popular: true,
    desc: 'Ideal for growing brands looking to scale their sales.',
    features: [
      'Everything in Basic',
      'Premium Theme Customization',
      'Up to 50 Product Listings',
      'Facebook & Instagram Ads Setup',
      'Basic SEO Optimization',
      'Monthly Performance Report',
    ],
  },
  {
    name: 'Premium',
    originalPrice: '80,000',
    currentPrice: '60,000',
    discount: '25% OFF',
    desc: 'Complete solution for established brands aiming for maximum growth.',
    features: [
      'Everything in Pro',
      'Unlimited Product Listings',
      'Advanced Ads Management',
      'Full Social Media Management',
      'Conversion Rate Optimization',
      'Priority 24/7 Support',
    ],
  },
];

export default function Services() {
  return (
    <main className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Services Grid */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold text-white"
            >
              My <span className="text-gold-gradient">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 max-w-2xl mx-auto"
            >
              I provide comprehensive e-commerce solutions tailored to your brand's unique needs. 
              From initial setup to scaling through paid ads.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl space-y-8 group hover:border-gold/30 transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="text-gold w-8 h-8" />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                </div>
                <a
                  href={`https://wa.me/923702272662?text=${encodeURIComponent(`Hi Bilal, I'm interested in your ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full py-4 rounded-2xl glass text-white font-bold text-center hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Inquire Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Service <span className="text-gold-gradient">Packages</span></h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Choose the perfect plan to grow your business.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass p-8 rounded-[2.5rem] space-y-8 relative flex flex-col ${pkg.popular ? 'border-gold/50 shadow-2xl shadow-gold/10 scale-105 z-10' : 'border-gold/10'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-zinc-950 text-xs font-bold rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white">{pkg.name}</h3>
                  <p className="text-zinc-500 text-sm">{pkg.desc}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">₨ {pkg.currentPrice}</span>
                    <span className="text-gold text-sm font-bold">{pkg.discount}</span>
                  </div>
                  <p className="text-zinc-500 text-sm line-through">Original: ₨ {pkg.originalPrice}</p>
                </div>

                <ul className="space-y-4 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-zinc-400 text-sm">
                      <Check className="w-5 h-5 text-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/923702272662?text=${encodeURIComponent(`Hi Bilal, I'd like to choose the ${pkg.name} package.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 group/btn ${
                    pkg.popular 
                      ? 'bg-gold text-zinc-950 hover:bg-gold-light' 
                      : 'glass text-white hover:bg-zinc-800'
                  }`}
                >
                  Choose {pkg.name}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="glass p-12 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-4xl font-display font-bold text-white">Ready to Scale Your Brand?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Let's discuss how I can help you achieve your e-commerce goals and drive consistent growth.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="px-12 py-5 rounded-2xl bg-gold text-zinc-950 font-bold text-xl hover:bg-gold-light transition-all shadow-2xl shadow-gold/20 inline-flex items-center gap-3 group"
              >
                Contact Me
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import { motion } from 'motion/react';
import { TrendingUp, ShoppingCart, Target, Star, Users } from 'lucide-react';

const stats = [
  {
    label: 'Total Sales',
    value: 'Rs. 407,998',
    icon: TrendingUp,
    description: 'Generated for Shopify stores',
  },
  {
    label: 'Total Orders',
    value: '137+',
    icon: ShoppingCart,
    description: 'Successfully fulfilled',
  },
  {
    label: 'Ads ROAS',
    value: '13.39x',
    icon: Target,
    description: 'Facebook Ads performance',
  },
  {
    label: 'Customer Rating',
    value: '4.9/5',
    icon: Star,
    description: 'Average satisfaction score',
  },
  {
    label: 'Store Sessions',
    value: '4,724+',
    icon: Users,
    description: 'High-quality traffic driven',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-3xl group hover:border-gold/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-gold w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-display font-bold text-white tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-gold font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

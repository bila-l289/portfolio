import { motion } from 'motion/react';
import { MapPin, Briefcase, Code, BarChart3, ShoppingBag, Target, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const skills = [
  { name: 'Shopify Store Management', icon: ShoppingBag, level: 'Expert' },
  { name: 'Facebook Ads Strategy', icon: BarChart3, level: 'Expert' },
  { name: 'Social Media Marketing', icon: Briefcase, level: 'Expert' },
  { name: 'Conversion Optimization', icon: Code, level: 'Advanced' },
  { name: 'E-commerce Analytics', icon: BarChart3, level: 'Advanced' },
];

const values = [
  {
    title: 'Results Driven',
    desc: 'My focus is always on the bottom line - increasing your sales and ROAS.',
    icon: TrendingUp,
  },
  {
    title: 'Fast Execution',
    desc: 'Quick turnaround on store updates and ad campaign optimizations.',
    icon: Zap,
  },
  {
    title: 'Data-Backed',
    desc: 'Every decision is based on analytics and real user behavior data.',
    icon: Target,
  },
  {
    title: 'Reliable Support',
    desc: 'Consistent management and communication to keep your store running.',
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <main className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
                About <span className="text-gold-gradient">Me</span>
              </h1>
              <div className="flex items-center gap-2 text-gold font-medium">
                <MapPin className="w-4 h-4" />
                Karachi, Pakistan
              </div>
            </div>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a dedicated Shopify Store Manager and Digital Marketing Specialist with a passion for scaling e-commerce brands. 
                My journey started in Karachi, where I began helping businesses establish their online presence.
              </p>
              <p>
                With a focus on data-driven results, I specialize in creating high-converting Shopify stores and executing 
                Facebook ad campaigns that deliver exceptional ROAS. My approach combines technical expertise with 
                creative marketing strategies to drive sustainable growth for my clients.
              </p>
              <p>
                I believe in building long-term partnerships with brands, acting as an extension of their team 
                to ensure every store session is optimized for conversion.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="glass px-6 py-4 rounded-2xl space-y-1">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="glass px-6 py-4 rounded-2xl space-y-1">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Stores Managed</p>
              </div>
              <div className="glass px-6 py-4 rounded-2xl space-y-1">
                <p className="text-2xl font-bold text-white">13.39x</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Peak ROAS</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass p-8 rounded-[2.5rem] space-y-4 border-gold/10 hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="text-gold w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">{value.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-bold text-white">My Skills</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              I have honed a diverse set of skills to provide comprehensive e-commerce solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl space-y-6 group hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <skill.icon className="text-gold w-7 h-7" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold text-white">{skill.name}</h3>
                    <span className="text-gold text-xs font-bold uppercase tracking-widest">{skill.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level === 'Expert' ? '95%' : '80%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full gold-gradient rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

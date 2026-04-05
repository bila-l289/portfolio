import { motion } from 'motion/react';
import { Mail, MessageCircle, Send, MapPin, ArrowRight, Linkedin } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <main className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-white"
          >
            Get In <span className="text-gold-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Ready to scale your brand? Let's discuss your project and how I can help you achieve your goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-white">Contact Information</h2>
              <div className="space-y-6">
                <a
                  href="mailto:bilalsaifullah2211@gmail.com"
                  className="glass p-6 rounded-3xl flex items-center gap-6 group hover:border-gold/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-gold w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold">Email Me</p>
                    <p className="text-xl font-bold text-white">bilalsaifullah2211@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/923702272662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-3xl flex items-center gap-6 group hover:border-gold/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-gold w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold">WhatsApp Me</p>
                    <p className="text-xl font-bold text-white">+92 370 2272662</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-bilal-61234a3bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-3xl flex items-center gap-6 group hover:border-gold/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="text-gold w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold">LinkedIn</p>
                    <p className="text-xl font-bold text-white">Muhammad Bilal</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="glass p-6 rounded-3xl space-y-4">
                <MapPin className="text-gold w-6 h-6" />
                <div className="space-y-1">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold">Location</p>
                  <p className="text-white font-bold">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-10 rounded-[3rem] space-y-8 relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
                  <Send className="text-gold w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-bold text-white">Message Sent!</h3>
                  <p className="text-zinc-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-display font-bold text-white">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-zinc-400 text-sm font-medium ml-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-zinc-400 text-sm font-medium ml-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-zinc-400 text-sm font-medium ml-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-zinc-400 text-sm font-medium ml-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-gold text-zinc-950 font-bold text-lg hover:bg-gold-light transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '918533002305';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Somesh! I came across your portfolio and I'd love to connect. 👋"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [waHovered, setWaHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/someshcoder/someshcoder.git', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/somesh-bhatnagar-18b388328/', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: 'mailto:someshbhatnagar535@gmail.com', color: 'hover:text-red-400' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading — matches other sections ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
              color: '#a5b4fc',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            Let's Work Together
          </motion.div>

          <h2
            className="font-black mb-4 leading-none"
            style={{
              fontSize: 'clamp(36px, 6vw, 68px)',
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Get In{' '}
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Touch
            </span>
          </h2>

          <div
            className="h-px w-20 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }}
          />
          <p style={{ color: 'rgba(148,163,184,0.6)', fontSize: 15 }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                <input
                  type="text" id="name" name="name" value={formData.name}
                  onChange={handleChange} required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Your Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email}
                  onChange={handleChange} required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  id="message" name="message" value={formData.message}
                  onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                type="submit" disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* ── Right: Info + WhatsApp ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="p-3 bg-blue-500/10 rounded-lg"><Mail className="text-blue-400" size={24} /></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:someshbhatnagar535@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">someshbhatnagar535@gmail.com</a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="p-3 bg-purple-500/10 rounded-lg"><Phone className="text-purple-400" size={24} /></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">+91 85330 02305</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="p-3 bg-pink-500/10 rounded-lg"><MapPin className="text-pink-400" size={24} /></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Agra, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`p-4 bg-gray-800 rounded-lg border border-gray-700 text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onHoverStart={() => setWaHovered(true)}
                onHoverEnd={() => setWaHovered(false)}
                whileHover={{ y: -3 }}
                className="block relative group overflow-hidden rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1a1f2e 0%, #111827 100%)',
                  border: '1px solid rgba(37,211,102,0.2)',
                  boxShadow: waHovered ? '0 0 32px rgba(37,211,102,0.15), 0 8px 32px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.3)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,211,102,0.6), transparent)' }} />
                <motion.div
                  animate={{ x: waHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(37,211,102,0.04) 50%, transparent 70%)' }}
                />
                <div className="relative p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)' }}>
                      <motion.div animate={{ scale: waHovered ? [1, 1.15, 1] : 1 }} transition={{ duration: 0.4 }} style={{ color: '#25d366' }}>
                        <WhatsAppIcon size={22} />
                      </motion.div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base leading-tight">Quick Response</p>
                      <p className="text-gray-500 text-xs mt-0.5">Usually replies within minutes</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#25d366' }}
                      />
                      <span className="text-xs font-medium" style={{ color: '#25d366' }}>Online</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Need a faster reply? Message me directly on WhatsApp — I'll respond ASAP!
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    className="w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2.5 font-semibold text-white text-sm"
                    style={{
                      background: waHovered ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #25d366, #128c4e)',
                      boxShadow: waHovered ? '0 4px 20px rgba(37,211,102,0.35)' : '0 2px 10px rgba(37,211,102,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <WhatsAppIcon size={18} />
                    Chat on WhatsApp
                    <motion.span animate={{ x: waHovered ? 3 : 0 }} transition={{ duration: 0.2 }} style={{ fontSize: 16 }}>→</motion.span>
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>

            {/* Open to opportunities */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
              <div className="relative p-6 bg-gray-900 rounded-2xl border border-gray-800">
                <h4 className="text-white font-semibold mb-2">Open to opportunities</h4>
                <p className="text-gray-400">
                  Currently available for freelance projects and full-time roles. If you have something exciting in mind, let's talk!
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
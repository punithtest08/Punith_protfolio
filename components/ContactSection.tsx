'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Briefcase, MessageSquare, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const contactLinks = [
  { icon: Github, label: 'GitHub', value: 'punithtest08', href: 'https://github.com/punithtest08', color: 'text-slate-300' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/punith-s-25b98a2b7', href: 'https://www.linkedin.com/in/punith-s-25b98a2b7/', color: 'text-blue-400' },
  { icon: Mail, label: 'Email', value: 'puniths0810@gmail.com', href: 'mailto:puniths0810@gmail.com', color: 'text-cyan-400' },
];

const openFor = [
  'HR Operations Roles',
  'HR Analytics Positions',
  'HR Tech Companies',
  'QA / QA Automation',
  'Operations Analyst',
  'Startup Operations',
  'Fintech & AI Products',
];

export default function ContactSection() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Contact Panel</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Let's build intelligent<br />
            <span className="grad-violet">people operations together</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Available for HR operations, analytics systems, HR tech teams, and AI workflow projects.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Contact form */}
          <div className="reveal reveal-delay-1 glass rounded-4xl border border-white/7 p-7 shadow-panel">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Send a Message</h3>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4"
              >
                <CheckCircle className="h-12 w-12 text-emerald-400" />
                <p className="text-lg font-semibold text-white">Message sent!</p>
                <p className="text-sm text-slate-400">I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-2xl bg-black/30 border border-white/8 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full rounded-2xl bg-black/30 border border-white/8 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    className="w-full rounded-2xl bg-black/30 border border-white/8 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition font-mono resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-magnetic w-full flex items-center justify-center gap-2.5 rounded-2xl bg-cyan-500 py-3.5 text-sm font-semibold text-slate-950 shadow-glow hover:bg-cyan-400 transition"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Info panel */}
          <div className="space-y-5 reveal reveal-delay-2">
            {/* Availability */}
            <div className="glass rounded-4xl border border-emerald-400/15 p-6 shadow-panel">
              <div className="flex items-center gap-3 mb-4">
                <div className="glow-dot-green h-2.5 w-2.5 rounded-full" />
                <p className="text-sm font-semibold text-emerald-400">Available for Opportunities</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Open to full-time, contract, and consulting roles in HR operations, analytics, fintech, and AI product companies.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <MapPin className="h-3.5 w-3.5" />
                Bengaluru, India · Remote OK
              </div>
            </div>

            {/* Open for */}
            <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-4 w-4 text-cyan-400" />
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Open For</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {openFor.map((role) => (
                  <span key={role} className="rounded-full bg-cyan-400/8 border border-cyan-400/15 px-3 py-1.5 text-xs text-cyan-300 font-mono">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact links */}
            <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Connect</p>
              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl bg-black/20 border border-white/5 px-4 py-3 hover:border-white/15 transition group"
                    >
                      <Icon className={`h-4 w-4 ${link.color} flex-shrink-0`} />
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500 font-mono">{link.label}</p>
                        <p className="text-sm text-slate-200 truncate">{link.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

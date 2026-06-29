'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowUpRight, Users } from 'lucide-react';

/* ── Animated network canvas ─────────────────────────────── */
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const NODE_COUNT = 28;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      vx:  (Math.random() - 0.5) * 0.3,
      vy:  (Math.random() - 0.5) * 0.3,
      r:   Math.random() * 2 + 1.5,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(34,211,238,${0.06 * (1 - dist / 130)})`;
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }

      // nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,0.18)';
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  );
}

/* ── Data ────────────────────────────────────────────────── */
const strategicBadges = [
  'Leadership Partnership', 'Workforce Planning',   'Talent Management',
  'Performance Management', 'Employee Relations',   'Organizational Effectiveness',
  'People Analytics',       'Workforce Intelligence','HR Technology',
  'Change Management',
];

const quickLinks = [
  { label: 'About',               href: '#about'       },
  { label: 'Experience',          href: '#experience'  },
  { label: 'Strategic Initiatives', href: '#initiatives' },
  { label: 'Projects',            href: '#projects'    },
  { label: 'People Analytics',    href: '#analytics'   },
  { label: 'Contact',             href: '#contact'     },
];

const connectLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/punith-s-25b98a2b7/', external: true  },
  { icon: Download, label: 'Resume',   href: '/Punith_S.pdf',                                    external: false, download: 'Punith_S_Resume.pdf' },
  { icon: Mail,     label: 'Email',    href: 'mailto:punithshr2708@gmail.com',                   external: false },
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/punithtest08',                  external: true  },
];

const badgeColors = [
  'text-cyan-400 bg-cyan-400/8 border-cyan-400/15',
  'text-violet-400 bg-violet-400/8 border-violet-400/15',
  'text-emerald-400 bg-emerald-400/8 border-emerald-400/15',
  'text-blue-400 bg-blue-400/8 border-blue-400/15',
  'text-amber-400 bg-amber-400/8 border-amber-400/15',
];

/* ── Component ───────────────────────────────────────────── */
export default function FooterSection() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/2 to-violet-500/3 pointer-events-none" />
      <NetworkCanvas />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── Top: headline + description ── */}
        <div className="py-16 text-center border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Let's Connect</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Building Better Organizations<br />
              <span className="grad-cyan">Through People, Data & Leadership</span>
            </h2>
            <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Passionate about helping organizations create exceptional employee experiences, strengthen workforce effectiveness, and drive business outcomes through People Operations, HR Business Partnering, Workforce Planning, and People Analytics.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 btn-magnetic inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow hover:bg-cyan-400"
            >
              Let's Build Together
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* ── Middle grid ── */}
        <div className="py-14 grid gap-10 lg:grid-cols-[1.6fr_0.8fr_0.8fr]">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-glow-sm">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-none">Punith S</p>
                <p className="text-xs text-cyan-400/70 font-mono mt-0.5">People Operations</p>
              </div>
            </div>

            {/* Positioning line */}
            <p className="text-xs text-slate-500 font-mono leading-relaxed">
              People Operations · HR Business Partnering<br />
              Workforce Planning · People Analytics<br />
              Organizational Effectiveness
            </p>

            {/* Brand statement */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Supporting employee experience, workforce intelligence, organizational effectiveness, and data-driven people decisions.
            </p>

            {/* Strategic badges */}
            <div className="flex flex-wrap gap-1.5">
              {strategicBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono ${badgeColors[i % badgeColors.length]}`}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    <span className="h-px w-4 bg-slate-700 group-hover:w-6 group-hover:bg-cyan-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">Connect</p>
            <ul className="space-y-3">
              {connectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      download={'download' in link ? link.download : undefined}
                      className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/8 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/20 transition">
                        <Icon className="h-3.5 w-3.5 group-hover:text-cyan-400 transition-colors" />
                      </span>
                      {link.label}
                      {link.external && <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition ml-auto" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Availability badge */}
            <div className="mt-6 flex items-center gap-2 rounded-2xl glass border border-emerald-400/15 px-4 py-3">
              <span className="glow-dot-green h-2 w-2 rounded-full flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-emerald-400">Available</p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">Full-time · Hybrid · Remote</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl border border-violet-400/15 px-8 py-6 mb-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/4 to-cyan-500/4 pointer-events-none" />
          <div className="relative z-10 flex gap-4 items-start">
            <span className="text-5xl text-violet-400/30 font-serif leading-none flex-shrink-0 -mt-2">"</span>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              People strategy becomes business strategy when supported by meaningful insights, strong leadership partnerships, and a deep understanding of organizational dynamics.
            </p>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 font-mono">© 2026 Punith S</p>
          <p className="text-xs text-slate-600 font-mono text-center">
            Designed with a passion for{' '}
            <span className="text-slate-500">People Operations</span> ·{' '}
            <span className="text-slate-500">Workforce Planning</span> ·{' '}
            <span className="text-slate-500">Leadership Partnership</span> ·{' '}
            <span className="text-slate-500">Organizational Effectiveness</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

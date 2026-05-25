'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Linkedin } from 'lucide-react';

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Analytics',  href: '#analytics'  },
  { label: 'QA Journey', href: '#qa-journey' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'GitHub',     href: '#github'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'nav-blur shadow-panel' : 'bg-transparent'}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-glow-sm">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-white tracking-tight">Punith S</span>
            <span className="hidden sm:inline text-xs text-cyan-400/70 font-mono border border-cyan-400/20 rounded-full px-2 py-0.5">v2.0</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="glow-dot-green w-2 h-2 rounded-full inline-block" />
              Available
            </div>
            <a
              href="https://www.linkedin.com/in/punith-s-25b98a2b7/"
              target="_blank"
              rel="noreferrer"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/8 px-4 py-2 text-sm text-blue-300 hover:bg-blue-400/12"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden nav-blur border-t border-white/5"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/punith-s-25b98a2b7/"
                target="_blank"
                rel="noreferrer"
                className="block mt-3 text-center rounded-full border border-blue-400/25 bg-blue-400/8 px-4 py-2.5 text-sm text-blue-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

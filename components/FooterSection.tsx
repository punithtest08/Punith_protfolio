'use client';

import { Github, Linkedin, Zap } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="relative border-t border-white/5 px-6 lg:px-10 py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500">
            <Zap className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="font-semibold text-white text-sm">Punith S</span>
          <span className="text-xs text-slate-600 font-mono">· HR Operations & AI Systems</span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-5 text-xs text-slate-500 font-mono">
          {['#about', '#projects', '#analytics', '#qa-journey', '#skills', '#github', '#experience', '#contact'].map((href) => (
            <a key={href} href={href} className="hover:text-slate-300 transition capitalize">
              {href.replace('#', '')}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/punithtest08"
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:border-white/15 transition"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/punith-s-25b98a2b7/"
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/8 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <p className="text-xs text-slate-600 font-mono">© 2025 Punith S</p>
        </div>
      </div>
    </footer>
  );
}

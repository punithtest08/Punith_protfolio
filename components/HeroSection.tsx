'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Terminal, TrendingUp, Users, BarChart3, CheckSquare, Workflow, Linkedin, GitBranch } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';

const ROLES = [
  'HR Specialist | Aspiring QA Engineer',
  'Workflow & Operations Professional',
  'QA-Focused Operations Analyst',
  'Process Validation Specialist',
  'HR & QA Operations Analyst',
];

const kpiCards = [
  { icon: Users,       label: 'Employees Managed',      value: '1000+',      color: 'cyan',    delay: 0    },
  { icon: CheckSquare, label: 'Process Accuracy',        value: '100%',       color: 'emerald', delay: 0.1  },
  { icon: TrendingUp,  label: 'Faster Onboarding',       value: '50%',        color: 'violet',  delay: 0.2  },
  { icon: BarChart3,   label: 'Ops Dashboards Built',    value: '10+',        color: 'blue',    delay: 0.3  },
  { icon: Workflow,    label: 'Workflow Systems',         value: '5+ Built',   color: 'cyan',    delay: 0.4  },
];

const colorMap: Record<string, string> = {
  cyan:    'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  violet:  'text-violet-400 bg-violet-400/10 border-violet-400/20',
  blue:    'text-blue-400 bg-blue-400/10 border-blue-400/20',
};

function TypingRole() {
  const [roleIdx, setRoleIdx]     = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timer.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timer.current = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timer.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timer.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-cyan-400 font-mono">
      {displayed}
      <span className="cursor-blink text-cyan-300">|</span>
    </span>
  );
}

function StatusWidget() {
  return (
    <div className="glass rounded-3xl border border-white/8 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Current Status</span>
        <span className="status-online text-xs text-emerald-400 font-mono">Active</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-black/30 p-3 border border-white/5">
          <p className="text-xs text-slate-500 font-mono">HR Ops</p>
          <p className="mt-1 text-sm font-bold text-white">1.7+ yrs</p>
        </div>
        <div className="rounded-2xl bg-black/30 p-3 border border-white/5">
          <p className="text-xs text-slate-500 font-mono">QA Focus</p>
          <p className="mt-1 text-sm font-bold text-cyan-400">Learning</p>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { label: 'Workflow Coordination', status: 'Strong' },
          { label: 'Process Validation',    status: 'Strong' },
          { label: 'QA Engineering',        status: 'Growing' },
          { label: 'Automation Basics',     status: 'Growing' },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">{item.label}</span>
            <span className={`font-mono font-semibold ${item.status === 'Strong' ? 'text-emerald-400' : 'text-amber-400'}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 pb-12 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <NeuralCanvas />
      </div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-violet-500/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">

          {/* Left */}
          <div className="space-y-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-sm text-cyan-300"
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span className="font-mono">HR Specialist → QA Engineering</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight text-white">
                Building{' '}
                <span className="grad-cyan">Reliable</span>
                <br />
                Systems with{' '}
                <br className="hidden sm:block" />
                <span className="grad-violet">Operations</span>
                <br />
                & QA Thinking
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-base"
            >
              <Terminal className="h-4 w-4 text-slate-500 flex-shrink-0" />
              <TypingRole />
            </motion.div>

            {/* Sub-tags */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {[
                'HR Operations',
                'QA Mindset',
                'Workflow Automation',
                'Process Validation',
                'Python Basics',
                'DevOps Basics',
                'System Monitoring',
              ].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-slate-300 font-mono">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="btn-magnetic inline-flex items-center gap-2.5 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow hover:bg-cyan-400"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/punithtest08"
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm text-slate-100 hover:border-cyan-400/30 hover:bg-white/8"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/punith-s-25b98a2b7/"
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic inline-flex items-center gap-2.5 rounded-full border border-blue-400/25 bg-blue-400/8 px-6 py-3 text-sm text-blue-300 hover:bg-blue-400/12"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="#contact"
                className="btn-magnetic inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm text-slate-300 hover:border-white/20"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right: KPI cards + status widget */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-1 gap-3">
              {kpiCards.map((card) => {
                const Icon  = card.icon;
                const colors = colorMap[card.color];
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + card.delay }}
                    className={`metric-card glass rounded-2xl border p-4 flex items-center gap-4 ${colors.split(' ')[2]}`}
                  >
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border ${colors}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 font-mono truncate">{card.label}</p>
                      <p className="text-xl font-bold text-white">{card.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <StatusWidget />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition group">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent group-hover:from-cyan-500 transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

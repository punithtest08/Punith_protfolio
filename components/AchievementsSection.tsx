'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, BarChart3, Layers, Award } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const achievements = [
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Employees Supported',
    desc: 'End-to-end HR operations support at Juspay Technologies across departments and employee lifecycle stages.',
    color: 'cyan',
    gradient: 'from-cyan-500/10 to-transparent',
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: '%',
    label: 'HRMS Data Accuracy',
    desc: 'Zero discrepancies maintained across HRMS records, payroll data, and compliance documentation.',
    color: 'emerald',
    gradient: 'from-emerald-500/10 to-transparent',
  },
  {
    icon: Zap,
    value: 50,
    suffix: '%',
    label: 'Faster Onboarding',
    desc: 'Redesigned onboarding workflows from scratch, cutting process delays in half at Dream Aluminium Interior.',
    color: 'violet',
    gradient: 'from-violet-500/10 to-transparent',
  },
  {
    icon: BarChart3,
    value: 10,
    suffix: '+',
    label: 'Dashboards Built',
    desc: 'Operational reporting dashboards for workforce analytics, process monitoring, and leadership reporting.',
    color: 'blue',
    gradient: 'from-blue-500/10 to-transparent',
  },
  {
    icon: Layers,
    value: 5,
    suffix: '+',
    label: 'Operational Systems Built',
    desc: 'Built HR and workplace operations platforms including VMS, Payroll Automation, and analytics dashboards.',
    color: 'cyan',
    gradient: 'from-cyan-500/10 to-transparent',
  },
  {
    icon: Award,
    value: 0,
    suffix: 'A+',
    label: 'Compliance Record',
    desc: 'PF/ESI statutory compliance and audit-ready documentation maintained with zero violations across all roles.',
    color: 'emerald',
    gradient: 'from-emerald-500/10 to-transparent',
  },
];

const colorMap: Record<string, { icon: string; value: string; border: string }> = {
  cyan:    { icon: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',          value: 'text-cyan-400',    border: 'border-cyan-400/15 hover:border-cyan-400/35'    },
  emerald: { icon: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', value: 'text-emerald-400', border: 'border-emerald-400/15 hover:border-emerald-400/35' },
  violet:  { icon: 'text-violet-400 bg-violet-400/10 border-violet-400/20',    value: 'text-violet-400',  border: 'border-violet-400/15 hover:border-violet-400/35'  },
  blue:    { icon: 'text-blue-400 bg-blue-400/10 border-blue-400/20',          value: 'text-blue-400',    border: 'border-blue-400/15 hover:border-blue-400/35'    },
};

function AnimatedCounter({
  value,
  suffix,
  color,
  isSpecial,
}: {
  value: number;
  suffix: string;
  color: string;
  isSpecial: boolean;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const c = colorMap[color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || isSpecial) return;
    if (value === 0) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, value, isSpecial]);

  return (
    <span ref={ref} className={`text-4xl font-black tabular-nums ${c.value}`}>
      {isSpecial ? suffix : `${count}${suffix}`}
    </span>
  );
}

export default function AchievementsSection() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Achievements</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Measurable outcomes across<br />
            <span className="grad-cyan">HR operations & people analytics</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Quantified results from workforce operations, process improvement, and operational system development.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => {
            const Icon      = item.icon;
            const c         = colorMap[item.color];
            const isSpecial = item.label === 'Compliance Record';
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`metric-card glass rounded-3xl border ${c.border} p-6 transition-all duration-300 overflow-hidden cursor-default`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} pointer-events-none`} />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${c.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <AnimatedCounter
                      value={item.value}
                      suffix={item.suffix}
                      color={item.color}
                      isSpecial={isSpecial}
                    />
                    <p className="text-sm font-semibold text-white mt-1">{item.label}</p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

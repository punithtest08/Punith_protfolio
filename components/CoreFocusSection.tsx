'use client';

import { motion } from 'framer-motion';
import { Users, BarChart3, Network, Target, Briefcase, TrendingUp, Monitor, Lightbulb } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const focusAreas = [
  {
    icon: Users,
    title: 'People Operations',
    desc: 'Scalable people processes, employee lifecycle management, and seamless HR operations that enable organizational growth.',
    color: 'cyan',
    tag: 'Foundation',
  },
  {
    icon: Target,
    title: 'Employee Lifecycle Management',
    desc: 'End-to-end employee journey from onboarding to offboarding with consistent experience and data integrity.',
    color: 'emerald',
    tag: 'Core',
  },
  {
    icon: TrendingUp,
    title: 'Workforce Planning',
    desc: 'Headcount planning, organizational design support, talent pipeline analysis, and strategic workforce forecasting.',
    color: 'violet',
    tag: 'Strategic',
  },
  {
    icon: Briefcase,
    title: 'HR Business Partnering',
    desc: 'Working alongside business leaders to align people strategies with organizational goals and drive people outcomes.',
    color: 'blue',
    tag: 'Partnering',
  },
  {
    icon: BarChart3,
    title: 'People Analytics',
    desc: 'Workforce dashboards, diversity metrics, tenure analysis, headcount analytics, and data-driven people decisions.',
    color: 'cyan',
    tag: 'Analytics',
  },
  {
    icon: Network,
    title: 'Organizational Effectiveness',
    desc: 'Social network analysis, collaboration mapping, team dynamics, and organizational health insights.',
    color: 'violet',
    tag: 'OE',
  },
  {
    icon: Lightbulb,
    title: 'Leadership Collaboration',
    desc: 'Partnering with HR, IT, Facilities, Security, Workplace, and business leaders to deliver people initiatives.',
    color: 'emerald',
    tag: 'Leadership',
  },
  {
    icon: Monitor,
    title: 'HR Technology',
    desc: 'HRMS/HRIS administration, automation workflows, self-service tools, and scalable HR technology solutions.',
    color: 'blue',
    tag: 'Tech',
  },
];

const colorMap: Record<string, { icon: string; border: string; tag: string; bar: string }> = {
  cyan:    { icon: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',          border: 'hover:border-cyan-400/30',    tag: 'bg-cyan-400/8 text-cyan-400 border-cyan-400/15',       bar: 'bg-cyan-400'    },
  violet:  { icon: 'bg-violet-400/10 border-violet-400/20 text-violet-400',    border: 'hover:border-violet-400/30',  tag: 'bg-violet-400/8 text-violet-400 border-violet-400/15', bar: 'bg-violet-400'  },
  emerald: { icon: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400', border: 'hover:border-emerald-400/30', tag: 'bg-emerald-400/8 text-emerald-400 border-emerald-400/15', bar: 'bg-emerald-400' },
  blue:    { icon: 'bg-blue-400/10 border-blue-400/20 text-blue-400',          border: 'hover:border-blue-400/30',    tag: 'bg-blue-400/8 text-blue-400 border-blue-400/15',       bar: 'bg-blue-400'    },
};

export default function CoreFocusSection() {
  const ref = useScrollReveal();

  return (
    <section id="focus" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Core Focus Areas</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Strategic People Capabilities<br />
            <span className="grad-violet">Across the HR Value Chain</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            From operational excellence to strategic partnerships — building the people infrastructure that enables organizations to grow, adapt, and thrive.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            const c    = colorMap[area.color];
            return (
              <motion.div key={area.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass rounded-3xl border border-white/7 p-6 transition-all duration-300 ${c.border} cursor-default group`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-11 w-11 rounded-2xl border flex items-center justify-center ${c.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono ${c.tag}`}>{area.tag}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{area.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{area.desc}</p>
                <div className={`mt-4 h-0.5 w-8 rounded-full ${c.bar} opacity-40 group-hover:opacity-100 group-hover:w-16 transition-all duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Users, BarChart3, Handshake, Heart, TrendingUp, Network, GitBranch, Monitor } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const impacts = [
  {
    icon: Users,
    title: 'Supported HR Operations for 1000+ Employees',
    desc: 'End-to-end people operations support at Juspay Technologies covering the full employee lifecycle.',
    color: 'cyan',
    gradient: 'from-cyan-500/10',
  },
  {
    icon: BarChart3,
    title: 'Built Workforce Analytics Solutions',
    desc: 'Designed and delivered 10+ workforce dashboards, people analytics reports, and leadership insights.',
    color: 'violet',
    gradient: 'from-violet-500/10',
  },
  {
    icon: Handshake,
    title: 'Partnered with Leadership Teams',
    desc: 'Collaborated with HR, IT, Facilities, Security, Workplace, and business leaders on people initiatives.',
    color: 'emerald',
    gradient: 'from-emerald-500/10',
  },
  {
    icon: Heart,
    title: 'Improved Employee Experience',
    desc: 'Streamlined onboarding, reduced delays by 50%, and enhanced the end-to-end employee journey.',
    color: 'blue',
    gradient: 'from-blue-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Enabled Data-Driven People Decisions',
    desc: 'Provided workforce intelligence and analytics that enabled leadership to make informed people decisions.',
    color: 'cyan',
    gradient: 'from-cyan-500/10',
  },
  {
    icon: Network,
    title: 'Contributed to Organizational Effectiveness',
    desc: 'Applied social network analysis and collaboration analytics to improve organizational insights.',
    color: 'violet',
    gradient: 'from-violet-500/10',
  },
  {
    icon: GitBranch,
    title: 'Supported Workforce Planning Discussions',
    desc: 'Contributed workforce data, headcount analytics, and planning insights to organizational growth discussions.',
    color: 'emerald',
    gradient: 'from-emerald-500/10',
  },
  {
    icon: Monitor,
    title: 'Built HR Technology Solutions',
    desc: 'Developed 5+ operational systems including VMS, Payroll Automation, and HR Intelligence dashboards.',
    color: 'blue',
    gradient: 'from-blue-500/10',
  },
];

const colorMap: Record<string, { icon: string; border: string; value: string }> = {
  cyan:    { icon: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',          border: 'border-cyan-400/15 hover:border-cyan-400/35',    value: 'text-cyan-400'    },
  violet:  { icon: 'text-violet-400 bg-violet-400/10 border-violet-400/20',    border: 'border-violet-400/15 hover:border-violet-400/35',  value: 'text-violet-400'  },
  emerald: { icon: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', border: 'border-emerald-400/15 hover:border-emerald-400/35', value: 'text-emerald-400' },
  blue:    { icon: 'text-blue-400 bg-blue-400/10 border-blue-400/20',          border: 'border-blue-400/15 hover:border-blue-400/35',    value: 'text-blue-400'    },
};

export default function BusinessImpactSection() {
  const ref = useScrollReveal();

  return (
    <section id="impact" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Business Impact</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            People Impact That<br />
            <span className="grad-cyan">Drives Business Outcomes</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Measurable contributions across people operations, workforce analytics, leadership collaboration, and HR technology.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impacts.map((item, i) => {
            const Icon = item.icon;
            const c    = colorMap[item.color];
            return (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`metric-card glass rounded-3xl border ${c.border} p-5 transition-all duration-300 overflow-hidden cursor-default`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-transparent pointer-events-none`} />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${c.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold text-white leading-snug">{item.title}</p>
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

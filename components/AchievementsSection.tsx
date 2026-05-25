'use client';

import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, BarChart3, GitBranch, Award, TrendingUp, CheckSquare } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const achievements = [
  {
    icon: Users,
    value: '1000+',
    label: 'Employees Coordinated',
    desc: 'End-to-end operational coordination at Juspay Technologies, a leading Indian fintech company.',
    color: 'cyan',
    gradient: 'from-cyan-500/12 to-transparent',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Data Accuracy',
    desc: 'Zero discrepancies maintained across HRMS records, payroll data, and compliance documentation.',
    color: 'emerald',
    gradient: 'from-emerald-500/12 to-transparent',
  },
  {
    icon: Zap,
    value: '50%',
    label: 'Faster Onboarding',
    desc: 'Redesigned onboarding workflows from scratch, cutting process delays in half.',
    color: 'violet',
    gradient: 'from-violet-500/12 to-transparent',
  },
  {
    icon: BarChart3,
    value: '10+',
    label: 'Dashboards Built',
    desc: 'Operational reporting dashboards for workforce analytics and process monitoring.',
    color: 'blue',
    gradient: 'from-blue-500/12 to-transparent',
  },
  {
    icon: GitBranch,
    value: '5+',
    label: 'Projects Shipped',
    desc: 'Built operational systems including VMS, VeriBuddy, Ticket Pro, NexTicket, and Payroll Automation.',
    color: 'cyan',
    gradient: 'from-cyan-500/12 to-transparent',
  },
  {
    icon: CheckSquare,
    value: 'A+',
    label: 'Compliance Grade',
    desc: 'PF/ESI statutory compliance and audit-ready documentation maintained across all roles.',
    color: 'emerald',
    gradient: 'from-emerald-500/12 to-transparent',
  },
  {
    icon: TrendingUp,
    value: '20%',
    label: 'Process Improvement',
    desc: 'Reduced onboarding delays at Juspay through standardized workflow documentation.',
    color: 'violet',
    gradient: 'from-violet-500/12 to-transparent',
  },
  {
    icon: Award,
    value: '1.7+',
    label: 'Years Experience',
    desc: 'Across fintech, automotive, and startup environments with growing QA engineering focus.',
    color: 'blue',
    gradient: 'from-blue-500/12 to-transparent',
  },
];

const colorMap: Record<string, { icon: string; value: string; border: string }> = {
  cyan:    { icon: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',       value: 'text-cyan-400',    border: 'border-cyan-400/15 hover:border-cyan-400/30'    },
  emerald: { icon: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', value: 'text-emerald-400', border: 'border-emerald-400/15 hover:border-emerald-400/30' },
  violet:  { icon: 'text-violet-400 bg-violet-400/10 border-violet-400/20', value: 'text-violet-400',  border: 'border-violet-400/15 hover:border-violet-400/30'  },
  blue:    { icon: 'text-blue-400 bg-blue-400/10 border-blue-400/20',       value: 'text-blue-400',    border: 'border-blue-400/15 hover:border-blue-400/30'    },
};

export default function AchievementsSection() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Achievements</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Measurable results across<br />
            <span className="grad-cyan">operations & workflow systems</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Quantified outcomes from HR operations, process coordination, and operational system development.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            const c    = colorMap[item.color];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className={`metric-card glass rounded-3xl border ${c.border} p-5 transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} pointer-events-none`} />
                <div className="relative z-10">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${c.icon} mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className={`text-3xl font-black ${c.value} mb-1`}>{item.value}</p>
                  <p className="text-sm font-semibold text-white mb-2">{item.label}</p>
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

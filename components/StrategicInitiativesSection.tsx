'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, GitBranch, Heart, Handshake } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const initiatives = [
  {
    icon: Target,
    title: 'Performance Management',
    phase: '01',
    color: 'cyan',
    summary: 'Supported performance review cycles and manager discussions.',
    details: [
      'Supported end-of-cycle performance review coordination',
      'Partnered with managers on performance documentation',
      'Facilitated performance calibration data management',
      'Tracked performance review completion and compliance',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Workforce Planning',
    phase: '02',
    color: 'violet',
    summary: 'Contributed to workforce planning and organizational growth discussions.',
    details: [
      'Contributed headcount data and workforce analytics to planning sessions',
      'Supported organizational structure analysis for growth planning',
      'Maintained workforce distribution reports for leadership',
      'Participated in team capacity and hiring planning discussions',
    ],
  },
  {
    icon: Users,
    title: 'Talent Reviews',
    phase: '03',
    color: 'emerald',
    summary: 'Participated in talent assessment and employee development initiatives.',
    details: [
      'Supported talent review data preparation and consolidation',
      'Maintained talent assessment records and development plans',
      'Contributed to high-potential identification processes',
      'Tracked employee development milestones and progress',
    ],
  },
  {
    icon: GitBranch,
    title: 'Succession Planning',
    phase: '04',
    color: 'blue',
    summary: 'Supported leadership planning and talent continuity conversations.',
    details: [
      'Supported succession pipeline data management',
      'Maintained readiness assessments for key positions',
      'Contributed to leadership bench strength discussions',
      'Tracked succession plan progress and updates',
    ],
  },
  {
    icon: Heart,
    title: 'Employee Relations',
    phase: '05',
    color: 'cyan',
    summary: 'Partnered on employee experience and workplace matters.',
    details: [
      'Supported employee relations case documentation and tracking',
      'Contributed to employee experience improvement initiatives',
      'Partnered on workplace culture and engagement programs',
      'Maintained confidential employee records and case files',
    ],
  },
  {
    icon: Handshake,
    title: 'Leadership Partnership',
    phase: '06',
    color: 'violet',
    summary: 'Worked with leaders to align people strategies with business goals.',
    details: [
      'Delivered workforce reports and people analytics to leadership',
      'Partnered with business leaders on team effectiveness discussions',
      'Supported people strategy alignment with business objectives',
      'Built trusted relationships across HR, business, and leadership teams',
    ],
  },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; bar: string; phase: string }> = {
  cyan:    { dot: 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]',    border: 'border-cyan-400/20',    badge: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',       bar: 'from-cyan-400/50',    phase: 'text-cyan-400'    },
  violet:  { dot: 'bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]', border: 'border-violet-400/20',  badge: 'bg-violet-400/10 text-violet-300 border-violet-400/20', bar: 'from-violet-400/50',  phase: 'text-violet-400'  },
  emerald: { dot: 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]', border: 'border-emerald-400/20', badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20', bar: 'from-emerald-400/50', phase: 'text-emerald-400' },
  blue:    { dot: 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]',    border: 'border-blue-400/20',    badge: 'bg-blue-400/10 text-blue-300 border-blue-400/20',       bar: 'from-blue-400/50',    phase: 'text-blue-400'    },
};

export default function StrategicInitiativesSection() {
  const ref = useScrollReveal();

  return (
    <section id="initiatives" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-5xl" ref={ref}>

        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Strategic People Initiatives</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            HRBP Activities &<br />
            <span className="grad-violet">People Strategy Contributions</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            Strategic people initiatives contributed to beyond core HR operations — reflecting an emerging HRBP mindset and people strategy exposure.
          </p>
        </div>

        <div className="relative reveal reveal-delay-1">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/30 to-transparent" />

          <div className="space-y-6">
            {initiatives.map((item, i) => {
              const Icon = item.icon;
              const c    = colorMap[item.color];
              return (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative pl-16">
                  <div className={`absolute left-4 top-6 h-4 w-4 rounded-full ${c.dot} -translate-x-1/2`} />

                  <div className={`glass rounded-4xl border ${c.border} p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1`}>
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.bar} to-transparent`} />

                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-black font-mono ${c.phase}`}>{item.phase}</span>
                        <div className={`h-9 w-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.badge}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">{item.summary}</p>
                        </div>
                      </div>
                      <span className={`flex-shrink-0 rounded-full border px-3 py-1 text-xs font-mono hidden sm:block ${c.badge}`}>
                        HRBP Activity
                      </span>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-1.5 mt-3">
                      {item.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="h-1 w-1 rounded-full bg-cyan-400/50 flex-shrink-0 mt-1.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
